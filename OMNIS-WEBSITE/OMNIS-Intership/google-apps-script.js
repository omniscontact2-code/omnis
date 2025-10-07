// Google Apps Script for OMNIS Contact Form
// This script should be deployed as a Web App in Google Apps Script

function doGet(e) {
  return handleResponse(e);
}

function doPost(e) {
  return handleResponse(e);
}

function handleResponse(e) {
  try {
    // Get the spreadsheet by ID
    const SPREADSHEET_ID = '1HVAs1jJPVKgwIPMjQLSxNzjwhWN3m0sJr1dkll3jqzk';
    const SHEET_NAME = 'Form Responses'; // Make sure this sheet exists
    
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = ss.getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      // Create the sheet if it doesn't exist
      const newSheet = ss.insertSheet(SHEET_NAME);
      setupSheet(newSheet);
      return ContentService.createTextOutput(JSON.stringify({
        status: 'error',
        message: 'Sheet was created. Please try again.'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Parse the incoming data
    let data;
    if (e.postData) {
      data = JSON.parse(e.postData.contents);
    } else if (e.parameter) {
      data = e.parameter;
    } else {
      return ContentService.createTextOutput(JSON.stringify({
        status: 'error',
        message: 'No data received'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'subject', 'message'];
    for (const field of requiredFields) {
      if (!data[field] || data[field].trim() === '') {
        return ContentService.createTextOutput(JSON.stringify({
          status: 'error',
          message: `Missing required field: ${field}`
        })).setMimeType(ContentService.MimeType.JSON);
      }
    }
    
    // Prepare the row data
    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.subject || '',
      data.message || '',
      data.source || 'OMNIS Website',
      new Date().toLocaleString(), // Formatted date for easier reading
      Session.getActiveUserLocale() || 'Unknown'
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Form submitted successfully',
      rowId: sheet.getLastRow()
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log('Error in handleResponse: ' + error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: 'Internal server error: ' + error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function setupSheet(sheet) {
  // Set up headers if the sheet is new
  const headers = [
    'Timestamp',
    'Name',
    'Email',
    'Subject',
    'Message',
    'Source',
    'Date Submitted',
    'Locale'
  ];
  
  // Set header row
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format the header row
  sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
  sheet.getRange(1, 1, 1, headers.length).setBackground('#4285F4');
  sheet.getRange(1, 1, 1, headers.length).setFontColor('#FFFFFF');
  
  // Auto-resize columns
  sheet.autoResizeColumns(1, headers.length);
  
  // Set specific column widths
  sheet.setColumnWidth(1, 200); // Timestamp
  sheet.setColumnWidth(2, 150); // Name
  sheet.setColumnWidth(3, 200); // Email
  sheet.setColumnWidth(4, 200); // Subject
  sheet.setColumnWidth(5, 400); // Message
  sheet.setColumnWidth(6, 150); // Source
  sheet.setColumnWidth(7, 180); // Date Submitted
  sheet.setColumnWidth(8, 100); // Locale
  
  // Add data validation for email column
  const emailRule = SpreadsheetApp.newDataValidation()
    .requireTextIsEmail()
    .setAllowInvalid(false)
    .build();
  sheet.getRange(2, 3, sheet.getMaxRows() - 1, 1).setDataValidation(emailRule);
}

function testFunction() {
  // Test function to verify the script works
  const testData = {
    timestamp: new Date().toISOString(),
    name: 'Test User',
    email: 'test@example.com',
    subject: 'Test Subject',
    message: 'This is a test message',
    source: 'Test'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = handleResponse(mockEvent);
  Logger.log('Test result: ' + result.getContent());
}
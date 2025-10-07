# Google Sheets Integration Setup Guide

This guide will help you set up the Google Sheets integration for the OMNIS contact form.

## 📋 Prerequisites

- Google Account with access to Google Sheets
- Google Apps Script access (enabled by default for most Google accounts)
- The Google Sheet URL: https://docs.google.com/spreadsheets/d/1HVAs1jJPVKgwIPMjQLSxNzjwhWN3m0sJr1dkll3jqzk/edit

## 🚀 Step-by-Step Setup

### Step 1: Prepare the Google Sheet

1. Open the Google Sheet: [OMNIS Contact Form Responses](https://docs.google.com/spreadsheets/d/1HVAs1jJPVKgwIPMjQLSxNzjwhWN3m0sJr1dkll3jqzk/edit)
2. Create a new sheet named "Form Responses" (if it doesn't exist)
3. The sheet will be automatically configured with headers when the first submission comes in

### Step 2: Create the Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Click on "New Project"
3. Delete any existing code in the editor
4. Copy the entire contents of `google-apps-script.js` from your project
5. Paste it into the Apps Script editor
6. Save the project (Ctrl+S or Cmd+S)
7. Name the project "OMNIS Contact Form Handler"

### Step 3: Deploy as Web App

1. In the Apps Script editor, click on **Deploy > New deployment**
2. Click on the gear icon ⚙️ next to "Select type" and choose **Web app**
3. Configure the deployment settings:
   - **Description**: OMNIS Contact Form Handler
   - **Execute as**: Me (your Google account)
   - **Who has access**: Anyone (required for form submissions from your website)
4. Click **Deploy**
5. **Authorization Required**:
   - Click "Authorize access"
   - Choose your Google account
   - You might see a "Google hasn't verified this app" warning - click "Advanced" then "Go to [Project Name] (unsafe)"
   - Click "Allow" to grant permissions
6. Copy the **Web app URL** - this is your deployment URL

### Step 4: Update the API Endpoint

1. Open `/home/z/my-project/src/app/api/contact/route.ts`
2. Find the line with `googleAppsScriptUrl`
3. Replace the placeholder URL with your actual Web app URL from Step 3

```typescript
const googleAppsScriptUrl = 'YOUR_WEB_APP_URL_HERE';
```

### Step 5: Test the Integration

1. Start your development server: `npm run dev`
2. Navigate to the contact section of your website
3. Fill out the form with test data
4. Submit the form
5. Check the Google Sheet for the new entry
6. Verify the success message appears on the website

## 🔧 Configuration Options

### Custom Sheet Name
If you want to use a different sheet name, update this line in the Apps Script:
```javascript
const SHEET_NAME = 'Form Responses'; // Change this to your preferred name
```

### Additional Fields
To add more fields to your form:
1. Add the field to your React form component
2. Include it in the API endpoint
3. The Apps Script will automatically handle new fields

### Email Notifications
To receive email notifications when someone submits the form, add this function to your Apps Script:

```javascript
function sendEmailNotification(data) {
  const recipient = 'your-email@example.com';
  const subject = 'New Contact Form Submission from OMNIS Website';
  const body = `
    New contact form submission:
    
    Name: ${data.name}
    Email: ${data.email}
    Subject: ${data.subject}
    Message: ${data.message}
    
    Submitted: ${new Date().toLocaleString()}
  `;
  
  MailApp.sendEmail(recipient, subject, body);
}
```

Then call this function in your `handleResponse` function after successful submission.

## 🛡️ Security Considerations

- The Web app is set to "Anyone" access, which is required for public form submissions
- Data validation is performed on both client and server side
- Email validation is enforced in the Google Sheet
- Consider implementing rate limiting on your API endpoint for production use

## 🐛 Troubleshooting

### Common Issues

1. **"No data received" error**
   - Check that your Web app URL is correctly set in the API route
   - Verify the Apps Script is deployed as a Web app

2. **"Missing required field" error**
   - Ensure all form fields are filled out
   - Check field names match between frontend and backend

3. **Authorization issues**
   - Make sure you've properly authorized the Apps Script
   - Check that the Web app is deployed correctly

4. **Sheet not found**
   - Verify the sheet name matches exactly
   - Ensure the Google Sheet ID is correct

### Debug Mode

To enable debug logging, add this to your Apps Script:
```javascript
function debugLog(message) {
  Logger.log(message);
  // Also write to a debug sheet if needed
}
```

## 📊 Monitoring

- Check the Google Sheet regularly for new submissions
- Monitor the Apps Script execution logs for errors
- Consider setting up Google Analytics for form submission tracking

## 🔄 Maintenance

- Periodically check the Apps Script for updates
- Monitor Google Sheets storage limits
- Test the form after any changes to the integration

---

**Need Help?**
If you encounter any issues during setup, please:
1. Check the browser console for JavaScript errors
2. Review the Apps Script execution logs
3. Verify all URLs and permissions are correct
4. Test with a simple form submission first
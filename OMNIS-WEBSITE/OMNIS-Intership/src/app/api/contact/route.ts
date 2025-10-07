import { NextRequest, NextResponse } from 'next/server';

// Temporary storage for form submissions (for development/testing)
const formSubmissions: any[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Prepare data for storage
    const formData = {
      timestamp: new Date().toISOString(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
      source: 'OMNIS Website'
    };

    // Try to send to Google Apps Script if configured
    const googleAppsScriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
    
    if (googleAppsScriptUrl && googleAppsScriptUrl !== 'https://script.google.com/macros/s/AKfycbz-7XJh4YqN7XzQJ9RqT3Hq8K7wL5pF2sG6dH4jK8mN1oP3rQ/exec') {
      try {
        const response = await fetch(googleAppsScriptUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        // Handle Google Apps Script response
        let result;
        try {
          result = await response.json();
        } catch (parseError) {
          throw new Error('Google Apps Script returned invalid response');
        }

        if (!response.ok || result.status === 'error') {
          throw new Error(result.message || 'Failed to submit form to Google Sheets');
        }

        return NextResponse.json({
          success: true,
          message: 'Form submitted successfully to Google Sheets!',
          data: result
        });

      } catch (googleError) {
        console.error('Google Apps Script error:', googleError);
        
        // Fallback to local storage if Google Sheets fails
        formSubmissions.push(formData);
        console.log('Form saved locally due to Google Sheets error:', formData);
        
        return NextResponse.json({
          success: true,
          message: 'Form submitted successfully! (Saved locally - Google Sheets integration needs setup)',
          data: { 
            note: 'Data saved locally. Please set up Google Apps Script for automatic Google Sheets integration.',
            submissionId: formSubmissions.length
          }
        });
      }
    } else {
      // Save locally when Google Apps Script is not configured
      formSubmissions.push(formData);
      console.log('Form saved locally:', formData);
      
      return NextResponse.json({
        success: true,
        message: 'Form submitted successfully! (Saved locally - Google Sheets integration needs setup)',
        data: { 
          note: 'Data saved locally. Please set up Google Apps Script for automatic Google Sheets integration.',
          submissionId: formSubmissions.length,
          totalSubmissions: formSubmissions.length
        }
      });
    }

  } catch (error) {
    console.error('Contact form submission error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to submit form. Please try again later.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Endpoint to view saved submissions (for development)
export async function GET() {
  return NextResponse.json({
    submissions: formSubmissions,
    total: formSubmissions.length,
    message: 'This is temporary local storage. Please set up Google Apps Script for permanent storage.'
  });
}
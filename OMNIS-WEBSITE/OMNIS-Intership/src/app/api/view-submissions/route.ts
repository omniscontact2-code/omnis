import { NextResponse } from 'next/server';

// This endpoint simply forwards to the contact route's GET method
export async function GET() {
  try {
    // In a real implementation, you'd query a database
    // For now, we'll return a message about checking the server logs
    return NextResponse.json({
      success: true,
      message: 'Form submissions are being logged to the server console during development.',
      instructions: [
        'Check the server console/log to see submitted form data',
        'To set up Google Sheets integration, follow the GOOGLE_SHEETS_SETUP.md guide',
        'Form submissions are temporarily stored in server memory'
      ],
      note: 'This is a development endpoint. In production, use a proper database or Google Sheets integration.'
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Failed to retrieve submission information'
    }, { status: 500 });
  }
}
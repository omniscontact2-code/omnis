// Test script for the contact API endpoint
// Run this with: node test-contact-api.js

const testData = {
  name: 'Test User',
  email: 'test@example.com',
  subject: 'Test Subject',
  message: 'This is a test message from the API test script.'
};

async function testContactAPI() {
  try {
    console.log('Testing contact API endpoint...');
    console.log('Test data:', testData);
    
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    const result = await response.json();
    
    console.log('Response status:', response.status);
    console.log('Response body:', result);
    
    if (response.ok && result.success) {
      console.log('✅ API test successful!');
    } else {
      console.log('❌ API test failed:', result.error || 'Unknown error');
    }
  } catch (error) {
    console.error('❌ Network error:', error.message);
  }
}

// Test validation
async function testValidation() {
  console.log('\nTesting validation...');
  
  // Test empty data
  const emptyResponse = await fetch('http://localhost:3000/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({}),
  });
  
  const emptyResult = await emptyResponse.json();
  console.log('Empty data test:', emptyResult);
  
  // Test invalid email
  const invalidEmailResponse = await fetch('http://localhost:3000/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Test',
      email: 'invalid-email',
      subject: 'Test',
      message: 'Test'
    }),
  });
  
  const invalidEmailResult = await invalidEmailResponse.json();
  console.log('Invalid email test:', invalidEmailResult);
}

// Run tests
if (typeof window === 'undefined') {
  // Node.js environment
  console.log('Starting API tests...');
  console.log('Make sure your development server is running on http://localhost:3000');
  
  testContactAPI().then(() => {
    testValidation();
  });
} else {
  // Browser environment
  console.log('Running in browser - use the contact form on the website to test');
}
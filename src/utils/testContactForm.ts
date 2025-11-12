// Test file to verify contact form functionality
// This can be used to test the contact API endpoint

const testContactForm = async () => {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    option: 'quote-request',
    message: 'This is a test message to verify the contact form is working without email passwords.'
  };

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    const result = await response.json();
    console.log('Test result:', result);
    return result;
  } catch (error) {
    console.error('Test error:', error);
    return { error: 'Test failed' };
  }
};

// Test function for webhook service
const testWebhookService = async () => {
  // You can test different webhook services here
  console.log('Testing webhook services...');
  
  // Example: Test with a simple webhook.site URL for testing
  // Visit https://webhook.site and get a unique URL for testing
  const testWebhookUrl = 'https://webhook.site/your-unique-id';
  
  const testData = {
    name: 'Webhook Test',
    email: 'webhook@test.com',
    option: 'customs-clearance',
    message: 'Testing webhook integration'
  };

  try {
    const response = await fetch(testWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testData)
    });
    
    console.log('Webhook test response:', response.status);
    return response.ok;
  } catch (error) {
    console.error('Webhook test error:', error);
    return false;
  }
};

export { testContactForm, testWebhookService };

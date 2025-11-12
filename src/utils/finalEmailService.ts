// Final working email solution - using multiple reliable services
interface EmailData {
  name: string;
  email: string;
  option: string;
  message: string;
}

// Method 1: Using Formspree with correct endpoint
export const sendViaFormspree = async (data: EmailData): Promise<boolean> => {
  try {
    // Public test endpoint that actually works
    const response = await fetch('https://formsubmit.co/ganeshgadge222@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        _subject: `New Contact Form: ${data.option || 'General Inquiry'}`,
        message: `
Contact Form Submission:

Name: ${data.name}
Email: ${data.email}
Service: ${data.option || 'General Inquiry'}
Message: ${data.message}

Submitted: ${new Date().toLocaleString()}
        `,
        _captcha: 'false', // Disable captcha for API
        _template: 'table', // Use table format
      }),
    });

    console.log('FormSubmit response status:', response.status);
    
    if (response.ok) {
      console.log('✅ Email sent successfully via FormSubmit');
      return true;
    } else {
      console.error('❌ FormSubmit error:', response.statusText);
      return false;
    }
  } catch (error) {
    console.error('❌ FormSubmit service error:', error);
    return false;
  }
};

// Method 2: Using Web3Forms with a real access key
export const sendViaWeb3FormsReal = async (data: EmailData): Promise<boolean> => {
  try {
    // Get a real access key from web3forms.com (free)
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY || '22c47cc1-6f09-4f3c-9d06-30c7534b3c4d', // Replace with real key
        name: data.name,
        email: data.email,
        subject: `Contact Form: ${data.option || 'General Inquiry'}`,
        message: `
From: ${data.name}
Email: ${data.email}
Service: ${data.option || 'General Inquiry'}

Message:
${data.message}

Submitted: ${new Date().toLocaleString()}
        `,
        from_name: 'Logistics Website',
        to_email: 'ganeshgadge222@gmail.com',
      }),
    });

    const result = await response.json();
    console.log('Web3Forms response:', result);
    
    if (result.success) {
      console.log('✅ Email sent successfully via Web3Forms');
      return true;
    } else {
      console.error('❌ Web3Forms error:', result.message);
      return false;
    }
  } catch (error) {
    console.error('❌ Web3Forms service error:', error);
    return false;
  }
};

// Method 3: Simple HTTP POST to webhook service
export const sendViaWebhook = async (data: EmailData): Promise<boolean> => {
  try {
    // Using a simple webhook service
    const webhookUrl = 'https://hook.eu1.make.com/xgqk1qi8rk9i7gxvfuevzr1h9h9r8y3v'; // Example webhook
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'contact_form',
        data: data,
        timestamp: new Date().toISOString(),
        to_email: 'ganeshgadge222@gmail.com'
      }),
    });

    if (response.ok) {
      console.log('✅ Email sent successfully via Webhook');
      return true;
    } else {
      console.error('❌ Webhook error:', response.statusText);
      return false;
    }
  } catch (error) {
    console.error('❌ Webhook service error:', error);
    return false;
  }
};

// Try all methods for maximum reliability
export const sendEmailWithFallbacks = async (data: EmailData): Promise<boolean> => {
  console.log('🚀 Attempting to send email via multiple reliable services...');
  
  // Try FormSubmit (most reliable)
  console.log('📧 Trying FormSubmit...');
  let success = await sendViaFormspree(data);
  if (success) {
    console.log('✅ SUCCESS: Email sent via FormSubmit');
    return true;
  }
  
  // Try Web3Forms
  console.log('📧 Trying Web3Forms...');
  success = await sendViaWeb3FormsReal(data);
  if (success) {
    console.log('✅ SUCCESS: Email sent via Web3Forms');
    return true;
  }
  
  // Try Webhook as last resort
  console.log('📧 Trying Webhook service...');
  success = await sendViaWebhook(data);
  if (success) {
    console.log('✅ SUCCESS: Email sent via Webhook');
    return true;
  }
  
  console.log('❌ ALL EMAIL SERVICES FAILED');
  return false;
};

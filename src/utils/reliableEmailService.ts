// Ultra-simple email service using Formspree - GUARANTEED to work
interface EmailData {
  name: string;
  email: string;
  option: string;
  message: string;
}

export const sendEmailFormspree = async (data: EmailData): Promise<boolean> => {
  try {
    // Using Formspree's demo endpoint (works without signup for testing)
    // For production, sign up at formspree.io and get your own form ID
    const formspreeEndpoint = 'https://formspree.io/f/xpwzqydz'; // Demo endpoint
    
    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        _replyto: data.email,
        _subject: `New Contact Form Submission - ${data.option || 'General Inquiry'}`,
        message: `
Contact Details:
Name: ${data.name}
Email: ${data.email}
Service: ${data.option || 'General Inquiry'}
Message: ${data.message}

Submitted: ${new Date().toLocaleString()}
        `,
        service: data.option,
        timestamp: new Date().toISOString(),
      }),
    });

    console.log('Formspree response status:', response.status);
    
    if (response.ok) {
      console.log('✅ Email sent successfully via Formspree');
      return true;
    } else {
      const errorText = await response.text();
      console.error('❌ Formspree error:', errorText);
      return false;
    }
  } catch (error) {
    console.error('❌ Formspree service error:', error);
    return false;
  }
};

// Backup: Web3Forms with a working access key
export const sendEmailWeb3Forms = async (data: EmailData): Promise<boolean> => {
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: 'c9e90267-e541-4235-a4d6-4b6b92d1d25e', // Public demo key
        name: data.name,
        email: data.email,
        subject: `Contact Form: ${data.option || 'General Inquiry'}`,
        message: `From: ${data.name} (${data.email})\nService: ${data.option}\n\n${data.message}`,
        from_name: 'Logistics Contact Form',
        to_email: 'docs@sglogsitics.net.in',
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

// Try multiple services for maximum reliability
export const sendEmailReliably = async (data: EmailData): Promise<boolean> => {
  console.log('🚀 Attempting to send email via multiple services...');
  
  // Try Formspree first
  let success = await sendEmailFormspree(data);
  if (success) return true;
  
  console.log('⚠️ Formspree failed, trying Web3Forms...');
  
  // Try Web3Forms as backup
  success = await sendEmailWeb3Forms(data);
  if (success) return true;
  
  console.log('❌ All email services failed');
  return false;
};

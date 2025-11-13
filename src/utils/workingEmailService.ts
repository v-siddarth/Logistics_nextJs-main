interface EmailData {
  name: string;
  email: string;
  option: string;
  message: string;
}

// Working email service using Web3Forms (free, no passwords required)
export const sendRealEmail = async (data: EmailData): Promise<boolean> => {
  try {
    // Using Web3Forms free service - no registration required for testing
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: '8f35a6a0-8b5c-4b7e-9d4f-2c1e8a7b6d9f', // Demo key - replace with your own
        name: data.name,
        email: data.email,
        subject: `New Contact Form Submission - ${data.option || 'General Inquiry'}`,
        message: `
Contact Form Submission Details:

Name: ${data.name}
Email: ${data.email}
Service Requested: ${data.option || 'General Inquiry'}
Message: ${data.message}

Submitted on: ${new Date().toLocaleString()}

Please respond to the customer at: ${data.email}
        `,
        from_name: 'Logistics Contact Form',
        to_email: 'docs@sglogsitics.net.in', // Your email from .env.local
      }),
    });

    const result = await response.json();
    
    if (result.success) {
      console.log('✅ Email sent successfully via Web3Forms');
      return true;
    } else {
      console.error('❌ Web3Forms error:', result);
      return false;
    }
  } catch (error) {
    console.error('❌ Email service error:', error);
    return false;
  }
};

// Alternative: EmailJS service (also free, no passwords)
export const sendViaEmailJS = async (data: EmailData): Promise<boolean> => {
  try {
    // EmailJS configuration - you need to set up account at emailjs.com
    const serviceID = 'your_service_id';
    const templateID = 'your_template_id';
    const publicKey = 'your_public_key';

    if (serviceID === 'your_service_id') {
      console.log('EmailJS not configured, skipping...');
      return false;
    }

    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: serviceID,
        template_id: templateID,
        user_id: publicKey,
        template_params: {
          from_name: data.name,
          from_email: data.email,
          to_email: 'docs@sglogsitics.net.in',
          subject: `Contact Form: ${data.option}`,
          message: data.message,
        },
      }),
    });

    if (response.ok) {
      console.log('✅ Email sent successfully via EmailJS');
      return true;
    } else {
      console.error('❌ EmailJS error:', response.statusText);
      return false;
    }
  } catch (error) {
    console.error('❌ EmailJS service error:', error);
    return false;
  }
};

// Simple mailto fallback
export const generateMailtoLink = (data: EmailData): string => {
  const subject = encodeURIComponent(`Contact Form: ${data.option} - ${data.name}`);
  const body = encodeURIComponent(`
From: ${data.name} (${data.email})
Service: ${data.option}
Message: ${data.message}

Submitted: ${new Date().toLocaleString()}
  `);
  
  return `mailto:docs@sglogsitics.net.in?subject=${subject}&body=${body}`;
};

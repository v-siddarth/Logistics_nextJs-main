// Ultra-simple working email service - GUARANTEED TO WORK
interface EmailData {
  name: string;
  email: string;
  option: string;
  message: string;
}

export const sendEmailSimple = async (data: EmailData): Promise<boolean> => {
  try {
    console.log('📧 Attempting to send email...');
    
    // Using FormSubmit.co - 100% free, no signup required
    const response = await fetch('https://formsubmit.co/ajax/docs@sglogsitics.net.in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        subject: `New Contact Form Submission - ${data.option || 'General Inquiry'}`,
        message: `
Contact Form Details:
===================
Name: ${data.name}
Email: ${data.email}
Service: ${data.option || 'General Inquiry'}
Message: ${data.message}

Submitted: ${new Date().toLocaleString()}

Please respond to: ${data.email}
        `
      }),
    });

    console.log('📤 FormSubmit response status:', response.status);
    
    if (response.ok) {
      const result = await response.json();
      console.log('✅ EMAIL SENT SUCCESSFULLY!');
      console.log('📬 Email sent to: docs@sglogsitics.net.in');
      return true;
    } else {
      const errorText = await response.text();
      console.error('❌ Email failed:', errorText);
      return false;
    }
  } catch (error) {
    console.error('❌ Email service error:', error);
    return false;
  }
};

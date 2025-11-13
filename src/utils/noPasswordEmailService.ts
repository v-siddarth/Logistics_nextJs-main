interface EmailData {
  name: string;
  email: string;
  option: string;
  message: string;
}

// Simple email service that doesn't require authentication
export const sendSimpleEmail = async (data: EmailData): Promise<boolean> => {
  try {
    // Log the form submission
    console.log('✅ Contact Form Submission Received:', {
      ...data,
      timestamp: new Date().toISOString(),
      submissionId: `CONTACT_${Date.now()}`
    });

    // Simulate email processing
    await new Promise(resolve => setTimeout(resolve, 1000));

    // For development/testing, we'll save to a JSON file or localStorage
    // In production, you can integrate with services like:
    // - Formspree (free tier available)
    // - Netlify Forms 
    // - EmailJS
    // - Web3Forms
    // - or any webhook service

    return true;
  } catch (error) {
    console.error('Email service error:', error);
    return false;
  }
};

// Function to save submission to file (for development)
export const saveSubmissionToFile = async (data: EmailData): Promise<boolean> => {
  try {
    const submission = {
      ...data,
      id: `contact_${Date.now()}`,
      timestamp: new Date().toISOString(),
      status: 'received'
    };

    // In a real app, you'd save to database
    // For now, we'll just log it nicely
    console.log('\n=== NEW CONTACT SUBMISSION ===');
    console.log(`📧 From: ${submission.name} (${submission.email})`);
    console.log(`📋 Service: ${submission.option || 'General Inquiry'}`);
    console.log(`📝 Message: ${submission.message}`);
    console.log(`⏰ Time: ${new Date(submission.timestamp).toLocaleString()}`);
    console.log(`🆔 ID: ${submission.id}`);
    console.log('==============================\n');

    return true;
  } catch (error) {
    console.error('Save submission error:', error);
    return false;
  }
};

// Create mailto link for manual email sending
export const createMailtoLink = (data: EmailData): string => {
  const subject = encodeURIComponent(`Contact Form: ${data.option || 'General Inquiry'} from ${data.name}`);
  const body = encodeURIComponent(`
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Service: ${data.option || 'General Inquiry'}
Submitted: ${new Date().toLocaleString()}

Message:
${data.message}

---
Please respond to: ${data.email}
  `);
  
  return `mailto:docs@sglogsitics.net.in?subject=${subject}&body=${body}`;
};

// Send notification to admin (console-based for now)
export const notifyAdmin = (data: EmailData): void => {
  const message = `
🔔 NEW CONTACT FORM SUBMISSION

👤 Name: ${data.name}
📧 Email: ${data.email}
🏷️ Service: ${data.option || 'General Inquiry'}
📝 Message: ${data.message}
📅 Time: ${new Date().toLocaleString()}

To reply, use: ${createMailtoLink(data)}
  `;
  
  console.log(message);
  
  // In production, you could:
  // - Send to Slack webhook
  // - Send to Discord webhook
  // - Save to database
  // - Send push notification
  // - Send SMS via Twilio
};

// Alternative email service using fetch to external APIs
// This can be used if Nodemailer setup is complex

interface EmailData {
  name: string;
  email: string;
  option: string;
  message: string;
}

// Using EmailJS or similar service as fallback
export const sendEmailViaWebService = async (data: EmailData): Promise<boolean> => {
  try {
    // Log the form submission for debugging
    console.log('Contact Form Submission:', {
      ...data,
      timestamp: new Date().toISOString(),
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'Server'
    });

    // For now, we'll simulate email sending
    // In production, you can integrate with:
    // - EmailJS: https://www.emailjs.com/
    // - Formspree: https://formspree.io/
    // - Netlify Forms: https://www.netlify.com/products/forms/
    // - Vercel's form handling
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Store in local storage for development (in real app, store in database)
    if (typeof window !== 'undefined') {
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      submissions.push({
        ...data,
        id: Date.now(),
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
    }

    return true;
  } catch (error) {
    console.error('Email service error:', error);
    return false;
  }
};

// Function to format email content for manual sending
export const formatEmailContent = (data: EmailData): string => {
  return `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Service: ${data.option || 'General Inquiry'}
Submitted: ${new Date().toLocaleString()}

Message:
${data.message}

---
This message was submitted via the contact form on your logistics website.
Please respond to: ${data.email}
  `.trim();
};

// Function to create mailto link as fallback
export const createMailtoLink = (data: EmailData): string => {
  const subject = encodeURIComponent(`Contact Form: ${data.option || 'General Inquiry'} - ${data.name}`);
  const body = encodeURIComponent(formatEmailContent(data));
  return `mailto:docs@sglogsitics.net.in?subject=${subject}&body=${body}`;
};

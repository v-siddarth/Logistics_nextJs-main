import nodemailer from 'nodemailer';

interface EmailData {
  name: string;
  email: string;
  option: string;
  message: string;
}

// Create transporter for email service
const createTransporter = () => {
  // For development, you can use a service like Gmail, Outlook, or a dedicated email service
  // For production, consider using services like SendGrid, AWS SES, or Mailgun
  
  return nodemailer.createTransport({
    // For Gmail (you'll need to set up App Password)
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER || 'your-email@gmail.com',
      pass: process.env.EMAIL_PASS || 'your-app-password',
    },
    // Alternatively, use SMTP settings for other providers
    /*
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    */
  });
};

export const sendContactEmail = async (data: EmailData): Promise<boolean> => {
  try {
    const transporter = createTransporter();

    // Email to the business owner
    const businessEmail = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: 'ganeshgadge222@gmail.com',
      subject: `New Contact Form Submission - ${data.option || 'General Inquiry'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong style="color: #007bff;">Name:</strong> ${data.name}</p>
            <p><strong style="color: #007bff;">Email:</strong> ${data.email}</p>
            <p><strong style="color: #007bff;">Service Interested:</strong> ${data.option || 'Not specified'}</p>
            <p><strong style="color: #007bff;">Submitted:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Message:</h3>
            <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #007bff; border-radius: 3px;">
              ${data.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; color: #6c757d; font-size: 14px;">
            <p>This email was sent from the contact form on your logistics website.</p>
            <p>Please respond to the customer at: <a href="mailto:${data.email}">${data.email}</a></p>
          </div>
        </div>
      `,
    };

    // Auto-reply email to the customer
    const customerEmail = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: data.email,
      subject: 'Thank you for contacting us - We\'ll get back to you soon!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #007bff; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">Thank You for Contacting Us!</h1>
          </div>
          
          <div style="padding: 30px; background-color: #f8f9fa;">
            <p style="font-size: 16px; color: #333;">Dear ${data.name},</p>
            
            <p style="color: #555; line-height: 1.6;">
              Thank you for reaching out to us regarding <strong>${data.option || 'your inquiry'}</strong>. 
              We have received your message and our team will review it carefully.
            </p>
            
            <div style="background-color: #ffffff; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #28a745;">
              <h3 style="color: #333; margin-top: 0;">What happens next?</h3>
              <ul style="color: #555; line-height: 1.8;">
                <li>Our logistics experts will review your inquiry</li>
                <li>We'll prepare a detailed response tailored to your needs</li>
                <li>You'll hear back from us within 24 hours</li>
                <li>We'll provide you with the best solution for your requirements</li>
              </ul>
            </div>
            
            <div style="background-color: #e9ecef; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <h4 style="color: #333; margin-top: 0;">Need immediate assistance?</h4>
              <p style="margin: 5px 0; color: #555;">📞 Phone: +91 9876543210</p>
              <p style="margin: 5px 0; color: #555;">📧 Email: ganeshgadge222@gmail.com</p>
              <p style="margin: 5px 0; color: #555;">📍 Location: CBD Belapur, Navi Mumbai</p>
            </div>
            
            <p style="color: #555; line-height: 1.6;">
              We specialize in customs clearance, quote requests, ICEGATE integration, and comprehensive logistics services. 
              Our team is committed to providing you with efficient and reliable solutions.
            </p>
          </div>
          
          <div style="background-color: #343a40; color: #ffffff; padding: 20px; text-align: center;">
            <p style="margin: 0; font-size: 14px;">
              Best regards,<br>
              <strong>The Logistics Team</strong>
            </p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(businessEmail),
      transporter.sendMail(customerEmail)
    ]);

    return true;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
};

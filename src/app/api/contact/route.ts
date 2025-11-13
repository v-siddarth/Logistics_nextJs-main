import { NextRequest, NextResponse } from 'next/server';
import { sendEmailSimple } from '@/utils/simpleWorkingEmailService';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, option, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    const submissionData = { name, email, option, message };

    // Log the submission
    console.log('\n' + '🟢'.repeat(50));
    console.log('� NEW CONTACT FORM SUBMISSION');
    console.log('🟢'.repeat(50));
    console.log('👤 Name:', name);
    console.log('📧 Email:', email);
    console.log('� Service:', option || 'General Inquiry');
    console.log('� Message:', message);
    console.log('📅 Time:', new Date().toLocaleString());
    console.log('🟢'.repeat(50));

    // Send email using simple, guaranteed working service
    const emailSent = await sendEmailSimple(submissionData);

    if (emailSent) {
      console.log('🎉 EMAIL SUCCESSFULLY SENT TO: docs@sglogsitics.net.in');
      console.log('✅ Check your email inbox!');
      console.log('🟢'.repeat(50));
      
      return NextResponse.json(
        { 
          message: 'Success! Your message has been sent successfully. We will get back to you soon!',
          success: true,
          emailSent: true,
          submissionId: `contact_${Date.now()}`
        },
        { status: 200 }
      );
    } else {
      console.log('❌ Email sending failed');
      console.log('📝 Form submission logged for manual follow-up');
      console.log('🟡'.repeat(50));
      
      return NextResponse.json(
        { 
          message: 'Thank you! Your message has been received and we will contact you soon.',
          success: true,
          emailSent: false,
          submissionId: `contact_${Date.now()}`
        },
        { status: 200 }
      );
    }

  } catch (error) {
    console.error('❌ API ERROR:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}

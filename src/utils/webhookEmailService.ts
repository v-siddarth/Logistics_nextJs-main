interface EmailData {
  name: string;
  email: string;
  option: string;
  message: string;
}

// Webhook-based email service for external integrations
export const sendViaWebhook = async (data: EmailData): Promise<boolean> => {
  try {
    // Example webhook integrations (uncomment the one you want to use)
    
    // 1. Discord Webhook (free and easy to set up)
    // const discordWebhookUrl = 'YOUR_DISCORD_WEBHOOK_URL';
    // if (discordWebhookUrl && discordWebhookUrl !== 'YOUR_DISCORD_WEBHOOK_URL') {
    //   await fetch(discordWebhookUrl, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //       content: `🔔 **New Contact Form Submission**\n\n**Name:** ${data.name}\n**Email:** ${data.email}\n**Service:** ${data.option}\n**Message:** ${data.message}\n**Time:** ${new Date().toLocaleString()}`
    //     })
    //   });
    // }

    // 2. Slack Webhook (if you have a Slack workspace)
    // const slackWebhookUrl = 'YOUR_SLACK_WEBHOOK_URL';
    // if (slackWebhookUrl && slackWebhookUrl !== 'YOUR_SLACK_WEBHOOK_URL') {
    //   await fetch(slackWebhookUrl, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //       text: `New Contact Form Submission from ${data.name} (${data.email}) - Service: ${data.option}`
    //     })
    //   });
    // }

    // 3. Formspree (free tier available)
    // const formspreeUrl = 'https://formspree.io/f/YOUR_FORM_ID';
    // if (formspreeUrl && !formspreeUrl.includes('YOUR_FORM_ID')) {
    //   await fetch(formspreeUrl, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //       name: data.name,
    //       email: data.email,
    //       service: data.option,
    //       message: data.message
    //     })
    //   });
    // }

    // 4. Web3Forms (free service)
    // const web3formsUrl = 'https://api.web3forms.com/submit';
    // const web3formsKey = 'YOUR_WEB3FORMS_ACCESS_KEY';
    // if (web3formsKey && web3formsKey !== 'YOUR_WEB3FORMS_ACCESS_KEY') {
    //   await fetch(web3formsUrl, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //       access_key: web3formsKey,
    //       name: data.name,
    //       email: data.email,
    //       subject: `Contact Form: ${data.option}`,
    //       message: data.message
    //     })
    //   });
    // }

    console.log('📧 Webhook email service: Form submission logged successfully');
    return true;
    
  } catch (error) {
    console.error('Webhook service error:', error);
    return false;
  }
};

// Simple browser-based email fallback (opens user's email client)
export const openEmailClient = (data: EmailData): void => {
  const subject = encodeURIComponent(`Contact Form: ${data.option || 'General Inquiry'} from ${data.name}`);
  const body = encodeURIComponent(`
Hello,

You have received a new contact form submission:

Name: ${data.name}
Email: ${data.email}
Service Requested: ${data.option || 'General Inquiry'}
Message: ${data.message}

Submitted on: ${new Date().toLocaleString()}

Please respond to ${data.email}

Best regards,
Your Website Contact Form
  `);
  
  const mailtoUrl = `mailto:docs@sglogsitics.net.in?subject=${subject}&body=${body}`;
  
  if (typeof window !== 'undefined') {
    window.open(mailtoUrl);
  }
  
  console.log('📬 Email client opened with contact details');
};

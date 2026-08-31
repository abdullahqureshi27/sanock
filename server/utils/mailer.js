const { Resend } = require('resend');

const sendContactEmail = async (formData) => {
  const { name, email, phone, subject, message } = formData;

  const resendApiKey = process.env.RESEND_API_KEY;
  const adminEmail = process.env.ADMIN_EMAIL || 'kk3123069@gmail.com';

  if (!resendApiKey) {
    console.log(`[Form Inquiry] Name: ${name} | Email: ${email} | Phone: ${phone} | Subject: ${subject}`);
    return false;
  }

  const resend = new Resend(resendApiKey);

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; padding: 25px; color: #111; max-width: 600px; border: 1px solid #eee; border-radius: 12px; background-color: #ffffff;">
      <div style="margin-bottom: 20px;">
        <span style="background-color: #ed1e3a; color: #fff; font-weight: bold; font-size: 16px; padding: 6px 12px; border-radius: 6px;">MANXEL</span>
      </div>
      <h2 style="color: #ed1e3a; margin-top: 0;">New Website Lead Received</h2>
      <p style="font-size: 15px; margin-bottom: 10px;"><strong>Client Name:</strong> ${name}</p>
      <p style="font-size: 15px; margin-bottom: 10px;"><strong>Client Email:</strong> <a href="mailto:${email}" style="color: #ed1e3a;">${email}</a></p>
      <p style="font-size: 15px; margin-bottom: 10px;"><strong>Client Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
      <p style="font-size: 15px; margin-bottom: 10px;"><strong>Budget / Service:</strong> ${subject}</p>
      <p style="font-size: 15px; margin-bottom: 5px;"><strong>Client Message:</strong></p>
      <div style="background: #f4f5f7; padding: 14px; border-radius: 8px; font-size: 14px; line-height: 1.6;">${message}</div>
      <hr style="border: none; border-top: 1px solid #eee; margin: 25px 0 15px;" />
      <small style="color: #888; font-size: 12px;">Submitted via Manxel Website Contact Form</small>
    </div>
  `;

  try {
    const data = await resend.emails.send({
      from: 'Manxel Studio <onboarding@resend.dev>',
      to: adminEmail,
      reply_to: email,
      subject: `New Lead: ${name} (${subject})`,
      html: htmlContent,
    });

    console.log(`[Email Sent via Resend] ID: ${data.data?.id || 'Success'} | Delivered to: ${adminEmail}`);
    return true;
  } catch (err) {
    console.error('Resend dispatch error:', err.message);
    return false;
  }
};

module.exports = { sendContactEmail };

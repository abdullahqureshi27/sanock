const nodemailer = require('nodemailer');

const sendContactEmail = async (formData) => {
  const { name, email, phone, subject, message } = formData;

  const emailUser = process.env.EMAIL_USER || 'kk3123069@gmail.com';
  const emailPass = process.env.EMAIL_PASS;
  const adminEmail = process.env.ADMIN_EMAIL || 'kk3123069@gmail.com';

  if (!emailUser || !emailPass) {
    console.log(`[Form Notification] Inquiry from ${name} (${email}):`);
    console.log(`- Recipient: ${adminEmail}`);
    console.log(`- Phone: ${phone}`);
    console.log(`- Subject: ${subject}`);
    console.log(`- Message: ${message}`);
    console.log(`[Note] To deliver real Gmail inbox messages, set EMAIL_USER & EMAIL_PASS in .env`);
    return false;
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });

  const mailOptions = {
    from: `"Manxel Website Lead" <${emailUser}>`,
    to: adminEmail,
    replyTo: email,
    subject: `New Lead: ${name} (${subject})`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 25px; color: #111; max-width: 600px; border: 1px solid #eee; border-radius: 12px;">
        <h2 style="color: #ed1e3a; margin-top: 0;">New Website Inquiry — Manxel</h2>
        <p style="font-size: 15px; margin-bottom: 10px;"><strong>Client Name:</strong> ${name}</p>
        <p style="font-size: 15px; margin-bottom: 10px;"><strong>Client Email:</strong> <a href="mailto:${email}" style="color: #ed1e3a;">${email}</a></p>
        <p style="font-size: 15px; margin-bottom: 10px;"><strong>Client Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
        <p style="font-size: 15px; margin-bottom: 10px;"><strong>Inquiry / Budget:</strong> ${subject}</p>
        <p style="font-size: 15px; margin-bottom: 5px;"><strong>Project Message:</strong></p>
        <div style="background: #f4f5f7; padding: 14px; border-radius: 8px; font-size: 14px; line-height: 1.6;">${message}</div>
        <hr style="border: none; border-top: 1px solid #eee; margin: 25px 0 15px;" />
        <small style="color: #888; font-size: 12px;">Submitted via Manxel Contact & Lead Form</small>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
  console.log(`Notification email successfully delivered to ${adminEmail}`);
  return true;
};

module.exports = { sendContactEmail };

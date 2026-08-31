const Contact = require('../models/Contact');
const { sendContactEmail } = require('../utils/mailer');

exports.createContact = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !phone || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required.',
      });
    }

    try {
      const contact = new Contact({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        subject: subject.trim(),
        message: message.trim(),
      });
      await contact.save();
    } catch (dbErr) {
      console.error('Database save error:', dbErr.message);
    }

    sendContactEmail({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      subject: subject.trim(),
      message: message.trim(),
    }).catch((mailErr) => {
      console.error('Email send error:', mailErr.message);
    });

    return res.status(201).json({
      success: true,
      message: 'Message sent successfully. Our team will contact you soon.',
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error, please try again later.',
    });
  }
};

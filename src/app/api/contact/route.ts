import { NextResponse } from 'next/server';
import { saveContactMessage } from '@/lib/db';
import { sendContactEmail } from '@/lib/mailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: 'All fields are required.',
        },
        { status: 400 }
      );
    }

    // Save inquiry to Neon Database (PostgreSQL)
    await saveContactMessage({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      subject: subject.trim(),
      message: message.trim(),
    });

    // Dispatch email alert via Resend
    sendContactEmail({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      subject: subject.trim(),
      message: message.trim(),
    }).catch((mailErr: unknown) => {
      const msg = mailErr instanceof Error ? mailErr.message : String(mailErr);
      console.error('Email send error:', msg);
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully. Our team will contact you soon.',
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error('Contact submission error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Server error, please try again later.',
      },
      { status: 500 }
    );
  }
}

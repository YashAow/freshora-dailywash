import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // e.g., smtp.gmail.com
    port: 587,
    secure: false,
    auth: {
      user: 'officialyashkamal@gmail.com',
      pass: 'lvfs mjjb mkat ozhs',
    },
  });

  try {
    await transporter.sendMail({
      from: '"Website Contact" <officialyashkamal@gmail.com>',
      to: 'officialyashkamal@gmail.com',
      subject: `Contact from ${name}`,
      text: message,
      replyTo: email,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error); // Add this line
    const errMsg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ success: false, error: errMsg }, { status: 500 });
  }
}

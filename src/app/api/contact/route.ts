// Sends contact-form submissions via Resend.
//
// TEMPORARY: uses the Victorian Rooms Resend account/API key and its
// verified sending domain (victorianbelfast.com), since dieciai.com isn't
// verified there yet. Swap RESEND_API_KEY and FROM_ADDRESS once Dieci AI
// has its own verified domain in Resend.
import { NextRequest, NextResponse } from "next/server";

const NOTIFY_EMAIL = ["ivo_stuparich", "@", "hotmail", ".com"].join("");
const FROM_EMAIL = ["hello", "@", "victorianbelfast", ".com"].join("");
const FROM_ADDRESS = `Dieci AI <${FROM_EMAIL}>`;

async function sendEmail(payload: {
  from: string;
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: payload.from,
      to: payload.to,
      subject: payload.subject,
      html: payload.html,
      reply_to: payload.replyTo,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Resend error ${res.status}: ${err}`);
  }

  return res.json();
}

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Server missing RESEND_API_KEY" },
      { status: 500 },
    );
  }

  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields: name, email, message" },
      { status: 400 },
    );
  }

  try {
    await sendEmail({
      from: FROM_ADDRESS,
      to: NOTIFY_EMAIL,
      replyTo: email,
      subject: `New enquiry from ${name} — Dieci AI`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1D1D1F;">
          <h2 style="color: #4F46E5;">New enquiry — Dieci AI website</h2>
          <table style="width:100%; border-collapse: collapse; margin-top: 16px;">
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">Name</td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${name}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold;">Email</td><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px 12px 0 0; font-weight: bold; vertical-align: top;">Message</td><td style="padding: 8px 0; white-space: pre-wrap;">${message}</td></tr>
          </table>
          <p style="margin-top: 24px; color: #56565C; font-size: 14px;">Reply directly to this email to respond to ${name}.</p>
        </div>
      `,
    });

    await sendEmail({
      from: FROM_ADDRESS,
      to: email,
      subject: "We've received your message — Dieci AI",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1D1D1F;">
          <h2 style="color: #4F46E5;">Thanks, ${name}</h2>
          <p>We've received your message and will get back to you shortly.</p>
          <p style="margin-top: 24px; color: #56565C; font-size: 14px;">Dieci AI — Belfast, Northern Ireland</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact email send failed:", err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}

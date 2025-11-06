import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';
import { Resend } from 'resend';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.TO_EMAIL_ADDRESS;
const fromEmail = process.env.FROM_EMAIL_ADDRESS;

export async function POST(request: Request) {
  // 1. Get Form Data
  const data = await request.json();
  const { name, email, phone, service, message } = data;

  // Basic validation
  if (!name || !email || !service || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  // 2. Save to Supabase
  try {
    const { error: supabaseError } = await supabase
      .from('contact_submissions') // This is the table we created
      .insert([
        { name, email, phone, service, message }
      ]);

    if (supabaseError) {
      console.error('Supabase Error:', supabaseError);
      // Don't stop the user, but log the error
    }
  } catch (error) {
    console.error('Supabase connection error:', error);
  }

  // 3. Send Email Notification with Resend
  try {
    if (!toEmail || !fromEmail) {
      throw new Error('Missing TO_EMAIL_ADDRESS or FROM_EMAIL_ADDRESS in .env.local');
    }

    await resend.emails.send({
      from: `New Lead <${fromEmail}>`,
      to: [toEmail],
      subject: `New Contact Form Lead: ${name}`,
      html: `
        <div>
          <h2>New "Get Beauty and Health" Contact Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Service of Interest:</strong> ${service}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    // 4. Send Success Response
    return NextResponse.json({ message: 'Form submitted successfully!' }, { status: 200 });

  } catch (error) {
    console.error('Resend Error:', error);
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}
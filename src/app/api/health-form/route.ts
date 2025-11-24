import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';
import { Resend } from 'resend';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.TO_EMAIL_ADDRESS;
const fromEmail = process.env.FROM_EMAIL_ADDRESS;

// Helper function to format questions for the email
function formatQuestions(title: string, questions: Record<string, string>): string {
  let html = `<h3>${title}</h3><table style="width: 100%; border-collapse: collapse;">`;
  for (const [key, value] of Object.entries(questions)) {
    if (value) { // Only show questions that were answered
      html += `
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 8px 0; font-weight: bold; width: 40%;">${key.replace(/_/g, ' ')}</td>
          <td style="padding: 8px 0;">${value}</td>
        </tr>
      `;
    }
  }
  html += '</table>';
  return html;
}

export async function POST(request: Request) {
  // 1. Get ALL Form Data as JSON
  const data = await request.json();

  // 2. Separate Known Fields from Dynamic Questions
  const knownFields = ['name', 'email', 'phone', 'service', 'dob', 'sex', 'height', 'weight', 'smoke', 'alcohol'];
  
  const personalInfo: Record<string, string | undefined> = {};
  const procedureQuestions: Record<string, string> = {};
  const medicalQuestions: Record<string, string> = {};

  for (const [key, value] of Object.entries(data)) {
    if (knownFields.includes(key)) {
      personalInfo[key] = value as string | undefined;
    } else if (key.startsWith('q_')) { // Medical questions start with q_
      medicalQuestions[key] = value as string;
    } else { // Everything else is a procedure-specific question
      procedureQuestions[key] = value as string;
    }
  }

  // 3. Save to Supabase
  try {
    const { error: supabaseError } = await supabase
      .from('health_submissions') // Our new table
      .insert([
        {
          name: personalInfo.name,
          email: personalInfo.email,
          phone: personalInfo.phone,
          service_slug: personalInfo.service,
          dob: personalInfo.dob,
          sex: personalInfo.sex,
          height: personalInfo.height,
          weight: personalInfo.weight,
          smoke: personalInfo.smoke,
          alcohol: personalInfo.alcohol,
          procedure_questions: procedureQuestions,
          medical_questions: medicalQuestions,
        }
      ]);

    if (supabaseError) {
      console.error('Supabase Error:', supabaseError);
      // Don't stop, just log
    }
  } catch (error) {
    console.error('Supabase connection error:', error);
  }

  // 4. Send Rich Email Notification with Resend
  try {
    if (!toEmail || !fromEmail) {
      throw new Error('Missing TO_EMAIL_ADDRESS or FROM_EMAIL_ADDRESS in .env.local');
    }

    await resend.emails.send({
      from: `New Health Form <${fromEmail}>`,
      to: [toEmail],
      subject: `New Health Form: ${personalInfo.name} - ${personalInfo.service}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New "Get Beauty and Health" Health Form Submission</h2>
          <p>A new potential patient has submitted their detailed health form. Please follow up with them to request photos.</p>
          
          <h3>Patient Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px 0; font-weight: bold; width: 40%;">Name:</td><td style="padding: 8px 0;">${personalInfo.name}</td></tr>
            <tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px 0; font-weight: bold; width: 40%;">Email:</td><td style="padding: 8px 0;">${personalInfo.email}</td></tr>
            <tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px 0; font-weight: bold; width: 40%;">Phone:</td><td style="padding: 8px 0;">${personalInfo.phone || 'Not provided'}</td></tr>
            <tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px 0; font-weight: bold; width: 40%;">Service of Interest:</td><td style="padding: 8px 0;">${personalInfo.service}</td></tr>
          </table>
          
          ${formatQuestions('Procedure-Specific Answers', procedureQuestions)}
          
          <h3>Medical History</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px 0; font-weight: bold; width: 40%;">Date of Birth:</td><td style="padding: 8px 0;">${personalInfo.dob}</td></tr>
            <tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px 0; font-weight: bold; width: 40%;">Sex:</td><td style="padding: 8px 0;">${personalInfo.sex}</td></tr>
            <tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px 0; font-weight: bold; width: 40%;">Height (cm):</td><td style="padding: 8px 0;">${personalInfo.height}</td></tr>
            <tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px 0; font-weight: bold; width: 40%;">Weight (kg):</td><td style="padding: 8px 0;">${personalInfo.weight}</td></tr>
            <tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px 0; font-weight: bold; width: 40%;">Smokes Daily:</td><td style="padding: 8px 0;">${personalInfo.smoke}</td></tr>
            <tr style="border-bottom: 1px solid #eee;"><td style="padding: 8px 0; font-weight: bold; width: 40%;">Drinks Alcohol:</td><td style="padding: 8px 0;">${personalInfo.alcohol}</td></tr>
          </table>
          
          ${formatQuestions('Medical Questions', medicalQuestions)}
          
        </div>
      `,
    });

    // 5. Send Success Response
    return NextResponse.json({ message: 'Form submitted successfully!' }, { status: 200 });

  } catch (error) {
    console.error('Resend Error:', error);
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}
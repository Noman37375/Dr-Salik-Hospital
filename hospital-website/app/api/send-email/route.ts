import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Verify the connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log('Email server connection error:', error);
  } else {
    console.log('Email server connection is ready to send messages');
  }
});

export async function POST(request: Request) {
  try {
    // Check if email configuration exists
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD || !process.env.HOSPITAL_EMAIL) {
      throw new Error('Email configuration is missing');
    }

    const body = await request.json();
    const { doctorName, specialization, name, email, phone, preferredDate, message } = body;

    // Create email content with better formatting
    const emailContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
            .section { margin-bottom: 20px; }
            .footer { font-size: 12px; color: #666; border-top: 1px solid #eee; padding-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Appointment Request</h2>
            </div>
            
            <div class="section">
              <h3>Doctor Details:</h3>
              <p><strong>Doctor:</strong> ${doctorName}</p>
              <p><strong>Specialization:</strong> ${specialization}</p>
            </div>
            
            <div class="section">
              <h3>Patient Details:</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Preferred Date:</strong> ${preferredDate}</p>
            </div>
            
            ${message ? `
              <div class="section">
                <h3>Additional Message:</h3>
                <p>${message}</p>
              </div>
            ` : ''}
            
            <div class="footer">
              <p>This is an automated email from Dr. Salik Hospital's appointment system.</p>
              <p>Date: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email
    const info = await transporter.sendMail({
      from: `"Dr. Salik Hospital" <${process.env.EMAIL_USER}>`,
      to: process.env.HOSPITAL_EMAIL,
      subject: `New Appointment Request - ${doctorName}`,
      html: emailContent,
      replyTo: email, // Allow replying directly to the patient
    });

    console.log('Email sent successfully:', info.messageId);
    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error('Email sending failed:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to send email' },
      { status: 500 }
    );
  }
} 
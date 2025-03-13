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
    const { 
      doctorName, 
      specialization, 
      name, 
      email, 
      phone, 
      selectedDate,
      selectedTime,
      message 
    } = body;

    // Format the date
    const formattedDate = new Date(selectedDate).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Create email content with better formatting
    const emailContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin-bottom: 20px; text-align: center; }
            .section { margin-bottom: 20px; background-color: #fff; padding: 15px; border-radius: 5px; border: 1px solid #eee; }
            .section h3 { color: #2563eb; margin-top: 0; }
            .info-row { display: flex; margin-bottom: 8px; }
            .info-label { font-weight: bold; min-width: 140px; }
            .footer { font-size: 12px; color: #666; border-top: 1px solid #eee; padding-top: 20px; text-align: center; }
            .highlight { background-color: #f0f9ff; padding: 10px; border-radius: 4px; margin: 10px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="color: #1e40af; margin: 0;">New Appointment Request</h2>
              <p style="color: #6b7280; margin-top: 5px;">Submitted on ${new Date().toLocaleString()}</p>
            </div>
            
            <div class="section">
              <h3>📅 Appointment Details</h3>
              <div class="highlight">
                <div class="info-row">
                  <span class="info-label">Date:</span>
                  <span>${formattedDate}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">Time:</span>
                  <span>${selectedTime}</span>
                </div>
              </div>
            </div>

            <div class="section">
              <h3>👨‍⚕️ Doctor Information</h3>
              <div class="info-row">
                <span class="info-label">Name:</span>
                <span>${doctorName}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Specialization:</span>
                <span>${specialization}</span>
              </div>
            </div>
            
            <div class="section">
              <h3>👤 Patient Information</h3>
              <div class="info-row">
                <span class="info-label">Name:</span>
                <span>${name}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Email:</span>
                <span>${email}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Phone:</span>
                <span>${phone}</span>
              </div>
            </div>
            
            ${message ? `
              <div class="section">
                <h3>💬 Additional Message</h3>
                <p style="margin: 0;">${message}</p>
              </div>
            ` : ''}
            
            <div class="footer">
              <p>This is an automated email from Dr. Salik Hospital's appointment system.</p>
              <p style="margin-bottom: 0;">Please review and confirm the appointment with the patient.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email
    const info = await transporter.sendMail({
      from: `"Dr. Salik Hospital" <${process.env.EMAIL_USER}>`,
      to: process.env.HOSPITAL_EMAIL,
      subject: `New Appointment Request - ${doctorName} - ${formattedDate}`,
      html: emailContent,
      replyTo: email, // Allow replying directly to the patient
    });

    // Send confirmation email to patient
    const patientEmailContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin-bottom: 20px; text-align: center; }
            .section { margin-bottom: 20px; background-color: #fff; padding: 15px; border-radius: 5px; border: 1px solid #eee; }
            .highlight { background-color: #f0f9ff; padding: 10px; border-radius: 4px; margin: 10px 0; }
            .footer { font-size: 12px; color: #666; border-top: 1px solid #eee; padding-top: 20px; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="color: #1e40af; margin: 0;">Appointment Request Received</h2>
              <p style="color: #6b7280; margin-top: 5px;">Thank you for choosing Dr. Salik Hospital</p>
            </div>
            
            <div class="section">
              <p>Dear ${name},</p>
              <p>We have received your appointment request with the following details:</p>
              
              <div class="highlight">
                <p><strong>Doctor:</strong> ${doctorName}</p>
                <p><strong>Specialization:</strong> ${specialization}</p>
                <p><strong>Date:</strong> ${formattedDate}</p>
                <p><strong>Time:</strong> ${selectedTime}</p>
              </div>
              
              <p>Our team will review your request and contact you shortly to confirm your appointment.</p>
              <p>If you need to make any changes or have questions, please contact us at:</p>
              <p>Phone: +92 300 1234567</p>
            </div>
            
            <div class="footer">
              <p>This is an automated confirmation email. Please do not reply to this email.</p>
              <p style="margin-bottom: 0;">Dr. Salik Hospital - Your Health, Our Priority</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send confirmation email to patient
    await transporter.sendMail({
      from: `"Dr. Salik Hospital" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Appointment Request Confirmation - Dr. Salik Hospital`,
      html: patientEmailContent,
    });

    console.log('Emails sent successfully:', info.messageId);
    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error('Email sending failed:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to send email' },
      { status: 500 }
    );
  }
} 
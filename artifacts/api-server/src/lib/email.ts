import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function sendContactEmail(
  name: string,
  email: string,
  subject: string,
  message: string
) {
  try {
    // Email to you (the portfolio owner)
    const aboutUserEmail = await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `New Contact: ${subject}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Confirmation email to sender
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: "We received your message",
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${name},</p>
        <p>I've received your message and will get back to you soon.</p>
        <p><strong>What you sent:</strong></p>
        <p>${message}</p>
        <p>Best regards</p>
      `,
    });

    return { success: true, messageId: aboutUserEmail.messageId };
  } catch (error) {
    console.error("Email sending failed:", error);
    throw error;
  }
}

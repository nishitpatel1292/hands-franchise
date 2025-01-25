import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, email, subject, message } = await request.json();

  // Configure nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service (e.g., Gmail, Outlook)
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASSWORD, // Your email password or app-specific password
    },
  });

  // Email options
  const mailOptions = {
    from: email, // Sender's email
    to: process.env.EMAIL_USER, // Your email to receive messages
    subject: `New message from ${name} : ${subject}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Error sending email' }), {
      status: 500,
    });
  }
}
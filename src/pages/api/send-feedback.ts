import type { NextApiRequest, NextApiResponse } from 'next';
import { env } from '~/env.mjs';
import nodemailer from 'nodemailer';

const sendFeedback = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // Destructure the message from the request body
    const { message } = req.body as { message: string };

    // Replace these with your actual email service and credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: env.EMAIL_ADDRESS, // Your email
        pass: env.EMAIL_PASSWORD, // Your email account password or app-specific password
      },
    });

    const mailOptions = {
      from: '"Feedback Form" <feedback-eldenringbuilds@erb.com>', // Sender address
      to: env.EMAIL_ADDRESS, // List of receivers
      subject: 'Elden Ring Builds Feedback', // Subject line
      text: message, // Plain text body
      // html: "<p>HTML version of the message</p>", // HTML body (optional)
    };

    // Send the email
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        console.log(error);
        res.status(500).json({ status: 'error', message: 'Error sending email' });
      } else {
        res.status(200).json({ status: 'ok', message: 'Email successfully sent' });
      }
    });
  } else {
    // Handle any non-POST requests
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default sendFeedback;
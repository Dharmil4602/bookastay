/**
 * Created By: Divyank Mayankkumar Shah
 * BannerId : B00966377
 */

import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

let gmailUsername = process.env.GMAIL_USER;
let gmailPassword = process.env.GMAIL_PASSWORD;

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailUsername,
    pass: gmailPassword,
  },
});

export const sendApproveServiceProviderEmail = (email) => {
  console.log(process.env.GMAIL_USER);
  var mailOptions = {
    from: "bookastayteam@gmail.com",
    to: email,
    subject: "Account verification completed",
    html: `
        <h1>Dear Service Provider</h1>
        <p>We're thrilled to inform you that your account with the hotel booking website has been successfully verified. Now, you can start adding your hotel listings right away!</p>
        <p>Should you need assistance, feel free to contact us at <a href="mailto:info@hotelbooking.com">info@hotelbooking.com</a>.</p>
        <p>Thanks & Regards</p>
        <p>Hotel Booking Team</p>
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

export const sendRejectServiceProviderEmail = (email) => {
  console.log(process.env.GMAIL_USER);
  var mailOptions = {
    from: "bookastayteam@gmail.com",
    to: email,
    subject: "Additional Details Required for Account Verification",
    html: `
        <h1>Dear Service Provider</h1>
        <p>Thank you for your interest in joining Hotel Booking Website.</p>
        <p>We regret to inform you that we require additional details to complete the verification process for your account.</p>
        <p>Should you need assistance, feel free to contact us at <a href="mailto:info@hotelbooking.com">info@hotelbooking.com</a>.</p>
        <p>Thanks & Regards</p>
        <p>Hotel Booking Team</p>
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

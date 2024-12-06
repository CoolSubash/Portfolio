import nodemailer from "nodemailer";
import { Request, Response } from "express";
import ContactModel from "../Model/Contact.Model";

export const ContactController = async (req: Request, res: Response): Promise<any> => {
  try {
    // Log incoming request data to make sure the body is received correctly
    console.log("Received request body:", req.body);
    
    // Save the comment to the database
    const comment = new ContactModel(req.body);
    await comment.save();
    // console.log("Comment saved to database:", req.body);

    // // Destructure email and comment from the request body
    // const { email, comment: userComment } = req.body;

    // // Set up the email transporter
    // const transporter = nodemailer.createTransport({
    //   service: "gmail", // Replace with your email service provider (e.g., Outlook, Yahoo)
    //   auth: {
    //     user: "subashneupane2022@gmail.com", // Replace with your email
    //     pass: "Claflin2026@", // Replace with your email's app password
    //   },
    // });

    // // Define the email options
    // const mailOptions = {
    //   from: email, // Sender email
    //   to: "subashneupane2022@gmail.com", // Receiver email (e.g., your own for now)
    //   subject: "New Comment Received",
    //   text: `You received a new comment: \n\n${userComment}`, // Include the comment in the email body
    // };

    // // Send the email
    // const info = await transporter.sendMail(mailOptions);
    // console.log("Email sent:", info);

    // Respond back with a success status
    return res.status(201).send("Successfully Done");
  } catch (error: any) {
    // Log the error and send back a detailed response
    console.error("Error occurred:", error.message);
    return res.status(500).send({ error: error.message, stack: error.stack });
  }
};

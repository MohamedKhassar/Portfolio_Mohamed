import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer"
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

export const POST = async (req: Request, res: Response) => {
  try {
    const { from, subject, name, content } = await req.json()
    await transporter.sendMail({
      from,
      to: process.env.EMAIL,
      subject,
      html: `<div style="display: flex; justify-content: center; gap: 20px;">
      <div style="display: grid; place-items: center; gap: 20px;">
      <h1 style="text-transform: capitalize; font-weight: bold; font-family: 'Poppins', sans-serif; font-size: 30px; display: flex; align-items: center; white-space: nowrap; margin: 0 12px;">
      you have message from Mohamed
      <span style="font-size: 40px; font-weight: bold; color: #6e06f2;border-radius:50%">.</span>
      </h1>
      
      <div style="display: grid; place-items: center; gap: 20px;">
    <p style="text-align: justify; width: 50%; max-width: 500px; margin: 0 auto;">
        Email: ${from}
    </p>
    <p style="text-align: justify; width: 50%; max-width: 500px; margin: 0 auto;">
        Message: ${content}
    </p>
</div>
</div>
</div>
    `
    });
    return Response.json({ message: "Message send successfully" })
  } catch (error) {
    return Response.json({ message: { error, email: process.env.EMAIL_PASS } })

  }
}


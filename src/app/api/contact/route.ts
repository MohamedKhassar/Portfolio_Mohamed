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
    //     await transporter.sendMail({
    //       from,
    //       to: process.env.EMAIL,
    //       subject,
    //       html: `<div style={{ display: 'grid', placeItems: 'center', gap: '20px' }}>
    //     <h1 style={{ 
    //         textTransform: 'capitalize', 
    //         fontWeight: 'bold', 
    //         fontFamily: 'Poppins', 
    //         fontSize: '3xl', 
    //         lg: { fontSize: '5xl' }, 
    //         display: 'flex', 
    //         alignItems: 'center', 
    //         whiteSpace: 'nowrap', 
    //         margin: '0 12px' 
    //     }}>
    //         you have message from ${name}
    //         <span style={{ 
    //             lg: { fontSize: '7xl' }, 
    //             fontSize: '4xl', 
    //             fontWeight: 'bold', 
    //             color: '#6e06f2' 
    //         }}>.</span>
    //     </h1>
    //     <p style={{ textAlign: 'justify', width: '50%' }}>
    //     ${from}
    //     </p>
    //     <p style={{ textAlign: 'justify', width: '50%' }}>
    //         ${content}
    //     </p>
    // </div>
    // `
    //     });
    return Response.json({ message: "Message send successfully" })
  } catch (error) {
    return Response.json({ message: { error, email: process.env.EMAIL_PASS } })

  }
}


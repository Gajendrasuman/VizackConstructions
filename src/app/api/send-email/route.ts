import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from "nodemailer"
import Mail from 'nodemailer/lib/mailer';
import { Email } from '@/email';
import { render } from '@react-email/components';
export async function POST(request: NextRequest) {
    const { firstname, lastname , email, phonenumber, subject , message } = await request.json();

    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            // user: process.env.EMAIL,
            // pass: process.env.PASSWORD
            user: "ayush.sharma769287@gmail.com",
            pass: "uipo rbnw qmkw jfrp"
        }
    })
    // const emailHtml = await render(<Email />);

    const mailOpts: Mail.Options = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: `Message from ${firstname} ${lastname} - ${subject}`,
        text: `
        New Message Received:

        Name: ${firstname} ${lastname}
        Email: ${email}
        Phone Number: ${phonenumber}
        Subject: ${subject}

        Message:
        ${message}
        `,
    };



    const sendEmailPromice = () => {
        new Promise<String>((resolve, reject) => {
            transport.sendMail(mailOpts, (err) => {
                if (!err) {
                    resolve("Email sent")
                } else {
                    reject(err.message)
                }
            })
        })
    }

    try {
        sendEmailPromice()
        return NextResponse.json({ message: 'Email sent' }); 
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }

}
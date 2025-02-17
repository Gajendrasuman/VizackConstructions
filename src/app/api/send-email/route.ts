import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
// import { Email } from '@/email';
// import { render } from '@react-email/components';
export async function POST(request: NextRequest) {
  const { firstname, lastname, email, phonenumber, subject, message } =
    await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  // const emailHtml = await render(<Email />);

    const user: Mail.Options = {
        from: email,
        to: email,
        subject: `Thank You for Contacting ViZack Enterprises and Constructions`,
        replyTo: "info@vizackenterprises.com",
        html: `
            <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Contacting Us</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
            }
            .container {
                max-width: 600px;
                margin: 20px auto;
                background: #ffffff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            }
            h2 {
                color: #333;
            }
            p {
                color: #555;
                line-height: 1.6;
            }
            .footer {
                margin-top: 20px;
                font-size: 12px;
                color: #777;
                text-align: center;
            }
            .details {
                background: #f9f9f9;
                padding: 10px;
                border-left: 4px solid #007bff;
                margin-top: 10px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h2>Thank You for Contacting Us!</h2>
            <p>Dear <strong>${firstname} ${lastname}</strong>,</p>
            <p>We have received your message and our team will get back to you as soon as possible.</p>

            <div class="details">
                <p><strong>Name:</strong> ${firstname} ${lastname} </p>
                <p><strong>Phone:</strong> ${phonenumber}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong> ${message}</p>
            </div>

            <p>If your request is urgent, feel free to call us at <strong><a style="color: #007bff; text-decoration: none" href="tel:+91-7771877195">+91-7771877195</a></strong>.</p>
            <p>We appreciate your interest in <strong>ViZack Enterprises and Constructions</strong> and look forward to assisting you.</p>

            <div class="footer">
                <p>Best regards,<br><strong>ViZack Enterprises and Constructions</strong><br><a style="color: #007bff; text-decoration: none" href="https://vizackenterprises.com" target="_blank" rel="noopener noreferrer">www.vizackenterprises.com</a> | <a style="color: #007bff; text-decoration: none" href="mailto:info@vizackenterprises.com">info@vizackenterprises.com</a> | <a style="color: #007bff; text-decoration: none" href="tel:+91-7771877195">+91-7771877195</a></p>
            </div>
        </div>
    </body>
    </html>

            `,
        text: `=========================================
    THANK YOU FOR CONTACTING US!    
    =========================================

    Dear ${firstname} ${lastname},

    We have successfully received your message and our team will respond as soon as possible.

    -----------------------------------------
    YOUR SUBMISSION DETAILS:
    -----------------------------------------
    Name    : ${firstname} ${lastname}
    Phone   : ${phonenumber}
    Email   : ${email}
    Subject : ${subject}

    Message :
    -----------------------------------------
    ${message}
    -----------------------------------------

    **If your request is urgent, feel free to call us at: +91-7771877195**

    We truly appreciate your interest in 
    **ViZack Enterprises and Constructions** 
    and look forward to assisting you.

    -----------------------------------------
    Best Regards,  
    ViZack Enterprises and Constructions  
    🌐 https://vizackenterprises.com
    📧 info@vizackenterprises.com
    📞 +91-7771877195
    ========================================= 
    `,
        };
    
    const owner: Mail.Options = {
        from: email,
        to: process.env.EMAIL,
        subject: `New Contact Form Submission: ${firstname} ${lastname}`,
        replyTo: email, 
        html: `
        <!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
        h2 {
            color: #333;
        }
        p {
            color: #555;
            line-height: 1.6;
        }
        .footer {
            margin-top: 20px;
            font-size: 12px;
            color: #777;
            text-align: center;
        }
        .details {
            background: #f9f9f9;
            padding: 10px;
            border-left: 4px solid #ff5722;
            margin-top: 10px;
        }
    </style>
    </head>
    <body>
    <div class="container">
        <h2>New Contact Form Submission</h2>
        <p>Hello ViZack Team,</p>
        <p>A new inquiry has been submitted through the contact form on your website.</p>

        <div class="details">
            <p><strong>Name:</strong> ${firstname} ${lastname}</p>
            <p><strong>Phone:</strong> ${phonenumber}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong> ${message}</p>
        </div>

        <p>📩 Please respond to the user as soon as possible.</p>

        <div class="footer">
            <p>Best Regards,<br><strong>ViZack Enterprises and Constructions Website</strong></p>
        </div>
    </div>
    </body>
    </html>
    `,
        text: `=========================================
    NEW CONTACT FORM SUBMISSION    
    =========================================

    Hello ViZack Team,

    A new inquiry has been submitted through the contact form on your website.

    -----------------------------------------
    USER DETAILS:
    -----------------------------------------
    📌 Name    : ${firstname} ${lastname}
    📌 Phone   : ${phonenumber}
    📌 Email   : ${email}
    📌 Subject : ${subject}

    📜 Message :
    -----------------------------------------
    ${message}
    -----------------------------------------

    📩 Please respond to the user as soon as possible.

    =========================================
    Best Regards,  
    ViZack Enterprises and Constructions Website  
    =========================================

    `,
    };

    async function sendEmail(mailOptions: Mail.Options) {
        return new Promise((resolve, reject) => {
            transport.sendMail(mailOptions, (error, info) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(info.response);
                }
            });
        });
    }

    try {
        await Promise.all([sendEmail(user), sendEmail(owner)]);
        return NextResponse.json({ message: "Emails sent successfully!" });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}

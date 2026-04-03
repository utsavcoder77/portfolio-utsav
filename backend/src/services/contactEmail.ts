import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (fName: string, lName: string, email: string, mobile: string, message?: string) => {
    try {
        // ✅ Email to YOU
        await resend.emails.send({
            from: "Utsav Baral <contact@utsavbaral.au>",
            to: "baralutsav89@gmail.com",
            subject: "New Contact Form Submission",
            html: `
        <h3>New Contact</h3>
        <p><b>Name:</b> ${fName} ${lName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mobile:</b> ${mobile}</p>
        <p><b>Message:</b> ${message}</p>
      `,
        });

        // ✅ Auto reply to USER
        await resend.emails.send({
            from: "Utsav Baral <contact@utsavbaral.au>",
            to: email,
            subject: "Thanks for contacting me",
            html: `
        <p>Hi ${fName},</p>
        <p>Thanks for reaching out! I will get back to you soon.</p>
      `,
        });

        console.log("Emails sent successfully");

    } catch (error) {
        console.error("Email error:", error);
    }
};

export default sendEmail;
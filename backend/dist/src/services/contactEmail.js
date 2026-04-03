import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
const sendEmail = async (name, userEmail) => {
    try {
        // ✅ Email to YOU
        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "baralutsav89@gmail.com",
            subject: "New Contact Form Submission",
            html: `
        <h3>New Contact</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${userEmail}</p>
      `,
        });
        // ✅ Auto reply to USER
        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: userEmail,
            subject: "Thanks for contacting me",
            html: `
        <p>Hi ${name},</p>
        <p>Thanks for reaching out! I will get back to you soon.</p>
      `,
        });
        console.log("Emails sent successfully");
    }
    catch (error) {
        console.error("Email error:", error);
    }
};
export default sendEmail;
//# sourceMappingURL=contactEmail.js.map
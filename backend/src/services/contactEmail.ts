import "dotenv/config"
import sgMail from '@sendgrid/mail';



if (!process.env.SENDGRID_API_KEY) {
    throw new Error('SENDGRID_API_KEY is not defined in the environment variables');
}
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
let emailLock = false;
export const sendEmail = async (fName: string, email: string) => {
    if (emailLock) return;

    emailLock = true
    const msg = {
        to: email,
        from: 'baralutsav89@gmail.com',
        subject: 'Thank You for contacting me!',
        text: `Hi ${fName}, I will get back to you soon`,

    }
    try {
        sgMail.send(msg);
        console.log("Email sent successfully")
    } catch (error: any) {
        const sgError = error?.response?.body?.errors?.message
        if (sgError === "Maximum credits exceeded") {
            console.error("SendGrid quota exceeded. Upgrade or wait.");
        } else {
            console.error("SendGrid error:", error?.response?.body || error);
        }
    } finally {
        emailLock = false
    }

}

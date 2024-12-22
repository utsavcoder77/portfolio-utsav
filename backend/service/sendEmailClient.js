import sgMail from "@sendgrid/mail";
import dotenv from 'dotenv';

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function sendContactEmailToClient(newClient) {
    const msg = {
        from: 'baralutsav89@gmail.com',
        template_id: 'd-3e4503c07a9b4c7ca1b3b0ff9feaad2d',

        personalizations: [
            {
                to: {
                    email: newClient.email,
                    subject: "Thank you for Contacting.",
                },
                dynamic_template_data: {
                    firstName: newClient.fName,
                    homeUrl: "http://localhost:5173/",

                }
            }
        ]
    }
    try {
        await sgMail.send(msg);
    } catch (error) {
        console.log(error);
    }

}

export async function sendContactEmailToAdmin(newClient) {
    const msg = {
        from: 'baralutsav89@gmail.com',
        template_id: 'd-60a42b7733654a07a867e7f6a25e7899',

        personalizations: [
            {
                to: {
                    email: "baralutsav89@gmail.com",
                    subject: "Thank you for Contacting.",
                },
                dynamic_template_data: {
                    firstName: newClient.fName,
                    lastName: newClient.lName,
                    mobile: newClient.mobile,
                    email: newClient.email,
                    message: newClient.message,
                    homeUrl: "http://localhost:5173/",

                }
            }
        ]
    }
    try {
        await sgMail.send(msg);
    } catch (error) {
        console.log(error);
    }

}

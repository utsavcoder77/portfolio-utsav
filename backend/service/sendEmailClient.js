import sgMail from "@sendgrid/mail";
import dotenv from 'dotenv';

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendBookingEmailToClient(newClient) {
    const msg = {
        from: 'baralutsav89@gmail.com', // Change to your verified sender
        template_id: 'd-3e4503c07a9b4c7ca1b3b0ff9feaad2d',
        personalizations: [
            {
                to: {
                    email: newClient.email
                },
                dynamic_template_data: {
                    firstName: newClient.fName,
                    homeUrl: "http://localhost:5173/"
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

export default sendBookingEmailToClient;
import express from "express";
const router = express.Router();
import * as contactService from "../service/contactService.js";
import { sendContactEmailToClient, sendContactEmailToAdmin } from "../service/sendEmailClient.js"

router.post('/', async (req, res) => {
    try {
        const contactData = req.body;
        await contactService.addContact(contactData);
        await sendContactEmailToClient(req.body);
        await sendContactEmailToAdmin(req.body);
        console.log(contactData)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: { messages: ['Something went wrong. Please try after a while'] } })
    }
})

export default router;
import express from "express";
const router = express.Router();
import * as contactService from "../service/contactService.js";
import { sendContactEmailToClient } from "../service/sendEmailClient.js"

router.post('/', async (req, res) => {
    try {
        const contactData = req.body;
        await contactService.addContact(contactData);
        await sendContactEmailToClient(req.body)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: { messages: ['Something went wrong. Please try after a while'] } })
    }
})

export default router;
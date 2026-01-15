import { Router } from "express";
import type { Request, Response } from "express";
import { prisma } from '../lib/prisma.js';
import { sendEmail } from "../services/contactEmail.js";

const router = Router();

interface ContactForm {
    fName: string;
    lName: string;
    email: string;
    mobile: string;
    message?: string;
}



router.post("/", async (req: Request, res: Response) => {
    console.log("Body received:", req.body);
    try {

        const body: Partial<ContactForm> = req.body || {}
        const { fName, lName, email, mobile, message } = body;
        if (!fName || !lName || !mobile || !email) {
            return res.status(400).json({ error: "Missing required field" })
        }
        await prisma.contact.create({
            data: {
                fName, lName, email, mobile, message: message || ""
            }
        });
        res.status(200).json({ success: true });

        sendEmail(fName, email)

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" })
    }
})

export default router;
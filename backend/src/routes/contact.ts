import { Router } from "express";
import type { Request, Response } from "express";
import { prisma } from '../lib/prisma.js';
import sendEmail from "../services/contactEmail.js";



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

        const body: ContactForm = req.body || {}
        const { fName, lName, email, mobile, message } = body;
        if (!fName || !lName || !mobile || !email) {
            return res.status(400).json({ error: "Missing required field" })
        }
        await prisma.contact.create({
            data: {
                fName, lName, email, mobile, message: message || ""
            }
        });

        await sendEmail(fName, lName, email, mobile, message);
        res.status(200).json({ success: true });

        console.log("Body received:", req.body);

    } catch (error) {
        console.error("full error:", error);
        res.status(500).json({ error: "Something went wrong" })
    }
})

export default router;
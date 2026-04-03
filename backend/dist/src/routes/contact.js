import { Router } from "express";
import { prisma } from '../lib/prisma.js';
// import sendEmail from "../services/contactEmail.js";
const router = Router();
router.post("/", async (req, res) => {
    console.log("Body received:", req.body);
    try {
        const body = req.body || {};
        const { fName, lName, email, mobile, message } = body;
        if (!fName || !lName || !mobile || !email) {
            return res.status(400).json({ error: "Missing required field" });
        }
        await prisma.contact.create({
            data: {
                fName, lName, email, mobile, message: message || ""
            }
        });
        // await sendEmail(`${fName} ${lName}`, email);
        res.status(200).json({ success: true });
        console.log("Body received:", req.body);
    }
    catch (error) {
        console.error("full error:", error);
        res.status(500).json({ error: "Something went wrong" });
    }
});
export default router;
//# sourceMappingURL=contact.js.map
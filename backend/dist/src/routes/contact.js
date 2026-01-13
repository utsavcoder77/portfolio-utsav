import { Router } from "express";
import { prisma } from '../lib/prisma.js';
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
        res.status(200).json({ success: true });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
});
export default router;
//# sourceMappingURL=contact.js.map
import express from "express";
const router = express.Router();

router.post("/", function (req, res, next) {
  res.status(200).json({ success: true, message: "Message sent!" });
});

export default router;

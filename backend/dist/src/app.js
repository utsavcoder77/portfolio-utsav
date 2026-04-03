import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import contactRouter from './routes/contact.js';
dotenv.config();
const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
}));
app.use(express.json());
// Parse URL-encoded bodies (for forms)
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send("Utsav Baral");
});
app.use("/contact", contactRouter);
export default app;
//# sourceMappingURL=app.js.map
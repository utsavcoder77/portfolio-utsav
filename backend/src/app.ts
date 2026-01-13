import express from 'express';
import cors from "cors";
import contactRouter from './routes/contact.js'


const app = express();

app.use(cors());

app.use(express.json());

// Parse URL-encoded bodies (for forms)
app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
    res.send("Utsav Baral")
});
app.use("/contact", contactRouter)


export default app
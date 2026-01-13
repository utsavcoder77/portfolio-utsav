import express from "express";
import contactRouter from "./routes/contact.js";
const app = express();

app.get("/", (req, res) => {
  res.send("Utsav Baral");
});
app.use("/contact", contactRouter);
export default app;
//# sourceMappingURL=app.js.map

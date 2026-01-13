import app from './app.js';
import { prisma } from "./lib/prisma.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Backend Listening to the port ${PORT}`)
})

process.on("SIGINT", async () => {
    console.log("Shutting down...");
    await prisma.$disconnect();
    process.exit(0);
});

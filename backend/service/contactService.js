import client from "@prisma/client";
const prisma = new client.PrismaClient();

export async function addContact(data) {
    try {
        return await prisma.contact.create({ data });
    } catch (error) {
        console.log(error);
    }
}
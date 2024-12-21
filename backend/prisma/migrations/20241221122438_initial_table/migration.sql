-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "fName" VARCHAR(255) NOT NULL,
    "lName" VARCHAR(255) NOT NULL,
    "mobile" VARCHAR(15) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "message" VARCHAR(255) NOT NULL,
    "careatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

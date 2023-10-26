-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Male', 'Female');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "uuid" VARCHAR(145) NOT NULL,
    "name" VARCHAR(145) NOT NULL,
    "email" VARCHAR(145) NOT NULL,
    "password" TEXT NOT NULL,
    "phone" VARCHAR(50) NOT NULL,
    "birthDate" TEXT,
    "gender" "Gender",
    "address" VARCHAR(145),
    "salt" VARCHAR(96),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_uuid_key" ON "users"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_key" ON "users"("phone");

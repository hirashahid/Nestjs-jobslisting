-- CreateTable
CREATE TABLE "job" (
    "id" SERIAL NOT NULL,
    "uuid" VARCHAR(145) NOT NULL,
    "title" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "requirements" TEXT NOT NULL,
    "responsibilities" TEXT NOT NULL,
    "benefits" TEXT NOT NULL,
    "applicants" INTEGER[],

    CONSTRAINT "job_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "job_uuid_key" ON "job"("uuid");

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('admin', 'writer');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "role" "Role" NOT NULL DEFAULT 'writer',
    "token" TEXT,
    "address" TEXT,
    "birthday" TEXT,
    "phoneNum" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "mimetype" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ValidationNumber" (
    "id" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiration" BIGINT NOT NULL,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,

    CONSTRAINT "ValidationNumber_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userForSQLInjection" (
    "id" TEXT NOT NULL,
    "username" TEXT,
    "password" TEXT NOT NULL,

    CONSTRAINT "userForSQLInjection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userForXSS" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "userForXSS_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "File" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "mimetype" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lab1IDORS" (
    "id" SERIAL NOT NULL,
    "path" TEXT,

    CONSTRAINT "Lab1IDORS_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lab2IDORS" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "balance" INTEGER NOT NULL DEFAULT 1000,

    CONSTRAINT "Lab2IDORS_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lab3IDORS" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'user',
    "balance" INTEGER NOT NULL DEFAULT 1000,

    CONSTRAINT "Lab3IDORS_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "content" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lab2sql" (
    "id" TEXT NOT NULL,
    "category" TEXT DEFAULT 'electronics',
    "released" TEXT DEFAULT '1',

    CONSTRAINT "lab2sql_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lab3sql" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "price" TEXT,
    "category" TEXT DEFAULT 'electronics',

    CONSTRAINT "lab3sql_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ACUser" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ACUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "apiHackingLab" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "apiHackingLab_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "imageForApiHacking" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "imageForApiHacking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductToPathTraversalLab1" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "path" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "ProductToPathTraversalLab1_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BankAccount" (
    "id" SERIAL NOT NULL,
    "accountNo" TEXT NOT NULL,
    "accountPass" TEXT NOT NULL,
    "accountBalance" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "accountName" TEXT NOT NULL,

    CONSTRAINT "BankAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CSRFLab2" (
    "id" SERIAL NOT NULL,
    "authority" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "CSRFLab2_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CSRFLab3" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'user',
    "balance" INTEGER NOT NULL DEFAULT 1000,

    CONSTRAINT "CSRFLab3_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FileInclusionLab1" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,

    CONSTRAINT "FileInclusionLab1_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CartItem" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "CartItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BurPSuiteLab3" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "path" TEXT,
    "description" TEXT,

    CONSTRAINT "BurPSuiteLab3_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Course" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT,
    "link" TEXT,
    "state" TEXT NOT NULL,
    "topics" TEXT[],
    "difficulty" TEXT NOT NULL,
    "favorite" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseRegistration" (
    "id" SERIAL NOT NULL,
    "courseId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CourseRegistration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClickJackLab1" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT,

    CONSTRAINT "ClickJackLab1_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lab1RaceCondition" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "surname" TEXT,
    "tel" TEXT,

    CONSTRAINT "Lab1RaceCondition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lab1captcha" (
    "id" TEXT NOT NULL,
    "comment" TEXT,
    "captcha" TEXT NOT NULL,

    CONSTRAINT "Lab1captcha_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lab2captcha" (
    "id" TEXT NOT NULL,
    "comment" TEXT,
    "captcha" TEXT,

    CONSTRAINT "Lab2captcha_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lab2captchaComment" (
    "id" TEXT NOT NULL,
    "comment" TEXT,

    CONSTRAINT "Lab2captchaComment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Image_userId_key" ON "Image"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "ValidationNumber_userId_key" ON "ValidationNumber"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "userForSQLInjection_username_key" ON "userForSQLInjection"("username");

-- CreateIndex
CREATE UNIQUE INDEX "userForXSS_email_key" ON "userForXSS"("email");

-- CreateIndex
CREATE UNIQUE INDEX "apiHackingLab_username_key" ON "apiHackingLab"("username");

-- CreateIndex
CREATE UNIQUE INDEX "BankAccount_accountNo_key" ON "BankAccount"("accountNo");

-- CreateIndex
CREATE UNIQUE INDEX "CSRFLab2_authority_key" ON "CSRFLab2"("authority");

-- CreateIndex
CREATE UNIQUE INDEX "FileInclusionLab1_name_key" ON "FileInclusionLab1"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ClickJackLab1_username_key" ON "ClickJackLab1"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Lab1RaceCondition_email_key" ON "Lab1RaceCondition"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Lab1captcha_captcha_key" ON "Lab1captcha"("captcha");

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ValidationNumber" ADD CONSTRAINT "ValidationNumber_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "userForXSS"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "imageForApiHacking" ADD CONSTRAINT "imageForApiHacking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "apiHackingLab"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseRegistration" ADD CONSTRAINT "CourseRegistration_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

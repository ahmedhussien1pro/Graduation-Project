-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('admin', 'writer');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "role" "public"."Role" NOT NULL DEFAULT 'writer',
    "token" TEXT,
    "address" TEXT,
    "birthday" TEXT,
    "phoneNum" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Image" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "mimetype" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ValidationNumber" (
    "id" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiration" BIGINT NOT NULL,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,

    CONSTRAINT "ValidationNumber_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."userForSQLInjection" (
    "id" TEXT NOT NULL,
    "username" TEXT,
    "password" TEXT NOT NULL,

    CONSTRAINT "userForSQLInjection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."userForXSS" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "userForXSS_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."File" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "mimetype" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Lab1IDORS" (
    "id" SERIAL NOT NULL,
    "path" TEXT,

    CONSTRAINT "Lab1IDORS_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Lab2IDORS" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "balance" INTEGER NOT NULL DEFAULT 1000,

    CONSTRAINT "Lab2IDORS_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Lab3IDORS" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'user',
    "balance" INTEGER NOT NULL DEFAULT 1000,

    CONSTRAINT "Lab3IDORS_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Post" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "content" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."lab2sql" (
    "id" TEXT NOT NULL,
    "category" TEXT DEFAULT 'electronics',
    "released" TEXT DEFAULT '1',

    CONSTRAINT "lab2sql_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."lab3sql" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "price" TEXT,
    "category" TEXT DEFAULT 'electronics',

    CONSTRAINT "lab3sql_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ACUser" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ACUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."apiHackingLab" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "apiHackingLab_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."imageForApiHacking" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "imageForApiHacking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ProductToPathTraversalLab1" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "path" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "ProductToPathTraversalLab1_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."BankAccount" (
    "id" SERIAL NOT NULL,
    "accountNo" TEXT NOT NULL,
    "accountPass" TEXT NOT NULL,
    "accountBalance" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "accountName" TEXT NOT NULL,

    CONSTRAINT "BankAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CSRFLab2" (
    "id" SERIAL NOT NULL,
    "authority" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "CSRFLab2_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CSRFLab3" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'user',
    "balance" INTEGER NOT NULL DEFAULT 1000,

    CONSTRAINT "CSRFLab3_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."FileInclusionLab1" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,

    CONSTRAINT "FileInclusionLab1_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CartItem" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "CartItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."BurPSuiteLab3" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "path" TEXT,
    "description" TEXT,

    CONSTRAINT "BurPSuiteLab3_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Course" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT,
    "link" TEXT,
    "state" TEXT NOT NULL,
    "topics" TEXT[],
    "difficulty" TEXT NOT NULL,
    "favorite" BOOLEAN NOT NULL DEFAULT false,
    "category" TEXT NOT NULL,
    "myCourses" BOOLEAN NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CourseRegistration" (
    "id" SERIAL NOT NULL,
    "courseId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CourseRegistration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ClickJackLab1" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT,

    CONSTRAINT "ClickJackLab1_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Lab1RaceCondition" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "tel" TEXT NOT NULL,

    CONSTRAINT "Lab1RaceCondition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Lab1captcha" (
    "id" TEXT NOT NULL,
    "comment" TEXT,
    "captcha" TEXT NOT NULL,

    CONSTRAINT "Lab1captcha_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Lab2captcha" (
    "id" TEXT NOT NULL,
    "comment" TEXT,
    "captcha" TEXT,

    CONSTRAINT "Lab2captcha_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Lab2captchaComment" (
    "id" TEXT NOT NULL,
    "comment" TEXT,

    CONSTRAINT "Lab2captchaComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."BLVulnUser" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL DEFAULT '',
    "balance" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "BLVulnUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."BLVulnCartItem" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "BLVulnCartItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Lab3captchaComment" (
    "id" TEXT NOT NULL,
    "comment" TEXT,

    CONSTRAINT "Lab3captchaComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."lab1SSTI1" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "comment" TEXT,

    CONSTRAINT "lab1SSTI1_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."lab1jwt" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT,
    "password" TEXT NOT NULL,
    "token" TEXT,

    CONSTRAINT "lab1jwt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."lab2jwt" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT,
    "password" TEXT NOT NULL,
    "token" TEXT,

    CONSTRAINT "lab2jwt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."lab3jwt" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT,
    "password" TEXT NOT NULL,
    "token" TEXT,

    CONSTRAINT "lab3jwt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."lab2RaceConditionCoupon" (
    "id" SERIAL NOT NULL,
    "coupon" TEXT,
    "discount" INTEGER DEFAULT 50,
    "isValid" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "lab2RaceConditionCoupon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."lab2RaceConditionPayment" (
    "id" SERIAL NOT NULL,
    "price" INTEGER NOT NULL,
    "priceAfterDiscount" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "couponId" INTEGER,

    CONSTRAINT "lab2RaceConditionPayment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."lab1SSRF" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "lab1SSRF_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."contactUs" (
    "id" TEXT NOT NULL,
    "fname" TEXT NOT NULL,
    "lname" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "contactUs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "public"."User"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Image_userId_key" ON "public"."Image"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "ValidationNumber_userId_key" ON "public"."ValidationNumber"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "userForSQLInjection_username_key" ON "public"."userForSQLInjection"("username");

-- CreateIndex
CREATE UNIQUE INDEX "userForXSS_email_key" ON "public"."userForXSS"("email");

-- CreateIndex
CREATE UNIQUE INDEX "apiHackingLab_username_key" ON "public"."apiHackingLab"("username");

-- CreateIndex
CREATE UNIQUE INDEX "BankAccount_accountNo_key" ON "public"."BankAccount"("accountNo");

-- CreateIndex
CREATE UNIQUE INDEX "CSRFLab2_authority_key" ON "public"."CSRFLab2"("authority");

-- CreateIndex
CREATE UNIQUE INDEX "FileInclusionLab1_name_key" ON "public"."FileInclusionLab1"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ClickJackLab1_username_key" ON "public"."ClickJackLab1"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Lab1captcha_captcha_key" ON "public"."Lab1captcha"("captcha");

-- CreateIndex
CREATE UNIQUE INDEX "BLVulnUser_email_key" ON "public"."BLVulnUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "lab1jwt_username_key" ON "public"."lab1jwt"("username");

-- CreateIndex
CREATE UNIQUE INDEX "lab1jwt_email_key" ON "public"."lab1jwt"("email");

-- CreateIndex
CREATE UNIQUE INDEX "lab2jwt_username_key" ON "public"."lab2jwt"("username");

-- CreateIndex
CREATE UNIQUE INDEX "lab2jwt_email_key" ON "public"."lab2jwt"("email");

-- CreateIndex
CREATE UNIQUE INDEX "lab3jwt_username_key" ON "public"."lab3jwt"("username");

-- CreateIndex
CREATE UNIQUE INDEX "lab3jwt_email_key" ON "public"."lab3jwt"("email");

-- CreateIndex
CREATE UNIQUE INDEX "lab2RaceConditionCoupon_coupon_key" ON "public"."lab2RaceConditionCoupon"("coupon");

-- CreateIndex
CREATE UNIQUE INDEX "lab1SSRF_username_key" ON "public"."lab1SSRF"("username");

-- AddForeignKey
ALTER TABLE "public"."Image" ADD CONSTRAINT "Image_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ValidationNumber" ADD CONSTRAINT "ValidationNumber_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."File" ADD CONSTRAINT "File_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Post" ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."userForXSS"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."imageForApiHacking" ADD CONSTRAINT "imageForApiHacking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."apiHackingLab"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CourseRegistration" ADD CONSTRAINT "CourseRegistration_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "public"."Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."BLVulnCartItem" ADD CONSTRAINT "BLVulnCartItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."BLVulnUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."lab2RaceConditionPayment" ADD CONSTRAINT "lab2RaceConditionPayment_couponId_fkey" FOREIGN KEY ("couponId") REFERENCES "public"."lab2RaceConditionCoupon"("id") ON DELETE SET NULL ON UPDATE CASCADE;

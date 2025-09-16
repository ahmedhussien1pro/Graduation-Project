-- CreateTable
CREATE TABLE "BLVulnUser" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL DEFAULT '',
    "balance" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "BLVulnUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BLVulnCartItem" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "BLVulnCartItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BLVulnUser_email_key" ON "BLVulnUser"("email");

-- AddForeignKey
ALTER TABLE "BLVulnCartItem" ADD CONSTRAINT "BLVulnCartItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "BLVulnUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

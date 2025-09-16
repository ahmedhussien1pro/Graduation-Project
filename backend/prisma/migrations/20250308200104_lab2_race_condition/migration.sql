-- CreateTable
CREATE TABLE "lab2RaceConditionCoupon" (
    "id" SERIAL NOT NULL,
    "coupon" TEXT,
    "discount" INTEGER DEFAULT 50,
    "isValid" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "lab2RaceConditionCoupon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lab2RaceConditionPayment" (
    "id" SERIAL NOT NULL,
    "price" INTEGER NOT NULL,
    "priceAfterDiscount" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "couponId" INTEGER,

    CONSTRAINT "lab2RaceConditionPayment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "lab2RaceConditionCoupon_coupon_key" ON "lab2RaceConditionCoupon"("coupon");

-- AddForeignKey
ALTER TABLE "lab2RaceConditionPayment" ADD CONSTRAINT "lab2RaceConditionPayment_couponId_fkey" FOREIGN KEY ("couponId") REFERENCES "lab2RaceConditionCoupon"("id") ON DELETE SET NULL ON UPDATE CASCADE;

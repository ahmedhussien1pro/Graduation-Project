/*
  Warnings:

  - You are about to drop the column `name` on the `contactUs` table. All the data in the column will be lost.
  - You are about to drop the column `subject` on the `contactUs` table. All the data in the column will be lost.
  - Added the required column `fname` to the `contactUs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lname` to the `contactUs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `contactUs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "contactUs" DROP COLUMN "name",
DROP COLUMN "subject",
ADD COLUMN     "fname" TEXT NOT NULL,
ADD COLUMN     "lname" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;

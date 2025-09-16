/*
  Warnings:

  - The primary key for the `Lab1RaceCondition` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Lab1RaceCondition` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Made the column `name` on table `Lab1RaceCondition` required. This step will fail if there are existing NULL values in that column.
  - Made the column `surname` on table `Lab1RaceCondition` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tel` on table `Lab1RaceCondition` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "Lab1RaceCondition_email_key";

-- AlterTable
ALTER TABLE "Lab1RaceCondition" DROP CONSTRAINT "Lab1RaceCondition_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "surname" SET NOT NULL,
ALTER COLUMN "tel" SET NOT NULL,
ADD CONSTRAINT "Lab1RaceCondition_pkey" PRIMARY KEY ("id");

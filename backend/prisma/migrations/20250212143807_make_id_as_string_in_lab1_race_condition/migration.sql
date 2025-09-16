/*
  Warnings:

  - The primary key for the `Lab1RaceCondition` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Lab1RaceCondition" DROP CONSTRAINT "Lab1RaceCondition_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Lab1RaceCondition_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Lab1RaceCondition_id_seq";

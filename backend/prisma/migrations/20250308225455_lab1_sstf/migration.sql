-- CreateTable
CREATE TABLE "lab1SSRF" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "lab1SSRF_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "lab1SSRF_username_key" ON "lab1SSRF"("username");

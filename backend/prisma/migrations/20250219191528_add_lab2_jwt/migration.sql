-- CreateTable
CREATE TABLE "lab2jwt" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT,
    "password" TEXT NOT NULL,
    "token" TEXT,

    CONSTRAINT "lab2jwt_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "lab2jwt_username_key" ON "lab2jwt"("username");

-- CreateIndex
CREATE UNIQUE INDEX "lab2jwt_email_key" ON "lab2jwt"("email");

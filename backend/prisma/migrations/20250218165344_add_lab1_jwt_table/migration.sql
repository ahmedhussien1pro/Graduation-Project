-- CreateTable
CREATE TABLE "lab1jwt" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT,
    "password" TEXT NOT NULL,
    "token" TEXT,

    CONSTRAINT "lab1jwt_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "lab1jwt_username_key" ON "lab1jwt"("username");

-- CreateIndex
CREATE UNIQUE INDEX "lab1jwt_email_key" ON "lab1jwt"("email");

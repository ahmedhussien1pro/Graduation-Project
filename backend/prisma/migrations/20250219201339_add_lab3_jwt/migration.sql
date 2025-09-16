-- CreateTable
CREATE TABLE "lab3jwt" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT,
    "password" TEXT NOT NULL,
    "token" TEXT,

    CONSTRAINT "lab3jwt_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "lab3jwt_username_key" ON "lab3jwt"("username");

-- CreateIndex
CREATE UNIQUE INDEX "lab3jwt_email_key" ON "lab3jwt"("email");

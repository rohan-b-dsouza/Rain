/*
  Warnings:

  - You are about to drop the `OnRampTransaction` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "OnRampTransaction";

-- CreateTable
CREATE TABLE "onRampTransaction" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "idempotencyKey" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "provider" TEXT NOT NULL,
    "status" "OnRampStatus" NOT NULL DEFAULT 'PENDING',
    "completedAt" TIMESTAMP(3),
    "providerTransactionId" TEXT,

    CONSTRAINT "onRampTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "onRampTransaction_userId_idempotencyKey_key" ON "onRampTransaction"("userId", "idempotencyKey");

-- CreateIndex
CREATE UNIQUE INDEX "onRampTransaction_provider_providerTransactionId_key" ON "onRampTransaction"("provider", "providerTransactionId");

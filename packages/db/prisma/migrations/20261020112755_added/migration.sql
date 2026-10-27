/*
  Warnings:

  - You are about to drop the `onRampTransaction` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "onRampTransaction";

-- CreateTable
CREATE TABLE "on_ramp_transaction" (
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

    CONSTRAINT "on_ramp_transaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "on_ramp_transaction_userId_idempotencyKey_key" ON "on_ramp_transaction"("userId", "idempotencyKey");

-- CreateIndex
CREATE UNIQUE INDEX "on_ramp_transaction_provider_providerTransactionId_key" ON "on_ramp_transaction"("provider", "providerTransactionId");

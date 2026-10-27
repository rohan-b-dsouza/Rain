/*
  Warnings:

  - You are about to drop the `on_ramp_transaction` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "on_ramp_transaction";

-- CreateTable
CREATE TABLE "OnRampTransaction" (
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

    CONSTRAINT "OnRampTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OnRampTransaction_userId_idempotencyKey_key" ON "OnRampTransaction"("userId", "idempotencyKey");

-- CreateIndex
CREATE UNIQUE INDEX "OnRampTransaction_provider_providerTransactionId_key" ON "OnRampTransaction"("provider", "providerTransactionId");

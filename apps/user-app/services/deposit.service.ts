import { prisma } from "@rain/db";
import { depositInput } from "../validations/deposit.validate";

const isUniqueConstraintError = (error: unknown) =>
  typeof error === "object" &&
  error !== null &&
  "code" in error &&
  error.code === "P2002";

export const deposit = async (
  parsedBody: depositInput,
  userId: string,
  idempotencyKey: string,
) => {
  const { amount, provider } = parsedBody;
  const where = {
    userId_idempotencyKey: {
      userId,
      idempotencyKey,
    },
  };

  try {
    const transaction = await prisma.onRampTransaction.create({
      data: {
        userId,
        amount,
        provider,
        idempotencyKey,
      },
    });

    return { transaction, created: true, conflict: false as const };
  } catch (error) {
    if (!isUniqueConstraintError(error)) {
      throw error;
    }

    const existingTransaction = await prisma.onRampTransaction.findUnique({
      where,
    });

    if (!existingTransaction) {
      throw error;
    }

    if (
      existingTransaction.amount !== amount ||
      existingTransaction.provider !== provider
    ) {
      return { conflict: true as const };
    }

    return {
      transaction: existingTransaction,
      created: false,
      conflict: false as const,
    };
  }
};

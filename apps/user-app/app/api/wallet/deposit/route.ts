import { auth } from "@/lib/auth";
import { deposit } from "../../../../services/deposit.service";
import { depositValidate } from "../../../../validations/deposit.validate";
import { headers } from "next/headers";
import z from "zod";

export const POST = async (request: Request) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return Response.json(
      { error: "Unauthorized. Please sign in." },
      { status: 401 },
    );
  }

  const idempotencyKey = request.headers.get("Idempotency-Key")?.trim();
  if (!idempotencyKey || idempotencyKey.length > 255) {
    return Response.json(
      { error: "A valid Idempotency-Key header is required." },
      { status: 400 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Request body must be valid JSON." }, { status: 400 });
  }

  const parsedBody = depositValidate.safeParse(body);
  if (!parsedBody.success) {
    return Response.json(
      { error: z.flattenError(parsedBody.error).fieldErrors },
      { status: 400 },
    );
  }

  try {
    const result = await deposit(
      parsedBody.data,
      session.user.id,
      idempotencyKey,
    );

    if (result.conflict) {
      return Response.json(
        { error: "This idempotency key was already used for a different deposit." },
        { status: 409 },
      );
    }

    return Response.json(
      {
        result: {
          ...result.transaction,
          amount: result.transaction.amount.toString(),
        },
        replayed: !result.created,
      },
      { status: result.created ? 201 : 200 },
    );
  } catch (error) {
    return Response.json(
      { error: "Unable to create deposit. Please try again." },
      { status: 500 },
    );
  }
};

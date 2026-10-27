import { depositSchema } from "../../../../schemas/deposit.schema";
import { deposit } from "../../../../services/deposit.service";
import { auth } from "@/lib/auth";
import { headers } from "next/headers"; 
import z from "zod";

export const POST = async (request: Request) => {

const session = await auth.api.getSession({
	headers: await headers() // headers containing the user's session token
});

if (session) {
	// Access user and session data
	console.log(session.user);
	console.log(session.session);
}
  const body = await request.json();
  const parsedBody = depositSchema.safeParse(body);
  if (!parsedBody.success) {
    return Response.json(
      { error: z.flattenError(parsedBody.error) },
      { status: 400 },
    );
  }
  const result = await deposit(
    parsedBody.data
  );
};

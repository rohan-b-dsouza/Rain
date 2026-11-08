import z from "zod";

export const depositValidate = z.object({
    amount: z.string().trim().refine((amount)=> /^[0-9]+$/.test(amount) && BigInt(amount) > 0n, "Enter a positive amount.").transform(BigInt),
    provider: z.enum(["SBI", "HDFC", "ICICI"])
});

export type depositInput = z.infer<typeof depositValidate>;
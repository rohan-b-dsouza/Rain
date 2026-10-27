import z from "zod";

export const depositSchema = z.object({
    amount: z.string().regex(/^[0-9]+$/).transform(BigInt).refine((amount)=> amount > 0n),
    provider: z.enum(["SBI", "HDFC", "ICICI"])
});

export type depositInput = z.infer<typeof depositSchema>;


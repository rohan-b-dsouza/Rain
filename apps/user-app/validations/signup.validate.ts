import z from "zod";

export const signupValidate = z.object({
  firstName: z
    .string()
    .trim()
    .refine(
      (firstName) => firstName.length > 0 && firstName.length <= 50,
      "Enter a first name (max 50 characters).",
    ),
  lastName: z
    .string()
    .trim()
    .refine(
      (lastName) => lastName.length > 0 && lastName.length <= 50,
      "Enter a last name (max 50 characters).",
    ),
  email: z
    .string()
    .trim()
    .refine(
      (email) => email.length > 0 && z.email().safeParse(email).success,
      "Enter a valid email address.",
    ),
  password: z
    .string()
    .refine(
      (password) =>
        password.length >= 8 &&
        password.length <= 128 &&
        /[a-zA-Z]/.test(password) &&
        /[0-9]/.test(password) &&
        /[^a-zA-Z0-9]/.test(password),
      "Use 8–128 characters, including a letter, number & symbol.",
    ),
});

export type signupType = z.input<typeof signupValidate>;

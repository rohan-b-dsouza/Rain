"use client";
import { authClient } from "@/lib/auth-client";
import { signupType, signupValidate } from "@/validations/signup.validate";
import { Apple, Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import z from "zod";

const inputClass =
  "h-12 w-full rounded-xl border border-border bg-surface px-3.5 text-[15px] text-foreground outline-none transition placeholder:text-muted/70 focus:border-primary focus:ring-4 focus:ring-primary-tint";

type SignupErrors = {
  firstName?: string[];
  lastName?:  string[];
  email?:  string[];
  password?:  string[];
};

const renderErrors = (messages?: string[]) =>
  messages?.[0] ? (
    <p role="alert" className="whitespace-nowrap text-[10px] leading-tight text-red-600">
      {messages[0]}
    </p>
  ) : null;

export default function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<SignupErrors>({});
  const [betterAuthError, setBetterAuthError] = useState("");
  const [loading, setLoading] = useState(false);
  const [eye, setEye] = useState(true);

  const router = useRouter();

  const signupWithEmail = async ({
    firstName,
    lastName,
    email,
    password,
  }: signupType) => {
    const parsedData = signupValidate.safeParse({
      firstName,
      lastName,
      email,
      password,
    });
    if (!parsedData.success) {
      const errors = z.flattenError(parsedData.error).fieldErrors;
      setErrors(errors);
      setBetterAuthError("");
    } else {
      const result = parsedData.data;
      const name = `${result.firstName} ${result.lastName}`;
      const { data, error } = await authClient.signUp.email(
        {
          email: result.email,
          password: result.password,
          name,
        },
        {
          onRequest: (ctx) => {
            setLoading(true);
          },
          onSuccess: (ctx) => {
            router.push("/signin");
          },
          onError: (ctx) => {
            setBetterAuthError(ctx.error.message);
          },
        },
      );
    }
  };

  const signupWithGoogle = async ()=> {
    await authClient.signIn.social({
    provider: "google",
    callbackURL: "/dashboard", 
    errorCallbackURL: "/signup",
    disableRedirect: false,
});
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-3">
        <button
          type="button"
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-surface text-sm font-semibold text-foreground transition hover:bg-background cursor-pointer"
          onClick={()=> signupWithGoogle()}
        >
          <span
            className="font-bold text-base text-[#4285F4]"
            aria-hidden="true"
          >
            G
          </span>{" "}
          Continue with Google
        </button>
      </div>

      <div className="flex items-center gap-3 text-[13px] text-muted">
        <span className="h-px flex-1 bg-border" />
        or with email
        <span className="h-px flex-1 bg-border" />
      </div>

      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="signup-first-name"
              className="text-[13px] font-semibold"
            >
              First Name
            </label>
            <input
              id="signup-first-name"
              name="firstName"
              autoComplete="given-name"
              placeholder="First name"
              className={inputClass}
              aria-invalid={Boolean(errors.firstName?.length)}
              onChange={(e) => {
                setFirstName(e.target.value);
                setErrors((current) => ({ ...current, firstName: undefined }));
              }}
            />
            {renderErrors(errors.firstName)}
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="signup-last-name"
              className="text-[13px] font-semibold"
            >
              Last Name
            </label>
            <input
              id="signup-last-name"
              name="lastName"
              autoComplete="family-name"
              placeholder="Last name"
              className={inputClass}
              aria-invalid={Boolean(errors.lastName?.length)}
              onChange={(e) => {
                setLastName(e.target.value);
                setErrors((current) => ({ ...current, lastName: undefined }));
              }}
            />
            {renderErrors(errors.lastName)}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="signup-email" className="text-[13px] font-semibold">
            Email
          </label>
          <input
            id="signup-email"
            name="email"
            type="email"
            placeholder="you@example.com"
            className={`${inputClass} border-[1.5px] border-primary ring-4 ring-primary-tint`}
            aria-invalid={Boolean(errors.email?.length)}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors((current) => ({ ...current, email: undefined }));
            }}
          />
          {renderErrors(errors.email)}
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="signup-password"
            className="text-[13px] font-semibold"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="signup-password"
              name="password"
              type={eye ? "password" : ""}
              placeholder="At least 8 characters"
              className={`${inputClass} pr-12`}
              aria-invalid={Boolean(errors.password?.length)}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors((current) => ({ ...current, password: undefined }));
              }}
            />
            <span
              className="absolute right-1 top-1 flex size-10 items-center justify-center text-muted"
              onClick={() => setEye((eye) => !eye)}
            >
              <Eye size={19} aria-hidden="true" className="cursor-pointer" />
            </span>
          </div>
          {renderErrors(errors.password)}
        </div>
      </div>

      <label className="flex items-start gap-3 text-sm leading-relaxed text-muted">
        <input
          type="checkbox"
          className="mt-0.5 size-4 shrink-0 accent-primary cursor-pointer"
        />
        <span>
          I agree to the{" "}
          <a
            href="#terms"
            className="font-semibold text-primary-foreground hover:underline"
          >
            Terms
          </a>{" "}
          and{" "}
          <a
            href="#privacy"
            className="font-semibold text-primary-foreground hover:underline"
          >
            Privacy Policy
          </a>
          .
        </span>
      </label>

      <button
        type="button"
        className="flex h-13 items-center justify-center rounded-[14px] bg-primary px-5 text-base font-semibold text-surface transition hover:bg-primary-foreground cursor-pointer"
        onClick={() => {
          signupWithEmail({ firstName, lastName, email, password });
        }}
      >
        Create account
      </button>

      {betterAuthError ? <p role="alert" className="text-center text-sm text-red-600">{betterAuthError}</p> : null}

      <p className="text-center text-sm text-muted">
        Already have an account?{" "}
        <a
          href="/signin"
          className="font-semibold text-primary-foreground hover:underline"
        >
          Sign in
        </a>
      </p>
    </div>
  );
}

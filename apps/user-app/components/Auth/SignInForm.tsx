"use client";
import { authClient } from "@/lib/auth-client";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const inputClass =
  "h-12 w-full rounded-xl border border-border bg-surface px-3.5 text-[15px] text-foreground outline-none transition placeholder:text-muted/70 focus:border-primary focus:ring-4 focus:ring-primary-tint";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [eye, setEye] = useState(true);
  const router = useRouter();

  const signinWithEmail = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    if (!email.trim() || !password) {
      setError("Enter your email and password.");
      return;
    }

    setError("");
    await authClient.signIn.email(
      {
        email: email.trim(),
        password,
        rememberMe,
      },
      {
        onRequest: () => {
          setLoading(true);
        },
        onSuccess: () => {
          router.push("/dashboard");
        },
        onError: (ctx) => {
          setLoading(false);
          setError(ctx.error.message);
        },
      },
    );
  };

  const signinWithGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/dashboard",
      errorCallbackURL: "/signin",
    });
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="signin-email" className="text-[13px] font-semibold">Email</label>
          <input
            id="signin-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClass}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <label htmlFor="signin-password" className="text-[13px] font-semibold">Password</label>
            <a href="#forgot-password" className="text-[13px] font-semibold text-primary-foreground hover:underline">
              Forgot password?
            </a>
          </div>
          <div className="relative">
            <input
              id="signin-password"
              name="password"
              type={eye ? "password" : "text"}
              autoComplete="current-password"
              placeholder="Your password"
              className={`${inputClass} pr-12`}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button
              type="button"
              aria-label={eye ? "Show password" : "Hide password"}
              className="absolute right-1 top-1 flex size-10 items-center justify-center text-muted"
              onClick={() => setEye((eye) => !eye)}
            >
              {eye ? <Eye size={19} aria-hidden="true" /> : <EyeOff size={19} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      <label className="flex items-center gap-3 text-sm text-muted">
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={(event) => setRememberMe(event.target.checked)}
          className="size-4 shrink-0 accent-primary"
        />
        Keep me signed in on this device
      </label>

      {error ? <p role="alert" className="text-sm text-red-600">{error}</p> : null}

      <button
        type="button"
        disabled={loading}
        className="flex h-13 items-center justify-center rounded-[14px] bg-primary px-5 text-base font-semibold text-surface transition hover:bg-primary-foreground disabled:opacity-60"
        onClick={() => signinWithEmail({ email, password })}
      >
        {loading ? "Signing in..." : "Sign in"}
      </button>

      <div className="flex items-center gap-3 text-[13px] text-muted">
        <span className="h-px flex-1 bg-border" />or<span className="h-px flex-1 bg-border" />
      </div>

      <button
        type="button"
        className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-border bg-surface text-sm font-semibold text-foreground transition hover:bg-background"
        onClick={() => signinWithGoogle()}
      >
        <span className="font-bold text-base text-[#4285F4]" aria-hidden="true">G</span>
        Continue with Google
      </button>

      <p className="text-center text-sm text-muted">
        New to Rain?{" "}
        <a href="/signup" className="font-semibold text-primary-foreground hover:underline">Create an account</a>
      </p>
    </div>
  );
}

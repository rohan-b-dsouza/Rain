import SignInForm from "@/components/Auth/SignInForm";
import SignupShowcase from "@/components/Auth/SignupShowcase";

export default function SignIn() {
  return (
    <main className="grid min-h-screen bg-surface text-foreground lg:grid-cols-2">
      <section className="flex min-h-screen flex-col justify-between gap-10 px-6 py-7 sm:px-12 sm:py-10 lg:px-14 xl:px-20">
        <a href="/" className="flex w-fit items-center gap-2.5" aria-label="Rain home">
          <span className="flex size-8 items-center justify-center rounded-[10px] bg-primary">
            <svg width="20" height="20" viewBox="5 4 22 22" fill="none" aria-hidden="true">
              <path transform="rotate(14 16 16)" fill="#FFFFFF" fillRule="evenodd" d="M16 5.5C16 5.5 22.5 12.6 22.5 17.4A6.5 6.5 0 0 1 9.5 17.4C9.5 12.6 16 5.5 16 5.5ZM13.2 17.6a2.8 2.8 0 1 0 5.6 0a2.8 2.8 0 1 0-5.6 0Z" />
            </svg>
          </span>
          <span className="text-[21px] font-bold tracking-tight">Rain</span>
        </a>

        <div className="mx-auto w-full max-w-105 py-4">
          <div className="mb-7">
            <h1 className="text-3xl font-bold tracking-tight sm:text-[32px]">Welcome back</h1>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">
              Sign in to see your balance and recent activity.
            </p>
          </div>
          <SignInForm />
        </div>

        <p className="text-center text-[13px] text-muted">© 2026 Rain. All rights reserved.</p>
      </section>
      <SignupShowcase />
    </main>
  );
}

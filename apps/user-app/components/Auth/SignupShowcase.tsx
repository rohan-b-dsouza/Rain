import { ArrowDownLeft, WalletCards } from "lucide-react";

export default function SignupShowcase() {
  return (
    <aside className="relative hidden min-h-screen items-center justify-center overflow-hidden bg-[#0d1321] px-10 py-16 text-white lg:flex xl:px-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_15%,rgba(79,70,229,0.2),transparent_42%)]" />

      <div className="relative z-10 w-full max-w-110">
        <div className="mb-10">
          <p className="mb-4 text-sm font-medium text-indigo-300">Everyday money, made simple</p>
          <h2 className="max-w-100 text-4xl font-semibold leading-[1.12] tracking-[-0.035em] xl:text-[42px]">
            Your money, in one calm place.
          </h2>
          <p className="mt-4 max-w-97.5 text-base leading-relaxed text-slate-300">
            From your first top-up to splitting dinner, keep every move simple and clear.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/12 bg-white/6 p-6 sm:p-7">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-indigo-400/15 text-indigo-200">
                <WalletCards size={19} aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-medium text-slate-300">RAIN WALLET</p>
                <p className="mt-0.5 text-sm font-medium">Everyday balance</p>
              </div>
            </div>
            <span className="size-2 rounded-full bg-emerald-400" aria-label="Wallet active" />
          </div>

          <div className="mt-7">
            <p className="text-sm text-slate-300">Available balance</p>
            <p className="mt-1 text-[40px] font-semibold tracking-[-0.045em]">₹1,543.00</p>
          </div>

          <div className="mt-5 h-22 border-b border-white/10 pb-3">
            <svg viewBox="0 0 420 72" className="h-full w-full" preserveAspectRatio="none" aria-label="Balance trend" role="img">
              <path d="M1 57 C35 53 45 58 70 46 S108 51 133 39 S167 45 194 31 S231 37 255 25 S291 36 316 20 S354 29 379 13 S405 16 419 7" fill="none" stroke="#a5b4fc" strokeWidth="2" strokeLinecap="round" />
              <circle cx="419" cy="7" r="3.5" fill="#c7d2fe" />
            </svg>
          </div>

          <div className="flex items-center justify-between gap-4 pt-5">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#f5dfd4] text-xs font-semibold text-[#713c2c]">MC</span>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">Maya Chen</p>
                <p className="mt-0.5 text-xs text-slate-400">Dinner split · 10:42 AM</p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-1.5 text-sm font-medium text-emerald-300">
              <ArrowDownLeft size={15} aria-hidden="true" /> +₹240.00
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-slate-400">Secure by default. Clear at every step.</p>
      </div>
    </aside>
  );
}

import { SplittingText } from "@/components/Hero/SplittingText";
import { TextGenerateEffect } from "@/components/Hero/TextGenerateEffect";
import ShortTagline from "@/components/ShortTagline";

export default function Hero() {
  return (
    <section className="flex flex-wrap items-center gap-12 pb-24 pt-20 lg:gap-14">
    <div className="flex max-w-xl flex-1 basis-120 flex-col items-start gap-7">
      <ShortTagline />
      <h1 className="text-4xl font-bold leading-tight tracking-[-0.035em] sm:text-[64px] sm:leading-[1.04]">
        <SplittingText
          duration={700}
          by="words"
          stagger={130}
          text="Send, save and spend, without the friction."
        />
      </h1>
      <p className="text-muted text-md sm:text-xl">
        <TextGenerateEffect
          duration={600}
          stagger={50}
          text="Rain puts your balance, transfers and friends in one calm place. Pay someone in seconds, move money to your bank, and see every transaction clearly."
        />
      </p>
      <div className="flex gap-2">
        <a href="/signup" className="rounded-control border border-border bg-primary px-5 py-3 text-sm font-semibold text-surface shadow-xs sm:text-base">Create free account</a>
        <a href="#howitworks" className="rounded-control border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground sm:text-base">See how it works</a>
      </div>
      <div className="flex flex-row gap-3 text-muted font-medium">
        <div className="flex gap-1 items-center">
          <svg 
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0B7A4B"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
          Free to get started
        </div>
        <div className="flex gap-1 items-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0B7A4B"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
          <div>Instant transfers</div>
        </div>
        <div className="flex gap-1 items-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0B7A4B"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
          Secure sign-in
        </div>
      </div>
    </div>
    <div className="relative min-h-135 flex-1 basis-110" aria-label="Wallet preview">
      <div className="absolute left-0 top-0 w-[min(400px,88%)] overflow-hidden rounded-[28px] bg-foreground p-7 text-surface shadow-2xl shadow-foreground/20">
        <svg className="absolute -right-20 -top-20" width="240" height="240" viewBox="0 0 260 260" fill="none" aria-hidden="true"><circle cx="130" cy="130" r="40" stroke="rgba(255,255,255,0.10)"/><circle cx="130" cy="130" r="80" stroke="rgba(255,255,255,0.08)"/><circle cx="130" cy="130" r="120" stroke="rgba(255,255,255,0.06)"/></svg>
        <div className="relative flex items-center justify-between text-sm font-medium text-slate-300"><span>Total balance</span><span className="rounded-full bg-white/10 px-3 py-1 text-xs text-surface">Rain Wallet</span></div>
        <div className="relative mt-3 text-4xl font-bold tracking-tight">₹12,480.50</div>
        <div className="relative mt-7 flex gap-2 text-center text-sm font-semibold">
          <span className="flex-1 rounded-xl bg-surface py-3 text-foreground">Send</span>
          <span className="flex-1 rounded-xl bg-white/10 py-3">Add money</span>
          <span className="flex-1 rounded-xl bg-white/10 py-3">Request</span>
        </div>
      </div>
      <div className="absolute right-0 top-62.5 w-[min(320px,82%)] rounded-[22px] border border-border bg-surface p-5 shadow-xl shadow-foreground/10">
        <div className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-800">DO</span>
          <div className="min-w-0 flex-1"><p className="text-sm font-semibold">Daniel Okafor</p><p className="text-[13px] text-muted">Dinner split</p></div>
          <span className="text-sm font-semibold">-₹48.00</span>
        </div>
        <div className="mt-4 flex items-center gap-2 rounded-lg bg-success px-3 py-2 text-[13px] font-semibold text-success-foreground">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>Payment successful
        </div>
      </div>
      <div className="absolute bottom-0 left-9 flex w-[min(300px,80%)] items-center gap-4 rounded-[22px] border border-border bg-surface p-5 shadow-xl shadow-foreground/10">
        <span className="flex size-11 items-center justify-center rounded-xl bg-success text-success-foreground"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 7 7 17M17 17H7V7"/></svg></span>
        <div><p className="text-[13px] text-muted">Maya Chen paid you</p><p className="text-xl font-bold tracking-tight">+₹240.00</p></div>
      </div>
    </div>
    </section>
  );
}

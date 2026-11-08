export default function SecurityCTA() {
  return (
    <section id="security" className="mx-auto max-w-7xl scroll-mt-8 px-6 py-20 sm:px-16 sm:py-24">
      <div className="flex flex-col items-center gap-5 rounded-4xl border border-border bg-surface px-6 py-14 text-center sm:px-10">
        <span className="flex size-14 items-center justify-center rounded-2xl bg-primary-tint text-primary">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
        </span>
        <h2 className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">Open your wallet in minutes.</h2>
        <p className="max-w-lg text-[17px] leading-relaxed text-muted">Two-factor sign in, instant alerts on every payment and full control over your limits.</p>
        <a href="/signup" className="mt-2 rounded-control bg-primary px-7 py-4 font-semibold text-surface">Create free account</a>
      </div>
    </section>
  );
}

export default function Features() {
    return (
        <section id="features" className="pt-16 pb-20 scroll-mt-8">
            <div className="mb-10 max-w-2xl">
                <p className="mb-3 font-semibold text-primary">Features</p>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Everything you need, nothing you don&apos;t.</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
                <article className="rounded-2xl border border-border bg-surface p-7">
                    <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary-tint text-primary">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">Instant P2P</h3>
                    <p className="text-[15px] leading-relaxed text-muted">Pick a friend, type an amount, add a note. Money lands in seconds, and requests are just as easy.</p>
                </article>
                <article className="rounded-2xl border border-border bg-surface p-7">
                    <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary-tint text-primary">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 22h18M6 18v-7m4 7v-7m4 7v-7m4 7v-7M12 2 3 7h18z"/></svg>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">Bank transfers</h3>
                    <p className="text-[15px] leading-relaxed text-muted">Move money to saved beneficiaries or your own accounts. Choose standard or instant, and see fees before you confirm.</p>
                </article>
                <article className="rounded-2xl border border-border bg-surface p-7">
                    <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary-tint text-primary">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">Clear history</h3>
                    <p className="text-[15px] leading-relaxed text-muted">Search, filter and export every transaction. Statuses are plain, amounts are bold, nothing is hidden.</p>
                </article>
            </div>
        </section>
    )
}

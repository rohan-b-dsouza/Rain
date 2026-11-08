const steps = [
  { number: "01", title: "Create your wallet", description: "Sign up with your email and verify your identity once." },
  { number: "02", title: "Add money", description: "Link a bank account or card and top up your balance." },
  { number: "03", title: "Send anywhere", description: "Pay friends instantly or transfer to any saved account." },
];

export default function HowItWorks() {
  return (
    <section id="howitworks" className="scroll-mt-8 bg-foreground text-surface">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-16 sm:py-22">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 font-semibold text-indigo-300">How it works</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Up and running in three steps.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.number} className="rounded-2xl border border-white/15 p-7">
              <p className="mb-10 text-sm font-semibold text-indigo-300">{step.number}</p>
              <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
              <p className="text-[15px] leading-relaxed text-slate-300">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

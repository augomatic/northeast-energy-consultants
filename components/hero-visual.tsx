import { SurfaceCard } from "./ui";

const marketSnapshot = [
  { abbreviation: "MA", state: "Massachusetts", price: 20.9 },
  { abbreviation: "CT", state: "Connecticut", price: 21.2 },
  { abbreviation: "RI", state: "Rhode Island", price: 21.1 },
  { abbreviation: "NY", state: "New York", price: 18.0 },
  { abbreviation: "NH", state: "New Hampshire", price: 19.4 },
  { abbreviation: "ME", state: "Maine", price: 18.2 }
] as const;

const reviewSteps = [
  {
    title: "Bill Review",
    description:
      "Review usage, demand, current supplier, and utility charges."
  },
  {
    title: "Supplier Comparison",
    description:
      "Compare available supplier options in deregulated markets."
  },
  {
    title: "Contract Evaluation",
    description:
      "Evaluate term length, fixed vs. variable pricing, fees, and renewal language."
  },
  {
    title: "Recommendation",
    description:
      "Present clear options so the business can choose the best fit."
  }
] as const;

const highestPrice = Math.max(...marketSnapshot.map((item) => item.price));

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[35.75rem] lg:max-w-[38.5rem] lg:pl-4 xl:max-w-[41rem]">
      <div className="pulse-soft pointer-events-none absolute left-4 top-8 h-28 w-28 rounded-full bg-[rgba(33,147,255,0.24)] blur-3xl sm:left-12 sm:top-10 sm:h-40 sm:w-40" />
      <div className="pulse-soft pointer-events-none absolute bottom-0 right-2 h-32 w-32 rounded-full bg-[rgba(15,107,255,0.2)] blur-3xl sm:bottom-2 sm:right-6 sm:h-48 sm:w-48" />

      <SurfaceCard className="hero-float panel-grid relative border-[rgba(145,181,255,0.15)] bg-[linear-gradient(180deg,rgba(11,21,37,0.9),rgba(7,15,28,0.82))] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.34)] hover:translate-y-0 sm:p-6">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(33,147,255,0.14),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />
        <div className="relative">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:gap-4">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--color-muted)]">
                Market Review Dashboard
              </p>
              <h2 className="mt-2 font-[var(--font-display)] text-[1.45rem] font-semibold tracking-[-0.03em] text-white sm:mt-3 sm:text-[1.9rem]">
                Northeast Market Snapshot
              </h2>
            </div>
            <div className="w-fit rounded-full border border-[rgba(255,255,255,0.08)] bg-white/[0.06] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-primary)] sm:tracking-[0.24em]">
              6 Northeast markets
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1.28fr)_minmax(18rem,0.9fr)] xl:grid-cols-[minmax(0,1.35fr)_minmax(19rem,0.92fr)]">
            <div className="rounded-[1.5rem] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(10,24,44,0.9),rgba(7,17,31,0.9))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-5">
              <div className="flex flex-col gap-1 text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)] sm:tracking-[0.24em]">
                <span>Commercial Rate</span>
              </div>
              <div className="mt-5 space-y-3 sm:mt-6">
                {marketSnapshot.map((item) => (
                  <div
                    key={item.abbreviation}
                    className="rounded-[1.2rem] border border-white/[0.06] bg-white/[0.04] px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:px-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[rgba(33,147,255,0.24)] bg-[rgba(33,147,255,0.12)] text-[11px] font-semibold text-[var(--color-primary)] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                        {item.abbreviation}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[13px] font-medium text-white sm:text-sm">
                          {item.state}
                        </p>
                        <p className="mt-1.5 text-sm font-semibold text-white sm:text-[15px]">
                          {item.price.toFixed(1)} cents/kWh
                        </p>
                        <div className="mt-3 h-2 rounded-full bg-white/[0.08]">
                          <div
                            className="h-full rounded-full bg-[linear-gradient(90deg,var(--color-primary),#8aceff)] shadow-[0_0_18px_rgba(33,147,255,0.35)]"
                            style={{
                              width: `${(item.price / highestPrice) * 100}%`
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 border-t border-white/[0.08] pt-4">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  Source: U.S. Energy Information Administration
                </p>
                <p className="mt-2 text-[12px] leading-5 text-[var(--color-muted)]">
                  Benchmark commercial electricity averages. Actual supplier
                  pricing varies by utility territory, usage profile, term
                  length, and contract structure.
                </p>
              </div>
            </div>

            <div className="relative rounded-[1.5rem] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(10,24,44,0.9),rgba(7,17,31,0.9))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(33,147,255,0.18),transparent_58%)]" />
              <div className="relative">
                <p className="relative text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  Review Flow
                </p>
                <h3 className="mt-3 font-[var(--font-display)] text-[1.3rem] font-semibold tracking-[-0.03em] text-white sm:text-[1.5rem]">
                  A practical four-step commercial review.
                </h3>
                <p className="mt-2 text-[13px] leading-6 text-[var(--color-muted)] sm:text-sm">
                  Each review is grounded in utility territory, usage profile,
                  renewal timing, and contract structure.
                </p>
                <div className="mt-5 space-y-3 sm:mt-6">
                  {reviewSteps.map((step, index) => (
                    <div
                      key={step.title}
                      className="relative rounded-[1.25rem] border border-white/[0.08] bg-white/[0.05] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                    >
                      <div className="absolute inset-y-4 left-0 w-px bg-[linear-gradient(180deg,transparent,rgba(33,147,255,0.55),transparent)]" />
                      <div className="flex items-start gap-3">
                        <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[rgba(33,147,255,0.24)] bg-[rgba(33,147,255,0.12)] text-sm font-semibold text-[var(--color-primary)] shadow-[0_0_22px_rgba(33,147,255,0.16)]">
                          {index + 1}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm font-semibold leading-5 text-white sm:text-[15px]">
                            {step.title}
                          </h4>
                          <p className="mt-1.5 text-[13px] leading-6 text-[var(--color-muted)]">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SurfaceCard>
    </div>
  );
}

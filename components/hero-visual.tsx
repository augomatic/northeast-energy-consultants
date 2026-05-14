import { SurfaceCard } from "./ui";

const coverageBars = [
  { abbreviation: "MA", label: "Massachusetts", width: "88%" },
  { abbreviation: "CT", label: "Connecticut", width: "80%" },
  { abbreviation: "RI", label: "Rhode Island", width: "72%" },
  { abbreviation: "NY", label: "New York", width: "92%" },
  { abbreviation: "NH", label: "New Hampshire", width: "68%" },
  { abbreviation: "ME", label: "Maine", width: "64%" }
] as const;

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[35.75rem] lg:pl-4">
      <div className="pulse-soft pointer-events-none absolute left-12 top-10 h-40 w-40 rounded-full bg-[rgba(33,147,255,0.24)] blur-3xl" />
      <div className="pulse-soft pointer-events-none absolute bottom-2 right-6 h-48 w-48 rounded-full bg-[rgba(15,107,255,0.2)] blur-3xl" />

      <SurfaceCard className="hero-float panel-grid relative border-[rgba(145,181,255,0.15)] bg-[linear-gradient(180deg,rgba(11,21,37,0.9),rgba(7,15,28,0.82))] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.34)] hover:translate-y-0 sm:p-6">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(33,147,255,0.14),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />
        <div className="relative">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--color-muted)]">
                Market Review Dashboard
              </p>
              <h2 className="mt-3 font-[var(--font-display)] text-[1.9rem] font-semibold tracking-[-0.03em] text-white">
                Regional energy sourcing
              </h2>
            </div>
            <div className="rounded-full border border-[rgba(255,255,255,0.08)] bg-white/[0.06] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-[var(--color-primary)]">
              6 active states
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[1.5rem] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(10,24,44,0.9),rgba(7,17,31,0.9))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">
                <span>Supplier comparison coverage</span>
                <span>Live review</span>
              </div>
              <div className="mt-6 space-y-4">
                {coverageBars.map((item) => (
                  <div
                    key={item.abbreviation}
                    className="grid grid-cols-[auto_1fr] items-center gap-3"
                  >
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[rgba(33,147,255,0.24)] bg-[rgba(33,147,255,0.12)] text-[11px] font-semibold text-[var(--color-primary)] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                      {item.abbreviation}
                    </div>
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-sm font-medium text-white">
                          {item.label}
                        </span>
                        <span className="text-xs text-[var(--color-muted)]">
                          {item.width}
                        </span>
                      </div>
                      <div className="mt-2 h-2 rounded-full bg-white/[0.08]">
                        <div
                          className="h-full rounded-full bg-[linear-gradient(90deg,var(--color-primary),#8aceff)] shadow-[0_0_18px_rgba(33,147,255,0.35)]"
                          style={{ width: item.width }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="relative overflow-hidden rounded-[1.5rem] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(10,24,44,0.9),rgba(7,17,31,0.9))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(33,147,255,0.18),transparent_58%)]" />
                <p className="relative text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  Review Flow
                </p>
                <div className="relative mt-6 flex items-center justify-center py-8">
                  <div className="absolute h-44 w-44 rounded-full border border-[rgba(33,147,255,0.18)]" />
                  <div className="absolute h-32 w-32 rounded-full border border-white/[0.1]" />
                  <div className="absolute left-1/2 top-7 h-px w-24 -translate-x-1/2 bg-[linear-gradient(90deg,transparent,rgba(33,147,255,0.55),transparent)]" />
                  <div className="absolute bottom-7 left-1/2 h-px w-24 -translate-x-1/2 bg-[linear-gradient(90deg,transparent,rgba(33,147,255,0.55),transparent)]" />
                  <div className="absolute left-7 top-1/2 h-24 w-px -translate-y-1/2 bg-[linear-gradient(180deg,transparent,rgba(33,147,255,0.55),transparent)]" />
                  <div className="absolute right-7 top-1/2 h-24 w-px -translate-y-1/2 bg-[linear-gradient(180deg,transparent,rgba(33,147,255,0.55),transparent)]" />
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[rgba(33,147,255,0.24)] bg-[linear-gradient(180deg,rgba(33,147,255,0.18),rgba(255,255,255,0.04))] text-center text-sm font-semibold text-white shadow-[0_0_32px_rgba(33,147,255,0.24)]">
                    Contract
                    <br />
                    fit
                  </div>
                  <div className="absolute left-1/2 top-1 translate-x-10 rounded-full border border-white/[0.1] bg-white/[0.06] px-3 py-1 text-[11px] text-[var(--color-muted)]">
                    Usage
                  </div>
                  <div className="absolute bottom-1 left-1/2 -translate-x-16 rounded-full border border-white/[0.1] bg-white/[0.06] px-3 py-1 text-[11px] text-[var(--color-muted)]">
                    Rates
                  </div>
                  <div className="absolute left-1 top-1/2 -translate-y-12 rounded-full border border-white/[0.1] bg-white/[0.06] px-3 py-1 text-[11px] text-[var(--color-muted)]">
                    Bill
                  </div>
                  <div className="absolute right-1 top-1/2 translate-y-10 rounded-full border border-white/[0.1] bg-white/[0.06] px-3 py-1 text-[11px] text-[var(--color-muted)]">
                    Terms
                  </div>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(10,24,44,0.9),rgba(7,17,31,0.9))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  Process Snapshot
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex-1 rounded-2xl border border-white/[0.08] bg-white/[0.05] px-3 py-3 text-center text-xs font-medium text-white">
                    Bill
                  </div>
                  <div className="h-px flex-1 bg-[linear-gradient(90deg,rgba(33,147,255,0.12),rgba(33,147,255,0.66),rgba(33,147,255,0.12))]" />
                  <div className="flex-1 rounded-2xl border border-white/[0.08] bg-white/[0.05] px-3 py-3 text-center text-xs font-medium text-white">
                    Options
                  </div>
                  <div className="h-px flex-1 bg-[linear-gradient(90deg,rgba(33,147,255,0.12),rgba(33,147,255,0.66),rgba(33,147,255,0.12))]" />
                  <div className="flex-1 rounded-2xl border border-white/[0.08] bg-white/[0.05] px-3 py-3 text-center text-xs font-medium text-white">
                    Decision
                  </div>
                </div>
                <p className="mt-5 text-sm leading-6 text-[var(--color-muted)]">
                  Built to reflect a clean, structured review of supplier offers
                  across deregulated Northeast markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SurfaceCard>
    </div>
  );
}

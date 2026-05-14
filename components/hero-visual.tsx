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
                Regional energy sourcing
              </h2>
            </div>
            <div className="w-fit rounded-full border border-[rgba(255,255,255,0.08)] bg-white/[0.06] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-primary)] sm:tracking-[0.24em]">
              6 active states
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[1.5rem] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(10,24,44,0.9),rgba(7,17,31,0.9))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-5">
              <div className="flex flex-col gap-1 text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between sm:tracking-[0.24em]">
                <span>Supplier comparison coverage</span>
                <span>Live review</span>
              </div>
              <div className="mt-5 space-y-4 sm:mt-6">
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
                        <span className="text-[13px] font-medium text-white sm:text-sm">
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
              <div className="relative overflow-hidden rounded-[1.5rem] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(10,24,44,0.9),rgba(7,17,31,0.9))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(33,147,255,0.18),transparent_58%)]" />
                <p className="relative text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  Review Flow
                </p>
                <div className="relative mt-5 flex items-center justify-center overflow-hidden py-6 sm:mt-6 sm:py-8">
                  <div className="absolute h-36 w-36 rounded-full border border-[rgba(33,147,255,0.18)] sm:h-44 sm:w-44" />
                  <div className="absolute h-[6.5rem] w-[6.5rem] rounded-full border border-white/[0.1] sm:h-32 sm:w-32" />
                  <div className="absolute left-1/2 top-6 h-px w-[4.5rem] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,rgba(33,147,255,0.55),transparent)] sm:top-7 sm:w-24" />
                  <div className="absolute bottom-6 left-1/2 h-px w-[4.5rem] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,rgba(33,147,255,0.55),transparent)] sm:bottom-7 sm:w-24" />
                  <div className="absolute left-4 top-1/2 h-[4.5rem] w-px -translate-y-1/2 bg-[linear-gradient(180deg,transparent,rgba(33,147,255,0.55),transparent)] sm:left-7 sm:h-24" />
                  <div className="absolute right-4 top-1/2 h-[4.5rem] w-px -translate-y-1/2 bg-[linear-gradient(180deg,transparent,rgba(33,147,255,0.55),transparent)] sm:right-7 sm:h-24" />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[rgba(33,147,255,0.24)] bg-[linear-gradient(180deg,rgba(33,147,255,0.18),rgba(255,255,255,0.04))] text-center text-[13px] font-semibold text-white shadow-[0_0_32px_rgba(33,147,255,0.24)] sm:h-24 sm:w-24 sm:text-sm">
                    Contract
                    <br />
                    fit
                  </div>
                  <div className="absolute left-1/2 top-1 translate-x-5 rounded-full border border-white/[0.1] bg-white/[0.06] px-2.5 py-1 text-[10px] text-[var(--color-muted)] sm:translate-x-10 sm:px-3 sm:text-[11px]">
                    Usage
                  </div>
                  <div className="absolute bottom-1 left-1/2 -translate-x-12 rounded-full border border-white/[0.1] bg-white/[0.06] px-2.5 py-1 text-[10px] text-[var(--color-muted)] sm:-translate-x-16 sm:px-3 sm:text-[11px]">
                    Rates
                  </div>
                  <div className="absolute left-1 top-1/2 -translate-y-11 rounded-full border border-white/[0.1] bg-white/[0.06] px-2.5 py-1 text-[10px] text-[var(--color-muted)] sm:-translate-y-12 sm:px-3 sm:text-[11px]">
                    Bill
                  </div>
                  <div className="absolute right-1 top-1/2 translate-y-9 rounded-full border border-white/[0.1] bg-white/[0.06] px-2.5 py-1 text-[10px] text-[var(--color-muted)] sm:translate-y-10 sm:px-3 sm:text-[11px]">
                    Terms
                  </div>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(10,24,44,0.9),rgba(7,17,31,0.9))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-5">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  Process Snapshot
                </p>
                <div className="mt-5 grid grid-cols-3 gap-2 sm:flex sm:items-center sm:gap-3">
                  <div className="flex-1 rounded-2xl border border-white/[0.08] bg-white/[0.05] px-3 py-3 text-center text-xs font-medium text-white">
                    Bill
                  </div>
                  <div className="hidden h-px flex-1 bg-[linear-gradient(90deg,rgba(33,147,255,0.12),rgba(33,147,255,0.66),rgba(33,147,255,0.12))] sm:block" />
                  <div className="flex-1 rounded-2xl border border-white/[0.08] bg-white/[0.05] px-3 py-3 text-center text-xs font-medium text-white">
                    Options
                  </div>
                  <div className="hidden h-px flex-1 bg-[linear-gradient(90deg,rgba(33,147,255,0.12),rgba(33,147,255,0.66),rgba(33,147,255,0.12))] sm:block" />
                  <div className="flex-1 rounded-2xl border border-white/[0.08] bg-white/[0.05] px-3 py-3 text-center text-xs font-medium text-white">
                    Decision
                  </div>
                </div>
                <p className="mt-4 text-[13px] leading-6 text-[var(--color-muted)] sm:mt-5 sm:text-sm">
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

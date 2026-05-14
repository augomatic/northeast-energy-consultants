import { ContactFormSection } from "../components/contact-form-section";
import { Footer } from "../components/footer";
import { HeroVisual } from "../components/hero-visual";
import { Navbar } from "../components/navbar";
import {
  Container,
  LinkButton,
  SectionHeading,
  SurfaceCard
} from "../components/ui";

const processSteps = [
  {
    title: "Submit Your Utility Bill",
    description:
      "Send a recent electric or gas bill so we can review your account details and timing."
  },
  {
    title: "Compare Supplier Options",
    description:
      "We compare supplier offers and contract terms available in your market."
  },
  {
    title: "Choose the Best Fit",
    description:
      "You choose the offer that best fits your business, contract timing, and preferences."
  }
] as const;

const markets = [
  {
    state: "Massachusetts",
    abbreviation: "MA",
    detail: "Support for commercial accounts across major utility territories."
  },
  {
    state: "Connecticut",
    abbreviation: "CT",
    detail: "Supplier comparisons for businesses reviewing contract options."
  },
  {
    state: "Rhode Island",
    abbreviation: "RI",
    detail: "Help reviewing electricity and gas supply offers for commercial accounts."
  },
  {
    state: "New York",
    abbreviation: "NY",
    detail: "Support for businesses navigating one of the region's largest markets."
  },
  {
    state: "New Hampshire",
    abbreviation: "NH",
    detail: "Commercial supplier review support across New Hampshire territories."
  },
  {
    state: "Maine",
    abbreviation: "ME",
    detail: "Help comparing electricity supply options for Maine businesses."
  }
] as const;

const differentiators = [
  {
    title: "Personalized service",
    description:
      "You work with a responsive team that looks at your account details, renewal timing, and questions directly."
  },
  {
    title: "Supplier comparisons",
    description:
      "We help you review multiple electricity and gas supplier options side by side."
  },
  {
    title: "Transparent communication",
    description:
      "We explain pricing structure, contract terms, and next steps in plain language."
  },
  {
    title: "Technology-driven process",
    description:
      "A simple digital intake process keeps documents, follow-up, and next steps organized."
  }
] as const;

const highlights = [
  {
    value: "6",
    label: "Northeast markets",
    detail: "Coverage across the core deregulated Northeast states we serve."
  },
  {
    value: "B2B",
    label: "Commercial account focus",
    detail: "Focused on business electricity and natural gas supply reviews."
  },
  {
    value: "Fast",
    label: "Responsive process",
    detail: "A straightforward process from bill review to supplier comparison."
  }
] as const;

const trustNotes = [
  "No-obligation commercial energy review",
  "Commercial electricity and gas accounts only"
] as const;

export default function Home() {
  return (
    <div id="top" className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[40rem] bg-[radial-gradient(circle_at_top,rgba(33,147,255,0.2),transparent_58%)]" />
      <Navbar />

      <main>
        <section className="section-shell relative pb-14 pt-8 md:pb-20 md:pt-[3.5rem]">
          <Container className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_34rem] xl:grid-cols-[minmax(0,1fr)_36rem] xl:gap-12">
            <div className="max-w-[41rem]">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/[0.05] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--color-muted)] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                Commercial Energy Procurement
              </div>
              <h1 className="text-glow mt-5 max-w-[11.5ch] font-[var(--font-display)] text-[2.1rem] font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-[3.45rem] lg:text-[4.05rem]">
                <span className="block">Reduce Commercial</span>
                <span className="block">Energy Costs Across</span>
                <span className="block">the Northeast</span>
              </h1>
              <p className="mt-4 max-w-[35rem] text-[15px] leading-7 text-[var(--color-muted)] sm:mt-5 sm:text-[1.05rem]">
                We help businesses compare electricity and natural gas supplier
                options across deregulated markets in the Northeast.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <LinkButton href="#contact">Request Free Bill Review</LinkButton>
                <LinkButton href="#services" variant="secondary">
                  How It Works
                </LinkButton>
              </div>

              <div className="mt-4 flex flex-col gap-2 text-sm leading-6 text-[var(--color-muted)] sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
                {trustNotes.map((note) => (
                  <div key={note} className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] shadow-[0_0_14px_rgba(33,147,255,0.55)]" />
                    <span>{note}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                {highlights.map((item) => (
                  <SurfaceCard
                    key={item.label}
                    className="min-h-[9.25rem] border-[rgba(132,164,218,0.14)] bg-[linear-gradient(180deg,rgba(10,22,39,0.9),rgba(8,16,29,0.78))] px-4 py-4 shadow-[0_18px_44px_rgba(0,0,0,0.28)] hover:border-[rgba(90,152,255,0.28)] hover:shadow-[0_22px_54px_rgba(7,18,34,0.46)] sm:px-5 sm:py-5"
                  >
                    <div className="text-[11px] font-medium uppercase tracking-[0.26em] text-[var(--color-muted)]">
                      {item.label}
                    </div>
                    <div className="mt-3 text-[1.8rem] font-semibold leading-none text-white sm:mt-4 sm:text-[2rem]">
                      {item.value}
                    </div>
                    <div className="mt-2 text-[13px] leading-6 text-[var(--color-muted)] sm:mt-2.5 sm:text-sm">
                      {item.detail}
                    </div>
                  </SurfaceCard>
                ))}
              </div>
            </div>

            <HeroVisual />
          </Container>
        </section>

        <section id="services" className="section-shell py-20 md:py-24">
          <Container>
            <SectionHeading
              eyebrow="How It Works"
              title="A clear process for reviewing supplier options."
              description="Send a bill, review available offers, and decide what makes sense for your business."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {processSteps.map((step, index) => (
                <SurfaceCard
                  key={step.title}
                  className="group h-full px-5 py-6 sm:px-7 sm:py-8"
                >
                  <div className="flex h-full flex-col">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[rgba(33,147,255,0.28)] bg-[rgba(33,147,255,0.12)] text-sm font-semibold text-[var(--color-primary)] transition duration-300 group-hover:bg-[rgba(33,147,255,0.18)] group-hover:text-white">
                      0{index + 1}
                    </div>
                    <h3 className="mt-6 font-[var(--font-display)] text-2xl font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
                      {step.description}
                    </p>
                  </div>
                </SurfaceCard>
              ))}
            </div>
          </Container>
        </section>

        <section id="markets" className="section-shell py-20 md:py-24">
          <Container>
            <SectionHeading
              eyebrow="Markets Served"
              title="Serving deregulated energy markets across the Northeast."
              description="We work with businesses across the region in states where competitive electricity and gas supply is available."
            />

            <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {markets.map((market) => (
                <SurfaceCard key={market.state} className="px-5 py-5 sm:px-6 sm:py-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-[var(--font-display)] text-xl font-semibold text-white">
                        {market.state}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                        {market.detail}
                      </p>
                    </div>
                    <span className="inline-flex h-12 min-w-12 items-center justify-center rounded-2xl border border-[rgba(255,255,255,0.08)] bg-white/[0.05] px-3 text-sm font-semibold text-[var(--color-primary)]">
                      {market.abbreviation}
                    </span>
                  </div>
                </SurfaceCard>
              ))}
            </div>
          </Container>
        </section>

        <section className="section-shell py-20 md:py-24">
          <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Why Work With Us"
                title="Clear comparisons and direct communication."
                description="We keep the process simple, responsive, and focused on helping you review real supplier options."
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {differentiators.map((item) => (
                <SurfaceCard
                  key={item.title}
                  className="h-full px-5 py-6 sm:px-7 sm:py-7"
                >
                  <h3 className="font-[var(--font-display)] text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                    {item.description}
                  </p>
                </SurfaceCard>
              ))}
            </div>
          </Container>
        </section>

        <ContactFormSection />
      </main>

      <Footer />
    </div>
  );
}

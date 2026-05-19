import type { Metadata } from "next";
import { ContactFormSection } from "../../components/contact-form-section";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import {
  Container,
  LinkButton,
  SectionHeading,
  SurfaceCard
} from "../../components/ui";
import { SITE_NAME, SITE_URL } from "../../lib/site";

const pageTitle =
  "Massachusetts Commercial Electricity Consulting | Northeast Energy Consultants";
const pageDescription =
  "Northeast Energy Consultants helps Massachusetts businesses compare commercial electricity supplier options, review contract structures, and evaluate procurement decisions in deregulated markets.";
const pageUrl = `${SITE_URL}/massachusetts-commercial-electricity`;

const marketPoints = [
  {
    title: "Supplier choice for commercial accounts",
    description:
      "Massachusetts businesses in competitive utility territories can review third-party electricity supply options instead of staying with basic service alone."
  },
  {
    title: "Utilities still deliver power",
    description:
      "The local utility continues to deliver electricity, maintain the wires, and respond to outages even if the supply portion changes."
  },
  {
    title: "Supply pricing structures vary",
    description:
      "Commercial electricity offers can differ by term length, pricing structure, fees, renewal terms, and account usage profile."
  }
] as const;

const processSteps = [
  {
    title: "Utility Bill Review",
    description:
      "Review account history, usage patterns, demand charges, current supply arrangement, and renewal timing."
  },
  {
    title: "Supplier Comparison",
    description:
      "Compare available commercial electricity supplier options based on the business profile and utility territory."
  },
  {
    title: "Contract Evaluation",
    description:
      "Review pricing structure, fixed versus variable terms, pass-through risk, fees, and renewal language."
  },
  {
    title: "Recommendation & Enrollment",
    description:
      "Present clear options and, if the business decides to proceed, support the enrollment process."
  }
] as const;

const businessTypes = [
  "Real estate and property management",
  "Office buildings",
  "Retail businesses",
  "Warehouses and industrial facilities",
  "Restaurants and hospitality",
  "Multi-location commercial businesses"
] as const;

const rateReasons = [
  {
    title: "Budgeting stability",
    description:
      "Commercial accounts often review electricity supply options to improve cost planning and reduce budgeting uncertainty."
  },
  {
    title: "Fixed vs. variable pricing",
    description:
      "Different contract structures create different risk profiles, especially when market volatility or renewal timing matters."
  },
  {
    title: "Contract terms",
    description:
      "Length, fees, renewal clauses, and index exposure can materially affect whether an offer fits the business."
  },
  {
    title: "Operational cost management",
    description:
      "Energy procurement is one part of broader operating cost control, particularly for businesses with larger or multi-site electricity loads."
  }
] as const;

const faqs = [
  {
    question: "How does commercial electricity deregulation work in Massachusetts?",
    answer:
      "In deregulated areas of Massachusetts, businesses can choose a third-party electricity supplier for the supply portion of their bill while the utility continues delivering power and maintaining infrastructure."
  },
  {
    question: "Does switching suppliers interrupt service?",
    answer:
      "No. A supplier change does not interrupt electric service. The utility still delivers electricity and handles outages, metering, and distribution service."
  },
  {
    question: "Can businesses lock fixed rates?",
    answer:
      "Many commercial electricity contracts offer fixed-rate structures, but available pricing and contract terms vary by usage profile, utility territory, and market conditions."
  },
  {
    question: "What information is needed for pricing review?",
    answer:
      "A recent utility bill is usually the starting point. Usage history, service address, utility, account details, and timing around contract expiration can all help support a more useful review."
  }
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/massachusetts-commercial-electricity"
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: SITE_NAME,
    type: "website"
  },
  twitter: {
    card: "summary",
    title: pageTitle,
    description: pageDescription
  }
};

export default function MassachusettsCommercialElectricityPage() {
  return (
    <div id="top" className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[40rem] bg-[radial-gradient(circle_at_top,rgba(33,147,255,0.2),transparent_58%)]" />
      <Navbar />

      <main>
        <section className="section-shell relative pb-14 pt-8 md:pb-20 md:pt-[3.5rem]">
          <Container className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(20rem,0.98fr)] xl:gap-10">
            <div className="max-w-[41rem]">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/[0.05] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--color-muted)] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                Massachusetts Commercial Electricity
              </div>
              <h1 className="text-glow mt-5 font-[var(--font-display)] text-[2.2rem] font-semibold leading-[1.03] tracking-[-0.04em] text-white sm:text-[3.5rem] lg:text-[4rem]">
                Massachusetts Commercial Electricity Consulting
              </h1>
              <p className="mt-5 max-w-[38rem] text-[15px] leading-7 text-[var(--color-muted)] sm:text-[1.05rem]">
                Northeast Energy Consultants helps Massachusetts businesses
                compare commercial electricity supplier options in deregulated
                markets, review contract structures, and evaluate procurement
                decisions with clear, practical guidance.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <LinkButton href="#contact">Request a Market Review</LinkButton>
                <LinkButton href="/" variant="secondary">
                  Return to Homepage
                </LinkButton>
              </div>

              <div className="mt-5 flex flex-col gap-2 text-sm leading-6 text-[var(--color-muted)] sm:flex-row sm:flex-wrap sm:gap-5">
                <div className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] shadow-[0_0_14px_rgba(33,147,255,0.55)]" />
                  <span>Commercial electricity review for Massachusetts businesses</span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] shadow-[0_0_14px_rgba(33,147,255,0.55)]" />
                  <span>No guaranteed savings claims or live-rate promises</span>
                </div>
              </div>
            </div>

            <SurfaceCard className="border-[rgba(145,181,255,0.15)] bg-[linear-gradient(180deg,rgba(11,21,37,0.9),rgba(7,15,28,0.82))] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.34)] sm:p-6">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(33,147,255,0.14),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />
              <div className="relative">
                <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--color-muted)]">
                  Massachusetts Market Focus
                </p>
                <h2 className="mt-3 font-[var(--font-display)] text-[1.55rem] font-semibold tracking-[-0.03em] text-white sm:text-[1.9rem]">
                  Practical support for commercial electricity procurement.
                </h2>
                <p className="mt-3 text-[14px] leading-7 text-[var(--color-muted)] sm:text-sm">
                  We help businesses review supplier options, compare pricing
                  structures, and understand contract details before making a
                  procurement decision.
                </p>

                <div className="mt-6 grid gap-3">
                  {marketPoints.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[1.25rem] border border-white/[0.08] bg-white/[0.05] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                    >
                      <h3 className="text-sm font-semibold text-white sm:text-[15px]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[13px] leading-6 text-[var(--color-muted)]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </SurfaceCard>
          </Container>
        </section>

        <section id="markets" className="section-shell py-20 md:py-24">
          <Container>
            <SectionHeading
              eyebrow="Massachusetts Deregulated Energy Market"
              title="How supplier choice works for Massachusetts commercial electricity."
              description="Massachusetts businesses in deregulated markets can compare electricity supply options while the utility continues to deliver power and maintain the distribution system."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
              <SurfaceCard className="px-5 py-6 sm:px-7 sm:py-8">
                <div className="grid gap-5 text-[15px] leading-8 text-[var(--color-muted)] sm:text-base">
                  <p>
                    Massachusetts allows many commercial electricity customers
                    to choose the supply side of their electric service. That
                    means businesses can compare supplier offers instead of
                    relying only on default utility supply.
                  </p>
                  <p>
                    The utility still delivers electricity, maintains the local
                    infrastructure, and handles outage response. What changes is
                    the supplier responsible for the electricity supply portion
                    of the bill.
                  </p>
                  <p>
                    Commercial supplier pricing is not one-size-fits-all.
                    Pricing structures can vary based on usage profile, load
                    shape, contract term, fees, and renewal language.
                  </p>
                  <p>
                    Businesses looking for a broader Northeast overview can also
                    review the{" "}
                    <a
                      href="/"
                      className="font-medium text-white transition duration-300 hover:text-[var(--color-primary)]"
                    >
                      Northeast Energy Consultants homepage
                    </a>
                    .
                  </p>
                </div>
              </SurfaceCard>

              <div className="grid gap-4">
                {marketPoints.map((item) => (
                  <SurfaceCard key={item.title} className="px-5 py-5 sm:px-6 sm:py-6">
                    <h3 className="font-[var(--font-display)] text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                      {item.description}
                    </p>
                  </SurfaceCard>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section id="services" className="section-shell py-20 md:py-24">
          <Container>
            <SectionHeading
              eyebrow="How Commercial Energy Procurement Works"
              title="A clear process for reviewing supplier options."
              description="The review process is designed to help Massachusetts businesses compare supply options, evaluate contract terms, and move forward with clarity."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((step, index) => (
                <SurfaceCard
                  key={step.title}
                  className="h-full px-5 py-6 sm:px-7 sm:py-8"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[rgba(33,147,255,0.28)] bg-[rgba(33,147,255,0.12)] text-sm font-semibold text-[var(--color-primary)]">
                    0{index + 1}
                  </div>
                  <h3 className="mt-6 font-[var(--font-display)] text-2xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
                    {step.description}
                  </p>
                </SurfaceCard>
              ))}
            </div>
          </Container>
        </section>

        <section className="section-shell py-20 md:py-24">
          <Container className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Commercial Businesses We Support"
                title="Built for a range of Massachusetts commercial electricity users."
                description="Our review process is designed for businesses that need a practical way to compare supplier options and contract structures."
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {businessTypes.map((business) => (
                <SurfaceCard key={business} className="px-5 py-5 sm:px-6 sm:py-6">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[rgba(33,147,255,0.24)] bg-[rgba(33,147,255,0.12)] text-sm font-semibold text-[var(--color-primary)]">
                    MA
                  </div>
                  <h3 className="mt-5 font-[var(--font-display)] text-xl font-semibold text-white">
                    {business}
                  </h3>
                </SurfaceCard>
              ))}
            </div>
          </Container>
        </section>

        <section className="section-shell py-20 md:py-24">
          <Container>
            <SectionHeading
              eyebrow="Why Businesses Compare Commercial Electricity Rates"
              title="Commercial electricity decisions are about structure as much as price."
              description="Businesses often compare commercial electricity rates to support budgeting, evaluate contract fit, and manage operating costs more deliberately."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {rateReasons.map((item) => (
                <SurfaceCard key={item.title} className="h-full px-5 py-6 sm:px-7 sm:py-7">
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

        <section className="section-shell py-20 md:py-24">
          <Container>
            <SectionHeading
              eyebrow="FAQ"
              title="Massachusetts commercial electricity questions."
              description="Common questions businesses ask when reviewing commercial electricity supplier options in Massachusetts."
            />

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              <dl className="contents">
                {faqs.map((item) => (
                  <SurfaceCard key={item.question} className="px-5 py-6 sm:px-7 sm:py-7">
                    <dt className="font-[var(--font-display)] text-xl font-semibold text-white">
                      {item.question}
                    </dt>
                    <dd className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                      {item.answer}
                    </dd>
                  </SurfaceCard>
                ))}
              </dl>
            </div>
          </Container>
        </section>

        <ContactFormSection />
      </main>

      <Footer />
    </div>
  );
}

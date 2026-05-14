import Image from "next/image";
import { SITE_CONTACT } from "../lib/site";
import { Container, LinkButton } from "./ui";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Markets", href: "#markets" },
  { label: "Contact", href: "#contact" }
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[rgba(4,12,24,0.68)] backdrop-blur-2xl">
      <Container className="py-2.5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="#top"
            className="group inline-flex items-center transition duration-300"
            aria-label="Northeast Energy Consultants home"
          >
            <span className="relative inline-flex items-center rounded-[0.95rem] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(250,252,255,0.98),rgba(227,237,251,0.94))] px-2.5 py-1.5 shadow-[0_14px_30px_rgba(0,0,0,0.28)] ring-1 ring-[rgba(255,255,255,0.04)] transition duration-300 group-hover:-translate-y-[1px] group-hover:shadow-[0_18px_36px_rgba(0,0,0,0.34)]">
              <span className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_left,rgba(33,147,255,0.16),transparent_58%)] opacity-80" />
              <Image
                src="/logo-navbar.png"
                alt="Northeast Energy Consultants logo"
                priority
                width={1290}
                height={423}
                className="relative h-auto w-[8.8rem] sm:w-[10rem]"
              />
            </span>
          </a>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 md:gap-5">
            <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-[var(--color-muted)] md:gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-full px-2 py-1 transition duration-300 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href={SITE_CONTACT.phoneHref}
              className="hidden rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-2 text-[13px] font-medium text-[var(--color-muted)] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-300 hover:border-[rgba(78,148,255,0.3)] hover:text-white xl:inline-flex"
            >
              {SITE_CONTACT.phoneLabel}
            </a>

            <LinkButton
              href="#contact"
              className="px-5 py-2.5 text-[13px] sm:min-w-[9.75rem]"
            >
              Request Free Bill Review
            </LinkButton>
          </div>
        </div>
      </Container>
    </header>
  );
}

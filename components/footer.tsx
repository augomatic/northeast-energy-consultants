import { SITE_CONTACT } from "../lib/site";
import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[rgba(4,12,24,0.26)] py-8">
      <Container className="flex flex-col gap-4 text-sm text-[var(--color-muted)] md:flex-row md:items-center md:justify-between">
        <div className="font-medium text-white">Northeast Energy Consultants</div>
        <div className="flex flex-col gap-2 border-t border-white/[0.06] pt-4 md:flex-row md:items-center md:gap-5 md:border-t-0 md:border-l md:border-white/[0.06] md:pl-5 md:pt-0">
          <a
            href={`mailto:${SITE_CONTACT.email}`}
            className="transition duration-300 hover:text-white"
          >
            {SITE_CONTACT.email}
          </a>
          <a
            href={SITE_CONTACT.phoneHref}
            className="transition duration-300 hover:text-white"
          >
            {SITE_CONTACT.phoneLabel}
          </a>
        </div>
        <div className="text-[13px]">
          &copy; 2026 Northeast Energy Consultants
        </div>
      </Container>
    </footer>
  );
}

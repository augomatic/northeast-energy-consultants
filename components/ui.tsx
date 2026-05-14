import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ClassValue = string | false | null | undefined;

function cn(...classes: ClassValue[]) {
  return classes.filter(Boolean).join(" ");
}

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={cn("max-w-3xl", centered && "mx-auto text-center")}>
      <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/[0.05] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--color-muted)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
        {eyebrow}
      </div>
      <h2 className="mt-6 font-[var(--font-display)] text-3xl font-semibold leading-[1.02] tracking-[-0.03em] text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-[var(--color-muted)] sm:text-lg">
        {description}
      </p>
    </div>
  );
}

function buttonClasses(
  variant: "primary" | "secondary" = "primary",
  className?: string
) {
  return cn(
    "relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(111,180,255,0.55)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]",
    variant === "primary" &&
      "border border-[rgba(148,198,255,0.18)] bg-[linear-gradient(135deg,#2b96ff,#0d67ff)] text-white shadow-[0_16px_40px_rgba(15,107,255,0.28),inset_0_1px_0_rgba(255,255,255,0.2)] before:absolute before:inset-0 before:bg-[linear-gradient(120deg,rgba(255,255,255,0.2),transparent_38%,transparent_62%,rgba(255,255,255,0.08))] before:opacity-70 before:transition before:duration-500 hover:-translate-y-[1px] hover:shadow-[0_22px_52px_rgba(15,107,255,0.36)] hover:before:opacity-100",
    variant === "secondary" &&
      "border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.045)] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] hover:-translate-y-[1px] hover:border-[rgba(76,148,255,0.34)] hover:bg-[rgba(16,34,57,0.94)] hover:shadow-[0_16px_38px_rgba(0,0,0,0.22)]",
    className
  );
}

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function LinkButton({
  href,
  children,
  variant = "primary",
  className
}: LinkButtonProps) {
  return (
    <a
      href={href}
      className={buttonClasses(variant, className)}
    >
      <span className="relative z-10">{children}</span>
    </a>
  );
}

type ActionButtonProps = ComponentPropsWithoutRef<"button"> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function ActionButton({
  children,
  type = "button",
  variant = "primary",
  className,
  ...props
}: ActionButtonProps) {
  return (
    <button
      type={type}
      className={buttonClasses(
        variant,
        cn(props.disabled && "cursor-not-allowed opacity-70 hover:translate-y-0", className)
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}

type SurfaceCardProps = {
  children: ReactNode;
  className?: string;
};

export function SurfaceCard({ children, className }: SurfaceCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.6rem] border border-[var(--color-border)] bg-[linear-gradient(160deg,rgba(255,255,255,0.065),rgba(255,255,255,0.025))] shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[rgba(33,147,255,0.3)] hover:shadow-[0_26px_80px_rgba(7,18,34,0.48)] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)]",
        className
      )}
    >
      {children}
    </div>
  );
}

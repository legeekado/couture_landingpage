import Image from "next/image";
import Link from "next/link";

type KayniawluLogoProps = {
  href?: string;
  compact?: boolean;
  className?: string;
};

export function KayniawluLogo({
  href = "/",
  compact = false,
  className = "",
}: KayniawluLogoProps) {
  const content = (
    <span className={`inline-flex items-center gap-3 ${className}`.trim()}>
      <Image
        src="/kayniawlu-mark.svg"
        alt="Kayñiawlu"
        width={compact ? 34 : 42}
        height={compact ? 34 : 42}
        priority
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.35rem] font-semibold tracking-tight text-primary md:text-[1.6rem]">
          Kayñiawlu
        </span>
        {!compact && (
          <span className="font-ui text-[0.67rem] uppercase tracking-[0.16em] text-gold-muted/90">
            Couture Cloud Atelier
          </span>
        )}
      </span>
    </span>
  );

  return (
    <Link href={href} className="transition-opacity hover:opacity-90">
      {content}
    </Link>
  );
}

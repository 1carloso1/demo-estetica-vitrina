import type { SectionHeader } from "@/types";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends SectionHeader {
  id?: string;
  /** "responsive": centrado en móvil, a la izquierda desde `sm`. "center": siempre centrado. */
  align?: "responsive" | "center";
  className?: string;
}

export function SectionHeading({
  id,
  title,
  subtitle,
  align = "responsive",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" ? "text-center" : "text-center sm:text-left", className)}>
      <h2 id={id} className="font-display text-4xl leading-tight sm:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-3 max-w-xl text-lg text-brand-muted",
            align === "center" ? "mx-auto" : "mx-auto sm:mx-0",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

import { site } from "@/lib/data/site";
import { cn } from "@/lib/utils";

interface WordmarkProps {
  tone?: "light" | "dark";
  className?: string;
}

/** Logo inventado: monograma en arco + palabra. No usa marcas reales. */
export function Wordmark({ tone = "light", className }: WordmarkProps) {
  const monogram = site.logo.wordmark.charAt(0);

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        aria-hidden="true"
        className="flex h-9 w-7 items-center justify-center rounded-t-full rounded-b-sm bg-brand-accent font-display text-lg leading-none text-brand-ink"
      >
        {monogram}
      </span>
      <span
        className={cn(
          "font-display text-2xl leading-none",
          tone === "light" ? "text-brand-ink" : "text-brand-mist",
        )}
      >
        <span className="sr-only">{site.logo.alt}</span>
        <span aria-hidden="true">{site.logo.wordmark}</span>
      </span>
    </span>
  );
}

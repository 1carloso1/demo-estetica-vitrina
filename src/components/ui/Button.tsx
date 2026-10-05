import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href: string;
  children: ReactNode;
  /** Texto extra solo para lectores de pantalla (ej. "se abre en pestaña nueva"). */
  srHint?: string;
  size?: "md" | "sm";
  className?: string;
}

/** Botón de acción principal. Siempre es un enlace externo (WhatsApp de Vitrina). */
export function Button({ href, children, srHint, size = "md", className }: ButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-brand-accent font-semibold text-brand-ink",
        "transition-colors duration-200 hover:bg-brand-accentHover",
        size === "md" ? "px-7 py-3.5 text-base" : "px-4 py-2 text-sm",
        className,
      )}
    >
      {children}
      {srHint ? <span className="sr-only"> {srHint}</span> : null}
    </a>
  );
}

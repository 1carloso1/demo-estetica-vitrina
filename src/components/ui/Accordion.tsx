"use client";

import { useState } from "react";
import type { Faq } from "@/types";
import { cn } from "@/lib/utils";
import { Icon } from "./Icon";

interface AccordionProps {
  items: Faq[];
}

/** Un solo ítem abierto a la vez; transición de 200 ms. */
export function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="divide-y divide-brand-ink/15 border-y border-brand-ink/15">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `faq-panel-${item.id}`;
        const buttonId = `faq-button-${item.id}`;

        return (
          <div key={item.id}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left font-display text-xl sm:text-2xl"
              >
                {item.question}
                <Icon
                  name="chevron-down"
                  className={cn(
                    "h-6 w-6 shrink-0 text-brand-accentText transition-transform duration-200",
                    isOpen && "rotate-180",
                  )}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-[grid-template-rows] duration-200 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-5 text-lg text-brand-muted">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import { sectionIds, site } from "@/lib/data/site";
import { buildWhatsappLink } from "@/lib/services/whatsappLink";
import { Wordmark } from "./Wordmark";

export function Navbar() {
  const { open, toggle, close } = useMobileMenu();
  const whatsappHref = buildWhatsappLink(
    site.vitrina.whatsappNumber,
    site.vitrina.whatsappMessage,
  );

  return (
    <header className="sticky top-0 z-40 border-b border-brand-ink/10 bg-brand-mist/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5">
        <a href={`#${sectionIds.inicio}`} onClick={close} className="rounded-md">
          <Wordmark />
        </a>

        <nav aria-label={site.ui.mainNavLabel} className="hidden items-center gap-6 lg:flex">
          {site.nav.map((item) => (
            <a
              key={item.key}
              href={`#${sectionIds[item.key]}`}
              className="text-base text-brand-ink transition-colors duration-200 hover:text-brand-accentText"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button href={whatsappHref} size="sm" srHint={site.ui.whatsappOpensIn}>
            {site.navCtaLabel}
          </Button>
          <button
            type="button"
            onClick={toggle}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? site.ui.closeMenu : site.ui.openMenu}
            className="flex h-11 w-11 items-center justify-center rounded-full text-brand-ink transition-colors duration-200 hover:bg-brand-vapor lg:hidden"
          >
            <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="menu-movil"
          aria-label={site.ui.mainNavLabel}
          className="border-t border-brand-ink/10 bg-brand-mist lg:hidden"
        >
          <ul className="mx-auto max-w-6xl px-5 py-2">
            {site.nav.map((item) => (
              <li key={item.key}>
                <a
                  href={`#${sectionIds[item.key]}`}
                  onClick={close}
                  className="block py-3 text-center text-lg text-brand-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

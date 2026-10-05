import { SectionHeading } from "@/components/ui/SectionHeading";
import { steps, stepsHeader } from "@/lib/data/steps";
import { sectionIds } from "@/lib/data/site";

export function ComoAgendarSection() {
  const headingId = `${sectionIds.comoAgendar}-titulo`;

  return (
    <section
      id={sectionIds.comoAgendar}
      aria-labelledby={headingId}
      className="bg-brand-vapor"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
        <SectionHeading id={headingId} align="center" {...stepsHeader} />

        <ol className="relative mt-12 grid gap-10 md:grid-cols-3">
          {/* Línea que une los pasos (solo escritorio) */}
          <span
            aria-hidden="true"
            className="absolute left-[16.6%] right-[16.6%] top-7 hidden border-t border-dashed border-brand-ink/30 md:block"
          />
          {steps.map((step, index) => (
            <li key={step.id} className="relative text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-ink font-display text-2xl text-brand-mist">
                {index + 1}
              </span>
              <h3 className="mt-5 font-display text-2xl">{step.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-lg text-brand-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

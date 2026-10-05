import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs, faqsHeader } from "@/lib/data/faqs";
import { sectionIds } from "@/lib/data/site";

export function FAQSection() {
  const headingId = `${sectionIds.preguntas}-titulo`;

  return (
    <section
      id={sectionIds.preguntas}
      aria-labelledby={headingId}
      className="bg-brand-mist"
    >
      <div className="mx-auto max-w-3xl px-5 py-16 lg:py-24">
        <SectionHeading id={headingId} {...faqsHeader} />
        <div className="mt-8">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  );
}

"use client";

import { faqs } from "@/data/faqs";
import { Icon } from "@/components/ui/Icon";

export function FAQAccordion() {
  return (
    <div className="grid gap-4">
      {faqs.map((faq) => (
        <details key={faq.question} className="group rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-black text-primary">
            {faq.question}
            <Icon name="ChevronDown" className="h-5 w-5 text-accent transition group-open:rotate-180" />
          </summary>
          <p className="mt-3 leading-7 text-muted">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}

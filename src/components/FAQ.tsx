import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="bg-white py-20 sm:py-28">
      <div ref={ref} className="reveal mx-auto max-w-4xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-blue">FAQ</span>
          <h2 className="mt-4 font-display text-4xl font-semibold text-navy sm:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-12 divide-y divide-champagne/40 border-y border-champagne/40">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-lg font-semibold text-navy sm:text-xl">{f.q}</span>
                  <Plus
                    size={20}
                    className={`shrink-0 text-blue transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                  />
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="overflow-hidden text-[15px] leading-relaxed text-stone">{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

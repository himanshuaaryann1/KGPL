import { Star, Quote } from "lucide-react";
import { testimonials } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export default function Testimonials() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-blue">Testimonials</span>
          <h2 className="mt-4 font-display text-4xl font-semibold text-navy sm:text-5xl">What Our Clients Say</h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col justify-between rounded-3xl border border-champagne/40 bg-white p-8 shadow-sm"
            >
              <Quote className="text-champagne" size={32} />
              <p className="mt-5 flex-1 text-[15px] leading-relaxed text-stone">
                {t.review}
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-champagne/40 pt-5">
                <div>
                  <span className="font-display text-lg font-semibold text-navy">{t.name}</span>
                  {t.profession && <div className="mt-1 text-sm text-stone/70">{t.profession}</div>}
                </div>
                <div className="flex gap-0.5 text-champagne">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} size={15} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-stone/70">
          Client testimonials will be updated here as they are shared with us.
        </p>
      </div>
    </section>
  );
}

import { services } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export default function Services() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="services" className="bg-navy py-20 text-white sm:py-28">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-champagne">
              What We Do
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">Our Services</h2>
          </div>
          <p className="max-w-sm text-sm text-white/70">
            From first consultation to final registry, we provide complete real-estate support across
            Amritsar, Gurdaspur, Batala and Dinanagar.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <div
              key={s.title}
              className="group flex flex-col justify-between bg-navy p-8 transition-colors duration-300 hover:bg-navy-light"
            >
              <span className="font-display text-3xl text-champagne/50">{String(idx + 1).padStart(2, "0")}</span>
              <div className="mt-8">
                <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { MapPin, BedDouble, Bath, Ruler, ArrowRight, ArrowUpRight } from "lucide-react";
import { properties, propertyFilters, type Property } from "../data/content";
import { useReveal } from "../hooks/useReveal";

interface Props {
  onView: (p: Property) => void;
}

export default function FeaturedProperties({ onView }: Props) {
  const [filter, setFilter] = useState<(typeof propertyFilters)[number]["value"]>("All");
  const ref = useReveal<HTMLDivElement>();

  const filtered =
    filter === "All" ? properties : properties.filter((p) => p.categories.includes(filter as any));

  return (
    <section id="properties" className="bg-ivory py-20 sm:py-28">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-blue">Our Listings</span>
            <h2 className="mt-4 font-display text-4xl font-semibold text-navy sm:text-5xl">Featured Properties</h2>
            <p className="mt-4 text-stone">
              A curated selection of residential, commercial and plot opportunities across Batala.
            </p>
          </div>
          <a
            href="#contact"
            className="group hidden shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-wider text-navy sm:flex"
          >
            View All Properties
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {propertyFilters.map((f) => (
            <button
              key={f.label}
              onClick={() => setFilter(f.value)}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition-all ${
                filter === f.value
                  ? "border-navy bg-navy text-white"
                  : "border-champagne/50 bg-white text-navy/70 hover:border-navy/30"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-champagne/50 bg-champagne/10 px-5 py-3 text-xs text-stone">
          Listings shown below are illustrative samples used for presentation purposes. Contact our team for
          current, live property inventory in Batala and nearby areas.
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-champagne/40 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy/10"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.name} - ${p.type} in ${p.location}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-navy backdrop-blur-sm">
                  {p.type}
                </span>
                <span className="absolute right-4 top-4 rounded-full bg-navy/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                  {p.categories[0]}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-stone">
                  <MapPin size={13} className="text-blue" />
                  {p.location}
                </div>
                <h3 className="mt-2 font-display text-2xl font-semibold text-navy">{p.name}</h3>
                <div className="mt-2 font-display text-xl font-semibold text-blue">{p.price}</div>

                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-stone">
                  <span className="flex items-center gap-1.5">
                    <Ruler size={15} /> {p.area}
                  </span>
                  {p.bedrooms && (
                    <span className="flex items-center gap-1.5">
                      <BedDouble size={15} /> {p.bedrooms} Beds
                    </span>
                  )}
                  {p.bathrooms && (
                    <span className="flex items-center gap-1.5">
                      <Bath size={15} /> {p.bathrooms} Baths
                    </span>
                  )}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.features.slice(0, 2).map((f) => (
                    <span
                      key={f}
                      className="rounded-full bg-cream px-3 py-1 text-[11px] font-medium text-navy/70"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3 border-t border-champagne/40 pt-5">
                  <button
                    onClick={() => onView(p)}
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-navy py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-navy-light"
                  >
                    View Property
                    <ArrowUpRight size={14} />
                  </button>
                  <a
                    href="#contact"
                    className="flex flex-1 items-center justify-center rounded-full border border-navy/30 py-2.5 text-xs font-semibold uppercase tracking-wider text-navy transition-colors hover:border-navy"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center sm:hidden">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-navy"
          >
            View All Properties
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

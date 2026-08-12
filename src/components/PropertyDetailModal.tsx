import { useState } from "react";
import {
  X,
  MapPin,
  BedDouble,
  Bath,
  Ruler,
  Car,
  Phone,
  MessageCircle,
  CalendarCheck,
  CheckCircle2,
} from "lucide-react";
import type { Property } from "../data/content";

export default function PropertyDetailModal({ property, onClose }: { property: Property; onClose: () => void }) {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-navy/60 backdrop-blur-sm">
      <div className="mx-auto min-h-full max-w-5xl px-4 py-8 sm:px-6">
        <div className="relative rounded-3xl bg-ivory shadow-2xl">
          <button
            onClick={onClose}
            className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-navy shadow-md transition-colors hover:bg-white"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          {/* Gallery */}
          <div className="relative h-72 overflow-hidden rounded-t-3xl sm:h-[420px]">
            <img
              src={property.gallery[activeImg]}
              alt={`${property.name} gallery image ${activeImg + 1}`}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              {property.gallery.map((g, i) => (
                <button
                  key={g}
                  onClick={() => setActiveImg(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    i === activeImg ? "w-6 bg-white" : "bg-white/50"
                  }`}
                  aria-label={`View image ${i + 1}`}
                />
              ))}
            </div>
            <span className="absolute left-5 top-5 rounded-full bg-navy/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
              {property.type}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-10 p-6 sm:p-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-stone">
                <MapPin size={13} className="text-blue" />
                {property.location}
              </div>
              <h2 className="mt-2 font-display text-3xl font-semibold text-navy sm:text-4xl">{property.name}</h2>
              <div className="mt-3 font-display text-2xl font-semibold text-blue">{property.price}</div>

              <div className="mt-6 grid grid-cols-2 gap-4 rounded-2xl border border-champagne/40 bg-white p-5 sm:grid-cols-4">
                <Stat icon={Ruler} label="Area" value={property.area} />
                {property.bedrooms && <Stat icon={BedDouble} label="Bedrooms" value={String(property.bedrooms)} />}
                {property.bathrooms && <Stat icon={Bath} label="Bathrooms" value={String(property.bathrooms)} />}
                {property.parking && <Stat icon={Car} label="Parking" value={property.parking} />}
              </div>

              <div className="mt-8">
                <h3 className="font-display text-xl font-semibold text-navy">Description</h3>
                <p className="mt-3 leading-relaxed text-stone">{property.description}</p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="font-display text-xl font-semibold text-navy">Key Features</h3>
                  <ul className="mt-3 space-y-2">
                    {property.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-stone">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-blue" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-navy">Amenities</h3>
                  <ul className="mt-3 space-y-2">
                    {property.amenities.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-stone">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-blue" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-display text-xl font-semibold text-navy">Nearby Locations</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {property.nearby.map((f) => (
                    <li key={f} className="rounded-full bg-cream px-4 py-2 text-xs font-medium text-navy/70">
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 overflow-hidden rounded-2xl border border-champagne/40">
                <iframe
                  title="Property location map"
                  src="https://www.google.com/maps?q=Batala,Punjab&output=embed"
                  width="100%"
                  height="260"
                  loading="lazy"
                  className="grayscale-[15%]"
                />
              </div>
            </div>

            {/* Enquiry sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-3xl border border-champagne/40 bg-white p-6 shadow-sm">
                <h3 className="font-display text-xl font-semibold text-navy">Interested in this property?</h3>
                <p className="mt-2 text-sm text-stone">Our team will get back to you within a few hours.</p>

                <div className="mt-5 flex flex-col gap-3">
                  <a
                    href="tel:08269000066"
                    className="flex items-center justify-center gap-2 rounded-full bg-navy py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-navy-light"
                  >
                    <Phone size={16} /> Call Now
                  </a>
                  <a
                    href="https://wa.me/918269000066"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-sm font-semibold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
                  >
                    <MessageCircle size={16} /> WhatsApp
                  </a>
                  <a
                    href="#contact"
                    onClick={onClose}
                    className="flex items-center justify-center gap-2 rounded-full border border-navy/30 py-3 text-sm font-semibold uppercase tracking-wider text-navy transition-colors hover:border-navy"
                  >
                    <CalendarCheck size={16} /> Schedule Visit
                  </a>
                </div>

                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="mt-6 flex flex-col gap-3 border-t border-champagne/40 pt-5"
                >
                  <input required placeholder="Your Name" className="form-input" />
                  <input required placeholder="Phone Number" className="form-input" />
                  <textarea placeholder="Your message" rows={3} className="form-input resize-none" />
                  <button
                    type="submit"
                    className="rounded-full bg-blue py-3 text-sm font-semibold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
                  >
                    Send Enquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5 text-center">
      <Icon size={18} className="text-blue" />
      <span className="text-sm font-semibold text-navy">{value}</span>
      <span className="text-[10px] uppercase tracking-wider text-stone">{label}</span>
    </div>
  );
}

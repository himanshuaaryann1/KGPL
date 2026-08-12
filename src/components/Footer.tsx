import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ivory">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-display text-2xl font-semibold text-navy">Khehhra Group</span>
            <span className="mt-0.5 block text-[10px] font-medium uppercase tracking-[0.35em] text-stone">
              Private Limited
            </span>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-stone">
              Trusted real-estate expertise in Batala and nearby Punjab regions since 2017 — serving
              Amritsar, Gurdaspur, Batala and Dinanagar with confidence.
            </p>
          </div>

          <FooterCol
            title="Quick Links"
            links={[
              { label: "Home", href: "#home" },
              { label: "Properties", href: "#properties" },
              { label: "About Us", href: "#about" },
              { label: "Services", href: "#services" },
              { label: "Contact", href: "#contact" },
            ]}
          />

          <FooterCol
            title="Property"
            links={[
              { label: "Buy", href: "#intent" },
              { label: "Sell", href: "#intent" },
              { label: "Rent", href: "#intent" },
              { label: "Lease", href: "#intent" },
            ]}
          />

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-navy">Contact</h4>
            <ul className="mt-5 space-y-4 text-sm text-stone">
              <li className="flex items-start gap-2.5">
                <Phone size={15} className="mt-0.5 shrink-0 text-blue" />
                <a href="tel:08269000066" className="hover:text-navy">
                  08269000066
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={15} className="mt-0.5 shrink-0 text-blue" />
                <a href="mailto:khehragroups@gmail.com" className="hover:text-navy">
                  khehragroups@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 shrink-0 text-blue" />
                <span>
                  1st Floor, Shop No. 48, Dharam Singh Market Dhir, Shastri Nagar, Batala, Punjab 143505
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-champagne/50 pt-8 text-center text-xs text-stone">
          &copy; 2026 Khehhra Group Private Limited. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-navy">{title}</h4>
      <ul className="mt-5 space-y-3 text-sm text-stone">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="transition-colors hover:text-navy">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

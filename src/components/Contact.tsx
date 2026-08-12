import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

export default function Contact() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="contact" className="bg-cream py-20 sm:py-28">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-blue">Contact Us</span>
          <h2 className="mt-4 font-display text-4xl font-semibold text-navy sm:text-5xl">
            Khehhra Group Private Limited
          </h2>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-stone">
            Serving Clients Across<br />
            Amritsar · Gurdaspur · Batala · Dinanagar
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-6 rounded-3xl border border-champagne/40 bg-white p-8 shadow-sm">
              <ContactRow icon={MapPin} label="Address">
                1st Floor, Shop No. 48, Dharam Singh Market Dhir, Shastri Nagar, Batala, Punjab 143505
              </ContactRow>
              <ContactRow icon={Phone} label="Phone">
                <a href="tel:08269000066" className="hover:text-blue">
                  08269000066
                </a>
              </ContactRow>
              <ContactRow icon={Mail} label="Email">
                <a href="mailto:khehragroups@gmail.com" className="hover:text-blue">
                  khehragroups@gmail.com
                </a>
              </ContactRow>

              <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
                <a
                  href="tel:08269000066"
                  className="flex items-center justify-center gap-2 rounded-full bg-navy py-3 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-navy-light"
                >
                  <Phone size={15} /> Call Now
                </a>
                <a
                  href="https://wa.me/918269000066"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-xs font-semibold uppercase tracking-wider text-white transition-opacity hover:opacity-90"
                >
                  <MessageCircle size={15} /> WhatsApp
                </a>
                <a
                  href="mailto:khehragroups@gmail.com"
                  className="flex items-center justify-center gap-2 rounded-full border border-navy/30 py-3 text-xs font-semibold uppercase tracking-wider text-navy transition-colors hover:border-navy"
                >
                  <Mail size={15} /> Email
                </a>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-champagne/40 shadow-sm lg:col-span-3">
            <iframe
              title="Khehhra Group office location on Google Maps"
              src="https://www.google.com/maps?q=Shastri+Nagar,+Batala,+Punjab+143505&output=embed"
              width="100%"
              height="100%"
              className="min-h-[280px] w-full"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 rounded-3xl border border-champagne/40 bg-white p-8 sm:p-10 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-2xl font-semibold text-navy">Send Us a Message</h3>
            <p className="mt-2 text-sm text-stone">
              Have a question or need assistance? Fill out the form and our team will respond promptly.
            </p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input required placeholder="Your Name" className="form-input" />
            <input required placeholder="Phone Number" className="form-input" />
            <input type="email" placeholder="Email Address" className="form-input sm:col-span-2" />
            <textarea placeholder="Your Message" rows={3} className="form-input resize-none sm:col-span-2" />
            <button
              type="submit"
              className="rounded-full bg-navy py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-navy-light sm:col-span-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: any;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream text-blue">
        <Icon size={18} />
      </span>
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-wider text-stone">{label}</div>
        <div className="mt-1 text-sm leading-relaxed text-navy">{children}</div>
      </div>
    </div>
  );
}

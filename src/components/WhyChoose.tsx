import { ShieldCheck, MessageSquareText, MapPinned, ClipboardCheck, Handshake, HeartHandshake } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

const items = [
  {
    icon: ShieldCheck,
    title: "Verified Property Opportunities",
    desc: "Focus on genuine and carefully evaluated listings.",
  },
  {
    icon: MessageSquareText,
    title: "Honest Guidance",
    desc: "Clear and transparent property advice.",
  },
  {
    icon: MapPinned,
    title: "Local Market Expertise",
    desc: "Strong understanding of Batala and surrounding Punjab markets.",
  },
  {
    icon: ClipboardCheck,
    title: "End-to-End Assistance",
    desc: "Support from property discovery through documentation and final registry.",
  },
  {
    icon: Handshake,
    title: "Transparent Process",
    desc: "Clear communication and pricing.",
  },
  {
    icon: HeartHandshake,
    title: "Client-First Approach",
    desc: "Treat every property decision with care and professionalism.",
  },
];

export default function WhyChoose() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-ivory py-20 sm:py-28">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-blue">Our Promise</span>
          <h2 className="mt-4 font-display text-4xl font-semibold text-navy sm:text-5xl">
            Why Choose Khehhra Group?
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-champagne/40 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-navy/20 hover:shadow-xl hover:shadow-navy/10"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cream text-blue transition-colors group-hover:bg-navy group-hover:text-white">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

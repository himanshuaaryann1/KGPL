import { useState } from "react";
import { KeyRound, Handshake, Home, FileSignature } from "lucide-react";
import RequirementForm from "./RequirementForm";
import { useReveal } from "../hooks/useReveal";

const options = [
  {
    key: "Buy",
    title: "BUY",
    desc: "Find your next property.",
    icon: Home,
  },
  {
    key: "Sell",
    title: "SELL",
    desc: "Get assistance selling your property.",
    icon: Handshake,
  },
  {
    key: "Rent",
    title: "RENT",
    desc: "Find the right rental property.",
    icon: KeyRound,
  },
  {
    key: "Lease",
    title: "LEASE",
    desc: "Explore long-term property opportunities.",
    icon: FileSignature,
  },
] as const;

export default function PropertyIntent() {
  const [selected, setSelected] = useState<(typeof options)[number]["key"] | null>(null);
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="intent" className="relative bg-cream py-20 sm:py-28">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-blue">Start Here</span>
          <h2 className="mt-4 font-display text-4xl font-semibold text-navy sm:text-5xl">
            What Are You Looking For?
          </h2>
          <p className="mt-4 text-stone">
            Tell us what you need in Batala, Gurdaspur, Amritsar or Dinanagar, and our team will guide
            you to the right opportunity.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {options.map((opt) => {
            const Icon = opt.icon;
            const active = selected === opt.key;
            return (
              <button
                key={opt.key}
                onClick={() => setSelected(active ? null : opt.key)}
                className={`group relative flex flex-col items-start gap-4 overflow-hidden rounded-3xl border p-6 text-left transition-all duration-300 sm:p-8 ${
                  active
                    ? "border-navy bg-navy text-white shadow-2xl shadow-navy/30 -translate-y-1"
                    : "border-champagne/50 bg-white text-navy hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10"
                }`}
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-colors ${
                    active ? "bg-champagne text-navy" : "bg-cream text-blue group-hover:bg-champagne/40"
                  }`}
                >
                  <Icon size={22} />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-wide sm:text-3xl">{opt.title}</h3>
                  <p className={`mt-1 text-sm ${active ? "text-white/75" : "text-stone"}`}>{opt.desc}</p>
                </div>
              </button>
            );
          })}
        </div>

        {selected && (
          <div className="mx-auto mt-12 max-w-4xl animate-[fadeIn_0.5s_ease]">
            <RequirementForm defaultRequirement={selected} />
          </div>
        )}
      </div>
    </section>
  );
}

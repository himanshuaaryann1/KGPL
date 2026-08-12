import { useCountUp } from "../hooks/useCountUp";

const stats = [
  { target: 9, suffix: "+", label: "Years of Experience" },
  { target: 500, suffix: "+", label: "Happy Clients" },
  { target: 1000, suffix: "+", label: "Properties Sold" },
  { target: 5, suffix: ".0", label: "Google Rating", decimals: 1 },
];

export default function Stats() {
  return (
    <section className="border-y border-champagne/40 bg-white py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 sm:px-8 lg:grid-cols-4 lg:px-10">
        {stats.map((s) => (
          <StatItem key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}

function StatItem({
  target,
  suffix,
  label,
  decimals,
}: {
  target: number;
  suffix: string;
  label: string;
  decimals?: number;
}) {
  const { ref, value } = useCountUp(target);
  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className="font-display text-4xl font-semibold text-navy sm:text-5xl">
        {decimals ? value.toFixed(decimals) : Math.floor(value)}
        <span className="text-blue">{suffix}</span>
      </div>
      <div className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-stone sm:text-sm">{label}</div>
    </div>
  );
}

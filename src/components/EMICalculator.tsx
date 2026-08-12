import { useMemo, useState } from "react";
import { useReveal } from "../hooks/useReveal";

function formatINR(n: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.round(n));
}

export default function EMICalculator() {
  const [price, setPrice] = useState(4500000);
  const [downPayment, setDownPayment] = useState(900000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const ref = useReveal<HTMLDivElement>();

  const loanAmount = Math.max(price - downPayment, 0);

  const { emi, totalInterest, totalPayment } = useMemo(() => {
    const monthlyRate = rate / 12 / 100;
    const months = tenure * 12;
    if (monthlyRate === 0 || months === 0) return { emi: 0, totalInterest: 0, totalPayment: 0 };
    const emiVal =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    const total = emiVal * months;
    return { emi: emiVal, totalInterest: total - loanAmount, totalPayment: total };
  }, [loanAmount, rate, tenure]);

  return (
    <section className="bg-navy py-20 text-white sm:py-28">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-champagne">
            Plan Your Finances
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">Home Loan EMI Calculator</h2>
          <p className="mt-4 text-white/70">
            Estimate your monthly instalments before you finalise your next property.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-10 lg:grid-cols-2">
          <div className="flex flex-col gap-7">
            <SliderField
              label="Property Price"
              value={price}
              onChange={setPrice}
              min={500000}
              max={30000000}
              step={50000}
              prefix="₹"
            />
            <SliderField
              label="Down Payment"
              value={downPayment}
              onChange={setDownPayment}
              min={0}
              max={price}
              step={25000}
              prefix="₹"
            />
            <SliderField
              label="Interest Rate"
              value={rate}
              onChange={setRate}
              min={6}
              max={15}
              step={0.05}
              suffix="%"
            />
            <SliderField
              label="Loan Tenure"
              value={tenure}
              onChange={setTenure}
              min={1}
              max={30}
              step={1}
              suffix=" yrs"
            />
          </div>

          <div className="flex flex-col justify-between gap-8 rounded-2xl bg-ivory p-7 text-navy sm:p-9">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-stone">Loan Amount</span>
              <div className="font-display text-2xl font-semibold text-navy">
                {formatINR(loanAmount)}
              </div>
            </div>

            <div className="rounded-2xl bg-navy p-6 text-center text-white">
              <span className="text-xs font-semibold uppercase tracking-wider text-champagne">Monthly EMI</span>
              <div className="mt-1 font-display text-4xl font-semibold sm:text-5xl">
                {formatINR(emi)}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-champagne/50 p-4 text-center">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-stone">
                  Total Interest
                </span>
                <div className="mt-1 font-display text-xl font-semibold text-blue">
                  {formatINR(totalInterest)}
                </div>
              </div>
              <div className="rounded-xl border border-champagne/50 p-4 text-center">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-stone">
                  Total Payable
                </span>
                <div className="mt-1 font-display text-xl font-semibold text-blue">
                  {formatINR(totalPayment)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SliderField({
  label,
  value,
  onChange,
  min,
  max,
  step,
  prefix,
  suffix,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  suffix?: string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-white/80">{label}</span>
        <span className="font-display text-lg font-semibold text-champagne">
          {prefix ? `${prefix}${Math.round(value).toLocaleString("en-IN")}` : value}
          {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/20 accent-champagne"
        style={{
          background: `linear-gradient(to right, #d9c6a3 ${pct}%, rgba(255,255,255,0.2) ${pct}%)`,
        }}
      />
    </div>
  );
}

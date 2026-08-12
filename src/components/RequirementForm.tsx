import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const requirementOptions = ["Buy", "Sell", "Rent", "Lease"] as const;
const propertyTypes = [
  "Residential",
  "Commercial",
  "Plot/Land",
  "Apartment",
  "House",
  "Villa",
  "Office",
  "Shop",
  "Other",
];
const preferredLocationSuggestions = ["Amritsar", "Gurdaspur", "Batala", "Dinanagar"];

interface Props {
  defaultRequirement?: (typeof requirementOptions)[number];
  compact?: boolean;
}

export default function RequirementForm({ defaultRequirement, compact }: Props) {
  const [requirement, setRequirement] = useState<string>(defaultRequirement ?? "Buy");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-3xl border border-champagne/40 bg-white px-8 py-16 text-center shadow-sm">
        <CheckCircle2 className="text-blue" size={44} />
        <h3 className="font-display text-2xl font-semibold text-navy">Thank You!</h3>
        <p className="max-w-sm text-sm text-stone">
          Our team has received your requirement and will get in touch with you shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-3 text-sm font-semibold uppercase tracking-wider text-blue underline underline-offset-4"
        >
          Submit another requirement
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className={`rounded-3xl border border-champagne/40 bg-white shadow-[0_20px_60px_-25px_rgba(16,35,63,0.25)] ${
        compact ? "p-6 sm:p-8" : "p-7 sm:p-10"
      }`}
    >
      <div className="mb-6">
        <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-blue">I want to</span>
        <div className="mt-3 flex flex-wrap gap-2">
          {requirementOptions.map((opt) => (
            <button
              type="button"
              key={opt}
              onClick={() => setRequirement(opt)}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition-all ${
                requirement === opt
                  ? "border-navy bg-navy text-white"
                  : "border-champagne/60 bg-ivory text-navy/70 hover:border-navy/40"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Property Type">
          <select required className="form-select">
            <option value="">Select property type</option>
            {propertyTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Preferred Location">
          <input
            required
            type="text"
            list="preferred-locations"
            placeholder="e.g. Batala, Gurdaspur, Amritsar or Dinanagar"
            className="form-input"
          />
          <datalist id="preferred-locations">
            {preferredLocationSuggestions.map((location) => (
              <option key={location} value={location} />
            ))}
          </datalist>
        </Field>

        <Field label="Budget">
          <input type="text" placeholder="e.g. \u20b9 30 - 50 Lakh" className="form-input" />
        </Field>

        <Field label="Property Size">
          <input type="text" placeholder="e.g. 1200 sq.ft / 200 sq.yd" className="form-input" />
        </Field>

        <Field label="Bedrooms">
          <select className="form-select">
            <option value="">Not Applicable</option>
            {["1", "2", "3", "4", "5+"].map((n) => (
              <option key={n} value={n}>
                {n} BHK
              </option>
            ))}
          </select>
        </Field>

        <Field label="Name">
          <input required type="text" placeholder="Your full name" className="form-input" />
        </Field>

        <Field label="Phone">
          <input required type="tel" placeholder="10-digit mobile number" className="form-input" />
        </Field>

        <Field label="WhatsApp">
          <input type="tel" placeholder="WhatsApp number" className="form-input" />
        </Field>

        <Field label="Email" full>
          <input type="email" placeholder="you@example.com" className="form-input" />
        </Field>

        <Field label="Additional Requirements" full>
          <textarea
            rows={3}
            placeholder="Tell us anything else about what you're looking for..."
            className="form-input resize-none"
          />
        </Field>
      </div>

      <button
        type="submit"
        className="mt-7 w-full rounded-full bg-navy py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-navy/20 transition-colors hover:bg-navy-light sm:w-auto sm:px-10"
      >
        Get Property Assistance
      </button>
    </form>
  );
}

function Field({ label, children, full }: { label: string; children: React.ReactNode; full?: boolean }) {
  return (
    <label className={`flex flex-col gap-2 ${full ? "sm:col-span-2" : ""}`}>
      <span className="text-xs font-semibold uppercase tracking-wider text-stone">{label}</span>
      {children}
    </label>
  );
}

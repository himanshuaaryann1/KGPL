import RequirementForm from "./RequirementForm";
import { useReveal } from "../hooks/useReveal";

export default function RequirementCTA() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative overflow-hidden bg-ivory py-20 sm:py-28">
      <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-champagne/20 blur-3xl" />
      <div ref={ref} className="reveal relative mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
        <div className="flex flex-col justify-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-blue">Get In Touch</span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy sm:text-5xl">
            Looking for a Property?
          </h2>
          <p className="mt-5 max-w-md text-stone lg:text-lg">
            Tell us what you need and our team will help you find the right opportunity in Batala and
            surrounding areas.
          </p>
          <div className="mt-8 hairline w-24" />
          <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-navy">
            Tell Us Your Requirement &rarr;
          </p>
        </div>
        <RequirementForm compact />
      </div>
    </section>
  );
}

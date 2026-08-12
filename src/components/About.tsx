import { useReveal } from "../hooks/useReveal";

export default function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="bg-ivory py-20 sm:py-28">
      <div ref={ref} className="reveal mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-blue">Our Story</span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy sm:text-5xl">
            About Khehhra Group Private Limited
          </h2>
          <div className="mt-8 hairline w-24" />
        </div>

        <div className="flex flex-col gap-6 text-[15px] leading-relaxed text-stone lg:col-span-7 lg:text-lg">
          <p>
            Founded in <strong className="font-semibold text-navy">2017</strong> by{" "}
            <strong className="font-semibold text-navy">Shamsherr Ssingh</strong>, Khehhra Group Private
            Limited began with one goal: to make buying and selling property in Batala transparent, honest,
            and stress-free.
          </p>
          <p>
            What started as a small local property consultancy has grown into one of the most trusted real
            estate names in the region, having guided over{" "}
            <strong className="font-semibold text-navy">500 happy clients</strong> through{" "}
            <strong className="font-semibold text-navy">1000+ successful property transactions</strong>.
          </p>
          <p>
            Khehhra Group provides real-estate assistance across Batala, Gurdaspur, Amritsar and Dinanagar,
            helping clients with buying, selling, renting and leasing property with confidence.
          </p>
          <p>
            Our mission is to be the most reliable property partner across Batala and nearby Punjab regions
            — known for verified listings, honest advice, and complete support from the first visit to the
            final registry.
          </p>
          <p>
            Every client gets the same commitment: expert guidance, transparent pricing, and a team that
            treats their property decisions like their own.
          </p>
        </div>
      </div>
    </section>
  );
}

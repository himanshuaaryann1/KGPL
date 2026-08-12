import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Properties", href: "#properties" },
  { label: "Buy", href: "#intent" },
  { label: "Sell", href: "#intent" },
  { label: "Rent", href: "#intent" },
  { label: "Lease", href: "#intent" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-500">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8 sm:py-4 lg:px-10 transition-all duration-500 ${
          scrolled
            ? "bg-ivory/95 shadow-[0_10px_40px_-18px_rgba(16,35,63,0.18)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <a href="#home" className="flex flex-1 min-w-0 items-center gap-3 leading-none">
          <img
            src="/khehraNEWLOGO.png"
            alt="Khehhra Group logo"
            className="h-[48px] w-auto shrink-0 object-contain sm:h-[52px] lg:h-[58px]"
          />
          <div className="flex min-w-0 flex-col justify-center leading-tight">
            <span
              className={`font-display text-xl font-semibold tracking-tight sm:text-2xl ${
                scrolled ? "text-navy" : "text-white"
              }`}
            >
              Khehhra Group
            </span>
            <span
              className={`mt-0.5 text-[10px] font-medium uppercase tracking-[0.35em] ${
                scrolled ? "text-stone" : "text-white/75"
              }`}
            >
              Private Limited
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-[13px] font-medium uppercase tracking-wider transition-colors ${
                scrolled ? "text-navy/80 hover:text-navy" : "text-white/85 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:08269000066"
            className={`flex items-center gap-2 text-sm font-medium ${scrolled ? "text-navy" : "text-white"}`}
          >
            <Phone size={16} />
            08269000066
          </a>
          <a
            href="#intent"
            className="rounded-full bg-navy px-6 py-2.5 text-[13px] font-semibold uppercase tracking-wider text-white shadow-lg shadow-navy/20 transition-all hover:bg-navy-light"
          >
            Find Property
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden ${scrolled ? "text-navy" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-champagne/40 bg-ivory px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-navy/85"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#intent"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-navy px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider text-white"
            >
              Find Property
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

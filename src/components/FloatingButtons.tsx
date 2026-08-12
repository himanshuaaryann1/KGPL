import { MessageCircle, Phone } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3 sm:bottom-8 sm:right-8">
      <a
        href="tel:08269000066"
        aria-label="Call Khehhra Group"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-navy p-3.5 text-white shadow-lg shadow-navy/30 transition-transform hover:scale-110"
      >
        <Phone size={22} />
      </a>
      <a
        href="https://wa.me/918269000066"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Khehhra Group on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] p-3.5 text-white shadow-lg shadow-black/20 transition-transform hover:scale-110"
      >
        <MessageCircle size={22} />
      </a>
    </div>
  );
}

import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsAppButton: React.FC = () => {
  const whatsappUrl = "https://wa.me/919342813276?text=Hi%20Sebin%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you!";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact on WhatsApp +91-9342813276"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-slate-950 font-bold text-sm shadow-[0_0_25px_rgba(37,211,102,0.6)] hover:shadow-[0_0_40px_rgba(37,211,102,0.9)] hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer border-2 border-white/30"
    >
      <MessageCircle className="w-5 h-5 fill-slate-950 text-slate-950 group-hover:rotate-12 transition-transform" />
      <span className="hidden sm:inline font-black tracking-wide">Contact on WhatsApp</span>
    </a>
  );
};

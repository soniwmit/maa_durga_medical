import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';

interface FloatingActionsProps {
  onOpenWhatsAppModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenWhatsAppModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Desktop & Tablet Floating Action Buttons (Right Bottom) */}
      <div className="fixed bottom-6 right-8 z-40 hidden sm:flex flex-col gap-3 items-center">
        
        {/* Back to top button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="w-12 h-12 rounded-full bg-slate-800 hover:bg-slate-900 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95 border border-slate-700"
            title="Scroll to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Call Phone Floating Button */}
        <a
          href="tel:7542846888"
          aria-label="Call Maa Durga Medical Hall"
          className="bg-blue-600 hover:bg-blue-700 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform text-white"
          title="Call Store Desk"
        >
          <Phone className="w-6 h-6" />
        </a>

        {/* WhatsApp Floating Button */}
        <button
          onClick={onOpenWhatsAppModal}
          aria-label="Order on WhatsApp"
          className="bg-[#25D366] hover:bg-[#20bd5a] w-14 h-14 rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform text-white"
          title="Order via WhatsApp"
        >
          <MessageSquare className="w-7 h-7" />
        </button>

      </div>

      {/* Mobile Sticky Bottom CTA Bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-2.5 shadow-2xl">
        <div className="grid grid-cols-2 gap-2">
          <a
            href="tel:7542846888"
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-teal-300 dark:border-teal-800 bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-200 font-bold text-xs shadow-xs"
          >
            <Phone className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <span>Call: 7542846888</span>
          </a>

          <button
            onClick={onOpenWhatsAppModal}
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Order</span>
          </button>
        </div>
      </div>
    </>
  );
};

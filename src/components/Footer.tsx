import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, Phone, MessageSquare, Clock, Mail, ShieldCheck, 
  ExternalLink, HeartHandshake, ChevronRight, AlertCircle, FileText, X 
} from 'lucide-react';

export default function Footer() {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://crm.webmakerit.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid')!);
    }
    
    if (!cid) return;

    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid, 
        visitor_id: visitorId, 
        session_id: sessionId,
        page_name: getPageName(), 
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent, 
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, { 
        method: 'POST', 
        mode: 'cors', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(payload) 
      }).catch(() => {});
    };

    const sendExitPayload = () => {
      const payload = { 
        cid: cid, 
        session_id: sessionId, 
        page_name: getPageName(), 
        action: 'page_change' 
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, { 
          method: 'POST', 
          mode: 'cors', 
          headers: { 'Content-Type': 'application/json' }, 
          body: JSON.stringify(payload), 
          keepalive: true 
        }).catch(() => {});
      }
    };

    sendInitPayload();

    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: ReturnType<typeof setTimeout>;
    let isIdle = false;

    const resetIdleTimer = () => {
      if (isIdle) {
        isIdle = false;
        sendInitPayload(); // Wake up! Resume tracking
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isIdle = true;
        sendExitPayload(); // Inactive! Stop tracking
      }, 60000); // 60 Seconds
    };

    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach(evt => document.addEventListener(evt, resetIdleTimer, { passive: true }));
    resetIdleTimer(); // Initialize idle timer
    // ====================================

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') { 
        sendExitPayload(); 
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', sendExitPayload);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', sendExitPayload);
      activityEvents.forEach(evt => document.removeEventListener(evt, resetIdleTimer));
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800 transition-colors dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Overview */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#0A8F6A] flex items-center justify-center text-white font-extrabold text-lg shadow-md font-poppins">
                MD
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-white leading-tight font-poppins">
                  माँ दुर्गा मेडिकल हॉल
                </h3>
                <p className="text-xs text-emerald-400 font-medium tracking-wide">
                  Durga Medical Hall • Paliganj
                </p>
              </div>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed">
              Your most reliable local medical store in Paliganj, Bihar. Providing 100% genuine prescription medicines, baby care, surgical products, and healthcare devices at affordable prices.
            </p>

            <div className="flex items-center space-x-2 pt-2 text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 rounded-lg px-3 py-2 w-fit">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Licensed Pharmacy • Reg. Drug Store Bihar</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 font-poppins flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-400"></span>
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-teal-400 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-teal-400 transition-colors" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-teal-400 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-teal-400 transition-colors" />
                  About Our Store
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-teal-400 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-teal-400 transition-colors" />
                  Our Medical Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-teal-400 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-teal-400 transition-colors" />
                  Store Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-teal-400 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-teal-400 transition-colors" />
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info & Working Hours */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 font-poppins flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-400"></span>
              Store Information
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <span>8RG3+583, Sonari Gali, Paliganj, Bihar 801110</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href="tel:7542846888" className="hover:text-teal-300 transition-colors font-semibold">
                  +91 75428 46888
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href="https://wa.me/917542846888?text=Hello%20Maa%20Durga%20Medical%20Hall,%20I%20have%20an%20inquiry%20regarding%20medicine%20availability." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline font-medium"
                >
                  WhatsApp Order Desk
                </a>
              </li>
              <li className="flex items-center space-x-3 text-slate-300 pt-1">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <span>7:00 AM - 10:00 PM (All 7 Days)</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Google Map Snippet */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 font-poppins flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-400"></span>
              Location Map
            </h4>
            <div className="rounded-xl overflow-hidden border border-slate-700 shadow-md h-36 bg-slate-800 relative group">
              <iframe
                title="Maa Durga Medical Hall Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.283893309192!2d84.8122!3d25.3211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d356888888889%3A0x8888888888888888!2sSonari%20Gali%2C%20Paliganj%2C%20Bihar%20801110!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-80 group-hover:opacity-100 transition-opacity"
              ></iframe>
              <a 
                href="https://maps.google.com/?q=8RG3%2B583,+Sonari+Gali,+Paliganj,+Bihar+801110"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 right-2 bg-teal-600 hover:bg-teal-500 text-white text-xs px-2.5 py-1.5 rounded-lg shadow font-medium flex items-center gap-1"
              >
                Get Directions <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="text-xs text-slate-400 mt-2">
              Located at Sonari Gali, heart of Paliganj Market.
            </p>
          </div>

        </div>

        {/* Legal Links & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={() => setModalType('privacy')} 
              className="hover:text-teal-400 transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button 
              onClick={() => setModalType('terms')} 
              className="hover:text-teal-400 transition-colors"
            >
              Terms of Service
            </button>
            <span>•</span>
            <button 
              onClick={() => setModalType('disclaimer')} 
              className="hover:text-teal-400 transition-colors"
            >
              Medical Disclaimer
            </button>
          </div>

          <div className="text-center md:text-right space-y-1">
            <p>© {new Date().getFullYear()} माँ दुर्गा मेडिकल हॉल (Maa Durga Medical Hall). All rights reserved.</p>
            <p className="text-slate-400">
              Developed by{' '}
              <a href="#" class="wmit-popup-trigger">Developed by WMIT</a>
            </p>
          </div>
        </div>
      </div>

      {/* Legal Content Modal */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-slate-900 border border-slate-700 text-slate-200 rounded-2xl max-w-xl w-full p-6 shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <button 
              onClick={() => setModalType(null)} 
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            {modalType === 'privacy' && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-teal-400 font-bold text-lg font-poppins">
                  <ShieldCheck className="w-5 h-5" />
                  Privacy Policy
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Maa Durga Medical Hall respects customer privacy. Any information provided during WhatsApp ordering (such as phone numbers, addresses, and doctor prescriptions) is used solely for the fulfillment and delivery of your medicine orders in Paliganj, Bihar.
                </p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  We do not sell, rent, or distribute personal health information to any third parties. All prescription uploads are handled confidentially by our registered dispensing pharmacists.
                </p>
              </div>
            )}

            {modalType === 'terms' && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-teal-400 font-bold text-lg font-poppins">
                  <FileText className="w-5 h-5" />
                  Terms & Conditions
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Prescription medicines classified under Schedule H/H1 require a valid doctor's prescription prior to dispensing. Medicines are delivered locally across Paliganj and nearby areas.
                </p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Prices stated on the website reflect maximum retail price (MRP) or discounted rates available at our store. Returns or exchanges of opened or broken-seal medicine packs are subject to pharmaceutical hygiene protocols.
                </p>
              </div>
            )}

            {modalType === 'disclaimer' && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-lg font-poppins">
                  <AlertCircle className="w-5 h-5" />
                  Medical & Health Disclaimer
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  The health tips and product information on this website are provided for informational and educational purposes only and do not constitute professional medical advice or diagnosis.
                </p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Always consult a registered medical practitioner or doctor before starting any new medication or treatment. In case of acute medical emergencies, please visit the nearest hospital or emergency medical care center immediately.
                </p>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-slate-800 text-right">
              <button 
                onClick={() => setModalType(null)} 
                className="bg-teal-600 hover:bg-teal-500 text-white font-medium px-4 py-2 rounded-lg text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}

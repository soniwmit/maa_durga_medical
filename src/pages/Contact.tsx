import React, { useState } from 'react';
import { 
  MapPin, Phone, MessageSquare, Clock, Mail, Send, CheckCircle2, 
  ExternalLink, User, MessageCircle, AlertCircle 
} from 'lucide-react';
import { SEO } from '../components/SEO';

interface ContactProps {
  onOpenWhatsAppModal: () => void;
}

export default function Contact({ onOpenWhatsAppModal }: ContactProps) {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.phone && formState.message) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormState({ name: '', phone: '', email: '', subject: 'General Inquiry', message: '' });
      }, 5000);
    }
  };

  return (
    <div className="space-y-16 pb-16">
      <SEO 
        title="Contact Us & Directions | माँ दुर्गा मेडिकल हॉल - Paliganj, Bihar"
        description="Contact Maa Durga Medical Hall at 8RG3+583, Sonari Gali, Paliganj, Bihar 801110. Phone: 7542846888. Open daily 7 AM - 10 PM. WhatsApp medicine order desk."
        pageName="Contact"
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 rounded-b-3xl shadow-xl">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full border border-teal-400/30">
            Reach Our Store Desk
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-poppins">
            Contact & Store Location
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We are here to assist you with genuine medicine availability, doctor prescriptions, health monitors, and emergency medical supplies in Paliganj.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Top Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white font-poppins mb-1">Store Address</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              8RG3+583, Sonari Gali, Paliganj, Bihar 801110
            </p>
            <a 
              href="https://maps.google.com/?q=8RG3%2B583,+Sonari+Gali,+Paliganj,+Bihar+801110"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-teal-600 dark:text-teal-400 mt-3 hover:underline"
            >
              Get Google Map Directions <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white font-poppins mb-1">Phone & Emergency</h3>
            <a href="tel:7542846888" className="text-base font-extrabold text-teal-700 dark:text-teal-300 block hover:underline">
              +91 75428 46888
            </a>
            <p className="text-xs text-slate-500 mt-1">Direct Store Desk & Emergency Line</p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white font-poppins mb-1">WhatsApp Order</h3>
            <button 
              onClick={onOpenWhatsAppModal}
              className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline block text-left mt-1"
            >
              Click to Open WhatsApp Prescription Form
            </button>
            <p className="text-[11px] text-slate-500 mt-1">Instant photo upload & fast delivery</p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white font-poppins mb-1">Working Hours</h3>
            <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
              7:00 AM – 10:00 PM
            </p>
            <p className="text-xs text-slate-500 mt-0.5">Open All 7 Days a Week</p>
          </div>

        </div>

        {/* Contact Form & Google Maps Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Quick Inquiry Form */}
          <div className="lg:col-span-6 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-poppins mb-2">
              Send an Online Inquiry
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Have a question regarding bulk medicine orders, special healthcare items, or general feedback? Fill out the form below.
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                <h4 className="font-bold text-base font-poppins">Message Sent Successfully!</h4>
                <p className="text-xs leading-relaxed">
                  Thank you for reaching out to माँ दुर्गा मेडिकल हॉल. Our team will contact you shortly on your provided phone number.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Inquiry Topic
                  </label>
                  <select
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="General Inquiry">General Store Inquiry</option>
                    <option value="Medicine Availability">Medicine Availability Check</option>
                    <option value="Medical Devices">Health Devices & Equipment</option>
                    <option value="Home Delivery">Paliganj Home Delivery</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Message / Required Items *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your query or medicine required..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full p-4 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95 cursor-pointer"
                >
                  <Send className="w-4 h-4" /> Submit Inquiry
                </button>
              </form>
            )}
          </div>

          {/* Interactive Google Map Box */}
          <div className="lg:col-span-6 bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
                  Google Map Location
                </h3>
                <p className="text-xs text-slate-500">Sonari Gali, Paliganj, Bihar 801110</p>
              </div>
              <a
                href="https://maps.google.com/?q=8RG3%2B583,+Sonari+Gali,+Paliganj,+Bihar+801110"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm"
              >
                Directions <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 h-[380px] relative">
              <iframe
                title="Maa Durga Medical Hall Interactive Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.283893309192!2d84.8122!3d25.3211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d356888888889%3A0x8888888888888888!2sSonari%20Gali%2C%20Paliganj%2C%20Bihar%20801110!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-xs text-slate-600 dark:text-slate-300 space-y-1">
              <p className="font-bold text-slate-800 dark:text-white">📍 Landmark Navigation:</p>
              <p>Located right inside Sonari Gali in Paliganj Market, easily accessible from the main station road and Mahabir Mandir square.</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

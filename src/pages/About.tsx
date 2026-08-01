import React from 'react';
import { 
  ShieldCheck, Heart, Award, Target, Eye, Compass, Clock, MapPin, 
  CheckCircle2, Users, Building, Phone, MessageSquare, Sparkles 
} from 'lucide-react';
import { SEO } from '../components/SEO';

interface AboutProps {
  onOpenWhatsAppModal: () => void;
}

export default function About({ onOpenWhatsAppModal }: AboutProps) {
  const valuesList = [
    {
      title: '100% Genuine Authenticity',
      desc: 'We strictly procure medicines from authorized drug companies and verified stockists with valid invoices.',
      icon: ShieldCheck,
    },
    {
      title: 'Compassionate Care',
      desc: 'Treating every customer like family, providing patient guidance on proper dosage and medicine safety.',
      icon: Heart,
    },
    {
      title: 'Affordability & Fair Rates',
      desc: 'Offering maximum allowable discounts so essential life-saving medications remain accessible to everyone.',
      icon: Award,
    },
    {
      title: 'Fast Community Delivery',
      desc: 'Rapid express delivery across Paliganj town and neighboring villages for elderly and bedridden patients.',
      icon: Clock,
    },
  ];

  const timelineSteps = [
    {
      year: 'Store Foundation',
      title: 'Opened Store at Sonari Gali',
      desc: 'Established Maa Durga Medical Hall with a commitment to bring 100% authentic pharmaceuticals to Paliganj market.',
    },
    {
      year: 'Cold-Chain Facility',
      title: 'Vaccine & Insulin Refrigerator Setup',
      desc: 'Installed dedicated cold storage equipment to safely store temperature-sensitive insulin and vaccines.',
    },
    {
      year: 'Digital Inventory & Devices',
      title: 'Health Equipment Expansion',
      desc: 'Introduced certified digital BP monitors, glucometers, oximeters, and baby care lines.',
    },
    {
      year: 'WhatsApp Delivery Service',
      title: 'Prescription Express Delivery',
      desc: 'Launched instant WhatsApp prescription upload and doorstep delivery service across Paliganj and surroundings.',
    },
  ];

  return (
    <div className="space-y-16 pb-16">
      <SEO 
        title="About Us | माँ दुर्गा मेडिकल हॉल - Paliganj, Bihar"
        description="Learn about Maa Durga Medical Hall in Sonari Gali, Paliganj, Bihar. Our story, mission, licensed pharmacy credentials, and commitment to genuine healthcare."
        pageName="About"
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 rounded-b-3xl shadow-xl">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full border border-teal-400/30">
            Store History & Legacy
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-poppins">
            About माँ दुर्गा मेडिकल हॉल
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Your trusted health partner at Sonari Gali, Paliganj, Bihar. Committed to genuine medicines, patient care, and community well-being.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Business Story */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest">
              Our Business Story
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-poppins">
              Built on Decades of Trust, Integrity & Health Compliance
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Maa Durga Medical Hall was established in Paliganj with a singular focus: ensuring that no family in our community ever has to compromise on medicine quality or face counterfeit drugs.
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Located conveniently at 8RG3+583, Sonari Gali, Paliganj, Bihar 801110, our store stocks a comprehensive range of prescription drugs, over-the-counter pain relievers, baby care products, surgical dressings, and home healthcare devices.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-slate-800 dark:text-slate-200">
              <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Reg. Drug License Bihar
              </div>
              <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Qualified Pharmacist Desk
              </div>
              <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Cold Storage Refrigeration
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1000&q=80" 
                alt="Maa Durga Medical Hall Store Front"
                className="w-full h-80 object-cover"
              />
              <div className="p-6 bg-slate-900 text-white">
                <p className="text-xs text-teal-400 font-bold uppercase tracking-wider">Paliganj Location</p>
                <p className="text-base font-bold font-poppins">Sonari Gali, Paliganj, Bihar 801110</p>
                <p className="text-xs text-slate-300 mt-1">Open 7 Days • 7:00 AM to 10:00 PM</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision & Values */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-teal-50/60 dark:bg-slate-900 border border-teal-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-poppins">Our Mission</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              To deliver 100% authentic, high-quality pharmaceutical care and healthcare equipment to the citizens of Paliganj at fair prices, backed by compassionate customer support and instant WhatsApp order delivery.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-emerald-50/60 dark:bg-slate-900 border border-emerald-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-poppins">Our Vision</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              To be recognized as the premier, most reliable retail medical destination in Patna district, continuously pioneering modern digital ordering while maintaining traditional community care.
            </p>
          </div>
        </section>

        {/* Core Values Grid */}
        <section>
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest">
              What Guides Us
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-poppins mt-1">
              Our Core Business Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valuesList.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 flex items-center justify-center mb-3">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-lg text-slate-900 dark:text-white font-poppins mb-1">{val.title}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Pharmacist / Owner Message */}
        <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" /> Message from Store Management
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins">
              "Your Health & Satisfaction is Our Sacred Duty"
            </h2>
            <blockquote className="text-sm sm:text-base text-slate-300 italic leading-relaxed border-l-4 border-teal-400 pl-4 py-1">
              "At माँ दुर्गा मेडिकल हॉल, we believe medicine is not just a business — it is a life-saving service. Whether you need a simple fever tablet or critical chronic disease medication, we ensure that every pill dispensed is genuine, stored under proper conditions, and delivered with warmth."
            </blockquote>
            <div className="pt-2">
              <p className="font-bold text-base text-white font-poppins">Maa Durga Medical Hall Team</p>
              <p className="text-xs text-teal-400">Sonari Gali, Paliganj, Bihar</p>
            </div>
          </div>
        </section>

        {/* Business Timeline */}
        <section>
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest">
              Milestones
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-poppins mt-1">
              Store Journey & Growth
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineSteps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 relative">
                <span className="text-xs font-bold text-teal-600 dark:text-teal-400 bg-teal-100 dark:bg-teal-950 px-3 py-1 rounded-full inline-block mb-3">
                  {step.year}
                </span>
                <h4 className="font-bold text-base text-slate-900 dark:text-white font-poppins mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 text-white text-center shadow-xl">
          <h2 className="text-2xl font-extrabold font-poppins mb-2">Have Questions About Your Prescription?</h2>
          <p className="text-sm text-emerald-100 max-w-lg mx-auto mb-6">
            Call or send a message on WhatsApp. Our registered pharmacist will guide you instantly.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenWhatsAppModal}
              className="bg-white text-emerald-800 font-bold px-6 py-3 rounded-xl shadow-md text-sm cursor-pointer"
            >
              Contact on WhatsApp
            </button>
            <a
              href="tel:7542846888"
              className="bg-emerald-950/60 text-white font-bold px-6 py-3 rounded-xl border border-emerald-400/30 text-sm"
            >
              Call Store: 7542846888
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}

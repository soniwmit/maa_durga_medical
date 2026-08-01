import React, { useState } from 'react';
import { 
  Pill, Activity, Heart, Stethoscope, Sparkles, Truck, ShieldCheck, 
  Baby, Smile, Bandage, Phone, MessageSquare, Search, ChevronRight 
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { MedicineStockChecker } from '../components/MedicineStockChecker';

interface ServicesProps {
  onOpenWhatsAppModal: (medicineName?: string) => void;
}

export default function Services({ onOpenWhatsAppModal }: ServicesProps) {
  const [selectedCatFilter, setSelectedCatFilter] = useState('All');

  const categoriesData = [
    {
      id: 'prescription',
      title: 'Prescription Medicines (Rx)',
      icon: Pill,
      badge: '100% Genuine',
      desc: 'Complete inventory of Schedule H, Schedule H1, cardiac, anti-diabetic, antibiotic, and hypertension medications from trusted global & Indian manufacturers.',
      items: ['Hypertension & Heart Care (Telmisartan, Amlodipine)', 'Diabetes Management (Metformin, Glimepiride)', 'Antibiotics & Anti-Infectives (Azithromycin, Amoxicillin)', 'Gastro & Acid Reflux (Pantoprazole, Omeprazole)', 'Cold-Chain Insulins & Injections'],
    },
    {
      id: 'devices',
      title: 'Health Devices & Equipment',
      icon: Activity,
      badge: 'Certified Accuracy',
      desc: 'Hospital-grade digital diagnostic monitors for convenient home health tracking and vital monitoring.',
      items: ['Digital Blood Pressure Monitors (Omron, Dr. Trust)', 'Blood Glucose Meters & Test Strips (Accu-Chek, OneTouch)', 'Pulse Oximeters & Digital Thermometers', 'Compressor Nebulizers & Vaporizers', 'Orthopedic Braces & Heating Pads'],
    },
    {
      id: 'babycare',
      title: 'Baby Care & Infant Essentials',
      icon: Baby,
      badge: 'Dermatologist Safe',
      desc: 'Gentle, pH-balanced infant skincare, baby food formulas, and daily hygiene supplies for newborn care.',
      items: ['Infant Milk Formulas & Cerelac Powders', 'Hypoallergenic Baby Shampoos & Gentle Soap', 'Anti-Rash Creams & Baby Oils (Sebamed, Himalaya)', 'Diapers, Wipes & Feeding Bottles'],
    },
    {
      id: 'supplements',
      title: 'Nutritional & Immunity Supplements',
      icon: Sparkles,
      badge: 'Vitality Boost',
      desc: 'Daily health supplements, multivitamins, mineral tonics, and energy drinks to keep immunity strong.',
      items: ['Multivitamin & Zinc Syrups (Zincovit, Revital)', 'Calcium & Vitamin D3 Capsules (Shelcal)', 'Protein Powders & Nutritional Drinks', 'Herbal Immunity Boosters & Chawanprash'],
    },
    {
      id: 'otc',
      title: 'OTC Medicines & First Aid',
      icon: Bandage,
      badge: 'Instant Relief',
      desc: 'Everyday over-the-counter pain relievers, digestive antacids, burn dressings, and wound bandages.',
      items: ['Pain Relief Sprays & Ointments (Volini, Moov)', 'Antacids & Gas Relief Gel (Digene, Gelusil)', 'Antiseptic Liquids & Ointments (Dettol, Betadine)', 'First Aid Kits, Bandages & Gauze Rolls'],
    },
    {
      id: 'personalcare',
      title: 'Personal Care & Skin Hygiene',
      icon: Smile,
      badge: 'Daily Care',
      desc: 'Skincare gels, antiseptic soaps, hair care solutions, and feminine hygiene products.',
      items: ['Medicated Soaps & Anti-Fungal Powders', 'Moisturizing Lotions & Sunscreen Lotions', 'Oral Care & Mouthwashes', 'Feminine Hygiene Essentials'],
    },
  ];

  return (
    <div className="space-y-16 pb-16">
      <SEO 
        title="Medical Services & Medicine Categories | Maa Durga Medical Hall Paliganj"
        description="Explore complete pharmacy services in Paliganj: prescription drugs, OTC medicines, BP/sugar monitors, baby care, surgical supplies, and instant WhatsApp ordering."
        pageName="Services"
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-teal-900 via-slate-900 to-teal-950 text-white py-16 px-4 sm:px-6 lg:px-8 rounded-b-3xl shadow-xl">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full border border-teal-400/30">
            Comprehensive Pharmacy Catalog
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-poppins">
            Healthcare Services & Medicine Categories
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            At माँ दुर्गा मेडिकल हॉल, we stock over 2,000+ authentic pharmaceutical products, medical equipment, and healthcare essentials for Paliganj families.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* EXCLUSIVE FEATURE: MEDICINE STOCK CHECKER */}
        <section>
          <MedicineStockChecker onOrderClick={(name) => onOpenWhatsAppModal(name)} compactMode={false} />
        </section>

        {/* CATEGORY-WISE SERVICES & PRODUCTS GRID */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest">
              Structured Healthcare Range
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-poppins mt-1">
              Complete Category Breakdown
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
              All medicines are stored under ideal temperature conditions and checked for valid batch expiry dates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoriesData.map((cat) => {
              const IconComp = cat.icon;
              return (
                <div
                  key={cat.id}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:border-teal-400 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 flex items-center justify-center shadow-xs">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950 px-3 py-1 rounded-full">
                        {cat.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {cat.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {cat.desc}
                    </p>

                    <div className="space-y-2 mb-6">
                      <p className="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider">
                        Key Available Products:
                      </p>
                      <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                        {cat.items.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                    <button
                      onClick={() => onOpenWhatsAppModal(cat.title)}
                      className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Order {cat.title.split(' ')[0]} via WhatsApp
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* PRESCRIPTION ORDER STEPS */}
        <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">Simple 3-Step Process</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins mt-1">
              How to Order Medicines via WhatsApp
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center mx-auto font-bold text-xl">
                1
              </div>
              <h3 className="font-bold text-lg font-poppins">Snap Prescription</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Take a clear mobile photo of your doctor's prescription slip or write down required medicine names.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto font-bold text-xl">
                2
              </div>
              <h3 className="font-bold text-lg font-poppins">Send to 7542846888</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Send the prescription along with your Paliganj address to our official WhatsApp ordering number.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto font-bold text-xl">
                3
              </div>
              <h3 className="font-bold text-lg font-poppins">Receive & Pay COD</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our delivery rider brings your order safely to your home. Pay via Cash or GPay/PhonePe upon receipt.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

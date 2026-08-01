import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, MessageSquare, MapPin, ShieldCheck, Heart, Truck, Award, CheckCircle2, 
  ChevronRight, Star, HelpCircle, Sparkles, Pill, Activity, Stethoscope, ArrowRight, 
  Clock, Calendar, Zap, Mail, Send
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { MedicineStockChecker } from '../components/MedicineStockChecker';
import { faqList } from '../data/faqData';

interface HomeProps {
  onOpenWhatsAppModal: (medicineName?: string) => void;
}

export default function Home({ onOpenWhatsAppModal }: HomeProps) {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const featuredServicesPreview = [
    {
      title: 'Genuine Prescription Medicines',
      desc: '100% authentic, batch-verified Schedule H and Rx medications from top pharmaceutical brands.',
      icon: Pill,
      color: 'from-teal-500 to-emerald-600',
    },
    {
      title: 'Health & BP Monitors',
      desc: 'Certified blood pressure cuffs, digital glucometers, pulse oximeters, and nebulizers.',
      icon: Activity,
      color: 'from-blue-500 to-teal-600',
    },
    {
      title: 'Infant & Baby Essentials',
      desc: 'Dermatologist-tested baby powders, creams, milk formulas, diapers, and gentle wipes.',
      icon: Heart,
      color: 'from-emerald-500 to-teal-700',
    },
    {
      title: 'Surgical & First Aid Kits',
      desc: 'Sterile bandages, antiseptic liquids, burn creams, crepe rolls, and wound care dressings.',
      icon: Stethoscope,
      color: 'from-teal-600 to-emerald-700',
    },
    {
      title: 'Daily Wellness & Vitamins',
      desc: 'Immunity boosters, multivitamin syrups, calcium supplements, and protein powders.',
      icon: Sparkles,
      color: 'from-emerald-600 to-teal-500',
    },
    {
      title: 'Express Paliganj Home Delivery',
      desc: 'Order via WhatsApp and get fast, safe door-step delivery in Paliganj and nearby areas.',
      icon: Truck,
      color: 'from-blue-600 to-teal-600',
    },
  ];

  const topProducts = [
    { name: 'Dolo 650mg Tablet', cat: 'Fever Care', mrp: '₹34', discount: '₹30', img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80' },
    { name: 'Omron Digital BP Monitor', cat: 'Devices', mrp: '₹2480', discount: '₹2150', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80' },
    { name: 'Sebamed Gentle Baby Wash', cat: 'Baby Care', mrp: '₹540', discount: '₹485', img: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80' },
    { name: 'Zincovit Multivitamin Syrup', cat: 'Supplements', mrp: '₹165', discount: '₹145', img: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=600&q=80' },
  ];

  const reviewHighlights = [
    {
      author: 'Rajesh Kumar Singh',
      location: 'Sonari Gali, Paliganj',
      rating: 5,
      date: 'Recent Customer',
      comment: 'Best medical store in Paliganj. Always provides 100% genuine medicines and reasonable prices. The owner and staff are very helpful!',
    },
    {
      author: 'Priya Kumari',
      location: 'Paliganj Main Market',
      rating: 5,
      date: 'Recent Customer',
      comment: 'Ordered medicine via WhatsApp for my grandmother. Delivery was super quick within 2 hours. Very trustworthy pharmacy!',
    },
    {
      author: 'Dr. A. K. Verma',
      location: 'Local Practitioner',
      rating: 5,
      date: 'Verified Healthcare Review',
      comment: 'Maa Durga Medical Hall maintains high pharmaceutical standards, authentic stock, and proper storage of cold-chain vaccines.',
    },
  ];

  const healthTips = [
    {
      title: '5 Crucial Tips to Keep Blood Pressure Normal',
      category: 'Heart Wellness',
      readTime: '3 min read',
      snippet: 'Simple dietary changes, reducing daily sodium intake, and regular monitoring using digital BP cuffs can prevent hypertension.',
    },
    {
      title: 'How to Store Prescription Medicines at Home safely',
      category: 'Medicine Care',
      readTime: '2 min read',
      snippet: 'Keep insulins and eye drops stored at 2-8°C, and avoid placing tablets in direct sunlight or humid bathrooms.',
    },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setNewsletterEmail('');
    }
  };

  return (
    <div className="space-y-16 sm:space-y-20 pb-12">
      <SEO 
        title="माँ दुर्गा मेडिकल हॉल | Maa Durga Medical Hall - Trusted Pharmacy Paliganj, Bihar"
        description="Maa Durga Medical Hall is Paliganj's trusted pharmacy offering 100% genuine medicines, baby care, surgical items, healthcare devices, and WhatsApp order delivery in Bihar."
        pageName="Home"
        faqItems={faqList.map(f => ({ question: f.question, answer: f.answer }))}
      />

      {/* 1. CLEAN MINIMALISM HERO SECTION */}
      <section className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center min-h-[520px] p-6 sm:p-10 lg:p-12">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 pr-0 lg:pr-8">
            <div>
              <span className="inline-block bg-emerald-50 dark:bg-emerald-950/80 text-[#0A8F6A] dark:text-emerald-400 text-xs font-extrabold px-3.5 py-1.5 rounded-full mb-4 border border-emerald-100 dark:border-emerald-800/60 uppercase tracking-wider">
                BIHAR'S MOST TRUSTED PHARMACY • PALIGANJ
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins leading-[1.15] tracking-tight">
                Your Trusted Partner for <br />
                <span className="text-[#0A8F6A] dark:text-emerald-400">
                  Genuine Medicines
                </span>
              </h1>
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
              Providing genuine medicines, healthcare products, surgical supplies, and baby care essentials at affordable prices in Paliganj.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenWhatsAppModal()}
                className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-lg shadow-blue-200 dark:shadow-none flex items-center gap-2 transition-all active:scale-95 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5" />
                Order via WhatsApp
              </button>

              <a
                href="tel:7542846888"
                className="bg-slate-900 dark:bg-slate-800 text-white px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base flex items-center gap-2 hover:bg-slate-800 dark:hover:bg-slate-700 transition-all shadow-md"
              >
                <Phone className="w-5 h-5 text-emerald-400" />
                Call Store Now
              </a>

              <a
                href="https://maps.google.com/?q=8RG3%2B583,+Sonari+Gali,+Paliganj,+Bihar+801110"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 px-6 py-3 rounded-xl font-bold text-sm sm:text-base hover:border-[#0A8F6A] hover:text-[#0A8F6A] dark:hover:text-emerald-400 transition-all flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-[#0A8F6A]" />
                Find Directions
              </a>
            </div>

            <div className="pt-4 flex items-center gap-6 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0A8F6A]" /> 100% Licensed & Authentic
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0A8F6A]" /> Open 8 AM - 10 PM
              </span>
            </div>
          </div>

          {/* Right Side Live Inventory Card & Badges */}
          <div className="lg:col-span-5 flex flex-col gap-5 items-center justify-center">
            <div className="w-full max-w-md bg-white dark:bg-slate-850 p-6 rounded-3xl shadow-xl shadow-slate-200/60 dark:shadow-none border border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></div>
                  <h3 className="font-bold text-slate-800 dark:text-white text-sm font-poppins">Live Stock Checker</h3>
                </div>
                <span className="text-[10px] font-bold text-[#0A8F6A] bg-emerald-50 dark:bg-emerald-950 px-2.5 py-1 rounded-full border border-emerald-100 dark:border-emerald-800">
                  Paliganj Desk
                </span>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center p-3.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-100 dark:border-emerald-800/60">
                  <div>
                    <p className="text-xs font-bold text-emerald-900 dark:text-emerald-200 font-poppins">Paracetamol 500mg (Dolo / Calpol)</p>
                    <p className="text-[10px] text-emerald-700 dark:text-emerald-400">Cipla Ltd. • Ready Stock</p>
                  </div>
                  <span className="text-[10px] font-black text-emerald-800 dark:text-emerald-300 bg-white dark:bg-slate-900 px-2.5 py-1 rounded-full border border-emerald-200">
                    AVAILABLE
                  </span>
                </div>

                <div className="flex justify-between items-center p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-100 dark:border-amber-800/60">
                  <div>
                    <p className="text-xs font-bold text-amber-900 dark:text-amber-200 font-poppins">Amoxicillin & Potassium Clavulanate</p>
                    <p className="text-[10px] text-amber-700 dark:text-amber-400">Abbott Health • High Demand</p>
                  </div>
                  <span className="text-[10px] font-black text-amber-800 dark:text-amber-300 bg-white dark:bg-slate-900 px-2.5 py-1 rounded-full uppercase border border-amber-200">
                    LIMITED
                  </span>
                </div>

                <div className="flex justify-between items-center p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-xl border border-blue-100 dark:border-blue-800/60">
                  <div>
                    <p className="text-xs font-bold text-blue-900 dark:text-blue-200 font-poppins">Omron Digital BP Monitor (HEM-7120)</p>
                    <p className="text-[10px] text-blue-700 dark:text-blue-400">Omron Healthcare • Tested Accuracy</p>
                  </div>
                  <span className="text-[10px] font-black text-blue-800 dark:text-blue-300 bg-white dark:bg-slate-900 px-2.5 py-1 rounded-full border border-blue-200">
                    IN STOCK
                  </span>
                </div>
              </div>

              <button
                onClick={() => onOpenWhatsAppModal()}
                className="w-full py-3 px-4 rounded-xl bg-[#0A8F6A] hover:bg-emerald-700 text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                Check Full Catalog on WhatsApp
              </button>
            </div>
            
            {/* Quick Features Pill Grid */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
              <div className="bg-[#0A8F6A] p-4 rounded-2xl text-white shadow-md">
                <p className="text-[10px] font-bold opacity-80 uppercase tracking-wider">Fast Home Delivery</p>
                <p className="text-lg font-extrabold font-poppins">Under 2 Hours</p>
              </div>
              <div className="bg-blue-600 p-4 rounded-2xl text-white shadow-md">
                <p className="text-[10px] font-bold opacity-80 uppercase tracking-wider">Reliability</p>
                <p className="text-lg font-extrabold font-poppins">100% Genuine</p>
              </div>
            </div>
          </div>

        </div>

        {/* Featured 4-Column Feature Cards Strip */}
        <div className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-6 sm:px-12 py-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-4 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors">
              <div className="w-12 h-12 shrink-0 bg-blue-50 dark:bg-blue-950/60 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 font-extrabold text-lg">
                Rx
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1 font-poppins">Prescription Meds</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Full range of critical and chronic care medications.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors">
              <div className="w-12 h-12 shrink-0 bg-emerald-50 dark:bg-emerald-950/60 rounded-2xl flex items-center justify-center text-[#0A8F6A] dark:text-emerald-400 font-extrabold text-lg font-serif">
                B
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1 font-poppins">Baby & Mother</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Specialized care products for infants and new mothers.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors">
              <div className="w-12 h-12 shrink-0 bg-purple-50 dark:bg-purple-950/60 rounded-2xl flex items-center justify-center text-purple-600 dark:text-purple-400">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1 font-poppins">Health Devices</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Digital BP monitors, Glucometers, and Nebulizers.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors">
              <div className="w-12 h-12 shrink-0 bg-rose-50 dark:bg-rose-950/60 rounded-2xl flex items-center justify-center text-rose-600 dark:text-rose-400">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1 font-poppins">Personal Care</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Skin care, hygiene, and daily wellness essentials.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* 2. MEDICINE INVENTORY SEARCH WIDGET PREVIEW */}
        <section>
          <MedicineStockChecker onOrderClick={(name) => onOpenWhatsAppModal(name)} compactMode={true} />
        </section>

        {/* 3. SHORT ABOUT PREVIEW */}
        <section className="bg-gradient-to-br from-teal-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-850 dark:to-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/80 px-3 py-1 rounded-full uppercase tracking-wider">
                Trusted Pharmacy in Paliganj
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-poppins leading-tight">
                Serving Paliganj Families with Uncompromising Care & Authentic Medicines
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Maa Durga Medical Hall, located at Sonari Gali, Paliganj, Bihar, has earned the trust of thousands of local families. We specialize in providing verified prescription drugs, pediatric care, vital health monitors, and daily healthcare essentials.
              </p>
              
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Licensed Retail Pharmacy</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Temperature Controlled Storage</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Expert Pharmacist Advice</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Affordable Prices & Discounts</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 font-bold text-sm text-teal-700 dark:text-teal-400 hover:text-teal-900 dark:hover:text-teal-300 group"
                >
                  <span>Learn More About Our Journey & Values</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-700">
                <img 
                  src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=800&q=80" 
                  alt="Pharmacist shelf at Maa Durga Medical Hall"
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs text-teal-300 font-semibold">Store Manager & Pharmacist Desk</p>
                    <p className="text-sm font-bold">Paliganj, Sonari Gali Branch</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 4. FEATURED SERVICES PREVIEW (Maximum 6 Cards) */}
        <section>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest">
                Our Core Offerings
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-poppins mt-1">
                Healthcare Services & Products
              </h2>
            </div>
            <Link
              to="/services"
              className="mt-3 md:mt-0 inline-flex items-center gap-1.5 font-bold text-sm text-teal-600 dark:text-teal-400 hover:underline"
            >
              View All Services & Categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServicesPreview.map((srv, idx) => {
              const IconComp = srv.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-teal-400 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${srv.color} text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins mb-2">
                      {srv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <button
                      onClick={() => onOpenWhatsAppModal(srv.title)}
                      className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                    >
                      Inquire on WhatsApp <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 5. WHY CHOOSE US */}
        <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
              Unmatched Quality & Service
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins mt-1">
              Why Paliganj Trusts Maa Durga Medical Hall
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              We combine strict pharmaceutical compliance with warm, compassionate customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80">
              <div className="w-10 h-10 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center mb-3">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-base font-poppins mb-1">100% Genuine Medicines</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct procurement from authorized pharmaceutical companies guarantees zero counterfeit drugs.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-base font-poppins mb-1">Licensed Pharmacists</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Qualified guidance on dosage instructions, contraindications, and medicine substitutes.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80">
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
                <Truck className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-base font-poppins mb-1">Quick Home Delivery</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Send your prescription on WhatsApp for fast, hassle-free doorstep delivery in Paliganj.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80">
              <div className="w-10 h-10 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center mb-3">
                <Heart className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-base font-poppins mb-1">Fair & Affordable Pricing</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Attractive discounts on regular healthcare maintenance medicines and equipment.
              </p>
            </div>
          </div>
        </section>

        {/* 6. FEATURED PRODUCTS PREVIEW */}
        <section>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest">
                Top Sellers & Essentials
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-poppins mt-1">
                Featured Medical & Health Products
              </h2>
            </div>
            <Link
              to="/services"
              className="mt-3 md:mt-0 inline-flex items-center gap-1 font-bold text-sm text-teal-600 dark:text-teal-400 hover:underline"
            >
              Check Full Inventory <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topProducts.map((prod, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 overflow-hidden relative bg-slate-100 dark:bg-slate-800">
                    <img 
                      src={prod.img} 
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2 left-2 bg-emerald-600 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-xs">
                      {prod.cat}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-base text-slate-900 dark:text-white font-poppins group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {prod.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">Authentic Manufacturer Stock</p>
                  </div>
                </div>

                <div className="p-4 pt-0 flex items-center justify-between border-t border-slate-100 dark:border-slate-800/60 mt-2">
                  <div>
                    <span className="text-lg font-bold text-slate-900 dark:text-white font-poppins">{prod.discount}</span>
                    <span className="text-xs text-slate-400 line-through ml-1.5">{prod.mrp}</span>
                  </div>
                  <button
                    onClick={() => onOpenWhatsAppModal(prod.name)}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-3 py-2 rounded-xl shadow-xs"
                  >
                    Buy via WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. CUSTOMER REVIEWS PREVIEW */}
        <section className="bg-slate-50 dark:bg-slate-900/60 rounded-3xl p-8 border border-slate-200 dark:border-slate-800">
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="flex items-center justify-center gap-1 text-amber-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-poppins">
              What Local Customers Say About Us
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Summarized feedback from verified local residents in Paliganj, Bihar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviewHighlights.map((rev, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-2">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed mb-4">
                    "{rev.comment}"
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white font-poppins">{rev.author}</h4>
                  <p className="text-[11px] text-teal-600 dark:text-teal-400">{rev.location}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 8. FAQ PREVIEW */}
        <section>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest">
                Common Questions
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-poppins mt-1">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {faqList.slice(0, 4).map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaqId(openFaqId === faq.id ? null : faq.id)}
                    className="w-full p-5 text-left font-bold text-slate-900 dark:text-white text-sm sm:text-base flex items-center justify-between gap-4 font-poppins hover:text-teal-600 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronRight className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${openFaqId === faq.id ? 'rotate-90 text-teal-600' : ''}`} />
                  </button>

                  {openFaqId === faq.id && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 font-bold text-sm text-teal-600 dark:text-teal-400 hover:underline"
              >
                Have More Questions? Contact Store Desk <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 9. CALL TO ACTION BANNER */}
        <section className="bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold">
              <Zap className="w-3.5 h-3.5 text-amber-300" /> Instant Order Fulfillment
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-poppins leading-tight">
              Need Medicine Delivered at Your Doorstep in Paliganj?
            </h2>
            <p className="text-sm sm:text-base text-emerald-100 max-w-xl leading-relaxed">
              Snap a photo of your doctor's prescription and send it to our WhatsApp number. Our team will prepare your bill and deliver it right away!
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenWhatsAppModal()}
                className="px-6 py-3.5 rounded-2xl bg-white text-emerald-800 font-extrabold text-sm sm:text-base shadow-lg hover:bg-emerald-50 transition-all flex items-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 text-emerald-600" />
                Upload Prescription on WhatsApp
              </button>
              <a
                href="tel:7542846888"
                className="px-6 py-3.5 rounded-2xl bg-emerald-900/80 hover:bg-emerald-900 text-white border border-emerald-400/40 font-extrabold text-sm sm:text-base flex items-center gap-2 transition-all"
              >
                <Phone className="w-5 h-5 text-amber-300" />
                Call Store Desk
              </a>
            </div>
          </div>
        </section>

        {/* 10. LATEST HEALTH TIPS PREVIEW */}
        <section>
          <div className="mb-6">
            <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest">
              Pharmacist Advice
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-poppins mt-1">
              Health & Wellness Tips
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {healthTips.map((tip, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-teal-600 dark:text-teal-400 mb-2">
                    <span>{tip.category}</span>
                    <span>•</span>
                    <span className="text-slate-400 font-normal">{tip.readTime}</span>
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white font-poppins mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {tip.snippet}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 11. NEWSLETTER */}
        <section className="bg-slate-100 dark:bg-slate-800/80 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 text-center max-w-2xl mx-auto">
          <Mail className="w-10 h-10 text-teal-600 mx-auto mb-3" />
          <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
            Stay Updated with Health Offers & Stock Alerts
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 mb-4">
            Subscribe for monthly health updates, seasonal care tips, and essential medicine stock alerts in Paliganj.
          </p>

          {subscribed ? (
            <div className="p-3 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 rounded-xl font-bold text-xs">
              Thank you for subscribing! We will keep you updated.
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your email address..."
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 px-4 py-3 text-sm rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow-md flex items-center justify-center gap-1.5"
              >
                <Send className="w-4 h-4" /> Subscribe
              </button>
            </form>
          )}
        </section>

      </div>
    </div>
  );
}

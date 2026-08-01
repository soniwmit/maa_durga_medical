import React, { useState } from 'react';
import { X, ZoomIn, Filter, Image as ImageIcon, MapPin, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/SEO';
import { galleryImages } from '../data/galleryData';
import { GalleryImage } from '../types';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const categories = ['All', 'Store Front', 'Medicine Shelves', 'Health Devices', 'Baby Care', 'Supplements', 'Surgicals'];

  const filteredImages = galleryImages.filter(
    img => activeCategory === 'All' || img.category === activeCategory
  );

  return (
    <div className="space-y-12 pb-16">
      <SEO 
        title="Store Gallery & Photos | माँ दुर्गा मेडिकल हॉल - Paliganj, Bihar"
        description="View photos of Maa Durga Medical Hall store front, organized medicine shelves, health devices, baby care essentials, and pharmacist counter at Sonari Gali, Paliganj."
        pageName="Gallery"
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 rounded-b-3xl shadow-xl">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full border border-teal-400/30">
            Visual Experience
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-poppins">
            Store Photo Gallery
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Take a visual tour of माँ दुर्गा मेडिकल हॉल in Sonari Gali, Paliganj. Explore our clean environment, temperature-regulated medicine racks, and diagnostic devices.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-teal-600 text-white shadow-md shadow-teal-600/30'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setLightboxImage(img)}
              className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-2xl transition-all cursor-pointer transform hover:-translate-y-1"
            >
              <div className="h-60 overflow-hidden relative">
                <img 
                  src={img.url} 
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <div className="p-3 rounded-full bg-teal-600/90 shadow-lg flex items-center gap-1.5 font-bold text-xs">
                    <ZoomIn className="w-5 h-5" /> Zoom Photo
                  </div>
                </div>
                <span className="absolute top-3 left-3 bg-slate-900/80 text-teal-300 text-[10px] font-bold px-2.5 py-1 rounded-md backdrop-blur-xs">
                  {img.category}
                </span>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-sm text-slate-900 dark:text-white font-poppins group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {img.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
            <div className="relative max-w-4xl w-full bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl text-white">
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
                <img 
                  src={lightboxImage.url} 
                  alt={lightboxImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              </div>

              <div className="p-6 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">
                    {lightboxImage.category}
                  </span>
                  <span className="text-xs text-slate-400">Sonari Gali, Paliganj</span>
                </div>
                <h3 className="text-xl font-bold font-poppins">{lightboxImage.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{lightboxImage.caption}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

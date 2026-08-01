import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { WhatsAppModal } from './components/WhatsAppModal';
import { Pill } from 'lucide-react';

// Lazy loading all 5 required React pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));

// Helper component to scroll to top on page change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Fallback loader while lazy pages load
function LoadingFallback() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4 p-8">
      <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center animate-bounce shadow-lg shadow-teal-600/30">
        <Pill className="w-6 h-6" />
      </div>
      <p className="text-sm font-bold text-teal-700 dark:text-teal-400 font-poppins">
        Loading माँ दुर्गा मेडिकल हॉल...
      </p>
    </div>
  );
}

export default function App() {
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [selectedMedicineName, setSelectedMedicineName] = useState('');

  const handleOpenWhatsAppModal = (medicineName?: string) => {
    setSelectedMedicineName(medicineName || '');
    setIsWhatsAppModalOpen(true);
  };

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-200">
          
          {/* Sticky Navbar */}
          <Navbar onOpenWhatsAppModal={handleOpenWhatsAppModal} />

          {/* Main Route View */}
          <main className="flex-grow">
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<Home onOpenWhatsAppModal={handleOpenWhatsAppModal} />} />
                <Route path="/about" element={<About onOpenWhatsAppModal={handleOpenWhatsAppModal} />} />
                <Route path="/services" element={<Services onOpenWhatsAppModal={handleOpenWhatsAppModal} />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact onOpenWhatsAppModal={handleOpenWhatsAppModal} />} />
                <Route path="*" element={<Home onOpenWhatsAppModal={handleOpenWhatsAppModal} />} />
              </Routes>
            </Suspense>
          </main>

          {/* Global Footer with Tracking Hook */}
          <Footer />

          {/* Floating Actions (Call, WhatsApp, BackToTop) */}
          <FloatingActions onOpenWhatsAppModal={handleOpenWhatsAppModal} />

          {/* WhatsApp Medicine Order Modal */}
          <WhatsAppModal
            isOpen={isWhatsAppModalOpen}
            onClose={() => setIsWhatsAppModalOpen(false)}
            prefilledMedicine={selectedMedicineName}
          />

        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

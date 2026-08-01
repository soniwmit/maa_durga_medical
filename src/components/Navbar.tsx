import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  Phone, MessageSquare, Sun, Moon, Menu, X, MapPin, Clock, ShieldAlert 
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenWhatsAppModal: (medicineName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWhatsAppModal }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services & Products', path: '/services' },
    { name: 'Store Gallery', path: '/gallery' },
    { name: 'Contact & Location', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Banner Bar */}
      <div className="bg-[#0A8F6A] text-white text-xs py-1.5 px-4 sm:px-8 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4">
          <div className="flex items-center space-x-3 text-white overflow-x-auto whitespace-nowrap font-medium">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-emerald-200 shrink-0" />
              📍 Sonari Gali, Paliganj, Bihar 801110
            </span>
            <span className="hidden md:inline text-emerald-300">•</span>
            <span className="hidden md:flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-emerald-200 shrink-0" />
              Open Daily: 08:00 AM - 10:00 PM
            </span>
          </div>

          <div className="flex items-center space-x-3 font-medium">
            <a 
              href="tel:7542846888" 
              className="flex items-center gap-1 text-white hover:text-emerald-100 transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-300" />
              <span>📞 +91 75428 46888</span>
            </a>
            <span className="hidden sm:inline bg-white/20 px-2 py-0.5 rounded text-[11px] font-semibold">
              Emergency 24/7
            </span>
          </div>
        </div>
      </div>

      {/* Main Clean Minimalist Header */}
      <nav className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xs sticky top-0 z-50 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo & Brand Name */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-[#0A8F6A] rounded-xl flex items-center justify-center shadow-md shadow-emerald-900/10 group-hover:scale-105 transition-transform duration-300">
                <span className="text-white font-extrabold text-lg font-poppins">MD</span>
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <h1 className="font-extrabold text-lg sm:text-xl text-[#0A8F6A] dark:text-emerald-400 font-poppins tracking-tight leading-tight">
                    माँ दुर्गा मेडिकल हॉल
                  </h1>
                </div>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold tracking-wider uppercase">
                  Durga Medical Hall • Paliganj
                </p>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-6 text-sm font-semibold text-slate-600 dark:text-slate-300">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `transition-colors duration-200 ${
                      isActive
                        ? 'text-[#0A8F6A] dark:text-emerald-400 font-bold'
                        : 'hover:text-[#0A8F6A] dark:hover:text-emerald-400'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Desktop Right Action Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              {/* Dark mode toggle */}
              <button
                onClick={toggleDarkMode}
                aria-label="Toggle Dark Mode"
                className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title={isDarkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
              </button>

              {/* Call Button */}
              <a
                href="tel:7542846888"
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:border-[#0A8F6A] hover:text-[#0A8F6A] text-xs font-bold transition-all shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#0A8F6A]" />
                <span>Call Store</span>
              </a>

              {/* WhatsApp Order CTA Button */}
              <button
                onClick={() => onOpenWhatsAppModal()}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-lg shadow-blue-200 dark:shadow-none transition-all active:scale-95 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Order via WhatsApp</span>
              </button>
            </div>

            {/* Mobile Actions & Menu Toggle */}
            <div className="flex md:hidden items-center space-x-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300"
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-4 pt-3 pb-6 space-y-3 shadow-xl animate-fadeIn">
            <div className="space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                      isActive
                        ? 'bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-2">
              <a
                href="tel:7542846888"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 font-bold text-sm bg-teal-50 dark:bg-teal-950/40"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                Call Store
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsAppModal();
                }}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                Order Medicine
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

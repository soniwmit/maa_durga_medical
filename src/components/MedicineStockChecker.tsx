import React, { useState, useMemo } from 'react';
import { Search, Filter, CheckCircle, AlertTriangle, XCircle, ShoppingBag, Pill, RefreshCw, FileText } from 'lucide-react';
import medicineDataRaw from '../data/medicineStock.json';
import { MedicineItem } from '../types';

interface MedicineStockCheckerProps {
  onOrderClick: (medicineName: string) => void;
  compactMode?: boolean;
}

export const MedicineStockChecker: React.FC<MedicineStockCheckerProps> = ({
  onOrderClick,
  compactMode = false,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');

  const medicines: MedicineItem[] = useMemo(() => {
    return medicineDataRaw as MedicineItem[];
  }, []);

  const categories = useMemo(() => {
    const cats = new Set(medicines.map(m => m.category));
    return ['All', ...Array.from(cats)];
  }, [medicines]);

  const filteredMedicines = useMemo(() => {
    return medicines.filter(med => {
      const matchesSearch = med.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            med.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            med.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || med.category === selectedCategory;
      const matchesStatus = selectedStatus === 'All' || med.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [medicines, searchQuery, selectedCategory, selectedStatus]);

  const getStatusBadge = (status: MedicineItem['status'], qty: number) => {
    switch (status) {
      case 'Available':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            In Stock ({qty} available)
          </span>
        );
      case 'Limited Stock':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
            Limited Stock ({qty} left)
          </span>
        );
      case 'Out of Stock':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 border border-rose-300 dark:border-rose-800">
            <XCircle className="w-3.5 h-3.5 text-rose-600" />
            Out of Stock
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl transition-colors">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-[#0A8F6A] dark:text-emerald-300 text-xs font-bold mb-2 border border-emerald-100 dark:border-emerald-800">
            <Pill className="w-3.5 h-3.5" />
            Real-Time Store Inventory Checker
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Live Medicine Availability Search
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Search genuine medicines, health equipment, and check stock status at Maa Durga Medical Hall.
          </p>
        </div>

        {/* Quick Stats Pill */}
        <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800/80 p-3 rounded-2xl border border-slate-200 dark:border-slate-700">
          <div className="text-center px-3 border-r border-slate-200 dark:border-slate-700">
            <span className="block text-xl font-bold text-[#0A8F6A] dark:text-emerald-400 font-poppins">{medicines.length}</span>
            <span className="text-[10px] text-slate-500 font-medium uppercase">Catalog Items</span>
          </div>
          <div className="text-center px-3">
            <span className="block text-xl font-bold text-emerald-600 dark:text-emerald-400 font-poppins">
              {medicines.filter(m => m.status === 'Available').length}
            </span>
            <span className="text-[10px] text-slate-500 font-medium uppercase">Ready In-Stock</span>
          </div>
        </div>
      </div>

      {/* Search & Filter Controls */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-6">
        {/* Search Input Box */}
        <div className="md:col-span-6 relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            placeholder="Search medicine by name (e.g., Dolo, Azithral, BP Monitor)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 text-sm rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 outline-none transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-3.5 text-xs text-slate-400 hover:text-slate-600 font-bold"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Filter */}
        <div className="md:col-span-3">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full py-3 px-3.5 text-sm rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 outline-none transition-all font-medium"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>Category: {cat}</option>
            ))}
          </select>
        </div>

        {/* Status Filter */}
        <div className="md:col-span-3">
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="w-full py-3 px-3.5 text-sm rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 outline-none transition-all font-medium"
          >
            <option value="All">All Stock Status</option>
            <option value="Available">In Stock Only</option>
            <option value="Limited Stock">Limited Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </div>
      </div>

      {/* Results Table / Cards Grid */}
      {filteredMedicines.length === 0 ? (
        <div className="text-center py-12 px-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-dashed border-slate-300 dark:border-slate-700">
          <Pill className="w-12 h-12 text-slate-400 mx-auto mb-3 opacity-60" />
          <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 font-poppins">
            No exact medicine match found
          </h4>
          <p className="text-sm text-slate-500 max-w-md mx-auto mt-1 mb-4">
            We might still have this medicine in stock or can arrange it specially within 24 hours. Send us a quick query on WhatsApp!
          </p>
          <button
            onClick={() => onOrderClick(searchQuery || 'Special Medicine Request')}
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md"
          >
            Inquire Medicine Availability on WhatsApp
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredMedicines.slice(0, compactMode ? 6 : 18).map((med) => (
            <div
              key={med.id}
              className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 hover:border-teal-400 dark:hover:border-teal-500 transition-all hover:shadow-lg flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-[11px] font-bold text-teal-700 dark:text-teal-300 bg-teal-100 dark:bg-teal-950 px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                    {med.category}
                  </span>
                  {med.prescriptionRequired && (
                    <span className="text-[10px] font-bold text-rose-700 dark:text-rose-300 bg-rose-100 dark:bg-rose-950 px-2 py-0.5 rounded-md flex items-center gap-1">
                      <FileText className="w-3 h-3" /> Rx Req.
                    </span>
                  )}
                </div>

                <h4 className="text-base font-bold text-slate-900 dark:text-white font-poppins group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {med.name}
                </h4>
                
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-2">
                  Brand: <span className="text-slate-700 dark:text-slate-300 font-semibold">{med.brand}</span> • {med.dosageForm}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 mb-3 leading-relaxed">
                  {med.description}
                </p>

                <div className="mb-3">
                  {getStatusBadge(med.status, med.availableQuantity)}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-700/80 flex items-center justify-between mt-2">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-extrabold text-slate-900 dark:text-white font-poppins">
                      ₹{med.discountPrice || med.mrp}
                    </span>
                    {med.discountPrice && (
                      <span className="text-xs text-slate-400 line-through">
                        MRP ₹{med.mrp}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] text-slate-400">Expiry: {med.expiry}</span>
                </div>

                <button
                  onClick={() => onOrderClick(`${med.name} (${med.brand})`)}
                  disabled={med.status === 'Out of Stock'}
                  className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                    med.status === 'Out of Stock'
                      ? 'bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed'
                      : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-md hover:shadow-lg active:scale-95'
                  }`}
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Order
                </button>
              </div>

            </div>
          ))}
        </div>
      )}

      {compactMode && filteredMedicines.length > 6 && (
        <div className="mt-6 text-center">
          <p className="text-xs text-slate-500 mb-2">Showing 6 of {filteredMedicines.length} items</p>
        </div>
      )}

    </div>
  );
};

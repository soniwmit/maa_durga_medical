import React, { useState } from 'react';
import { 
  X, MessageSquare, Phone, Upload, CheckCircle2, AlertCircle, FileText, Clock, User, MapPin, Send 
} from 'lucide-react';
import { WhatsAppOrderFormData } from '../types';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMedicine?: string;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  prefilledMedicine = '',
}) => {
  const [formData, setFormData] = useState<WhatsAppOrderFormData>({
    customerName: '',
    phone: '',
    email: '',
    address: '',
    medicineName: prefilledMedicine || '',
    hasPrescription: false,
    prescriptionFileName: '',
    preferredTime: 'As soon as possible',
    message: '',
  });

  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPrescriptionFile(file);
      setFormData(prev => ({
        ...prev,
        hasPrescription: true,
        prescriptionFileName: file.name
      }));
    }
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.customerName.trim() || !formData.phone.trim()) {
      alert('Please fill in your Name and Mobile Number.');
      return;
    }

    const businessName = "माँ दुर्गा मेडिकल हॉल (Maa Durga Medical Hall)";
    const whatsappNumber = "7542846888";

    let formattedText = `*Hello ${businessName}*\n`;
    formattedText += `*--- MEDICINE ORDER ---*\n\n`;
    formattedText += `👤 *Customer Name:* ${formData.customerName.trim()}\n`;
    formattedText += `📞 *Phone:* ${formData.phone.trim()}\n`;
    if (formData.email.trim()) {
      formattedText += `📧 *Email:* ${formData.email.trim()}\n`;
    }
    formattedText += `📍 *Delivery Address:* ${formData.address.trim() || 'Paliganj, Bihar'}\n`;
    formattedText += `💊 *Medicine Required:* ${formData.medicineName.trim() || 'General Inquiry'}\n`;
    formattedText += `📄 *Prescription Attached:* ${formData.hasPrescription ? `Yes (${formData.prescriptionFileName})` : 'No'}\n`;
    formattedText += `⏰ *Preferred Delivery Time:* ${formData.preferredTime}\n`;
    if (formData.message.trim()) {
      formattedText += `📝 *Additional Notes:* ${formData.message.trim()}\n`;
    }
    formattedText += `\n*Please confirm stock & total bill amount.*`;

    const encodedText = encodeURIComponent(formattedText);
    const whatsappUrl = `https://wa.me/91${whatsappNumber}?text=${encodedText}`;

    setFormSubmitted(true);

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      onClose();
      setFormSubmitted(false);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-md shadow-emerald-500/20">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
              Order Medicine via WhatsApp
            </h2>
            <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
              माँ दुर्गा मेडिकल हॉल • Fast Door-Step Delivery Paliganj
            </p>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSendWhatsApp} className="space-y-4">
          {/* Customer Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Customer Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={formData.customerName}
                  onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                  className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Mobile Number *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="tel"
                  required
                  placeholder="10-digit mobile no."
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Email (Optional) */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Email Address (Optional)
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          </div>

          {/* Delivery Address */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Delivery Address / Nearby Landmark in Paliganj *
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                required
                placeholder="e.g. Near Sonari Gali / Mahabir Mandir, Paliganj"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>
          </div>

          {/* Medicine Name Required */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Medicine Required & Quantity *
            </label>
            <textarea
              required
              rows={2}
              placeholder="e.g. Dolo 650 - 2 strips, Azithral 500 - 1 strip, Omron BP Monitor"
              value={formData.medicineName}
              onChange={(e) => setFormData({ ...formData, medicineName: e.target.value })}
              className="w-full p-3 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          </div>

          {/* Upload Prescription */}
          <div className="p-3.5 rounded-2xl bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                Doctor Prescription (Optional but Recommended)
              </span>
              {formData.hasPrescription && (
                <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Attached
                </span>
              )}
            </div>

            <label className="cursor-pointer flex items-center justify-center gap-2 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl p-3 hover:border-emerald-500 transition-colors bg-white dark:bg-slate-900">
              <Upload className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                {prescriptionFile ? prescriptionFile.name : 'Click to select prescription image/PDF'}
              </span>
              <input
                type="file"
                accept="image/*,.pdf"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1.5">
              * Note: You can also attach photos directly in WhatsApp chat after opening.
            </p>
          </div>

          {/* Preferred Delivery Time */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Preferred Delivery / Pickup Time
            </label>
            <div className="relative">
              <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <select
                value={formData.preferredTime}
                onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
              >
                <option value="As soon as possible">As soon as possible (Express Delivery)</option>
                <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
                <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                <option value="Evening (4:00 PM - 8:00 PM)">Evening (4:00 PM - 8:00 PM)</option>
                <option value="Store Pickup">Self Pickup at Sonari Gali Store</option>
              </select>
            </div>
          </div>

          {/* Additional Message */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Special Instructions / Notes
            </label>
            <input
              type="text"
              placeholder="e.g. Call before delivery / substitute brand allowed"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md shadow-emerald-600/30 flex items-center justify-center gap-2 transition-transform active:scale-95"
            >
              <Send className="w-4 h-4" />
              Send via WhatsApp
            </button>

            <a
              href="tel:7542846888"
              className="w-full py-3 px-4 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              Call Now: 7542846888
            </a>
          </div>
        </form>

      </div>
    </div>
  );
};

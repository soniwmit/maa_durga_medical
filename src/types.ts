export interface MedicineItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  mrp: number;
  discountPrice?: number;
  availableQuantity: number;
  expiry: string;
  dosageForm: string;
  status: 'Available' | 'Limited Stock' | 'Out of Stock';
  prescriptionRequired: boolean;
  description: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Orders' | 'Medicines' | 'Delivery' | 'General';
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'Store Front' | 'Medicine Shelves' | 'Health Devices' | 'Baby Care' | 'Supplements' | 'Surgicals';
  url: string;
  caption: string;
}

export interface WhatsAppOrderFormData {
  customerName: string;
  phone: string;
  email: string;
  address: string;
  medicineName: string;
  hasPrescription: boolean;
  prescriptionFileName?: string;
  preferredTime: string;
  message: string;
}

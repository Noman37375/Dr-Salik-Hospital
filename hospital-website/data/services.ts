export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: "Pill" | "Siren" | "Stethoscope" | "Syringe" | "Flask" | "Heart" | "Baby" | "User" | "Scanner";
  features: string[];
  href: string;
}

export const services: Service[] = [
  {
    id: 'pharmacy',
    title: 'Pharmacy',
    description: 'Full-service pharmacy with prescription and OTC medications',
    iconName: 'Pill',
    features: ['24/7 Service', 'Prescription Medications', 'Healthcare Products'],
    href: '/services/pharmacy'
  },
  {
    id: 'emergency',
    title: 'Emergency',
    description: '24/7 emergency care services with rapid response teams',
    iconName: 'Siren',
    features: ['24/7 Care', 'Trauma Center', 'Quick Response'],
    href: '/services/emergency'
  },
  {
    id: 'opd',
    title: 'OPD',
    description: 'Outpatient department services for routine care',
    iconName: 'Stethoscope',
    features: ['Expert Doctors', 'Quick Consultation', 'Specialist Care'],
    href: '/services/opd'
  },
  {
    id: 'vaccination',
    title: 'Vaccination',
    description: 'Comprehensive vaccination services for all ages',
    iconName: 'Syringe',
    features: ['All Vaccines', 'Child Care', 'Travel Vaccines'],
    href: '/services/vaccination'
  },
  {
    id: 'laboratory',
    title: 'Laboratory',
    description: 'Advanced diagnostic laboratory services',
    iconName: 'Flask',
    features: ['Quick Results', 'Advanced Tests', 'Home Collection'],
    href: '/services/laboratory'
  },
  {
    id: 'icu',
    title: 'ICU',
    description: 'State-of-the-art intensive care unit',
    iconName: 'Heart',
    features: ['24/7 Care', 'Expert Staff', 'Modern Equipment'],
    href: '/services/icu'
  },
  {
    id: 'nicu',
    title: 'NICU',
    description: 'Specialized care for newborns',
    iconName: 'Baby',
    features: ['Newborn Care', 'Expert Team', '24/7 Support'],
    href: '/services/nicu'
  },
  {
    id: 'obgyn',
    title: 'OBGYN',
    description: 'Complete women\'s health services',
    iconName: 'User',
    features: ['Maternity Care', 'Women\'s Health', 'Family Planning'],
    href: '/services/obgyn'
  },
  {
    id: 'radiology',
    title: 'Radiology',
    description: 'Advanced imaging and diagnostics',
    iconName: 'Scanner',
    features: ['X-Ray', 'CT Scan', 'MRI'],
    href: '/services/radiology'
  }
]; 
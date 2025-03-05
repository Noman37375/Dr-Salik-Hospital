export interface ServiceSection {
  id: string;
  title: string;
  description: string;
  iconName: "Pill" | "Siren" | "Stethoscope" | "Syringe" | "Flask" | "Heart" | "Baby" | "User" | "Scanner";
  features: string[];
  longDescription: string;
  availability: string;
  facilities: string[];
  specialists: string[];
  href: string;
}

export const servicesData: ServiceSection[] = [
  {
    id: 'pharmacy',
    title: 'Pharmacy',
    description: 'Full-service pharmacy with prescription and OTC medications',
    iconName: 'Pill',
    features: ['24/7 Service', 'Prescription Medications', 'Healthcare Products'],
    longDescription: 'Our state-of-the-art pharmacy provides comprehensive medication services with expert pharmacists available 24/7.',
    availability: '24/7',
    facilities: ['Modern Dispensing System', 'Temperature Controlled Storage', 'Digital Prescription Management'],
    specialists: ['Clinical Pharmacists', 'Pharmacy Technicians', 'Medicine Specialists'],
    href: '/services/pharmacy'
  },
  {
    id: 'emergency',
    title: 'Emergency Care',
    description: '24/7 emergency care services with rapid response teams',
    iconName: 'Siren',
    features: ['24/7 Care', 'Trauma Center', 'Quick Response'],
    longDescription: 'Our emergency department is equipped to handle all medical emergencies with state-of-the-art facilities.',
    availability: '24/7',
    facilities: ['Trauma Center', 'Emergency Operation Theater', 'Advanced Life Support'],
    specialists: ['Emergency Physicians', 'Trauma Surgeons', 'Critical Care Specialists'],
    href: '/services/emergency'
  },
  {
    id: 'opd',
    title: 'OPD Services',
    description: 'Outpatient department services for routine care',
    iconName: 'Stethoscope',
    features: ['Expert Doctors', 'Quick Consultation', 'Specialist Care'],
    longDescription: 'Our OPD provides comprehensive outpatient care with minimal waiting times.',
    availability: 'Mon-Sat: 9AM-5PM',
    facilities: ['Modern Consultation Rooms', 'Digital Records', 'Pharmacy Access'],
    specialists: ['General Physicians', 'Specialists', 'Medical Officers'],
    href: '/services/opd'
  },
  {
    id: 'vaccination',
    title: 'Vaccination Center',
    description: 'Comprehensive vaccination services for all ages',
    iconName: 'Syringe',
    features: ['All Vaccines', 'Child Care', 'Travel Vaccines'],
    longDescription: 'We offer all types of vaccinations with proper storage and administration protocols.',
    availability: 'Mon-Sat: 9AM-4PM',
    facilities: ['Vaccine Storage Units', 'Observation Area', 'Child-Friendly Spaces'],
    specialists: ['Immunization Specialists', 'Pediatricians', 'Nurses'],
    href: '/services/vaccination'
  },
  {
    id: 'laboratory',
    title: 'Laboratory',
    description: 'Advanced diagnostic laboratory services',
    iconName: 'Flask',
    features: ['Quick Results', 'Advanced Tests', 'Home Collection'],
    longDescription: 'Our laboratory is equipped with the latest technology for accurate and quick test results.',
    availability: '24/7',
    facilities: ['Modern Lab Equipment', 'Sample Collection Centers', 'Digital Reports'],
    specialists: ['Pathologists', 'Lab Technicians', 'Microbiologists'],
    href: '/services/laboratory'
  },
  {
    id: 'icu',
    title: 'ICU',
    description: 'State-of-the-art intensive care unit',
    iconName: 'Heart',
    features: ['24/7 Care', 'Expert Staff', 'Modern Equipment'],
    longDescription: 'Our ICU provides round-the-clock care with advanced life support systems.',
    availability: '24/7',
    facilities: ['Ventilators', 'Patient Monitoring', 'Isolation Rooms'],
    specialists: ['Intensivists', 'Critical Care Nurses', 'Respiratory Therapists'],
    href: '/services/icu'
  },
  {
    id: 'nicu',
    title: 'NICU',
    description: 'Specialized care for newborns',
    iconName: 'Baby',
    features: ['Newborn Care', 'Expert Team', '24/7 Support'],
    longDescription: 'Our NICU provides specialized care for newborns requiring intensive medical attention.',
    availability: '24/7',
    facilities: ['Incubators', 'Phototherapy Units', 'Specialized Equipment'],
    specialists: ['Neonatologists', 'NICU Nurses', 'Pediatricians'],
    href: '/services/nicu'
  },
  {
    id: 'obgyn',
    title: 'OBGYN',
    description: 'Complete women\'s health services',
    iconName: 'User',
    features: ['Maternity Care', 'Women\'s Health', 'Family Planning'],
    longDescription: 'Comprehensive women\'s healthcare services throughout all life stages.',
    availability: 'Mon-Sat: 9AM-5PM',
    facilities: ['Labor Rooms', 'Ultrasound', 'Gynec OT'],
    specialists: ['Obstetricians', 'Gynecologists', 'Midwives'],
    href: '/services/obgyn'
  },
  {
    id: 'radiology',
    title: 'Radiology',
    description: 'Advanced imaging and diagnostics',
    iconName: 'Scanner',
    features: ['X-Ray', 'CT Scan', 'MRI'],
    longDescription: 'State-of-the-art imaging center with the latest diagnostic equipment.',
    availability: '24/7',
    facilities: ['MRI Machine', 'CT Scanner', 'X-Ray Units'],
    specialists: ['Radiologists', 'Technicians', 'Imaging Specialists'],
    href: '/services/radiology'
  }
]; 
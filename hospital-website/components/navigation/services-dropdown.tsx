import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

const services = [
  { name: 'Pharmacy', href: '/services/pharmacy' },
  { name: 'Emergency', href: '/services/emergency' },
  { name: 'OPD', href: '/services/opd' },
  { name: 'Vaccination', href: '/services/vaccination' },
  { name: 'Laboratory', href: '/services/laboratory' },
  { name: 'ICU', href: '/services/icu' },
  { name: 'NICU', href: '/services/nicu' },
  { name: 'OBGYN', href: '/services/obgyn' },
  { name: 'Radiology', href: '/services/radiology' }
]

export default function ServicesDropdown() {
  return (
    <div className="relative group">
      {/* Trigger */}
      <div className="inline-flex items-center gap-1 py-2 cursor-pointer">
        <span>Services</span>
        <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
      </div>

      {/* Dropdown */}
      <div className="absolute top-full left-0 w-48 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        <div className="py-1 bg-white rounded-lg shadow-lg border border-gray-100">
          {services.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-[var(--primary-50)] hover:text-[var(--primary)]"
            >
              {service.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 
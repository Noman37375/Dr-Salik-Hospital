import Link from 'next/link'
import { Menu } from 'lucide-react'
import ServicesDropdown from './services-dropdown'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-[var(--primary)]">Dr. Salik Hospital</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[var(--primary)] transition-colors">
              Home
            </Link>
            <ServicesDropdown />
            <Link href="/about" className="text-gray-700 hover:text-[var(--primary)] transition-colors">
              About
            </Link>
            <Link href="/doctors" className="text-gray-700 hover:text-[var(--primary)] transition-colors">
              Our Team
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[var(--primary)] transition-colors">
              Contact
            </Link>
            <Link 
              href="/appointment" 
              className="btn-primary"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  )
} 
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Dr. Salik Hospital</h3>
            <p className="text-gray-300 mb-4">
              Providing quality healthcare services with experienced doctors and modern facilities since 2005.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="text-gray-300 hover:text-white transition-colors">
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link href="/appointment" className="text-gray-300 hover:text-white transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-xl font-bold mb-4">Departments</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/departments/cardiology" className="text-gray-300 hover:text-white transition-colors">
                  Cardiology
                </Link>
              </li>
              <li>
                <Link href="/departments/neurology" className="text-gray-300 hover:text-white transition-colors">
                  Neurology
                </Link>
              </li>
              <li>
                <Link href="/departments/orthopedics" className="text-gray-300 hover:text-white transition-colors">
                  Orthopedics
                </Link>
              </li>
              <li>
                <Link href="/departments/pediatrics" className="text-gray-300 hover:text-white transition-colors">
                  Pediatrics
                </Link>
              </li>
              <li>
                <Link href="/departments/gynecology" className="text-gray-300 hover:text-white transition-colors">
                  Gynecology
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary-light flex-shrink-0" />
                <span className="text-gray-300">123 Hospital Street, Medical Center, City, Country</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary-light flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors">
                  +123 456 7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary-light flex-shrink-0" />
                <a href="mailto:info@drsalik.com" className="text-gray-300 hover:text-white transition-colors">
                  info@drsalik.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} Dr. Salik Hospital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}


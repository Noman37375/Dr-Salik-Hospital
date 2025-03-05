"use client"

import Link from "next/link"
import { MapPin, Phone, ArrowRight, X } from "lucide-react"
import { useState } from "react"

const contactInfo = {
  address: "ST-2, Sector V4, Opposite Quba Masjid, Gulshan-e-Maymar, Karachi, Sindh, 74700, Pakistan.",
  phones: [
    "0317-7843816",
    "021-36412790",
    "021-36412791",
    "021-36412792",
    "021-36412793",
  ],
}

export default function CTASection() {
  const [showAddress, setShowAddress] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white via-gray-50/50 to-[var(--primary-50)]/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      <div className="container mx-auto relative px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Need Medical Assistance?{" "}
                <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                  Contact Us Today
                </span>
              </h2>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                Our team is ready to assist you 24/7. Contact us for appointments, emergencies, or any inquiries.
              </p>
            </div>

            <div className="space-y-6">
              <div className="group p-6 rounded-2xl bg-white/40 backdrop-blur-[2px] border border-gray-100 hover:bg-white/60 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-start gap-5">
                  <div className="p-3.5 rounded-xl bg-gradient-to-br from-primary/10 to-primary-dark/5 shadow-inner">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-gray-900">Our Location</h3>
                    <p className="text-gray-600 leading-relaxed">{contactInfo.address}</p>
                  </div>
                </div>
              </div>

              <div className="group p-6 rounded-2xl bg-white/40 backdrop-blur-[2px] border border-gray-100 hover:bg-white/60 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-start gap-5">
                  <div className="p-3.5 rounded-xl bg-gradient-to-br from-primary/10 to-primary-dark/5 shadow-inner">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-gray-900">Phone Numbers</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {contactInfo.phones.map((phone, index) => (
                        <a 
                          key={index}
                          href={`tel:${phone}`}
                          className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2 group-hover:translate-x-1 duration-300"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transform hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/appointment" 
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white/50 backdrop-blur border border-gray-200 text-gray-900 font-semibold hover:bg-white/80 transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Book Appointment
              </Link>
            </div>
          </div>

          <div 
            className="relative group" 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/3 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/80 to-white/40 p-2 sm:p-3 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20">
              <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent z-20 pointer-events-none" />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.4481770669387!2d67.13492661500568!3d25.012843983984583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDAwJzQ2LjIiTiA2N8KwMDgnMTUuOSJF!5e0!3m2!1sen!2s!4v1629789876543!5m2!1sen!2s"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: "10px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="relative z-10 transition-transform duration-500 group-hover:scale-[1.02] sm:h-[520px]"
                />
              </div>
              <div className="absolute bottom-3 sm:bottom-6 left-3 right-3 sm:left-6 sm:right-6 z-30">
                {showAddress && isHovered && (
                  <div className="w-[calc(100%-24px)] sm:max-w-sm mx-auto bg-white/90 backdrop-blur-sm p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-lg border border-white/20 transform transition-all duration-500 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="flex items-start justify-between">
                      <h4 className="font-semibold text-gray-900 flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
                        <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                        Visit Us
                      </h4>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation()
                          setShowAddress(false)
                        }}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors group/close"
                      >
                        <X className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-500 group-hover/close:text-gray-700" />
                      </button>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1 line-clamp-2 leading-relaxed">
                      {contactInfo.address}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


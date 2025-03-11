"use client"

import Image from "next/image"
import Link from "next/link"
import { Search, Star, MapPin, Phone, Calendar, X, GraduationCap, Clock } from "lucide-react"
import { useState } from "react"
import { doctors } from "./doctors-data"

// Get unique specialties for filter
const specialties = Array.from(
  new Set(doctors.flatMap((doctor) => doctor.specialty))
).sort()

export function DoctorsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSpecialty, setSelectedSpecialty] = useState("")

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesSpecialty = selectedSpecialty === "" || doctor.specialty.includes(selectedSpecialty)
    return matchesSearch && matchesSpecialty
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark py-24">
        {/* Modern gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_transparent_40%,_black/10_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_transparent_40%,_black/5_100%)]" />
        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 [text-shadow:_0_1px_2px_rgb(0_0_0_/_20%)]">
              Meet Our Expert Doctors
            </h1>
            <p className="text-primary-50 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Our team of highly qualified and professional doctors are committed to providing exceptional healthcare services at Dr. Salik Hospital.
            </p>
          </div>
        </div>
      </section>

      {/* Head Doctor Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden group">
                  <Image 
                    src={doctors.find((d) => d.isHeadDoctor)?.image || "/placeholder.svg"} 
                    alt="Dr. Zafar Salik" 
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="flex flex-col justify-center space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium w-fit">
                    <Star className="w-4 h-4" />
                    Head of Doctors & Managing Director
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                    {doctors.find((d) => d.isHeadDoctor)?.name}
                  </h2>
                  <p className="text-primary font-medium text-xl">
                    {doctors.find((d) => d.isHeadDoctor)?.qualifications}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {doctors.find((d) => d.isHeadDoctor)?.specialty.map((spec) => (
                      <div key={spec} className="px-4 py-2 bg-gray-50 rounded-lg text-gray-700 text-sm font-medium hover:bg-gray-100 transition-colors">
                        {spec}
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {doctors.find((d) => d.isHeadDoctor)?.description}
                  </p>
                  <div className="flex gap-4 pt-4">
                    <Link 
                      href={`/doctors/${doctors.find((d) => d.isHeadDoctor)?.id}`}
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-stretch gap-4">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search doctors by name or specialty..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-sm text-lg"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>
              <select 
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="md:w-80 px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-sm bg-white text-lg"
              >
                <option value="">All Specialties</option>
                {specialties.map((specialty) => (
                  <option key={specialty} value={specialty}>
                    {specialty}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {filteredDoctors.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">No doctors found matching your search criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredDoctors.filter(d => !d.isHeadDoctor).map((doctor) => (
                  <Link
                    key={doctor.id}
                    href={`/doctors/${doctor.id}`}
                    className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="relative h-80">
                      <Image 
                        src={doctor.image || "/placeholder.svg"} 
                        alt={doctor.name} 
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6 space-y-4">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                        {doctor.name}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {doctor.specialty.map((spec) => (
                          <div 
                            key={spec} 
                            className="px-3 py-1 bg-gray-50 rounded-lg text-gray-700 text-sm font-medium group-hover:bg-primary/5 transition-colors"
                          >
                            {spec}
                          </div>
                        ))}
                      </div>
                      {doctor.description && (
                        <p className="text-gray-600 text-base line-clamp-2">{doctor.description}</p>
                      )}
                      {(doctor.experience || doctor.education) && (
                        <div className="pt-4 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {doctor.experience && (
                            <div className="flex items-start gap-2">
                              <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                              <div>
                                <p className="text-sm font-medium text-gray-900">Experience</p>
                                <p className="text-sm text-gray-600">{doctor.experience}</p>
                              </div>
                            </div>
                          )}
                          {doctor.education && (
                            <div className="flex items-start gap-2">
                              <GraduationCap className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                              <div>
                                <p className="text-sm font-medium text-gray-900">Education</p>
                                <p className="text-sm text-gray-600 line-clamp-2">{doctor.education}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
              <div className="relative p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Medical Consultation?</h2>
                    <p className="text-gray-600 text-xl">Schedule an appointment with our specialists today.</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-all duration-300"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Contact Us
                    </Link>
                    <Link 
                      href="/appointment" 
                      className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Book Appointment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 
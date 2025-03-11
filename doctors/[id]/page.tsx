"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Star, ArrowLeft, Phone, MapPin } from "lucide-react"
import { doctors } from "../doctors-data"
import { notFound } from "next/navigation"

export default function DoctorProfilePage({ params }: { params: { id: string } }) {
  const doctor = doctors.find((d) => d.id === params.id)

  if (!doctor) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/5 to-primary/10 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <Link 
              href="/doctors" 
              className="inline-flex items-center text-gray-600 hover:text-primary group transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Doctors</span>
            </Link>

            <div className="mt-8 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8 lg:p-12">
                <div className="space-y-6">
                  {/* Title Section */}
                  <div className="space-y-4">
                    {doctor.isHeadDoctor && (
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                        <Star className="w-4 h-4" />
                        Head of Doctors & Managing Director
                      </div>
                    )}
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{doctor.name}</h1>
                    {doctor.qualifications && (
                      <p className="text-primary font-medium text-lg">{doctor.qualifications}</p>
                    )}
                  </div>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-3">
                    {doctor.specialty.map((spec) => (
                      <div 
                        key={spec} 
                        className="px-4 py-2 bg-gray-50 rounded-lg text-gray-700 text-sm font-medium hover:bg-gray-100 transition-colors"
                      >
                        {spec}
                      </div>
                    ))}
                  </div>

                  {/* Description */}
                  {doctor.description && (
                    <p className="text-gray-600 leading-relaxed text-lg">{doctor.description}</p>
                  )}

                  {/* Experience & Education */}
                  {(doctor.experience || doctor.education) && (
                    <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                      {doctor.experience && (
                        <div className="p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                          <h2 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-primary" />
                            Experience
                          </h2>
                          <p className="text-gray-600">{doctor.experience}</p>
                        </div>
                      )}
                      {doctor.education && (
                        <div className="p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                          <h2 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-primary" />
                            Education
                          </h2>
                          <p className="text-gray-600">{doctor.education}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Link 
                      href="/appointment" 
                      className="flex-1 inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark transition-colors"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Book Appointment
                    </Link>
                    <Link 
                      href="/contact" 
                      className="flex-1 inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-colors"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Contact
                    </Link>
                  </div>
                </div>

                {/* Image Section */}
                <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Image 
                    src={doctor.image || "/placeholder.svg"} 
                    alt={doctor.name} 
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Office Hours */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold mb-4">Location</h3>
                <div className="flex items-start gap-3 text-gray-600">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <p className="leading-relaxed">
                    Dr. Salik Hospital,<br />
                    123 Medical Center Drive,<br />
                    Karachi, Pakistan
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>+92 123 456 7890</span>
                  </div>
                  <Link 
                    href="/appointment" 
                    className="inline-flex items-center text-primary font-medium hover:text-primary-dark"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule an Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


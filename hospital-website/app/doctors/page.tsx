'use client';

import { useState, useEffect } from 'react';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity';
import { urlForImage } from '@/sanity/lib/image';
import AppointmentForm from '../components/AppointmentForm';
import { Search, Star, MapPin, Phone, Calendar, X, GraduationCap, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Doctor {
  _id: string;
  name: string;
  specialization: string;
  qualifications: string;
  timing: string;
  fees: number;
  isOnCall?: boolean;
  isHeadDoctor?: boolean;
  image?: string;
  description?: string;
  experience?: string;
}

async function getDoctors() {
  const query = groq`*[_type == "doctor"] | order(order asc) {
    _id,
    name,
    specialization,
    qualifications,
    timing,
    fees,
    isOnCall,
    isHeadDoctor,
    image,
    description,
    experience
  }`;
  
  return client.fetch(query);
}

export default function DoctorsPage() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getDoctors().then(data => {
      setDoctors(data);
      setIsLoading(false);
    });
  }, []);

  const handleBookAppointment = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setIsFormOpen(true);
  };

  const headDoctor = doctors.find(d => d.isHeadDoctor);
  const otherDoctors = doctors.filter(d => !d.isHeadDoctor);

  const filteredDoctors = otherDoctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty = !selectedSpecialty || doctor.specialization === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  const specialties = Array.from(new Set(doctors.map(d => d.specialization))).sort();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 py-12 md:py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_transparent_40%,_black/10_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_transparent_40%,_black/5_100%)]" />
        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 [text-shadow:_0_1px_2px_rgb(0_0_0_/_20%)]">
              Meet Our Expert Doctors
            </h1>
            <p className="text-blue-50 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Our team of highly qualified and professional doctors are committed to providing exceptional healthcare services at Dr. Salik Hospital.
            </p>
          </div>
        </div>
      </section>

      {/* Head Doctor Section */}
      {headDoctor && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 border border-gray-100">
                <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
                  <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden group">
                    {headDoctor.image ? (
                      <Image 
                        src={urlForImage(headDoctor.image)
                          .width(400)
                          .height(400)
                          .fit('crop')
                          .crop('center')
                          .url()}
                        alt={headDoctor.name}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">No image available</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600/10 rounded-full text-blue-600 text-sm font-medium w-fit">
                      <Star className="w-4 h-4" />
                      Head of Doctors & Managing Director
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {headDoctor.name}
                    </h2>
                    <p className="text-blue-600 font-medium text-lg">
                      {headDoctor.qualifications}
                    </p>
                    <div className="px-3 py-1.5 bg-gray-50 rounded-lg text-gray-700 text-sm font-medium hover:bg-gray-100 transition-colors w-fit">
                      {headDoctor.specialization}
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {headDoctor.description || 'A highly experienced and dedicated medical professional.'}
                    </p>
                    <div className="flex gap-4 pt-2">
                      <button
                        onClick={() => handleBookAppointment(headDoctor)}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/25 text-sm"
                      >
                        Book Appointment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Search and Filter */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-stretch gap-3">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search doctors by name or specialty..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 shadow-sm text-base"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
              <select 
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="md:w-64 px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 shadow-sm bg-white text-base"
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
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {isLoading ? (
              <div className="flex items-center justify-center min-h-[400px]">
                <div className="relative inline-flex">
                  <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-ping"></div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
                </div>
              </div>
            ) : filteredDoctors.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-base">No doctors found matching your search criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDoctors.map((doctor) => (
                  <div
                    key={doctor._id}
                    className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100"
                  >
                    <div className="relative h-48 sm:h-56">
                      {doctor.image ? (
                        <Image 
                          src={urlForImage(doctor.image)
                            .width(300)
                            .height(200)
                            .fit('crop')
                            .crop('center')
                            .url()}
                          alt={doctor.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-400 text-sm">No image available</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-4 space-y-3">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {doctor.name}
                      </h3>
                      <div className="px-2.5 py-1 bg-gray-50 rounded-md text-gray-700 text-sm font-medium group-hover:bg-blue-600/5 transition-colors w-fit">
                        {doctor.specialization}
                      </div>
                      <div className="pt-3 border-t border-gray-100 grid grid-cols-2 gap-3">
                        <div className="flex items-start gap-2">
                          <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs font-medium text-gray-900">Timing</p>
                            <p className="text-xs text-gray-600">{doctor.timing}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <GraduationCap className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs font-medium text-gray-900">Fee</p>
                            <p className="text-xs text-gray-600">PKR {doctor.fees}</p>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => handleBookAppointment(doctor)}
                        className="w-full mt-2 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                      >
                        Book Appointment
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent" />
              <div className="relative p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">Need Medical Consultation?</h2>
                    <p className="text-gray-600 text-base md:text-lg">Schedule an appointment with our specialists today.</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-all duration-300 text-sm"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Contact Us
                    </Link>
                    <button
                      onClick={() => handleBookAppointment(doctors[0])}
                      className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/25 text-sm"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Appointment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedDoctor && (
        <AppointmentForm
          doctorName={selectedDoctor.name}
          specialization={selectedDoctor.specialization}
          isOpen={isFormOpen}
          onClose={() => {
            setIsFormOpen(false);
            setSelectedDoctor(null);
          }}
        />
      )}
    </div>
  );
} 
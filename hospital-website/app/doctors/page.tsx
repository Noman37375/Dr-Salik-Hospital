'use client';

import { useState, useEffect } from 'react';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity';
import AppointmentForm from '../components/AppointmentForm';

interface Doctor {
  _id: string;
  name: string;
  specialization: string;
  qualifications: string;
  timing: string;
  fees: number;
  isOnCall?: boolean;
}

async function getDoctors() {
  const query = groq`*[_type == "doctor"] | order(order asc) {
    _id,
    name,
    specialization,
    qualifications,
    timing,
    fees,
    isOnCall
  }`;
  
  return client.fetch(query);
}

export default function DoctorsPage() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Fetch doctors on component mount
  useEffect(() => {
    getDoctors().then(setDoctors);
  }, []);

  const handleBookAppointment = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setIsFormOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Consultants</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doctor: Doctor) => (
          <div key={doctor._id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800">{doctor.name}</h2>
            <p className="text-blue-600 font-medium mt-1">{doctor.specialization}</p>
            <p className="text-gray-600 mt-2">{doctor.qualifications}</p>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-gray-700">
                <span className="font-medium">Timing:</span> {doctor.timing}
              </p>
              <p className="text-gray-700 mt-2">
                <span className="font-medium">Consultation Fee:</span> PKR {doctor.fees}
              </p>
              {doctor.isOnCall && (
                <p className="text-green-600 mt-2">✓ Available on call</p>
              )}
              <button
                onClick={() => handleBookAppointment(doctor)}
                className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>

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
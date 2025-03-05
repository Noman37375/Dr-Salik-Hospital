"use client"

import type React from "react"
import { useState } from "react"
import { Clock } from "lucide-react"

// Mock data for departments and doctors
const departments = ["Cardiology", "Neurology", "Pediatrics", "Orthopedics", "Dermatology", "Ophthalmology"]

const doctors = [
  { name: "Dr. John Smith", department: "Cardiology" },
  { name: "Dr. Sarah Johnson", department: "Neurology" },
  { name: "Dr. Michael Brown", department: "Pediatrics" },
  { name: "Dr. Emily Davis", department: "Ophthalmology" },
  { name: "Dr. David Wilson", department: "Orthopedics" },
  { name: "Dr. Jennifer Lee", department: "Dermatology" },
]

export default function AppointmentPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("")
  const [selectedDoctor, setSelectedDoctor] = useState("")

  const filteredDoctors = doctors.filter((doctor) => doctor.department === selectedDepartment)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted")
  }

  return (
    <div>
      {/* Banner */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Book an Appointment</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Schedule your visit with our experienced doctors. We're here to provide you with the best care possible.
          </p>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block mb-1">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    required
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-1">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    required
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-1">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    required
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label htmlFor="department" className="block mb-1">
                    Department
                  </label>
                  <select
                    id="department"
                    className="w-full p-2 border rounded"
                    onChange={(e) => {
                      setSelectedDepartment(e.target.value)
                      setSelectedDoctor("")
                    }}
                    required
                  >
                    <option value="">Select a department</option>
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="doctor" className="block mb-1">
                    Doctor
                  </label>
                  <select
                    id="doctor"
                    className="w-full p-2 border rounded"
                    onChange={(e) => setSelectedDoctor(e.target.value)}
                    disabled={!selectedDepartment}
                    required
                  >
                    <option value="">Select a doctor</option>
                    {filteredDoctors.map((doctor) => (
                      <option key={doctor.name} value={doctor.name}>
                        {doctor.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="date" className="block mb-1">
                    Preferred Date
                  </label>
                  <input id="date" type="date" required className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label htmlFor="time" className="block mb-1">
                    Preferred Time
                  </label>
                  <div className="relative">
                    <select id="time" className="w-full p-2 border rounded appearance-none" required>
                      <option value="">Select a time</option>
                      <option value="09:00">09:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="15:00">03:00 PM</option>
                      <option value="16:00">04:00 PM</option>
                    </select>
                    <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="reason" className="block mb-1">
                    Reason for Visit
                  </label>
                  <textarea
                    id="reason"
                    placeholder="Briefly describe your reason for the appointment"
                    className="w-full p-2 border rounded"
                    rows={4}
                  ></textarea>
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                >
                  Book Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Important Information</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Please arrive 15 minutes before your scheduled appointment time.</li>
              <li>Bring your insurance card and a valid ID to your appointment.</li>
              <li>If you need to cancel or reschedule, please do so at least 24 hours in advance.</li>
              <li>For any urgent medical concerns, please visit our Emergency Department or call 911.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}


"use client"

import type React from "react"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
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
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
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
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" required />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" required />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" required />
                </div>
                <div>
                  <Label htmlFor="department">Department</Label>
                  <Select
                    onValueChange={(value) => {
                      setSelectedDepartment(value)
                      setSelectedDoctor("")
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a department" />
                    </SelectTrigger>
                    <SelectContent>
                      {departments.map((dept) => (
                        <SelectItem key={dept} value={dept}>
                          {dept}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="doctor">Doctor</Label>
                  <Select onValueChange={(value) => setSelectedDoctor(value)} disabled={!selectedDepartment}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a doctor" />
                    </SelectTrigger>
                    <SelectContent>
                      {filteredDoctors.map((doctor) => (
                        <SelectItem key={doctor.name} value={doctor.name}>
                          {doctor.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-2">
                  <Label>Preferred Date</Label>
                  <div className="mt-1 p-2 border rounded-md">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="time">Preferred Time</Label>
                  <div className="relative">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="09:00">09:00 AM</SelectItem>
                        <SelectItem value="10:00">10:00 AM</SelectItem>
                        <SelectItem value="11:00">11:00 AM</SelectItem>
                        <SelectItem value="14:00">02:00 PM</SelectItem>
                        <SelectItem value="15:00">03:00 PM</SelectItem>
                        <SelectItem value="16:00">04:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                    <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="reason">Reason for Visit</Label>
                  <Textarea id="reason" placeholder="Briefly describe your reason for the appointment" />
                </div>
              </div>
              <div className="mt-6">
                <Button type="submit" className="w-full">
                  Book Appointment
                </Button>
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


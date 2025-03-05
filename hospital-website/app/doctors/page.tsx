import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"

// Doctor data
const doctors = [
  {
    id: "john-smith",
    name: "Dr. John Smith",
    specialty: "Cardiology",
    image: "/placeholder.svg?height=300&width=300",
    description:
      "Dr. John Smith is a board-certified cardiologist with over 15 years of experience in treating heart conditions.",
  },
  {
    id: "sarah-johnson",
    name: "Dr. Sarah Johnson",
    specialty: "Neurology",
    image: "/placeholder.svg?height=300&width=300",
    description:
      "Dr. Sarah Johnson specializes in neurological disorders and has a particular interest in stroke prevention and treatment.",
  },
  {
    id: "michael-brown",
    name: "Dr. Michael Brown",
    specialty: "Pediatrics",
    image: "/placeholder.svg?height=300&width=300",
    description:
      "Dr. Michael Brown is a compassionate pediatrician dedicated to providing comprehensive care for children of all ages.",
  },
  {
    id: "emily-davis",
    name: "Dr. Emily Davis",
    specialty: "Ophthalmology",
    image: "/placeholder.svg?height=300&width=300",
    description:
      "Dr. Emily Davis is an experienced ophthalmologist specializing in advanced surgical techniques for eye conditions.",
  },
  {
    id: "david-wilson",
    name: "Dr. David Wilson",
    specialty: "Orthopedics",
    image: "/placeholder.svg?height=300&width=300",
    description: "Dr. David Wilson is an orthopedic surgeon with expertise in joint replacement and sports medicine.",
  },
  {
    id: "jennifer-lee",
    name: "Dr. Jennifer Lee",
    specialty: "Dermatology",
    image: "/placeholder.svg?height=300&width=300",
    description:
      "Dr. Jennifer Lee is a skilled dermatologist offering a wide range of treatments for skin conditions and cosmetic procedures.",
  },
  {
    id: "robert-taylor",
    name: "Dr. Robert Taylor",
    specialty: "Oncology",
    image: "/placeholder.svg?height=300&width=300",
    description:
      "Dr. Robert Taylor is an oncologist dedicated to providing compassionate care and innovative cancer treatments.",
  },
  {
    id: "lisa-anderson",
    name: "Dr. Lisa Anderson",
    specialty: "Gynecology",
    image: "/placeholder.svg?height=300&width=300",
    description: "Dr. Lisa Anderson specializes in women's health and offers comprehensive gynecological care.",
  },
]

export const metadata = {
  title: "Our Doctors | Dr. Salik Hospital",
  description:
    "Meet our team of experienced and dedicated doctors at Dr. Salik Hospital, providing expert care across various medical specialties.",
}

export default function DoctorsPage() {
  return (
    <div>
      {/* Banner */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Our Doctors</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Meet our team of experienced and dedicated doctors, committed to providing you with the highest quality of
            care.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search doctors..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <select className="w-full md:w-auto px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">All Specialties</option>
              <option value="cardiology">Cardiology</option>
              <option value="neurology">Neurology</option>
              <option value="pediatrics">Pediatrics</option>
              <option value="ophthalmology">Ophthalmology</option>
              <option value="orthopedics">Orthopedics</option>
              <option value="dermatology">Dermatology</option>
              <option value="oncology">Oncology</option>
              <option value="gynecology">Gynecology</option>
            </select>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {doctors.map((doctor) => (
              <Link
                key={doctor.id}
                href={`/doctors/${doctor.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-64">
                  <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} layout="fill" objectFit="cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-1">{doctor.name}</h3>
                  <p className="text-primary mb-2">{doctor.specialty}</p>
                  <p className="text-gray-600 text-sm line-clamp-2">{doctor.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Need to consult a doctor?</h2>
                <p className="text-gray-600">Book an appointment with one of our specialists today.</p>
              </div>
              <Link href="/appointment" className="btn-primary whitespace-nowrap">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


import Image from "next/image"
import Link from "next/link"
import { Heart, Brain, Stethoscope, Baby, Eye, Bone, TreesIcon as Lungs, Microscope } from "lucide-react"

// Department data
const departments = [
  {
    id: "cardiology",
    icon: <Heart className="h-10 w-10 text-primary" />,
    name: "Cardiology",
    description: "Specialized care for heart and cardiovascular conditions.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "neurology",
    icon: <Brain className="h-10 w-10 text-primary" />,
    name: "Neurology",
    description: "Expert care for disorders of the nervous system.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "pediatrics",
    icon: <Baby className="h-10 w-10 text-primary" />,
    name: "Pediatrics",
    description: "Comprehensive healthcare for children and adolescents.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "ophthalmology",
    icon: <Eye className="h-10 w-10 text-primary" />,
    name: "Ophthalmology",
    description: "Advanced care for eye conditions and vision health.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "orthopedics",
    icon: <Bone className="h-10 w-10 text-primary" />,
    name: "Orthopedics",
    description: "Specialized treatment for musculoskeletal conditions.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "pulmonology",
    icon: <Lungs className="h-10 w-10 text-primary" />,
    name: "Pulmonology",
    description: "Expert care for respiratory and lung conditions.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "gastroenterology",
    icon: <Stethoscope className="h-10 w-10 text-primary" />,
    name: "Gastroenterology",
    description: "Specialized care for digestive system disorders.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "oncology",
    icon: <Microscope className="h-10 w-10 text-primary" />,
    name: "Oncology",
    description: "Comprehensive cancer care and treatment.",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export const metadata = {
  title: "Our Departments | Dr. Salik Hospital",
  description:
    "Explore the various specialized departments at Dr. Salik Hospital, offering comprehensive care across multiple medical disciplines.",
}

export default function DepartmentsPage() {
  return (
    <div>
      {/* Banner */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Our Departments</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Discover our specialized departments, each dedicated to providing expert care in their respective fields of
            medicine.
          </p>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((department) => (
              <Link
                key={department.id}
                href={`/departments/${department.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={department.image || "/placeholder.svg"}
                    alt={department.name}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <h3 className="text-xl font-bold text-white">{department.name}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <div className="bg-blue-50 p-2 rounded-full mr-3">{department.icon}</div>
                    <h3 className="text-xl font-bold">{department.name}</h3>
                  </div>
                  <p className="text-gray-600">{department.description}</p>
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
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Need specialized care?</h2>
                <p className="text-gray-600">
                  Our expert teams are ready to provide you with the best medical care. Book an appointment today.
                </p>
              </div>
              <div className="flex gap-4">
                <Link href="/contact" className="btn-outline whitespace-nowrap">
                  Contact Us
                </Link>
                <Link href="/appointment" className="btn-primary whitespace-nowrap">
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


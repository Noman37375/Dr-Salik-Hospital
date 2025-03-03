import { Heart, Brain, Stethoscope, Baby, Eye, Bone } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: <Heart className="h-10 w-10 text-primary" />,
    title: "Cardiology",
    description: "Comprehensive care for heart conditions with advanced diagnostic and treatment options.",
    link: "/services/cardiology",
  },
  {
    icon: <Brain className="h-10 w-10 text-primary" />,
    title: "Neurology",
    description: "Expert diagnosis and treatment of disorders of the nervous system.",
    link: "/services/neurology",
  },
  {
    icon: <Stethoscope className="h-10 w-10 text-primary" />,
    title: "General Medicine",
    description: "Primary healthcare services for patients of all ages.",
    link: "/services/general-medicine",
  },
  {
    icon: <Baby className="h-10 w-10 text-primary" />,
    title: "Pediatrics",
    description: "Specialized healthcare for infants, children, and adolescents.",
    link: "/services/pediatrics",
  },
  {
    icon: <Eye className="h-10 w-10 text-primary" />,
    title: "Ophthalmology",
    description: "Comprehensive eye care services from routine exams to complex surgeries.",
    link: "/services/ophthalmology",
  },
  {
    icon: <Bone className="h-10 w-10 text-primary" />,
    title: "Orthopedics",
    description: "Treatment for conditions affecting the musculoskeletal system.",
    link: "/services/orthopedics",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Medical Services</h2>
          <p className="section-subtitle mx-auto">
            We offer a wide range of quality healthcare services to meet the needs of our patients
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 p-3 bg-blue-50 inline-block rounded-lg">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link href={service.link} className="text-primary font-medium hover:text-primary-dark transition-colors">
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}


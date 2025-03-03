import Link from "next/link"
import {
  Heart,
  Brain,
  Stethoscope,
  Baby,
  Eye,
  Bone,
  TreesIcon as Lungs,
  Microscope,
  FlaskRoundIcon as Flask,
  Pill,
  Thermometer,
  Syringe,
} from "lucide-react"

// Service data
const services = [
  {
    id: "cardiology",
    icon: <Heart className="h-10 w-10 text-primary" />,
    title: "Cardiology",
    description: "Comprehensive care for heart conditions with advanced diagnostic and treatment options.",
    image: "/placeholder.svg?height=300&width=400",
    fullDescription:
      "Our Cardiology department provides comprehensive care for a wide range of heart conditions. Our team of experienced cardiologists uses advanced diagnostic tools and treatment options to ensure the best possible outcomes for our patients.",
  },
  {
    id: "neurology",
    icon: <Brain className="h-10 w-10 text-primary" />,
    title: "Neurology",
    description: "Expert diagnosis and treatment of disorders of the nervous system.",
    image: "/placeholder.svg?height=300&width=400",
    fullDescription:
      "Our Neurology department specializes in the diagnosis and treatment of disorders of the brain, spinal cord, and nervous system. Our neurologists are experts in managing conditions such as stroke, epilepsy, multiple sclerosis, and Parkinson's disease.",
  },
  {
    id: "general-medicine",
    icon: <Stethoscope className="h-10 w-10 text-primary" />,
    title: "General Medicine",
    description: "Primary healthcare services for patients of all ages.",
    image: "/placeholder.svg?height=300&width=400",
    fullDescription:
      "Our General Medicine department provides primary healthcare services for patients of all ages. Our physicians are trained to diagnose and treat a wide range of medical conditions and provide preventive care to help you maintain good health.",
  },
  {
    id: "pediatrics",
    icon: <Baby className="h-10 w-10 text-primary" />,
    title: "Pediatrics",
    description: "Specialized healthcare for infants, children, and adolescents.",
    image: "/placeholder.svg?height=300&width=400",
    fullDescription:
      "Our Pediatrics department provides specialized healthcare for infants, children, and adolescents. Our pediatricians are dedicated to providing comprehensive care for your child's physical, emotional, and social well-being.",
  },
  {
    id: "ophthalmology",
    icon: <Eye className="h-10 w-10 text-primary" />,
    title: "Ophthalmology",
    description: "Comprehensive eye care services from routine exams to complex surgeries.",
    image: "/placeholder.svg?height=300&width=400",
    fullDescription:
      "Our Ophthalmology department provides comprehensive eye care services, from routine eye exams to complex surgeries. Our ophthalmologists are skilled in diagnosing and treating a wide range of eye conditions to help you maintain good vision.",
  },
  {
    id: "orthopedics",
    icon: <Bone className="h-10 w-10 text-primary" />,
    title: "Orthopedics",
    description: "Treatment for conditions affecting the musculoskeletal system.",
    image: "/placeholder.svg?height=300&width=400",
    fullDescription:
      "Our Orthopedics department specializes in the diagnosis and treatment of conditions affecting the musculoskeletal system. Our orthopedic surgeons are experts in treating bone and joint injuries, arthritis, and other musculoskeletal conditions.",
  },
  {
    id: "pulmonology",
    icon: <Lungs className="h-10 w-10 text-primary" />,
    title: "Pulmonology",
    description: "Diagnosis and treatment of respiratory conditions and lung diseases.",
    image: "/placeholder.svg?height=300&width=400",
    fullDescription:
      "Our Pulmonology department specializes in the diagnosis and treatment of respiratory conditions and lung diseases. Our pulmonologists are experts in managing conditions such as asthma, COPD, pneumonia, and sleep apnea.",
  },
  {
    id: "pathology",
    icon: <Microscope className="h-10 w-10 text-primary" />,
    title: "Pathology",
    description: "Laboratory testing and analysis for accurate diagnosis.",
    image: "/placeholder.svg?height=300&width=400",
    fullDescription:
      "Our Pathology department provides laboratory testing and analysis for accurate diagnosis. Our pathologists use advanced techniques to examine tissues, cells, and body fluids to help diagnose diseases and guide treatment decisions.",
  },
  {
    id: "laboratory",
    icon: <Flask className="h-10 w-10 text-primary" />,
    title: "Laboratory Services",
    description: "Comprehensive diagnostic testing for accurate diagnosis and treatment.",
    image: "/placeholder.svg?height=300&width=400",
    fullDescription:
      "Our Laboratory Services department provides comprehensive diagnostic testing to help our physicians make accurate diagnoses and develop effective treatment plans. We offer a wide range of tests, from routine blood work to specialized genetic testing.",
  },
  {
    id: "pharmacy",
    icon: <Pill className="h-10 w-10 text-primary" />,
    title: "Pharmacy",
    description: "Convenient access to medications and expert pharmaceutical advice.",
    image: "/placeholder.svg?height=300&width=400",
    fullDescription:
      "Our Pharmacy department provides convenient access to medications and expert pharmaceutical advice. Our pharmacists work closely with our physicians to ensure that you receive the right medications and understand how to take them properly.",
  },
  {
    id: "emergency",
    icon: <Thermometer className="h-10 w-10 text-primary" />,
    title: "Emergency Care",
    description: "24/7 emergency care for life-threatening conditions.",
    image: "/placeholder.svg?height=300&width=400",
    fullDescription:
      "Our Emergency Care department provides 24/7 emergency care for life-threatening conditions. Our emergency physicians and nurses are trained to respond quickly and effectively to a wide range of medical emergencies.",
  },
  {
    id: "vaccination",
    icon: <Syringe className="h-10 w-10 text-primary" />,
    title: "Vaccination",
    description: "Preventive care through immunization against infectious diseases.",
    image: "/placeholder.svg?height=300&width=400",
    fullDescription:
      "Our Vaccination department provides preventive care through immunization against infectious diseases. We offer a wide range of vaccines for all age groups, from routine childhood immunizations to travel vaccines and seasonal flu shots.",
  },
]

export const metadata = {
  title: "Our Services | Dr. Salik Hospital",
  description:
    "Explore the wide range of medical services offered by Dr. Salik Hospital, from cardiology to pediatrics and emergency care.",
}

export default function ServicesPage() {
  return (
    <div>
      {/* Banner */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            We offer a wide range of medical services to meet the healthcare needs of our patients and community.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4 p-3 bg-blue-50 inline-block rounded-lg">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={`/services/${service.id}`}
                  className="text-primary font-medium hover:text-primary-dark transition-colors"
                >
                  Learn More →
                </Link>
              </div>
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
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Need a specialized service?</h2>
                <p className="text-gray-600">
                  Contact us to learn more about our specialized medical services or to schedule an appointment.
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


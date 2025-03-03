import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  Heart,
  Brain,
  Stethoscope,
  Baby,
  Eye,
  Bone,
  TreesIcon as Lungs,
  Microscope,
  CheckCircle,
  ArrowLeft,
} from "lucide-react"

// Department data (same as in departments/page.tsx)
const departments = [
  {
    id: "cardiology",
    icon: <Heart className="h-10 w-10 text-primary" />,
    name: "Cardiology",
    description: "Specialized care for heart and cardiovascular conditions.",
    image: "/placeholder.svg?height=400&width=600",
    fullDescription:
      "Our Cardiology department provides comprehensive care for a wide range of heart conditions. Our team of experienced cardiologists uses advanced diagnostic tools and treatment options to ensure the best possible outcomes for our patients.",
    services: [
      "Electrocardiography (ECG/EKG)",
      "Echocardiography",
      "Stress testing",
      "Holter monitoring",
      "Cardiac catheterization",
      "Coronary angioplasty and stenting",
      "Pacemaker implantation",
      "Cardiac rehabilitation",
    ],
    doctors: [
      {
        name: "Dr. John Smith",
        specialty: "Interventional Cardiology",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Dr. Sarah Johnson",
        specialty: "Cardiac Electrophysiology",
        image: "/placeholder.svg?height=100&width=100",
      },
      { name: "Dr. Michael Brown", specialty: "Pediatric Cardiology", image: "/placeholder.svg?height=100&width=100" },
    ],
  },
  {
    id: "neurology",
    icon: <Brain className="h-10 w-10 text-primary" />,
    name: "Neurology",
    description: "Expert care for disorders of the nervous system.",
    image: "/placeholder.svg?height=400&width=600",
    fullDescription:
      "Our Neurology department specializes in the diagnosis and treatment of disorders of the brain, spinal cord, and nervous system. Our neurologists are experts in managing conditions such as stroke, epilepsy, multiple sclerosis, and Parkinson's disease.",
    services: [
      "Electroencephalography (EEG)",
      "Electromyography (EMG)",
      "Nerve conduction studies",
      "Lumbar puncture",
      "Neuroimaging (MRI, CT)",
      "Movement disorder treatment",
      "Epilepsy management",
      "Stroke care and rehabilitation",
    ],
    doctors: [
      { name: "Dr. Emily Davis", specialty: "General Neurology", image: "/placeholder.svg?height=100&width=100" },
      { name: "Dr. Robert Wilson", specialty: "Neurophysiology", image: "/placeholder.svg?height=100&width=100" },
      { name: "Dr. Jennifer Lee", specialty: "Pediatric Neurology", image: "/placeholder.svg?height=100&width=100" },
    ],
  },
  {
    id: "pediatrics",
    icon: <Baby className="h-10 w-10 text-primary" />,
    name: "Pediatrics",
    description: "Comprehensive healthcare for children and adolescents.",
    image: "/placeholder.svg?height=400&width=600",
    fullDescription:
      "Our Pediatrics department provides specialized healthcare for infants, children, and adolescents. Our pediatricians are dedicated to providing comprehensive care for your child's physical, emotional, and social well-being.",
    services: [
      "Well-child visits",
      "Immunizations",
      "Growth and development monitoring",
      "School and sports physicals",
      "Acute illness care",
      "Chronic disease management",
      "Behavioral health",
      "Adolescent medicine",
    ],
    doctors: [
      { name: "Dr. Maria Rodriguez", specialty: "General Pediatrics", image: "/placeholder.svg?height=100&width=100" },
      { name: "Dr. Thomas Clark", specialty: "Pediatric Pulmonology", image: "/placeholder.svg?height=100&width=100" },
      { name: "Dr. Susan White", specialty: "Pediatric Endocrinology", image: "/placeholder.svg?height=100&width=100" },
    ],
  },
  {
    id: "ophthalmology",
    icon: <Eye className="h-10 w-10 text-primary" />,
    name: "Ophthalmology",
    description: "Advanced care for eye conditions and vision health.",
    image: "/placeholder.svg?height=400&width=600",
    fullDescription:
      "Our Ophthalmology department provides comprehensive eye care services, from routine eye exams to complex surgeries. Our ophthalmologists are skilled in diagnosing and treating a wide range of eye conditions to help you maintain good vision.",
    services: [
      "Comprehensive eye exams",
      "Vision testing",
      "Glaucoma screening and treatment",
      "Cataract surgery",
      "Laser vision correction",
      "Diabetic eye care",
      "Macular degeneration treatment",
      "Pediatric ophthalmology",
    ],
    doctors: [
      { name: "Dr. Richard Brown", specialty: "General Ophthalmology", image: "/placeholder.svg?height=100&width=100" },
      { name: "Dr. Patricia Green", specialty: "Retina Specialist", image: "/placeholder.svg?height=100&width=100" },
      { name: "Dr. Kevin Lee", specialty: "Pediatric Ophthalmology", image: "/placeholder.svg?height=100&width=100" },
    ],
  },
  {
    id: "orthopedics",
    icon: <Bone className="h-10 w-10 text-primary" />,
    name: "Orthopedics",
    description: "Specialized treatment for musculoskeletal conditions.",
    image: "/placeholder.svg?height=400&width=600",
    fullDescription:
      "Our Orthopedics department specializes in the diagnosis and treatment of conditions affecting the musculoskeletal system. Our orthopedic surgeons are experts in treating bone and joint injuries, arthritis, and other musculoskeletal conditions.",
    services: [
      "Joint replacement surgery",
      "Sports medicine",
      "Fracture care",
      "Arthroscopy",
      "Spine surgery",
      "Hand and upper extremity surgery",
      "Foot and ankle surgery",
      "Physical therapy",
    ],
    doctors: [
      { name: "Dr. William Johnson", specialty: "Orthopedic Surgery", image: "/placeholder.svg?height=100&width=100" },
      { name: "Dr. Nancy Taylor", specialty: "Sports Medicine", image: "/placeholder.svg?height=100&width=100" },
      { name: "Dr. Robert Harris", specialty: "Spine Surgery", image: "/placeholder.svg?height=100&width=100" },
    ],
  },
  {
    id: "pulmonology",
    icon: <Lungs className="h-10 w-10 text-primary" />,
    name: "Pulmonology",
    description: "Expert care for respiratory and lung conditions.",
    image: "/placeholder.svg?height=400&width=600",
    fullDescription:
      "Our Pulmonology department specializes in the diagnosis and treatment of respiratory conditions and lung diseases. Our pulmonologists are experts in managing conditions such as asthma, COPD, pneumonia, and sleep apnea.",
    services: [
      "Pulmonary function testing",
      "Bronchoscopy",
      "Sleep studies",
      "Asthma management",
      "COPD management",
      "Lung cancer screening",
      "Pulmonary rehabilitation",
      "Respiratory therapy",
    ],
    doctors: [
      { name: "Dr. Charles Martin", specialty: "Pulmonology", image: "/placeholder.svg?height=100&width=100" },
      {
        name: "Dr. Elizabeth Adams",
        specialty: "Critical Care Medicine",
        image: "/placeholder.svg?height=100&width=100",
      },
      { name: "Dr. Daniel Wright", specialty: "Sleep Medicine", image: "/placeholder.svg?height=100&width=100" },
    ],
  },
  {
    id: "gastroenterology",
    icon: <Stethoscope className="h-10 w-10 text-primary" />,
    name: "Gastroenterology",
    description: "Specialized care for digestive system disorders.",
    image: "/placeholder.svg?height=400&width=600",
    fullDescription:
      "Our Gastroenterology department focuses on the diagnosis and treatment of disorders of the digestive system, including the esophagus, stomach, intestines, liver, and pancreas. Our gastroenterologists use advanced techniques to provide comprehensive care for a wide range of gastrointestinal conditions.",
    services: [
      "Endoscopy",
      "Colonoscopy",
      "ERCP (Endoscopic Retrograde Cholangiopancreatography)",
      "Liver disease management",
      "Inflammatory bowel disease treatment",
      "Colorectal cancer screening",
      "Nutritional counseling",
      "Motility studies",
    ],
    doctors: [
      { name: "Dr. Laura Chen", specialty: "Gastroenterology", image: "/placeholder.svg?height=100&width=100" },
      { name: "Dr. Mark Thompson", specialty: "Hepatology", image: "/placeholder.svg" },
      { name: "Dr. Mark Thompson", specialty: "Hepatology", image: "/placeholder.svg?height=100&width=100" },
      { name: "Dr. Sarah Johnson", specialty: "Neurogastroenterology", image: "/placeholder.svg?height=100&width=100" },
    ],
  },
  {
    id: "oncology",
    icon: <Microscope className="h-10 w-10 text-primary" />,
    name: "Oncology",
    description: "Comprehensive cancer care and treatment.",
    image: "/placeholder.svg?height=400&width=600",
    fullDescription:
      "Our Oncology department provides comprehensive cancer care, including diagnosis, treatment, and support services. Our team of oncologists, surgeons, and specialists work together to develop personalized treatment plans for each patient, utilizing the latest advancements in cancer care.",
    services: [
      "Cancer screening and diagnosis",
      "Chemotherapy",
      "Radiation therapy",
      "Surgical oncology",
      "Immunotherapy",
      "Targeted therapy",
      "Clinical trials",
      "Supportive care and survivorship programs",
    ],
    doctors: [
      { name: "Dr. Amanda Lee", specialty: "Medical Oncology", image: "/placeholder.svg?height=100&width=100" },
      { name: "Dr. David Wilson", specialty: "Radiation Oncology", image: "/placeholder.svg?height=100&width=100" },
      { name: "Dr. Rachel Green", specialty: "Surgical Oncology", image: "/placeholder.svg?height=100&width=100" },
    ],
  },
]

export async function generateMetadata({ params }: { params: { id: string } }) {
  const department = departments.find((d) => d.id === params.id)

  if (!department) {
    return {
      title: "Department Not Found | Dr. Salik Hospital",
    }
  }

  return {
    title: `${department.name} Department | Dr. Salik Hospital`,
    description: department.description,
  }
}

export default function DepartmentPage({ params }: { params: { id: string } }) {
  const department = departments.find((d) => d.id === params.id)

  if (!department) {
    notFound()
  }

  return (
    <div>
      {/* Banner */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 py-20">
        <div className="container mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/departments" className="text-blue-100 hover:text-white flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Departments
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">{department.name} Department</h1>
          <p className="text-blue-100 max-w-2xl">{department.description}</p>
        </div>
      </section>

      {/* Department Details */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <Image
                  src={department.image || "/placeholder.svg"}
                  alt={department.name}
                  width={600}
                  height={400}
                  className="rounded-lg mb-6"
                />
                <h2 className="text-2xl font-bold mb-4">About Our {department.name} Department</h2>
                <p className="text-gray-700 mb-6">{department.fullDescription}</p>

                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-3">Our Services</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {department.services.map((service, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Meet Our {department.name} Specialists</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {department.doctors.map((doctor, index) => (
                    <div key={index} className="text-center">
                      <div className="mb-3">
                        <Image
                          src={doctor.image || "/placeholder.svg"}
                          alt={doctor.name}
                          width={100}
                          height={100}
                          className="rounded-full mx-auto"
                        />
                      </div>
                      <h3 className="font-bold">{doctor.name}</h3>
                      <p className="text-primary text-sm">{doctor.specialty}</p>
                      <Link
                        href={`/doctors/${index + 1}`}
                        className="text-sm text-primary hover:underline mt-1 inline-block"
                      >
                        View Profile
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold mb-4">Book an Appointment</h3>
                <p className="text-gray-700 mb-4">
                  To schedule an appointment with one of our {department.name.toLowerCase()} specialists, please fill
                  out the form below or call our appointment line.
                </p>
                <Link href="/appointment" className="btn-primary w-full text-center">
                  Book Now
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <p className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span>(123) 456-7890</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <span>{department.name.toLowerCase()}@drsalik.com</span>
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Department Hours</h3>
                <div className="space-y-2">
                  <p className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


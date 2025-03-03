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
  FlaskRoundIcon as Flask,
  Pill,
  Thermometer,
  Syringe,
  CheckCircle,
  ArrowLeft,
} from "lucide-react"

// Service data (same as in services/page.tsx)
const services = [
  {
    id: "cardiology",
    icon: <Heart className="h-10 w-10 text-primary" />,
    title: "Cardiology",
    description: "Comprehensive care for heart conditions with advanced diagnostic and treatment options.",
    image: "/placeholder.svg?height=300&width=400",
    fullDescription:
      "Our Cardiology department provides comprehensive care for a wide range of heart conditions. Our team of experienced cardiologists uses advanced diagnostic tools and treatment options to ensure the best possible outcomes for our patients.",
    features: [
      "Advanced cardiac imaging",
      "Electrocardiography (ECG/EKG)",
      "Echocardiography",
      "Stress testing",
      "Holter monitoring",
      "Cardiac catheterization",
      "Coronary angioplasty and stenting",
      "Pacemaker implantation",
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
    title: "Neurology",
    description: "Expert diagnosis and treatment of disorders of the nervous system.",
    image: "/placeholder.svg?height=300&width=400",
    fullDescription:
      "Our Neurology department specializes in the diagnosis and treatment of disorders of the brain, spinal cord, and nervous system. Our neurologists are experts in managing conditions such as stroke, epilepsy, multiple sclerosis, and Parkinson's disease.",
    features: [
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
    id: "general-medicine",
    icon: <Stethoscope className="h-10 w-10 text-primary" />,
    title: "General Medicine",
    description: "Primary healthcare services for patients of all ages.",
    image: "/placeholder.svg?height=300&width=400",
    fullDescription:
      "Our General Medicine department provides primary healthcare services for patients of all ages. Our physicians are trained to diagnose and treat a wide range of medical conditions and provide preventive care to help you maintain good health.",
    features: [
      "Routine check-ups",
      "Preventive care",
      "Chronic disease management",
      "Immunizations",
      "Health screenings",
      "Minor procedures",
      "Referrals to specialists",
      "Health education",
    ],
    doctors: [
      { name: "Dr. David Thompson", specialty: "Internal Medicine", image: "/placeholder.svg?height=100&width=100" },
      { name: "Dr. Lisa Anderson", specialty: "Family Medicine", image: "/placeholder.svg?height=100&width=100" },
      { name: "Dr. James Wilson", specialty: "Geriatric Medicine", image: "/placeholder.svg?height=100&width=100" },
    ],
  },
  {
    id: "pediatrics",
    icon: <Baby className="h-10 w-10 text-primary" />,
    title: "Pediatrics",
    description: "Specialized healthcare for infants, children, and adolescents.",
    image: "/placeholder.svg?height=300&width=400",
    fullDescription:
      "Our Pediatrics department provides specialized healthcare for infants, children, and adolescents. Our pediatricians are dedicated to providing comprehensive care for your child's physical, emotional, and social well-being.",
    features: [
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
    title: "Ophthalmology",
    description: "Comprehensive eye care services from routine exams to complex surgeries.",
    image: "/placeholder.svg?height=300&width=400",
    fullDescription:
      "Our Ophthalmology department provides comprehensive eye care services, from routine eye exams to complex surgeries. Our ophthalmologists are skilled in diagnosing and treating a wide range of eye conditions to help you maintain good vision.",
    features: [
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
    title: "Orthopedics",
    description: "Treatment for conditions affecting the musculoskeletal system.",
    image: "/placeholder.svg?height=300&width=400",
    fullDescription:
      "Our Orthopedics department specializes in the diagnosis and treatment of conditions affecting the musculoskeletal system. Our orthopedic surgeons are experts in treating bone and joint injuries, arthritis, and other musculoskeletal conditions.",
    features: [
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
    title: "Pulmonology",
    description: "Diagnosis and treatment of respiratory conditions and lung diseases.",
    image: "/placeholder.svg?height=300&width=400",
    fullDescription:
      "Our Pulmonology department specializes in the diagnosis and treatment of respiratory conditions and lung diseases. Our pulmonologists are experts in managing conditions such as asthma, COPD, pneumonia, and sleep apnea.",
    features: [
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
    id: "pathology",
    icon: <Microscope className="h-10 w-10 text-primary" />,
    title: "Pathology",
    description: "Laboratory testing and analysis for accurate diagnosis.",
    image: "/placeholder.svg?height=300&width=400",
    fullDescription:
      "Our Pathology department provides laboratory testing and analysis for accurate diagnosis. Our pathologists use advanced techniques to examine tissues, cells, and body fluids to help diagnose diseases and guide treatment decisions.",
    features: [
      "Surgical pathology",
      "Cytopathology",
      "Hematopathology",
      "Molecular pathology",
      "Immunopathology",
      "Autopsy services",
      "Fine needle aspiration",
      "Digital pathology",
    ],
    doctors: [
      { name: "Dr. Laura Miller", specialty: "Anatomic Pathology", image: "/placeholder.svg?height=100&width=100" },
      { name: "Dr. Steven Jones", specialty: "Clinical Pathology", image: "/placeholder.svg?height=100&width=100" },
      { name: "Dr. Karen Wilson", specialty: "Molecular Pathology", image: "/placeholder.svg?height=100&width=100" },
    ],
  },
  {
    id: "laboratory",
    icon: <Flask className="h-10 w-10 text-primary" />,
    title: "Laboratory Services",
    description: "Comprehensive diagnostic testing for accurate diagnosis and treatment.",
    image: "/placeholder.svg?height=300&width=400",
    fullDescription:
      "Our Laboratory Services department provides comprehensive diagnostic testing to help our physicians make accurate diagnoses and develop effective treatment plans. We offer a wide range of tests, from routine blood work to specialized genetic testing.",
    features: [
      "Blood testing",
      "Urine analysis",
      "Microbiology",
      "Serology",
      "Genetic testing",
      "Toxicology",
      "Point-of-care testing",
      "Specimen collection",
    ],
    doctors: [
      { name: "Dr. Mark Thompson", specialty: "Clinical Pathology", image: "/placeholder.svg?height=100&width=100" },
      { name: "Dr. Rebecca Lewis", specialty: "Medical Technology", image: "/placeholder.svg?height=100&width=100" },
      { name: "Dr. Paul Anderson", specialty: "Laboratory Medicine", image: "/placeholder.svg?height=100&width=100" },
    ],
  },
  {
    id: "pharmacy",
    icon: <Pill className="h-10 w-10 text-primary" />,
    title: "Pharmacy",
    description: "Convenient access to medications and expert pharmaceutical advice.",
    image: "/placeholder.svg?height=300&width=400",
    fullDescription:
      "Our Pharmacy department provides convenient access to medications and expert pharmaceutical advice. Our pharmacists work closely with our physicians to ensure that you receive the right medications and understand how to take them properly.",
    features: [
      "Prescription filling",
      "Medication counseling",
      "Medication therapy management",
      "Immunizations",
      "Compounding services",
      "Specialty medications",
      "Refill reminders",
      "Home delivery",
    ],
    doctors: [
      { name: "Dr. Jennifer Clark", specialty: "Clinical Pharmacy", image: "/placeholder.svg?height=100&width=100" },
      { name: "Dr. Michael Roberts", specialty: "Pharmacotherapy", image: "/placeholder.svg?height=100&width=100" },
      {
        name: "Dr. Sarah Thompson",
        specialty: "Ambulatory Care Pharmacy",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
  },
  {
    id: "emergency",
    icon: <Thermometer className="h-10 w-10 text-primary" />,
    title: "Emergency Care",
    description: "24/7 emergency care for life-threatening conditions.",
    image: "/placeholder.svg?height=300&width=400",
    fullDescription:
      "Our Emergency Care department provides 24/7 emergency care for life-threatening conditions. Our emergency physicians and nurses are trained to respond quickly and effectively to a wide range of medical emergencies.",
    features: [
      "24/7 emergency services",
      "Trauma care",
      "Cardiac care",
      "Stroke care",
      "Pediatric emergency care",
      "Critical care",
      "Rapid triage",
      "Emergency surgery",
    ],
    doctors: [
      { name: "Dr. Robert Johnson", specialty: "Emergency Medicine", image: "/placeholder.svg?height=100&width=100" },
      { name: "Dr. Michelle Davis", specialty: "Trauma Surgery", image: "/placeholder.svg?height=100&width=100" },
      {
        name: "Dr. David Wilson",
        specialty: "Pediatric Emergency Medicine",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
  },
  {
    id: "vaccination",
    icon: <Syringe className="h-10 w-10 text-primary" />,
    title: "Vaccination",
    description: "Preventive care through immunization against infectious diseases.",
    image: "/placeholder.svg?height=300&width=400",
    fullDescription:
      "Our Vaccination department provides preventive care through immunization against infectious diseases. We offer a wide range of vaccines for all age groups, from routine childhood immunizations to travel vaccines and seasonal flu shots.",
    features: [
      "Childhood immunizations",
      "Adult immunizations",
      "Travel vaccines",
      "Seasonal flu shots",
      "COVID-19 vaccines",
      "Immunization records",
      "Vaccine education",
      "School and workplace vaccination programs",
    ],
    doctors: [
      { name: "Dr. Lisa Brown", specialty: "Preventive Medicine", image: "/placeholder.svg?height=100&width=100" },
      { name: "Dr. James Wilson", specialty: "Infectious Disease", image: "/placeholder.svg?height=100&width=100" },
      { name: "Dr. Karen Miller", specialty: "Public Health", image: "/placeholder.svg?height=100&width=100" },
    ],
  },
]

export async function generateMetadata({ params }: { params: { id: string } }) {
  const service = services.find((s) => s.id === params.id)

  if (!service) {
    return {
      title: "Service Not Found | Dr. Salik Hospital",
    }
  }

  return {
    title: `${service.title} | Dr. Salik Hospital`,
    description: service.description,
  }
}

export default function ServicePage({ params }: { params: { id: string } }) {
  const service = services.find(s => s.id === params.id)
  
  if (!service) {
    notFound()
  }
  
  return (
    <div>
      {/* Banner */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 py-20">
        <div className="container mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/services" className="text-blue-100 hover:text-white flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Services
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">{service.title}</h1>
          <p className="text-blue-100 max-w-2xl">
            {service.description}
          </p>
        </div>
      </section>
      
      {/* Service Details */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-gray-700 mb-6">{service.fullDescription}</p>
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-3">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3">When to See a {service.title} Specialist</h3>
                  <p className="text-gray-700 mb-4">
                    If you are experiencing symptoms related to {service.title.toLowerCase()} conditions, it's important to consult with a specialist. Early diagnosis and treatment can lead to better outcomes.
                  </p>
                  <p className="text-gray-700">
                    Our team of experienced {service.title.toLowerCase()} specialists is here to provide you with the highest quality care. To schedule an appointment, please use our online booking system or call our appointment line.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Our {service.title} Specialists</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {service.doctors.map((doctor, index) => (
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
                  To schedule an appointment with one of our {service.title.toLowerCase()} specialists, please fill out the form below or call our appointment line.
                </p>
                <Link href="/appointment" className="btn-primary w-full text-center">
                  Book Now
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <p className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>(123) 456-7890</span>
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


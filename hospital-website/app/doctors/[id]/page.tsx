import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, MapPin, Phone, Mail, Star } from "lucide-react"

// Doctor data (same as in doctors/page.tsx, but with additional details)
const doctors = [
  {
    id: "john-smith",
    name: "Dr. John Smith",
    specialty: "Cardiology",
    image: "/placeholder.svg?height=400&width=400",
    description:
      "Dr. John Smith is a board-certified cardiologist with over 15 years of experience in treating heart conditions.",
    education: [
      "MD from Harvard Medical School",
      "Residency in Internal Medicine at Massachusetts General Hospital",
      "Fellowship in Cardiology at Johns Hopkins Hospital",
    ],
    certifications: ["American Board of Internal Medicine", "American Board of Cardiology"],
    expertise: ["Coronary Artery Disease", "Heart Failure", "Cardiac Imaging", "Preventive Cardiology"],
    languages: ["English", "Spanish"],
    officeHours: [
      { day: "Monday", hours: "9:00 AM - 5:00 PM" },
      { day: "Tuesday", hours: "9:00 AM - 5:00 PM" },
      { day: "Wednesday", hours: "9:00 AM - 5:00 PM" },
      { day: "Thursday", hours: "9:00 AM - 5:00 PM" },
      { day: "Friday", hours: "9:00 AM - 3:00 PM" },
    ],
    reviews: [
      {
        author: "Jane D.",
        rating: 5,
        comment:
          "Dr. Smith is an excellent cardiologist. He took the time to explain my condition and treatment options thoroughly.",
      },
      {
        author: "John M.",
        rating: 4,
        comment: "Very knowledgeable and professional. The wait time was a bit long, but the care was worth it.",
      },
    ],
  },
  // ... (add similar detailed data for other doctors)
]

export async function generateMetadata({ params }: { params: { id: string } }) {
  const doctor = doctors.find((d) => d.id === params.id)

  if (!doctor) {
    return {
      title: "Doctor Not Found | Dr. Salik Hospital",
    }
  }

  return {
    title: `${doctor.name} - ${doctor.specialty} | Dr. Salik Hospital`,
    description: doctor.description,
  }
}

export default function DoctorPage({ params }: { params: { id: string } }) {
  const doctor = doctors.find((d) => d.id === params.id)

  if (!doctor) {
    notFound()
  }

  return (
    <div>
      {/* Banner */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 py-20">
        <div className="container mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/doctors" className="text-blue-100 hover:text-white flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Doctors
            </Link>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 relative">
              <Image
                src={doctor.image || "/placeholder.svg"}
                alt={doctor.name}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">{doctor.name}</h1>
              <p className="text-xl text-blue-100 mb-4">{doctor.specialty}</p>
              <p className="text-blue-100 max-w-2xl">{doctor.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Details */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-bold mb-4">About Dr. {doctor.name.split(" ")[1]}</h2>
                <p className="text-gray-700 mb-6">{doctor.description}</p>

                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-3">Education</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    {doctor.education.map((edu, index) => (
                      <li key={index}>{edu}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-3">Certifications</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    {doctor.certifications.map((cert, index) => (
                      <li key={index}>{cert}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">Areas of Expertise</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    {doctor.expertise.map((exp, index) => (
                      <li key={index}>{exp}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Patient Reviews</h2>
                {doctor.reviews.map((review, index) => (
                  <div key={index} className="mb-4 pb-4 border-b border-gray-200 last:border-b-0 last:pb-0 last:mb-0">
                    <div className="flex items-center mb-2">
                      <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="font-bold">{review.author}</span>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold mb-4">Book an Appointment</h3>
                <p className="text-gray-700 mb-4">
                  To schedule an appointment with Dr. {doctor.name.split(" ")[1]}, please use our online booking system
                  or call our appointment line.
                </p>
                <Link href="/appointment" className="btn-primary w-full text-center">
                  Book Now
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <p className="flex items-center gap-2">
                    <Phone className="text-primary" size={20} />
                    <span>(123) 456-7890</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="text-primary" size={20} />
                    <span>{doctor.name.toLowerCase().replace(" ", ".")}@drsalik.com</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <MapPin className="text-primary" size={20} />
                    <span>
                      123 Medical Center Dr.
                      <br />
                      Suite 200
                      <br />
                      Cityville, State 12345
                    </span>
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                <div className="space-y-2">
                  {doctor.officeHours.map((schedule, index) => (
                    <p key={index} className="flex justify-between">
                      <span>{schedule.day}:</span>
                      <span>{schedule.hours}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


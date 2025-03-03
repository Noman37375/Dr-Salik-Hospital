import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div>
      {/* Banner */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Learn more about our hospital, our mission, and our commitment to providing quality healthcare services.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2005, Dr. Salik Hospital has been at the forefront of providing exceptional healthcare
                services to the community. What started as a small clinic has now grown into a full-fledged hospital
                with state-of-the-art facilities and a team of experienced medical professionals.
              </p>
              <p className="text-gray-700 mb-6">
                Our journey has been driven by a singular mission: to deliver high-quality, patient-centered care that
                improves the health and well-being of the communities we serve. Over the years, we have continuously
                evolved, embracing new technologies and innovative approaches to healthcare.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Experienced Doctors</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Modern Equipment</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Emergency Services</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Qualified Staff</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Affordable Prices</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>

            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Hospital Building"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission, Vision & Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are guided by a clear mission, an inspiring vision, and strong values that shape everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-blue-50 p-3 rounded-full inline-block mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-gray-700">
                To provide exceptional healthcare services that improve the health and well-being of the individuals and
                communities we serve, with a focus on quality, compassion, and innovation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-blue-50 p-3 rounded-full inline-block mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-gray-700">
                To be the healthcare provider of choice, recognized for excellence in patient care, medical expertise,
                and innovative healthcare solutions that set new standards in the industry.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-blue-50 p-3 rounded-full inline-block mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Our Values</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Compassion: Treating every patient with kindness and empathy</li>
                <li>• Excellence: Striving for the highest standards in everything we do</li>
                <li>• Integrity: Acting with honesty, transparency, and ethical behavior</li>
                <li>• Respect: Valuing the dignity and diversity of all individuals</li>
                <li>• Innovation: Embracing change and continuously improving</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Doctors */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Doctors</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team of experienced and dedicated doctors is committed to providing the highest quality of care to our
              patients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((doctor) => (
              <div key={doctor} className="bg-white rounded-lg shadow-md overflow-hidden group">
                <div className="relative overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=300&width=300`}
                    alt={`Doctor ${doctor}`}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex justify-center gap-4">
                        <a href="#" className="text-white hover:text-primary">
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
                          >
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                          </svg>
                        </a>
                        <a href="#" className="text-white hover:text-primary">
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
                          >
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                          </svg>
                        </a>
                        <a href="#" className="text-white hover:text-primary">
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
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-1">Dr. John Doe</h3>
                  <p className="text-primary mb-2">Cardiologist</p>
                  <p className="text-gray-600 text-sm">
                    Specializing in cardiovascular diseases with over 10 years of experience.
                  </p>
                  <Link href="/doctors/1" className="text-primary font-medium mt-3 inline-block hover:underline">
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/doctors" className="btn-primary">
              View All Doctors
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}


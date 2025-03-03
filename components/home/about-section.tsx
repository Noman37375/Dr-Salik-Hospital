import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Doctor with mask"
              width={600}
              height={500}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:flex items-center gap-3">
              <div className="bg-primary rounded-full p-3">
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
                  className="text-white"
                >
                  <polygon points="23 7 16 12 23 17 23 7"></polygon>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>
              </div>
              <span className="font-medium">Watch Video</span>
            </div>
          </div>

          <div>
            <h2 className="section-title">We are committed to providing high-quality service to our patients</h2>
            <p className="text-gray-600 mb-6">
              We have been providing quality treatment to our patients since 2005. Enjoy personalized, professional and
              affordable doctors advice, services and support.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium">We are providing Exclusive Quality Service</h3>
                  <p className="text-gray-600">
                    Our state-of-the-art facilities and expert staff ensure the highest quality care.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Having 10+ Years of Vast Experience</h3>
                  <p className="text-gray-600">
                    Our experienced team has been serving the community with dedication for over a decade.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Modern Equipment & Technology</h3>
                  <p className="text-gray-600">
                    We invest in the latest medical technology to provide accurate diagnoses and effective treatments.
                  </p>
                </div>
              </div>
            </div>

            <Link href="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}


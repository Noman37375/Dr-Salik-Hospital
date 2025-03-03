import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-blue-100 overflow-hidden">
      <div className="container mx-auto py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Get Consult with Our <span className="text-primary">Experts!</span>
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-lg">
              We have been providing quality treatment to our patients since 2005. Enjoy personalized, professional and
              affordable doctors advice and get fastest recovery.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/appointment" className="btn-primary">
                Book Appointment
              </Link>
              <Link href="/contact" className="btn-outline">
                Contact Us
              </Link>
            </div>

            <div className="mt-12">
              <p className="text-sm font-medium text-gray-700 mb-4">Trusted by Global Certified Medical Associations</p>
              <div className="flex flex-wrap gap-8 items-center">
                <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                  <Image src="/placeholder.svg?height=30&width=120" alt="Medical Association" width={120} height={30} />
                </div>
                <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                  <Image src="/placeholder.svg?height=30&width=120" alt="Medical Association" width={120} height={30} />
                </div>
                <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                  <Image src="/placeholder.svg?height=30&width=120" alt="Medical Association" width={120} height={30} />
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Medical Team"
                width={500}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary/10 rounded-full w-[400px] h-[400px] blur-3xl -z-10"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-full h-24 bg-white rounded-tl-[100px] -z-0"></div>
    </section>
  )
}


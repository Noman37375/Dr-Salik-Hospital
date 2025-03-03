import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Still have any question?</h2>
              <p className="text-gray-600">Contact us to get the best healthcare service for you and your family.</p>
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
  )
}


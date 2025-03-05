"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote, User } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "Syed Ali",
    role: "Emergency Patient",
    content:
      "We are happy that we chose Dr Salik Hospital for an emergency medical requirement. The entire team in the ER has been to be great professionals and excellent service providers. The team of nurses was very friendly and lab reports were timely. We highly recommend DSTH.",
    rating: 5,
  },
  {
    id: 2,
    name: "Kisa Zehra",
    role: "Patient",
    content:
      "Staffs and doctors are very accommodating. Best and amazing doctors and their teams. Good service and very efficient. Definitely hats off and highly recommended.",
    rating: 5,
  },
  {
    id: 3,
    name: "Iftikhar Mehdi",
    role: "Radiology Patient",
    content:
      "Thank you very much for the staff of Radiology for all your assistance during my imaging tests. You did your job wonderfully and I really appreciated your work and passion towards the well-being of your patients.",
    rating: 5,
  },
  {
    id: 4,
    name: "S/O Zaib un Nisa",
    role: "Patient",
    content:
      "The hospital staff was very cooperative and helpful. The doctors were very professional and provided excellent care. I would definitely recommend this hospital to others.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [[page, direction], setPage] = useState([0, 0])

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1)
    }, 6000)

    return () => clearInterval(interval)
  }, [page])

  const currentIndex = Math.abs(page % testimonials.length)

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            What Our <span className="text-primary">Patients Say</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Read what our patients have to say about their experience at Dr. Salik Hospital
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute top-0 left-0 -translate-x-8 translate-y-4">
            <Quote className="h-16 w-16 text-blue-100 transform -scale-x-100" />
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                </div>
                
                <div className="flex justify-center mb-3">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-lg md:text-xl text-gray-700 mb-6">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                <div>
                  <div className="font-bold text-base text-gray-900">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-primary text-sm">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-3 mt-6">
              <button
                onClick={() => paginate(-1)}
                className="p-1.5 rounded-full bg-blue-50 text-primary hover:bg-blue-100 transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => paginate(1)}
                className="p-1.5 rounded-full bg-blue-50 text-primary hover:bg-blue-100 transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


"use client"

import { servicesData } from "@/data/services-section"
import { ServiceIcon } from "@/components/service-icon"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}

export default function ServicesPage() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Medical <span className="text-primary">Services</span>
            </h2>
            <p className="text-gray-600 text-lg">
              We provide comprehensive healthcare services with state-of-the-art facilities 
              and experienced medical professionals dedicated to your well-being.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {servicesData.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-blue-50 text-primary">
                      <ServiceIcon name={service.iconName} className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-blue-50 text-primary text-sm rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Available:</h4>
                    <p className="text-sm text-gray-600">{service.availability}</p>
                  </div>
                  
                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors group/link"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 
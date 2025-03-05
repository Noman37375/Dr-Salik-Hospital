"use client"

import { servicesData } from "@/data/services-section"
import { ServiceIcon } from "@/components/service-icon"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Clock, MapPin, Users, ChevronRight } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

interface ServicePageProps {
  params: {
    id: string
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = servicesData.find(s => s.id === params.id)

  if (!service) {
    notFound()
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50/30 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="max-w-4xl mx-auto"
        >
          {/* Breadcrumb */}
          <motion.div variants={fadeInUp} className="flex items-center gap-2 text-sm text-gray-600 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-primary font-medium">
              <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-primary after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-0 after:scale-x-100">
                {service.title}
              </span>
            </span>
          </motion.div>

          {/* Service Header */}
          <motion.div 
            variants={fadeInUp}
            className="bg-white rounded-2xl shadow-lg p-8 mb-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-full -z-0" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-xl bg-primary/10 shadow-inner">
                  <ServiceIcon name={service.iconName} className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-gray-900">
                    <span className="relative inline-block">
                      {service.title}
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300 ease-out scale-x-100 group-hover:scale-x-0"></span>
                    </span>
                  </h1>
                  <p className="text-primary/80 font-medium">Department of Excellence</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{service.longDescription}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 text-gray-600">
                  <Clock className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm">{service.availability}</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 text-gray-600">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm">Main Hospital Building</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 text-gray-600">
                  <Users className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm">{service.specialists.length} Expert Specialists</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div 
            variants={fadeInUp}
            className="bg-white rounded-2xl shadow-lg p-8 mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">
                Key Features
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors group"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mr-3 group-hover:scale-125 transition-transform" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Facilities */}
          <motion.div 
            variants={fadeInUp}
            className="bg-white rounded-2xl shadow-lg p-8 mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">
                Available Facilities
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.facilities.map((facility, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                  <span className="text-gray-700">{facility}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Specialists */}
          <motion.div 
            variants={fadeInUp}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">
                Our Specialists
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.specialists.map((specialist, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all hover:shadow-md group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{specialist}</h3>
                    <p className="text-sm text-primary/80">Senior Specialist</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Back Button - Fixed Position */}
          <motion.div 
            variants={fadeInUp}
            className="fixed bottom-8 left-8 z-50"
          >
            <Link 
              href="/services"
              className="inline-flex items-center px-6 py-3 bg-white text-primary hover:text-primary-dark rounded-full shadow-lg hover:shadow-xl transition-all group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
              Back to Services
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 
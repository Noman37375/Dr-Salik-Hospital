"use client"

import Link from "next/link"
import { CheckCircle, Target, Flag, Sparkles, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const objectives = [
  {
    icon: <Target className="h-6 w-6 text-primary" />,
    title: "Our Vision",
    description: "To be recognized as a leading tertiary hospital, known for its clinical expertise, cutting-edge technology, and commitment to improving the health and well-being of the community we serve.",
  },
  {
    icon: <Flag className="h-6 w-6 text-primary" />,
    title: "Our Goals",
    description: "To deliver high-quality, comprehensive, and personalized healthcare services to meet the needs of our patients.",
  },
  {
    icon: <Sparkles className="h-6 w-6 text-primary" />,
    title: "Our Mission",
    description: "To provide exceptional tertiary healthcare services, promoting patient-centric care, innovation, and continuous improvement, while upholding the highest standards of medical excellence and compassionate healthcare delivery.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container mx-auto relative">
        <motion.div 
          className="grid grid-cols-1 gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-primary">Dr. Salik Hospital</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Welcome to Dr. Salik Hospital, where compassionate care meets modern technology. 
              As a premier healthcare facility in Karachi, we provide quality healthcare services 
              with state-of-the-art equipment and experienced medical professionals.
            </p>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-xl mb-4">Our Key Objectives</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-blue-50 rounded-full">
                          <CheckCircle className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-gray-600">Provide timely access to specialized medical care</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-blue-50 rounded-full">
                          <CheckCircle className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-gray-600">Foster patient-centric, compassionate care</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-blue-50 rounded-full">
                          <CheckCircle className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-gray-600">Continuously monitor and enhance satisfaction</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-blue-50 rounded-full">
                          <CheckCircle className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-gray-600">Maintain highest standards of medical excellence</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-primary/10 rounded-2xl scale-150 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500" />
                  <div className="relative bg-blue-50 rounded-2xl p-4 inline-block">
                    {objective.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{objective.title}</h3>
                <p className="text-gray-600">{objective.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <Link 
              href="/about" 
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors group"
            >
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Users2, Clock, Building2, Stethoscope, Heart, Shield, UserPlus, Target } from "lucide-react"

const stats = [
  {
    icon: <Users2 className="h-8 w-8 text-primary" />,
    value: "30+",
    label: "Doctors and Specialists",
  },
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    value: "10k+",
    label: "Happy Patients",
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    value: "24/7",
    label: "Emergency Care",
  },
  {
    icon: <Building2 className="h-8 w-8 text-primary" />,
    value: "4000",
    label: "Sq.ft Facility",
  },
]

const coreValues = [
  {
    icon: <Stethoscope className="h-12 w-12 text-primary" />,
    title: "Quality Healthcare",
    description: "International standard facilities and latest medical equipment",
  },
  {
    icon: <Heart className="h-12 w-12 text-primary" />,
    title: "Compassionate Care",
    description: "Patient-centric approach with empathy and understanding",
  },
  {
    icon: <Shield className="h-12 w-12 text-primary" />,
    title: "Modern Technology",
    description: "State-of-the-art equipment for accurate diagnosis and treatment",
  },
  {
    icon: <UserPlus className="h-12 w-12 text-primary" />,
    title: "Expert Team",
    description: "Highly qualified doctors and experienced medical professionals",
  },
]

const timeline = [
  {
    year: "2008",
    title: "Foundation",
    description: "Dr. Salik Hospital was established with a vision to provide quality healthcare."
  },
  {
    year: "2012",
    title: "Expansion",
    description: "Added new departments and state-of-the-art medical equipment."
  },
  {
    year: "2015",
    title: "Accreditation",
    description: "Received international accreditation for healthcare excellence."
  },
  {
    year: "2020",
    title: "Modern Upgrade",
    description: "Complete facility renovation and technology modernization."
  }
]

const testimonials = [
  {
    quote: "The care and attention I received at Dr. Salik Hospital was exceptional. The staff was professional and caring.",
    author: "Sarah Ahmed",
    role: "Patient"
  },
  {
    quote: "State-of-the-art facilities combined with compassionate care make this hospital stand out.",
    author: "Dr. Kamran Khan",
    role: "Medical Professional"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
}

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Promoting Wellness and{" "}
              <span className="text-primary relative inline-block">
                Transforming Lives
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 358 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.26C76.1667 2.82 229.8 -0.0800002 357 5.26" stroke="#3B82F6" strokeWidth="2"/>
                </svg>
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Your Journey to Better Health Starts Here
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="space-y-6" variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                Welcome to <span className="text-primary">Dr. Salik Hospital</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Welcome to Dr. Salik Hospital, where compassionate care of patients meets modern technology. 
                    As a premier healthcare hospital in Karachi, we provide quality healthcare facilities to make 
                    our hospital a trusted destination for quality care.
                  </p>
                  <p className="text-gray-600">
                    We pride ourselves on having modern equipment with the latest medical technologies. Our hospital 
                    is designed to provide a comfortable and healing environment for our in-patients and out-patients.
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Our healthcare professionals deliver accurate diagnoses with effective treatments. The hospital 
                    spreads over a 4000 sq.ft area with a vast parking lot, and the well-lit and airy building 
                    makes it a comfortable place for the patients and their attendants.
                  </p>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-primary mb-2">Why Choose Us?</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-primary rounded-full"></div>
                        <span>Expert Medical Professionals</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-primary rounded-full"></div>
                        <span>State-of-the-art Facilities</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-primary rounded-full"></div>
                        <span>24/7 Emergency Services</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A timeline of our commitment to excellence in healthcare
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-4 gap-8"
              variants={containerVariants}
            >
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-primary font-bold text-2xl mb-2">{item.year}</div>
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-blue-100" />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Practice & Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The international standard healthcare facilities, the latest medical equipment, and highly 
              qualified doctors make it one of the best hospitals.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What People Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hear from our patients and medical professionals
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={containerVariants}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-primary text-4xl mb-4">"</div>
                  <p className="text-gray-600 mb-6">{testimonial.quote}</p>
                  <div>
                    <div className="font-bold">{testimonial.author}</div>
                    <div className="text-gray-500 text-sm">{testimonial.role}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Our Vision to Serve</h2>
            </div>
            <div className="space-y-6 text-center">
              <p className="text-gray-600">
                The vision of Dr. Salik Hospital is to bring quality medical services to the people in Pakistan 
                so they do not need to travel abroad. For this purpose, we offer a comprehensive range of medical 
                services, including emergency care, pediatrics, urology, gynecology, and many more.
              </p>
              <p className="text-gray-600">
                Our accredited hospital is home to a team of highly skilled and experienced medical professionals. 
                Whether it is the physicians, surgeons, nurses, or our support staff, our priority is to deliver 
                personalized and compassionate care to each patient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="relative">
              <motion.div variants={itemVariants} className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Experience Our Care?
                </h2>
                <p className="text-blue-100 max-w-2xl mx-auto mb-8">
                  Schedule an appointment with our experienced doctors and take the first step towards better health.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/appointment" 
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-blue-600 bg-white rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Book Appointment
                  </Link>
                  <Link 
                    href="tel:0317-7843816" 
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border-2 border-white rounded-lg hover:bg-white/10 transition-colors"
                  >
                    Call: 0317-7843816
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}


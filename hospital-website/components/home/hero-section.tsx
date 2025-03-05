"use client"

import Link from "next/link"
import { Users2, Calendar, Award, ArrowRight } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { useEffect, useState, Suspense } from "react"

const stats = [
  {
    icon: <Users2 className="h-8 w-8 md:h-10 md:w-10 text-[var(--primary)] transition-transform group-hover:scale-110" />,
    value: "10K+",
    label: "Happy Patients", 
    gradient: "from-[var(--primary)] to-[var(--primary-dark)]",
    bgGradient: "from-[var(--primary-50)] via-[var(--primary-50)]/50 to-white",
    animation: "fade-right"
  },
  {
    icon: <Calendar className="h-8 w-8 md:h-10 md:w-10 text-[var(--primary)] transition-transform group-hover:scale-110" />,
    value: "24/7",
    label: "Emergency Care",
    gradient: "from-[var(--secondary)] to-[var(--secondary-dark)]", 
    bgGradient: "from-[var(--secondary-50)] via-[var(--secondary-50)]/50 to-white",
    animation: "fade-up"
  },
  {
    icon: <Award className="h-8 w-8 md:h-10 md:w-10 text-[var(--primary)] transition-transform group-hover:scale-110" />,
    value: "30+",
    label: "Expert Doctors",
    gradient: "from-[var(--primary)] to-[var(--primary-dark)]",
    bgGradient: "from-[var(--primary-50)] via-[var(--primary-50)]/50 to-white",
    animation: "fade-left"
  }
].map((stat, index) => ({
  ...stat,
  id: `stat-${index}`,
  className: "group p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer backdrop-blur-sm bg-white/80"
}))

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion()
  const [isMobile, setIsMobile] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.1 : 0.2,
        duration: prefersReducedMotion ? 0 : (isMobile ? 0.3 : 0.5)
      }
    }
  }

  const itemVariants = {
    hidden: { 
      y: prefersReducedMotion ? 0 : 20, 
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: prefersReducedMotion ? 0 : (isMobile ? 0.2 : 0.5),
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="relative min-h-[110vh] md:min-h-[120vh] overflow-hidden">
      {/* Video Background with Fallback */}
      {isMounted && (
        <div className="absolute inset-0 w-full h-full">
          <Suspense fallback={
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[var(--primary-50)]/20" />
          }>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover md:object-center object-[80%] scale-100"
              onLoadedData={() => setIsLoaded(true)}
            >
              <source src="/Explore-our-world-of-care-from-the-comfort-of-yours.mp4" type="video/mp4" />
            </video>
          </Suspense>
          <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/60 to-[var(--primary-50)]/40 backdrop-blur-[1px] z-[1]" />
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-[1]" />
        </div>
      )}
      
      <div className="container mx-auto px-4 md:px-8 py-8 md:py-16 lg:py-20 relative min-h-[110vh] md:min-h-[120vh] flex flex-col justify-start md:justify-center max-w-7xl z-[2] pt-16 md:pt-24">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-center md:-mt-20"
          variants={containerVariants}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          animate="visible"
        >
          <motion.div 
            className="z-10 space-y-6 md:space-y-8" 
            variants={itemVariants}
          >
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-[var(--primary-100)]/20 shadow-sm hover:shadow-md transition-all duration-300">
              <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-full w-full bg-[var(--primary)]"></span>
              </span>
              <span className="text-[var(--primary-dark)] font-medium text-sm md:text-base">24/7 Emergency Care Available</span>
            </div>
            
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.span
                    initial={{ display: "none" }}
                    animate={{ display: "inline" }}
                    transition={{ delay: 0.2, duration: 0 }}
                  >
                    Your{" "}
                  </motion.span>
                  <motion.span
                    initial={{ display: "none" }}
                    animate={{ display: "inline" }}
                    transition={{ delay: 0.4, duration: 0 }}
                  >
                    Health{" "}
                  </motion.span>
                  <motion.span
                    initial={{ display: "none" }}
                    animate={{ display: "inline" }}
                    transition={{ delay: 0.6, duration: 0 }}
                  >
                    Is{" "}
                  </motion.span>
                  <motion.span
                    initial={{ display: "none" }}
                    animate={{ display: "inline" }}
                    transition={{ delay: 0.8, duration: 0 }}
                  >
                    Our{" "}
                  </motion.span>
                  <motion.span
                    initial={{ display: "none" }}
                    animate={{ display: "inline" }}
                    transition={{ delay: 1, duration: 0 }}
                    className="text-[var(--primary)]"
                  >
                    Priority
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ delay: 1.2, duration: 0.1 }}
                    className="inline-block w-[3px] h-[1em] bg-gray-900 ml-1 align-middle"
                  />
                </motion.span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-xl leading-relaxed font-medium">
                Experience world-class healthcare with our team of expert doctors. We combine cutting-edge technology with compassionate care to ensure your well-being.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <Link 
                href="/appointment" 
                className="group relative inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:bg-opacity-90"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book Appointment
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/[0.15] to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Link>
              <Link 
                href="/contact" 
                className="group relative inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-gray-800 bg-white/50 hover:bg-white/60 backdrop-blur-md rounded-xl border border-gray-200/20 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/[0.2] to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Link>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 lg:gap-8 relative mx-auto w-full mt-6 md:mt-0">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial={prefersReducedMotion ? "visible" : "hidden"}
                animate="visible"
                className={`group relative overflow-hidden bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl border border-white/10 transition-all duration-300 hover:shadow-lg ${
                  index === 2 ? 'col-span-2 sm:col-span-1' : ''
                }`}
              >
                <div className="relative p-4 sm:p-5 flex items-center sm:flex-col sm:items-center text-left sm:text-center gap-3 sm:gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-50)]/10 to-[var(--primary-50)]/5 blur-xl transition-all duration-300 group-hover:blur-2xl" />
                    <div className="relative p-2 sm:p-2.5 md:p-3 transition-all duration-300">
                      {stat.icon}
                    </div>
                  </div>

                  <div className="flex flex-col gap-0.5">
                    <div className={`text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent transition-all duration-300 group-hover:scale-110 transform-gpu`}>
                      {stat.value}
                    </div>

                    <div className="text-[10px] xs:text-xs sm:text-sm md:text-base font-[600] text-gray-800 uppercase tracking-wider leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 30L60 25C120 20 240 10 360 15C480 20 600 40 720 45C840 50 960 40 1080 35C1200 30 1320 30 1380 30L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V30Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}


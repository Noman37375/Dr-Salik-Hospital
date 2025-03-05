import HeroSection from "@/components/home/hero-section"
import ServicesSection from "@/components/home/services-section"
import AboutSection from "@/components/home/about-section"
import TestimonialsSection from "@/components/home/testimonials-section"
import AppointmentSteps from "@/components/home/appointment-steps"
import CTASection from "@/components/home/cta-section"

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <AppointmentSteps />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}


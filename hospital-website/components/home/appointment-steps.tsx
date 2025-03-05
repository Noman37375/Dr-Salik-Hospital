import { CircleUser, CalendarCheck, Clock, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: <CircleUser className="h-8 w-8 text-white" />,
    title: "Create Account",
    description: "Register to access our services",
  },
  {
    icon: <CalendarCheck className="h-8 w-8 text-white" />,
    title: "Choose Branch",
    description: "Select your preferred location",
  },
  {
    icon: <Clock className="h-8 w-8 text-white" />,
    title: "Book Schedule",
    description: "Pick a convenient date and time",
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-white" />,
    title: "Get Treatment",
    description: "Visit us for your appointment",
  },
]

export default function AppointmentSteps() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">4 Easy Steps</h2>
          <p className="section-subtitle mx-auto">to get your appointment</p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-100 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center relative z-10">
                <div className="bg-primary rounded-full p-4 mb-4">{step.icon}</div>
                <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>

                {/* Step number */}
                <div className="absolute -top-3 -right-3 bg-blue-100 text-primary rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="/appointment" className="btn-primary">
            Book Your Appointment Now
          </a>
        </div>
      </div>
    </section>
  )
}


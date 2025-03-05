export const metadata = {
  title: "Contact Us | Dr. Salik Hospital",
  description: "Get in touch with Dr. Salik Hospital. We're here to answer your questions and provide assistance.",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      
      <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
            <p className="text-gray-600">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-1">Address</h3>
            <p className="text-gray-600">123 Hospital Street, Medical District</p>
            <p className="text-gray-600">City, State 12345</p>
          </div>

          <div>
            <h3 className="font-medium mb-1">Phone</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>

          <div>
            <h3 className="font-medium mb-1">Email</h3>
            <p className="text-gray-600">contact@drsalikhospital.com</p>
          </div>
        </div>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <input 
              type="text"
              id="name"
              className="w-full p-2 border rounded-md"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email" 
              id="email"
              className="w-full p-2 border rounded-md"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
            <textarea
              id="message"
              rows={4}
              className="w-full p-2 border rounded-md"
              placeholder="How can we help you?"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

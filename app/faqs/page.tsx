"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Search } from "lucide-react"

// FAQ data
const faqCategories = [
  {
    category: "General",
    questions: [
      {
        question: "What are your visiting hours?",
        answer:
          "Our general visiting hours are from 10:00 AM to 8:00 PM daily. However, these may vary for different departments and patient conditions. Please check with the specific ward or call our information desk for more details.",
      },
      {
        question: "Do you offer parking facilities?",
        answer:
          "Yes, we have a multi-story car park available for patients and visitors. The first 30 minutes are free, and there are discounted rates for long-term patients and their families.",
      },
      {
        question: "Is Wi-Fi available in the hospital?",
        answer:
          "Yes, we offer free Wi-Fi throughout the hospital for patients and visitors. You can get the access code from our reception desk.",
      },
    ],
  },
  {
    category: "Appointments",
    questions: [
      {
        question: "How can I schedule an appointment?",
        answer:
          "You can schedule an appointment by calling our appointment line at (123) 456-7890, using our online booking system on our website, or visiting our appointment desk in person.",
      },
      {
        question: "What should I bring to my appointment?",
        answer:
          "Please bring your ID, insurance card, list of current medications, and any relevant medical records or test results. If it's your first visit, please arrive 15 minutes early to complete necessary paperwork.",
      },
      {
        question: "How do I cancel or reschedule an appointment?",
        answer:
          "To cancel or reschedule, please call our appointment line or log into your patient portal at least 24 hours before your scheduled appointment time.",
      },
    ],
  },
  {
    category: "Insurance & Billing",
    questions: [
      {
        question: "What insurance plans do you accept?",
        answer:
          "We accept most major insurance plans. Please check our website for a full list of accepted insurance providers or contact our billing department for specific inquiries.",
      },
      {
        question: "How can I get an estimate for a procedure?",
        answer:
          "You can request a cost estimate by contacting our billing department. They will need information about the specific procedure and your insurance coverage to provide an accurate estimate.",
      },
      {
        question: "Do you offer payment plans?",
        answer:
          "Yes, we offer flexible payment plans for patients who need assistance. Please contact our financial counseling office to discuss your options.",
      },
    ],
  },
  {
    category: "Medical Records",
    questions: [
      {
        question: "How can I access my medical records?",
        answer:
          "You can access your medical records through our patient portal. For full medical record requests, please submit a written request to our Medical Records Department.",
      },
      {
        question: "Is there a fee for obtaining medical records?",
        answer:
          "There may be a small processing fee for obtaining physical copies of your medical records. Electronic access through our patient portal is free.",
      },
      {
        question: "How long does it take to receive requested medical records?",
        answer:
          "Typically, it takes 5-10 business days to process a medical records request. Urgent requests may be processed more quickly.",
      },
    ],
  },
]

export default function FAQsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const [expandedQuestions, setExpandedQuestions] = useState<{ [key: string]: boolean }>({})

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category)
  }

  const toggleQuestion = (category: string, questionIndex: number) => {
    setExpandedQuestions((prev) => ({
      ...prev,
      [`${category}-${questionIndex}`]: !prev[`${category}-${questionIndex}`],
    }))
  }

  const filteredFAQs = faqCategories
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.questions.length > 0)

  return (
    <div>
      {/* Banner */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Find answers to common questions about our services, policies, and procedures.
          </p>
        </div>
      </section>

      {/* Search and FAQs */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            {/* Search input */}
            <div className="mb-8 relative">
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>

            {/* FAQs accordion */}
            {filteredFAQs.map((category) => (
              <div key={category.category} className="mb-6">
                <button
                  onClick={() => toggleCategory(category.category)}
                  className="flex justify-between items-center w-full text-left text-lg font-semibold bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  {category.category}
                  {expandedCategory === category.category ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
                {expandedCategory === category.category && (
                  <div className="mt-4 space-y-4">
                    {category.questions.map((q, index) => (
                      <div key={index} className="border-b border-gray-200 pb-4">
                        <button
                          onClick={() => toggleQuestion(category.category, index)}
                          className="flex justify-between items-center w-full text-left font-medium"
                        >
                          {q.question}
                          {expandedQuestions[`${category.category}-${index}`] ? (
                            <ChevronUp className="h-5 w-5" />
                          ) : (
                            <ChevronDown className="h-5 w-5" />
                          )}
                        </button>
                        {expandedQuestions[`${category.category}-${index}`] && (
                          <p className="mt-2 text-gray-600">{q.answer}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Couldn't find an answer?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            If you couldn't find the answer you were looking for, please don't hesitate to contact us. Our team is here
            to help.
          </p>
          <a href="/contact" className="btn-primary">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
}


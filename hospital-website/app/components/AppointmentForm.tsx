import { useState, useEffect } from 'react';
import { Calendar, Clock, Phone, Mail, User, MessageSquare, X } from 'lucide-react';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity';

interface Doctor {
  _id: string;
  name: string;
  specialization: string;
  timing: string;
  fees: number;
}

interface AppointmentFormProps {
  doctorName?: string;
  specialization?: string;
  isOpen: boolean;
  onClose: () => void;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  preferredDate?: string;
  doctorId?: string;
}

export default function AppointmentForm({ doctorName, specialization, isOpen, onClose }: AppointmentFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    message: '',
    doctorId: ''
  });

  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isLoadingDoctors, setIsLoadingDoctors] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      const query = groq`*[_type == "doctor"] | order(order asc) {
        _id,
        name,
        specialization,
        timing,
        fees
      }`;
      
      try {
        const data = await client.fetch(query);
        setDoctors(data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      } finally {
        setIsLoadingDoctors(false);
      }
    };

    if (isOpen) {
      fetchDoctors();
    }
  }, [isOpen]);

  useEffect(() => {
    if (doctorName) {
      const selectedDoctor = doctors.find(d => d.name === doctorName);
      if (selectedDoctor) {
        setFormData(prev => ({ ...prev, doctorId: selectedDoctor._id }));
      }
    }
  }, [doctorName, doctors]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.doctorId) {
      newErrors.doctorId = 'Please select a doctor';
    }

    if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters long';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    const selectedDate = new Date(formData.preferredDate);
    const today = new Date();
    if (selectedDate < today) {
      newErrors.preferredDate = 'Please select a future date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const selectedDoctor = doctors.find(d => d._id === formData.doctorId);
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          doctorName: selectedDoctor?.name,
          specialization: selectedDoctor?.specialization,
          ...formData,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setSubmitStatus('success');
      setTimeout(() => {
        onClose();
        setFormData({
          name: '',
          email: '',
          phone: '',
          preferredDate: '',
          message: '',
          doctorId: ''
        });
        setErrors({});
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  if (!isOpen) return null;

  const selectedDoctor = doctors.find(d => d._id === formData.doctorId);

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-2 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-auto relative my-4">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 transition-colors"
          disabled={isSubmitting}
        >
          <X className="w-4 h-4" />
        </button>

        {/* Form header */}
        <div className="p-4 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Book Appointment</h2>
          <p className="text-xs text-gray-600 mt-0.5">
            Fill in your details to request an appointment
          </p>
        </div>

        {submitStatus === 'success' ? (
          <div className="p-6 text-center">
            <div className="w-12 h-12 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Appointment Request Sent!</h3>
            <p className="text-sm text-gray-600">
              We will contact you shortly to confirm your appointment.
              {selectedDoctor && (
                <span className="block mt-1.5 text-xs">
                  Selected Doctor: {selectedDoctor.name} ({selectedDoctor.specialization})
                </span>
              )}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-4 space-y-3">
            {/* Doctor Selection */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Select Doctor
              </label>
              <div className="relative">
                <select
                  name="doctorId"
                  required
                  className={`w-full pl-3 pr-8 py-2 text-sm border rounded-lg appearance-none bg-white focus:ring-1 focus:ring-blue-500/20 focus:border-blue-500 ${
                    errors.doctorId ? 'border-red-500' : 'border-gray-200'
                  }`}
                  value={formData.doctorId}
                  onChange={handleInputChange}
                  disabled={isSubmitting || isLoadingDoctors}
                >
                  <option value="">Choose a doctor</option>
                  {doctors.map((doctor) => (
                    <option key={doctor._id} value={doctor._id}>
                      {doctor.name} - {doctor.specialization}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              {errors.doctorId && (
                <p className="mt-1 text-xs text-red-500">{errors.doctorId}</p>
              )}
            </div>

            {/* Selected Doctor Info */}
            {selectedDoctor && (
              <div className="p-2.5 bg-blue-50 rounded-lg text-xs">
                <div className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-blue-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Available Timing</p>
                    <p className="text-gray-600">{selectedDoctor.timing}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 mt-2">
                  <div className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex items-center justify-center">₨</div>
                  <div>
                    <p className="font-medium text-gray-900">Consultation Fee</p>
                    <p className="text-gray-600">PKR {selectedDoctor.fees}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Personal Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    required
                    className={`w-full pl-8 pr-3 py-2 text-sm border rounded-lg focus:ring-1 focus:ring-blue-500/20 focus:border-blue-500 ${
                      errors.name ? 'border-red-500' : 'border-gray-200'
                    }`}
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  />
                  <User className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                </div>
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    required
                    className={`w-full pl-8 pr-3 py-2 text-sm border rounded-lg focus:ring-1 focus:ring-blue-500/20 focus:border-blue-500 ${
                      errors.email ? 'border-red-500' : 'border-gray-200'
                    }`}
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  />
                  <Mail className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                </div>
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    required
                    className={`w-full pl-8 pr-3 py-2 text-sm border rounded-lg focus:ring-1 focus:ring-blue-500/20 focus:border-blue-500 ${
                      errors.phone ? 'border-red-500' : 'border-gray-200'
                    }`}
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    placeholder="+92 300 1234567"
                  />
                  <Phone className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Preferred Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="preferredDate"
                    required
                    className={`w-full pl-8 pr-3 py-2 text-sm border rounded-lg focus:ring-1 focus:ring-blue-500/20 focus:border-blue-500 ${
                      errors.preferredDate ? 'border-red-500' : 'border-gray-200'
                    }`}
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    min={new Date().toISOString().split('T')[0]}
                  />
                  <Calendar className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                </div>
                {errors.preferredDate && (
                  <p className="mt-1 text-xs text-red-500">{errors.preferredDate}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Message (Optional)
              </label>
              <div className="relative">
                <textarea
                  name="message"
                  className="w-full pl-8 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500/20 focus:border-blue-500"
                  rows={2}
                  value={formData.message}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                ></textarea>
                <MessageSquare className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-2.5" />
              </div>
            </div>

            {submitStatus === 'error' && (
              <div className="p-2.5 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-xs text-red-600">
                  Failed to send appointment request. Please try again.
                </p>
              </div>
            )}

            <button
              type="submit"
              className={`w-full py-2 px-4 text-sm font-medium rounded-lg transition-all ${
                isSubmitting
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-md hover:shadow-blue-600/25'
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Processing...
                </div>
              ) : (
                'Book Appointment'
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
} 
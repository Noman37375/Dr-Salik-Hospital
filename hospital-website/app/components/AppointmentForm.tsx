import { useState } from 'react';

interface AppointmentFormProps {
  doctorName: string;
  specialization: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function AppointmentForm({ doctorName, specialization, isOpen, onClose }: AppointmentFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          doctorName,
          specialization,
          ...formData,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setSubmitStatus('success');
      setTimeout(() => {
        onClose();
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          preferredDate: '',
          message: ''
        });
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          disabled={isSubmitting}
        >
          ✕
        </button>
        
        <h2 className="text-2xl font-bold mb-4">Book Appointment</h2>
        <p className="text-gray-600 mb-6">
          with {doctorName}<br />
          <span className="text-blue-600">{specialization}</span>
        </p>

        {submitStatus === 'success' ? (
          <div className="text-center py-8">
            <div className="text-green-500 text-xl mb-2">✓</div>
            <h3 className="text-xl font-semibold text-gray-800">Appointment Request Sent!</h3>
            <p className="text-gray-600 mt-2">We will contact you shortly to confirm your appointment.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                disabled={isSubmitting}
                pattern="[0-9+\-\s]+"
                title="Please enter a valid phone number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Date
              </label>
              <input
                type="date"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                disabled={isSubmitting}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message (Optional)
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                disabled={isSubmitting}
              ></textarea>
            </div>

            {submitStatus === 'error' && (
              <p className="text-red-500 text-sm">
                Failed to send appointment request. Please try again.
              </p>
            )}

            <button
              type="submit"
              className={`w-full py-2 px-4 rounded-md transition-colors ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit Appointment Request'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
} 
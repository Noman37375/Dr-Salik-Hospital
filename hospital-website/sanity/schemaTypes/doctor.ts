export default {
  name: 'doctor',
  title: 'Doctors',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Doctor Name',
      type: 'string',
      description: 'Full name with title (e.g., Dr. Syed Zafar Salik)',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'specialization',
      title: 'Specialization',
      type: 'string',
      description: 'E.g., Adult & Child Psychiatrist',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'qualifications',
      title: 'Qualifications',
      type: 'string',
      description: 'E.g., MBBS(DOW), MD(USA)',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description of the doctor',
    },
    {
      name: 'experience',
      title: 'Experience',
      type: 'string',
      description: 'Years of experience',
    },
    {
      name: 'timing',
      title: 'Consultation Timing',
      type: 'text',
      description: 'E.g., Tuesday, 11:00 AM - 1:00 PM',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'fees',
      title: 'Consultation Fees',
      type: 'number',
      description: 'Amount in PKR',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'isOnCall',
      title: 'Available on Call',
      type: 'boolean',
      description: 'Check if doctor is available on call',
      initialValue: false,
    },
    {
      name: 'isHeadDoctor',
      title: 'Is Head Doctor',
      type: 'boolean',
      description: 'Check if this is the head doctor',
      initialValue: false,
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which to display this doctor (lower numbers appear first)',
      initialValue: 99,
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'specialization',
      media: 'image'
    },
  },
} 
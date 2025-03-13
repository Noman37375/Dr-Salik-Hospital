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
      name: 'consultationTimings',
      title: 'Consultation Timings',
      type: 'array',
      description: 'Add consultation timings for different days',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'day',
            title: 'Day',
            type: 'string',
            options: {
              list: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
              ]
            },
            validation: (Rule: any) => Rule.required(),
          },
          {
            name: 'startTime',
            title: 'Start Time',
            type: 'string',
            options: {
              list: [
                '9:00 AM', '9:30 AM',
                '10:00 AM', '10:30 AM',
                '11:00 AM', '11:30 AM',
                '12:00 PM', '12:30 PM',
                '1:00 PM', '1:30 PM',
                '2:00 PM', '2:30 PM',
                '3:00 PM', '3:30 PM',
                '4:00 PM', '4:30 PM',
                '5:00 PM', '5:30 PM',
                '6:00 PM', '6:30 PM',
                '7:00 PM', '7:30 PM',
                '8:00 PM'
              ]
            },
            validation: (Rule: any) => Rule.required(),
          },
          {
            name: 'endTime',
            title: 'End Time',
            type: 'string',
            options: {
              list: [
                '9:30 AM', '10:00 AM',
                '10:30 AM', '11:00 AM',
                '11:30 AM', '12:00 PM',
                '12:30 PM', '1:00 PM',
                '1:30 PM', '2:00 PM',
                '2:30 PM', '3:00 PM',
                '3:30 PM', '4:00 PM',
                '4:30 PM', '5:00 PM',
                '5:30 PM', '6:00 PM',
                '6:30 PM', '7:00 PM',
                '7:30 PM', '8:00 PM',
                '8:30 PM'
              ]
            },
            validation: (Rule: any) => Rule.required(),
          },
          {
            name: 'type',
            title: 'Appointment Type',
            type: 'string',
            options: {
              list: [
                { title: 'Pre-Appointment', value: 'pre' },
                { title: 'Follow-up', value: 'followup' }
              ]
            },
            validation: (Rule: any) => Rule.required(),
          }
        ]
      }],
      validation: (Rule: any) => Rule.required().min(1),
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
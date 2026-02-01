import type { CollectionConfig } from 'payload'
import { CONTACT_TYPE_OPTIONS, SERVICE_OPTIONS } from '../features/contact/constants'

export const ContactRequests: CollectionConfig = {
  slug: 'contact-requests',
  access: {
    read: ({ req: { user } }) => {
      // Allow admin users to read all requests
      if (user) return true

      // Allow anonymous output only if needed, otherwise restrict
      return false
    },
    create: () => true, // Anyone can submit a contact request
    update: ({ req: { user } }) => Boolean(user), // Only admins can update
    delete: ({ req: { user } }) => Boolean(user), // Only admins can delete
  },
  admin: {
    useAsTitle: 'subject',
    defaultColumns: ['subject', 'fullName', 'email', 'contactType', 'createdAt'],
  },
  fields: [
    {
      name: 'fullName',
      type: 'text',
      required: true,
      label: 'Full Name',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Email Address',
    },
    {
      name: 'contactType',
      type: 'select',
      required: true,
      label: 'Contact Type',
      options: [...CONTACT_TYPE_OPTIONS],
    },
    {
      name: 'subject',
      type: 'text',
      required: true,
      label: 'Subject',
    },
    {
      name: 'preferredDate',
      type: 'date',
      label: 'Preferred Meeting Date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'service',
      type: 'select',
      label: 'Interested Services',
      hasMany: true,
      options: [...SERVICE_OPTIONS],
    },
    {
      name: 'examplePassword',
      type: 'text',
      label: 'Example Secret (Password Style)',
      admin: {
        description: 'This is just an example of a password-masked floating input.',
      },
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
      label: 'Message',
    },
  ],
}

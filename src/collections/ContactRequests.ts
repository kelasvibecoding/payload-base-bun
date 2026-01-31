import type { CollectionConfig } from 'payload'

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
    defaultColumns: ['subject', 'fullName', 'email', 'createdAt'],
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
      name: 'subject',
      type: 'text',
      required: true,
      label: 'Subject',
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
      label: 'Message',
    },
  ],
}

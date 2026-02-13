import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'avatar',
      type: 'text',
      admin: {
        description: 'Profile picture URL',
      },
    },
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'admin',
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Staff',
          value: 'staff',
        },
      ],
      saveToJWT: true,
    },
    {
      name: 'hasOAuth',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        hidden: true,
        description: 'User has OAuth login capability',
      },
    },
    {
      name: 'hasOAuthOnly',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        hidden: true,
        description: 'User only has OAuth login (no password)',
      },
    },
    {
      name: 'lastLoginAt',
      type: 'date',
      admin: {
        description: 'Last time this user logged in',
        readOnly: true,
      },
    },
    {
      name: 'sessions',
      type: 'array',
      fields: [
        {
          name: 'id',
          type: 'text',
          required: true,
        },
        {
          name: 'createdAt',
          type: 'date',
        },
        {
          name: 'expiresAt',
          type: 'date',
          required: true,
        },
      ],
      admin: {
        readOnly: true,
        hidden: true,
      },
    },
    // Add more fields as needed
  ],
}

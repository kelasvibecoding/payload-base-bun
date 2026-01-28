import { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'alertBox',
      type: 'ui',
      admin: {
        components: {
          Field: '@/components/admin/AlertBox',
        },
      },
    },
    {
      name: 'content',
      type: 'richText',
    },
  ],
}

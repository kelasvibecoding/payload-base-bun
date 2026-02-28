import type { CollectionConfig } from 'payload'

import { anyone } from '@/access'
import { authenticated } from '@/access'
import { slugField } from '@/lib/fields/slug'
import { groups } from '@/lib/groups'
import { auditTrailFields, auditTrailHooks } from '@/features/auth/fields/audit-trail'

export const Categories: CollectionConfig = {
  slug: 'categories',
  labels: {
    plural: { en: 'Categories', id: 'Kategori' },
    singular: { en: 'Category', id: 'Kategori' },
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    group: groups.content,
    defaultColumns: ['title', 'order', 'updatedAt'],
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      admin: {
        description: {
          en: 'Category title for organizing content',
          id: 'Judul kategori untuk mengorganisir konten',
        },
      },
      label: { en: 'Title', id: 'Judul' },
      localized: true,
      required: true,
    },
    {
      name: 'order',
      type: 'number',
      admin: {
        description: {
          en: 'Order number for sorting categories (lower numbers appear first)',
          id: 'Nomor urut untuk menyortir kategori (angka lebih rendah muncul terlebih dahulu)',
        },
        position: 'sidebar',
      },
      defaultValue: 0,
      label: { en: 'Order', id: 'Urutan' },
    },
    ...slugField(),
    ...auditTrailFields,
  ],
  hooks: {
    ...auditTrailHooks,
  },
  defaultSort: 'order',
  timestamps: true,
}

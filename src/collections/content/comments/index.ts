import type { CollectionConfig } from 'payload'

import { anyone } from '@/access'
import { authenticated } from '@/access'
import { groups } from '@/lib/groups'
import { auditTrailFields, auditTrailHooks } from '@/features/auth/fields/audit-trail'

import {
  securityAfterChange,
  securityBeforeChange,
  securityBeforeValidate,
} from '@/features/blogs/hooks/comment-security-hooks'
import { revalidatePost } from '@/features/blogs/hooks/revalidate-post'

import { COMMENT_LIMITS } from '@/features/blogs/constants'

export const Comments: CollectionConfig = {
  slug: 'comments',
  labels: {
    plural: { en: 'Comments', id: 'Komentar' },
    singular: { en: 'Comment', id: 'Komentar' },
  },
  access: {
    create: anyone,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    group: groups.content,
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'doc',
      type: 'relationship',
      admin: {
        description: {
          en: 'Select the post this comment belongs to',
          id: 'Pilih postingan yang komentar ini miliki',
        },
      },
      label: { en: 'Document', id: 'Dokumen' },
      relationTo: 'posts',
      required: true,
    },
    {
      name: 'name',
      type: 'text',
      label: { en: 'Name', id: 'Nama' },
      required: true,
      validate: (val: string | string[] | null | undefined) => {
        if (!val || typeof val !== 'string') return 'Name is required'
        if (val.length < COMMENT_LIMITS.NAME_MIN_LENGTH)
          return `Name must be at least ${COMMENT_LIMITS.NAME_MIN_LENGTH} characters`
        if (val.length > COMMENT_LIMITS.NAME_MAX_LENGTH)
          return `Name must be less than ${COMMENT_LIMITS.NAME_MAX_LENGTH} characters`
        return true
      },
    },
    {
      name: 'email',
      type: 'email',
      admin: {
        description: { en: 'Commenter email address', id: 'Alamat email pemberi komentar' },
      },
      label: { en: 'Email', id: 'Email' },
      required: true,
      validate: (val: string | null | undefined) => {
        if (!val || typeof val !== 'string') return 'Email is required'
        if (val.length > COMMENT_LIMITS.EMAIL_MAX_LENGTH)
          return `Email must be less than ${COMMENT_LIMITS.EMAIL_MAX_LENGTH} characters`
        return true
      },
    },
    {
      name: 'comment',
      type: 'textarea',
      admin: {
        description: { en: 'Comment content', id: 'Isi komentar' },
      },
      label: { en: 'Comment', id: 'Komentar' },
      required: true,
      validate: (val: string | null | undefined) => {
        if (!val || typeof val !== 'string') return 'Comment is required'
        if (val.length < COMMENT_LIMITS.COMMENT_MIN_LENGTH)
          return `Comment must be at least ${COMMENT_LIMITS.COMMENT_MIN_LENGTH} characters`
        if (val.length > COMMENT_LIMITS.COMMENT_MAX_LENGTH)
          return `Comment must be less than ${COMMENT_LIMITS.COMMENT_MAX_LENGTH} characters`
        return true
      },
    },

    ...auditTrailFields,
  ],
  hooks: {
    afterChange: [securityAfterChange, revalidatePost],
    beforeChange: [...auditTrailHooks.beforeChange, securityBeforeChange],
    beforeValidate: [securityBeforeValidate],
  },
  timestamps: true,
  versions: {
    drafts: true,
  },
}


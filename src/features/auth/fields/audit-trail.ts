import type { CollectionBeforeChangeHook, Field } from 'payload'

export const auditTrailFields: Field[] = [
  {
    name: 'createdBy',
    type: 'relationship',
    admin: {
      description: {
        en: 'The user who created this document',
        id: 'Pengguna yang membuat dokumen ini',
      },
      position: 'sidebar',
      readOnly: true,
    },
    label: { en: 'Created By', id: 'Dibuat Oleh' },
    relationTo: 'users',
  },
  {
    name: 'updatedBy',
    type: 'relationship',
    admin: {
      description: {
        en: 'The user who last updated this document',
        id: 'Pengguna yang terakhir kali memperbarui dokumen ini',
      },
      position: 'sidebar',
      readOnly: true,
    },
    label: { en: 'Updated By', id: 'Diperbarui Oleh' },
    relationTo: 'users',
  },
]

const beforeChangeHook: CollectionBeforeChangeHook = ({ data, req, operation }) => {
  if (operation === 'create') {
    if (req.user) {
      data.createdBy = req.user.id
      data.updatedBy = req.user.id
    }
  } else if (operation === 'update') {
    if (req.user) {
      data.updatedBy = req.user.id
    }
  }
  return data
}

export const auditTrailHooks = {
  beforeChange: [beforeChangeHook],
}

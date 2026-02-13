import type { Block } from 'payload'

export const MediaBlock: Block = {
  slug: 'mediaBlock',
  interfaceName: 'MediaBlock',
  fields: [
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'size',
      type: 'select',
      defaultValue: 'card',
      options: [
        { label: 'Thumbnail', value: 'thumbnail' },
        { label: 'Card', value: 'card' },
      ],
    },
    {
      name: 'priority',
      type: 'checkbox',
      defaultValue: false,
      label: 'High Priority (LCP)',
    },
    {
      name: 'loading',
      type: 'select',
      defaultValue: 'lazy',
      options: [
        { label: 'Lazy', value: 'lazy' },
        { label: 'Eager', value: 'eager' },
      ],
    },
  ],
}

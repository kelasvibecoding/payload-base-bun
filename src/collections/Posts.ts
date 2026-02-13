import { CollectionConfig } from 'payload'
import { BlocksFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { Banner } from '../blocks/Banner/config'
import { Content } from '../blocks/Content/config'
import { MediaBlock } from '../blocks/Media/config'

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
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            BlocksFeature({
              blocks: [Banner, Content, MediaBlock],
            }),
          ]
        },
      }),
    },
  ],
}

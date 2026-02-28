import type { CollectionConfig } from 'payload'
import { authenticated, authenticatedOrPublished } from '@/access'
import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { Banner } from '@/blocks/banner/config'
import { Code } from '@/blocks/code/config'
import { Content } from '@/blocks/content/config'
import { MediaBlock } from '@/blocks/media-block/config'
import { slugField } from '@/lib/fields/slug'
import { groups } from '@/lib/groups'
import { generatePreviewPath } from '../../../utilities/generate-preview-path'

import { auditTrailFields, auditTrailHooks } from '@/features/auth/fields/audit-trail'
import { populateAuthors } from './hooks/populate-authors'
import { revalidateDelete, revalidatePost } from '@/features/blogs/hooks/revalidate-post'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

export const Posts: CollectionConfig = {
  slug: 'posts',
  labels: {
    plural: { en: 'Posts', id: 'Artikel' },
    singular: { en: 'Post', id: 'Artikel' },
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  defaultPopulate: {
    title: true,
    slug: true,
    categories: true,
    meta: {
      image: true,
      description: true,
    },
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    group: groups.content,
    livePreview: {
      url: ({ data }) => {
        const path = generatePreviewPath({
          collection: 'posts',
          slug: typeof data?.slug === 'string' ? data.slug : '',
          // @ts-expect-error - request is not always present in the preview callback
          req: {},
        })

        return `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`
      },
    },
    preview: (doc) =>
      generatePreviewPath({
        collection: 'posts',
        slug: typeof doc?.slug === 'string' ? doc.slug : '',
        // @ts-expect-error - request is not always present in the preview callback
        req: {},
      }),
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      admin: {
        description: {
          en: 'Post title that appears in the browser tab and navigation',
          id: 'Judul artikel yang muncul di tab browser dan navigasi',
        },
      },
      label: { en: 'Title', id: 'Judul' },
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [
            {
              name: 'heroImage',
              type: 'upload',
              admin: {
                description: {
                  en: 'Featured image that appears at the top of the post',
                  id: 'Gambar utama yang muncul di bagian atas artikel',
                },
              },
              label: { en: 'Hero Image', id: 'Gambar Utama' },
              relationTo: 'media',
            },
            {
              name: 'content',
              type: 'richText',
              admin: {
                description: {
                  en: 'Main content of the post.',
                  id: 'Konten utama artikel.',
                },
              },
              label: { en: 'Content', id: 'Konten' },
              localized: true,
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                    BlocksFeature({ blocks: [Banner, Code, Content, MediaBlock] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    HorizontalRuleFeature(),
                  ]
                },
              }),
              required: true,
            },
            {
              name: 'conclusion',
              type: 'richText',
              admin: {
                description: {
                  en: 'Conclusion section content.',
                  id: 'Konten bagian kesimpulan.',
                },
              },
              label: { en: 'Conclusion', id: 'Kesimpulan' },
              localized: true,
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                    BlocksFeature({ blocks: [Banner, Code, Content, MediaBlock] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    HorizontalRuleFeature(),
                  ]
                },
              }),
            },
          ],
          label: { en: 'Post Content', id: 'Konten Posting' },
        },
        {
          fields: [
            {
              name: 'relatedPosts',
              type: 'relationship',
              admin: {
                description: {
                  en: 'Select related posts to suggest to readers',
                  id: 'Pilih artikel terkait untuk disarankan kepada pembaca',
                },
                position: 'sidebar',
              },
              filterOptions: ({ id }) => {
                return {
                  id: {
                    not_in: [id],
                  },
                }
              },
              hasMany: true,
              label: { en: 'Related Posts', id: 'Posting Terkait' },
              relationTo: 'posts',
            },
            {
              name: 'categories',
              type: 'relationship',
              admin: {
                description: {
                  en: 'Select categories to organize this post',
                  id: 'Pilih kategori untuk mengorganisir artikel ini',
                },
                position: 'sidebar',
              },
              hasMany: true,
              label: { en: 'Categories', id: 'Kategori' },
              relationTo: 'categories',
            },
          ],
          label: { en: 'Meta Detail', id: 'Detail Meta' },
        },
        {
          name: 'meta',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
          label: { en: 'SEO', id: 'SEO' },
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        description: {
          en: 'Date and time when the post will be published',
          id: 'Tanggal dan waktu ketika artikel akan diterbitkan',
        },
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          ({ data, operation, value }) => {
            if (operation === 'create' || operation === 'update') {
              if (data?._status === 'published' && !value) {
                return new Date()
              }
            }
            return value
          },
        ],
      },
      label: { en: 'Published Date', id: 'Tanggal Terbit' },
    },
    {
      name: 'authors',
      type: 'relationship',
      admin: {
        description: {
          en: 'Select authors for this post',
          id: 'Pilih penulis untuk artikel ini',
        },
        position: 'sidebar',
      },
      hasMany: true,
      label: { en: 'Authors', id: 'Penulis' },
      relationTo: 'users',
    },
    // This field is only used to populate the user data via the `populateAuthors` hook
    // This is because the `authors` field is only an ID, and we don't want to leak
    // personal user data to the frontend if we were to exclude this hook.
    {
      name: 'populatedAuthors',
      type: 'array',
      access: {
        update: () => false,
      },
      admin: {
        disabled: true,
        readOnly: true,
      },
      fields: [
        {
          name: 'id',
          type: 'text',
        },
        {
          name: 'name',
          type: 'text',
        },
      ],
      label: { en: 'Populated Authors', id: 'Penulis Terisi' },
    },
    {
      name: 'enableComments',
      type: 'checkbox',
      admin: {
        description: {
          en: 'Toggle to allow or disable comments for this post',
          id: 'Aktifkan atau nonaktifkan komentar untuk artikel ini',
        },
        position: 'sidebar',
      },
      defaultValue: true,
      label: { en: 'Enable Comments', id: 'Aktifkan Komentar' },
    },
    ...slugField(),
    ...auditTrailFields,
  ],
  hooks: {
    beforeChange: [...auditTrailHooks.beforeChange],
    afterChange: [revalidatePost],
    afterRead: [populateAuthors],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for quick local edits, in production you should use a higher value
      },
    },
    maxPerDoc: 50,
  },
}

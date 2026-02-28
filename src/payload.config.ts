// import { postgresAdapter } from '@payloadcms/db-postgres'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import dns from 'node:dns'
// import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { uploadthingStorage } from '@payloadcms/storage-uploadthing'
import { importExportPlugin } from '@payloadcms/plugin-import-export'
import { loggerOptions } from './lib/logger'
// import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
// import { resendAdapter } from '@payloadcms/email-resend'

import { Users } from './collections/users'
import { Media } from './collections/media'
import { Posts } from './collections/content/posts'
import { Categories } from './collections/content/categories'
import { Comments } from './collections/content/comments'
import { ContactRequests } from './collections/contact-requests'
import { OAuth } from './collections/oauth'

import { uuidPlugin } from './plugins/uuid'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { en } from '@payloadcms/translations/languages/en'
import { id } from '@payloadcms/translations/languages/id'
import { getServerSideURL } from './utilities/get-url'
import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs'

// Configure DNS settings BEFORE any connections (required for MongoDB SRV lookup)
// Only applies when DATABASE_URL is a MongoDB connection string
if (process.env.DATABASE_URL?.startsWith('mongodb')) {
  dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1', '1.0.0.1'])
  dns.setDefaultResultOrder('ipv4first')
  dns.promises.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1', '1.0.0.1'])
}

/**
 * Database Mode Detection
 *
 * - DATABASE_URL starts with 'mongodb' → MongoDB Atlas (cloud deploy / Vercel)
 * - No DATABASE_URL                   → SQLite local file (Tauri desktop / dev)
 *   Override SQLite path via SQLITE_URL env (e.g. for custom data directory)
 */
const isMongoDb = process.env.DATABASE_URL?.startsWith('mongodb')

/**
 * Storage Mode Detection
 *
 * - UPLOADTHING_TOKEN present → UploadThing (cloud, team shared mode)
 * - No token                  → Local disk /media folder (dev & Tauri solo mode)
 *   The Media collection already sets staticDir: 'media' as the fallback.
 */
const isCloudStorage = Boolean(process.env.UPLOADTHING_TOKEN)

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  logger: {
    options: loggerOptions,
  },
  localization: {
    locales: [
      {
        label: {
          en: 'English',
          id: 'Inggris',
        },
        code: 'en',
      },
      {
        label: {
          en: 'Indonesian',
          id: 'Indonesia',
        },
        code: 'id',
      },
    ],
    defaultLocale: 'id',
    fallback: true,
  },
  i18n: {
    fallbackLanguage: 'id',
    supportedLanguages: { en, id },
  },
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      beforeDashboard: ['/components/admin/welcome#Welcome'],
      graphics: {
        Icon: '/components/admin/graphics#Icon',
        Logo: '/components/admin/graphics#Logo',
      },
    },
    meta: {
      titleSuffix: '- Payload Base Admin',
    },
  },
  cors: '*',
  csrf: [
    'http://localhost:3000',
    ...Array.from({ length: 254 }, (_, i) => `http://192.168.1.${i + 1}:3000`),
  ],
  collections: [Users, Media, Posts, ContactRequests, OAuth, Categories, Comments],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '864a8383b7ed11af189db510',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  // db: postgresAdapter({
  //   idType: 'uuid',
  //   pool: {
  //     connectionString: process.env.DATABASE_URL || '',
  //   },
  // }),
  db: isMongoDb
    ? mongooseAdapter({
        url: process.env.DATABASE_URL || '',
      })
    : sqliteAdapter({
        idType: 'uuid',
        client: {
          // Override via SQLITE_URL for custom data directory (e.g. Tauri app data folder)
          url: process.env.SQLITE_URL || 'file:./local.db',
        },
      }),
  sharp,
  plugins: [
    // ─── Storage ──────────────────────────────────────────────────────────────
    // UploadThing (cloud) when UPLOADTHING_TOKEN is set.
    // When not set, Payload falls back to the Media collection's
    // staticDir: 'media' — files are saved locally to the /media folder.
    ...(isCloudStorage
      ? [
          uploadthingStorage({
            collections: {
              media: true,
            },
            options: {
              token: process.env.UPLOADTHING_TOKEN,
              acl: 'public-read',
            },
          }),
        ]
      : []),
    // ─── Plugins ──────────────────────────────────────────────────────────────
    uuidPlugin(),
    importExportPlugin({
      collections: [
        {
          slug: 'users',
          import: false,
        },
      ],
    }),
    nestedDocsPlugin({
      collections: ['categories'],
      generateURL: (docs) => docs.reduce((url, doc) => `${url}/${doc.slug}`, ''),
    }),
    seoPlugin({
      collections: ['posts'],
      generateTitle: ({ doc }) =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        doc?.title ? `${(doc as any).title} | Payload Base` : 'Payload Base',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      generateURL: ({ doc }) => `${getServerSideURL()}/blogs/${(doc as any).slug}`,
    }),
  ],
  // email: nodemailerAdapter({
  //   defaultFromAddress: 'info@payloadcms.com',
  //   defaultFromName: 'Payload',
  //   transportOptions: {
  //     host: process.env.SMTP_HOST,
  //     port: 587,
  //     auth: {
  //       user: process.env.SMTP_USER,
  //       pass: process.env.SMTP_PASS,
  //     },
  //   },
  // }),
  // email: resendAdapter({
  //   defaultFromAddress: 'dev@payloadcms.com',
  //   defaultFromName: 'Payload CMS',
  //   apiKey: process.env.RESEND_API_KEY,
  // }),
})

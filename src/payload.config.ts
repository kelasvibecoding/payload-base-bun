// import { postgresAdapter } from '@payloadcms/db-postgres'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import dns from 'node:dns'
// import { uploadthingStorage } from '@payloadcms/storage-uploadthing'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { importExportPlugin } from '@payloadcms/plugin-import-export'

// // Fix for MongoDB Atlas SRV connection issues on Windows
// // This forces Node to use a reliable DNS provider for the SRV lookup
// dns.setServers(['8.8.8.8', '1.1.1.1'])
// dns.setDefaultResultOrder('verbatim')

// Configure DNS settings BEFORE any connections
dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1', '1.0.0.1'])
dns.setDefaultResultOrder('ipv4first')

// Force Node.js to use the configured DNS servers
const dnsPromises = dns.promises
dns.promises.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1', '1.0.0.1'])

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Posts } from './collections/Posts'
import { ContactRequests } from './collections/ContactRequests'

import { uuidPlugin } from './plugins/uuid'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      beforeDashboard: ['/components/admin/Welcome'],
      graphics: {
        Icon: '/components/admin/Graphics#Icon',
        Logo: '/components/admin/Graphics#Logo',
      },
    },
    meta: {
      titleSuffix: '- Payload Base Admin',
    },
  },
  collections: [Users, Media, Posts, ContactRequests],
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
  db: process.env.DATABASE_URL?.startsWith('mongodb')
    ? mongooseAdapter({
        url: process.env.DATABASE_URL || '',
      })
    : sqliteAdapter({
        idType: 'uuid',
        client: {
          url: 'file:./local.db',
        },
      }),
  sharp,
  plugins: [
    vercelBlobStorage({
      collections: {
        media: {
          prefix: 'media',
        },
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
    // Cloud storage using Uploadthing (alternative)
    // uploadthingStorage({
    //   collections: {
    //     media: true,
    //   },
    //   options: {
    //     token: process.env.UPLOADTHING_TOKEN,
    //     acl: 'public-read',
    //   },
    // }),
    uuidPlugin,
    importExportPlugin({
      collections: [
        {
          slug: 'users',
          import: false,
        },
      ],
    }),
  ],
})

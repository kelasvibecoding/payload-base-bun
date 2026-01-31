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

// Fix for MongoDB Atlas SRV connection issues on Windows
// This forces Node to use a reliable DNS provider for the SRV lookup
dns.setServers(['8.8.8.8', '1.1.1.1'])
dns.setDefaultResultOrder('verbatim')

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Posts } from './collections/Posts'
import { ContactRequests } from './collections/ContactRequests'

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
  //   pool: {
  //     connectionString: process.env.DATABASE_URL || '',
  //   },
  // }),
  db: process.env.DATABASE_URL?.startsWith('mongodb')
    ? mongooseAdapter({
        url: process.env.DATABASE_URL || '',
      })
    : sqliteAdapter({
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
  ],
})

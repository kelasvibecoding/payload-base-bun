# Storage Adapters

Payload supports external storage through official plugins. This is useful for horizontally scaling your application or offloading file serving to a CDN like Amazon S3 or Vercel Blob.

## Official Adapters

| Provider | Package |
| :--- | :--- |
| **S3** | `@payloadcms/storage-s3` |
| **Vercel Blob** | `@payloadcms/storage-vercel-blob` |
| **Google Cloud** | `@payloadcms/storage-gcs` |
| **Azure** | `@payloadcms/storage-azure` |
| **Uploadthing** | `@payloadcms/storage-uploadthing` |
| **Cloudflare R2**| `@payloadcms/storage-s3` (compatible) |

---

## 1. Amazon S3
The `@payloadcms/storage-s3` adapter works with AWS S3 and other S3-compatible APIs.

```typescript
import { s3Storage } from '@payloadcms/storage-s3'

export default buildConfig({
  plugins: [
    s3Storage({
      collections: {
        media: true,
      },
      bucket: process.env.S3_BUCKET,
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
        },
        region: process.env.S3_REGION,
      },
    }),
  ],
})
```

## 2. Vercel Blob
Optimized for Vercel environments using `@payloadcms/storage-vercel-blob`.

```typescript
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

export default buildConfig({
  plugins: [
    vercelBlobStorage({
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
})
```

## 3. Cloudflare R2
R2 is fully S3-compatible. Use `@payloadcms/storage-s3` with the `endpoint` option.

```typescript
import { s3Storage } from '@payloadcms/storage-s3'

export default buildConfig({
  plugins: [
    s3Storage({
      collections: {
        media: true,
      },
      bucket: process.env.R2_BUCKET,
      config: {
        endpoint: process.env.R2_ENDPOINT,
        credentials: {
          accessKeyId: process.env.R2_ACCESS_KEY_ID,
          secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
        },
        region: 'auto',
      },
    }),
  ],
})
```

## 4. Google Cloud Storage
Use `@payloadcms/storage-gcs` for Google Cloud.

```typescript
import { gcsStorage } from '@payloadcms/storage-gcs'

export default buildConfig({
  plugins: [
    gcsStorage({
      collections: {
        media: true,
      },
      bucket: process.env.GCS_BUCKET,
      options: {
        projectId: process.env.GCS_PROJECT_ID,
        credentials: JSON.parse(process.env.GCS_CREDENTIALS),
      },
    }),
  ],
})
```

## 5. Azure Blob Storage
Use `@payloadcms/storage-azure` for Microsoft Azure.

```typescript
import { azureStorage } from '@payloadcms/storage-azure'

export default buildConfig({
  plugins: [
    azureStorage({
      collections: {
        media: true,
      },
      allowAccessKeyAuth: true,
      connectionString: process.env.AZURE_STORAGE_CONNECTION_STRING,
      containerName: process.env.AZURE_STORAGE_CONTAINER_NAME,
    }),
  ],
})
```

## 6. Uploadthing
Use `@payloadcms/storage-uploadthing` for Uploadthing integration.

```typescript
import { uploadthingStorage } from '@payloadcms/storage-uploadthing'

export default buildConfig({
  plugins: [
    uploadthingStorage({
      collections: {
        media: true,
      },
      options: {
        token: process.env.UPLOADTHING_TOKEN,
        acl: 'public-read',
      },
    }),
  ],
})
```

---

## Access Control & Delivery

By default, these plugins "pass through" files. This means Payload still acts as a middleman for file requests, allowing it to verify its own **Access Control** before serving the file from the cloud source.

If your uploads are public and you want to bypass Payload's overhead, you can set `disablePayloadAccessControl: true`. In this mode, the `url` returned by the API will point directly to the storage provider (e.g., `https://my-bucket.s3.amazonaws.com/...`).


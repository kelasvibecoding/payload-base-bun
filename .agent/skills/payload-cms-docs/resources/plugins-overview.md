# Plugins Overview

Payload Plugins allow you to inject custom, complex functionality into your Payload application through a modular and reusable interface. They are ideal for sharing logic across projects or with the community.

## How Plugins Work

A Plugin is simply a function that takes the current Payload `Config` as an argument and returns a modified `Config`. This allows a plugin to add new collections, globals, fields, hooks, admin views, or even modify existing configurations.

### Usage

Plugins are registered in the `plugins` array of your root Payload config.

```typescript
import { buildConfig } from 'payload'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { myCustomPlugin } from './plugins/myCustomPlugin'

export default buildConfig({
  // ...
  plugins: [
    seoPlugin({
      collections: ['pages', 'posts'],
      uploadsCollection: 'media',
    }),
    myCustomPlugin,
  ],
})
```

## Official Plugins

Payload maintains several official plugins for common use cases:

| Plugin | Description |
| :--- | :--- |
| **SEO** | Adds SEO fields and social media previews to collections. |
| **Form Builder** | Adds a full-featured form builder with custom fields and submissions. |
| **Search** | Automatically indexes and provides a search endpoint for your content. |
| **Multi-Tenant** | Simplifies managing multiple separate tenants/sites in one app. |
| **Redirects** | Manage URL redirects directly from the Admin Panel. |
| **Stripe** | Deep integration for managing products, prices, and customers. |
| **S3 / Cloud Storage**| Offload file uploads to S3, GCS, Azure, or Vercel Blob. |

## Creating a Plugin

Writing a plugin is as simple as manipulating a JavaScript object. Use the `Plugin` type for full type safety.

### Example: "Last Modified By" Plugin
This plugin adds a read-only `lastModifiedBy` field to every collection.

```typescript
import { Config, Plugin } from 'payload'

export const addLastModified: Plugin = (incomingConfig: Config): Config => {
  const config: Config = {
    ...incomingConfig,
    collections: incomingConfig.collections.map((collection) => {
      return {
        ...collection,
        fields: [
          ...collection.fields,
          {
            name: 'lastModifiedBy',
            type: 'relationship',
            relationTo: 'users',
            admin: {
              position: 'sidebar',
              readOnly: true,
            },
            hooks: {
              beforeChange: [
                ({ req }) => req.user?.id,
              ],
            },
          },
        ],
      }
    }),
  }

  return config
}
```

## Execution Order
Plugins are executed in the order they are defined in the `plugins` array. They run:
1. After the incoming config is validated.
2. **Before** the config is sanitized and default options are merged.

This means your plugin can rely on the user's explicit configuration but must be careful to return a valid Payload config structure.

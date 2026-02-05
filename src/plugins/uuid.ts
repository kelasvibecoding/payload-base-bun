import type { Config, Plugin } from 'payload'

/**
 * Plugin to ensure all collections use UUIDs for their IDs specifically for MongoDB.
 * For SQL adapters (Postgres, SQLite), Payload 3.0 provides a native `idType: 'uuid'`
 * option in the database adapter configuration which should be used instead.
 */
export interface UuidPluginOptions {
  /**
   * Manually enable or disable the plugin.
   * If not provided, it will attempt to detect MongoDB from DATABASE_URL (server-only).
   * For hydration safety in the Admin Panel, this should be set deterministically.
   */
  isEnabled?: boolean
}

export const uuidPlugin =
  (options?: UuidPluginOptions): Plugin =>
  (incomingConfig: Config): Config => {
    const isMongoDB = process.env.DATABASE_URL?.startsWith('mongodb')
    const enabled = options?.isEnabled ?? isMongoDB

    if (!enabled) {
      return incomingConfig
    }

    return {
      ...incomingConfig,
      collections: (incomingConfig.collections || []).map((collection) => {
        // Check if 'id' field already exists
        const hasIdField = collection.fields.some((field) => 'name' in field && field.name === 'id')

        if (hasIdField) return collection

        return {
          ...collection,
          fields: [
            {
              name: 'id',
              type: 'text',
              defaultValue: () => crypto.randomUUID(),
              required: true,
              admin: {
                readOnly: true,
                position: 'sidebar',
              },
            },
            ...collection.fields,
          ],
        }
      }),
    }
  }

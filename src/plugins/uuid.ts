import type { Config, Plugin } from 'payload'

/**
 * Plugin to ensure all collections use UUIDs for their IDs specifically for MongoDB.
 * For SQL adapters (Postgres, SQLite), Payload 3.0 provides a native `idType: 'uuid'` 
 * option in the database adapter configuration which should be used instead.
 */
export const uuidPlugin: Plugin = (incomingConfig: Config): Config => {
  const isMongoDB = process.env.DATABASE_URL?.startsWith('mongodb')

  // If not MongoDB, we assume the user is using a SQL adapter with idType: 'uuid'
  // or they want to manage it differently.
  if (!isMongoDB) {
    return incomingConfig
  }

  return {
    ...incomingConfig,
    collections: (incomingConfig.collections || []).map((collection) => {
      // Check if 'id' field already exists
      const hasIdField = collection.fields.some(
        (field) => 'name' in field && field.name === 'id'
      )

      if (hasIdField) return collection

      return {
        ...collection,
        fields: [
          {
            name: 'id',
            type: 'text',
            defaultValue: () => crypto.randomUUID(),
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

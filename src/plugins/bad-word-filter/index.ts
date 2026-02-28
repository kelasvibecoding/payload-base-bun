import type { Config, Plugin, FieldHook, Field } from 'payload'
import { analyze } from './lib/core/analyzer'

export interface BadWordFilterPluginOptions {
  /**
   * Enabled collections for bad word filtering
   */
  collections?: string[]
  /**
   * Enabled fields for each collection
   */
  fields?: Record<string, string[]>
  /**
   * Threshold for fuzzy matching (default: 3)
   */
  threshold?: number
}

const badWordHook = (threshold?: number): FieldHook => {
  return ({ value, operation }) => {
    if ((operation === 'create' || operation === 'update') && typeof value === 'string') {
      const result = analyze(value, { threshold })
      if (result.isProfane) {
        return result.filtered
      }
    }
    return value
  }
}

export const badWordFilterPlugin =
  (options?: BadWordFilterPluginOptions): Plugin =>
  (incomingConfig: Config): Config => {
    const { collections = [], fields = {}, threshold = 3 } = options || {}

    if (collections.length === 0) {
      return incomingConfig
    }

    return {
      ...incomingConfig,
      collections: (incomingConfig.collections || []).map((collection) => {
        if (!collections.includes(collection.slug)) {
          return collection
        }

        const enabledFields = fields[collection.slug] || []

        const newFields = collection.fields.map((field) => {
          if ('name' in field && field.name && enabledFields.includes(field.name)) {
            const fieldWithHooks = field as Field & { hooks?: { beforeChange?: FieldHook[] } }
            return {
              ...fieldWithHooks,
              hooks: {
                ...(fieldWithHooks.hooks || {}),
                beforeChange: [...(fieldWithHooks.hooks?.beforeChange || []), badWordHook(threshold)],
              },
            } as Field
          }
          return field
        })

        return {
          ...collection,
          fields: newFields as Field[],
        }
      }),
    }
  }




/**
 * Schema Utilities
 *
 * Helper functions for working with Zod schemas and Payload CMS option synchronization.
 */

/**
 * Type-safe helper to extract values from a readonly options array.
 * Returns a tuple type that Zod's z.enum() accepts while preserving literal types.
 *
 * @example
 * ```typescript
 * const OPTIONS = [
 *   { label: 'Option A', value: 'a' },
 *   { label: 'Option B', value: 'b' },
 * ] as const satisfies readonly Option<MyType>[]
 *
 * const VALUES = extractValues(OPTIONS)
 * // Type: readonly ['a', 'b']
 *
 * // Use with Zod
 * z.enum(VALUES)
 * ```
 */
export function extractValues<const T extends readonly { readonly value: unknown }[]>(
  options: T,
): { [K in keyof T]: T[K]['value'] } {
  return options.map((o) => o.value) as { [K in keyof T]: T[K]['value'] }
}

/**
 * Generic Option interface for select/multiselect fields.
 * Use with Payload CMS collections and frontend UI components.
 */
export interface Option<T> {
  label: string
  value: T
}

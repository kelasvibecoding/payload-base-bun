import type { User } from '../payload-types'
import type { Where } from 'payload'

/**
 * Generates a query constraint to filter records by the owner's ID.
 * Defaults to the 'user' field but can be customized.
 */
export const ownerFilter = (user: User | null | undefined, fieldName: string = 'user'): Where => ({
  [fieldName]: {
    equals: user?.id,
  },
})

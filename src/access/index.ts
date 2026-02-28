import type { Access, AccessArgs, PayloadRequest } from 'payload'
import type { User } from '../payload-types'
import { isAdmin, isStaff, isAuthenticated } from './predicates'
import { ownerFilter } from './filters'

// Export all helpers for convenient usage elsewhere
export * from './predicates'
export * from './filters'

/* ==========================================================================
   Common Payload Access Control Policies
   ========================================================================== */

/**
 * Policy: Open access to anyone (public).
 */
export const anyone: Access = () => true

/**
 * Policy: Restrict access to administrators only.
 */
export const admin: Access = (args: AccessArgs) => isAdmin(args)

/**
 * Policy: Restrict access to authenticated users only.
 */
export const authenticated: Access = (args: AccessArgs) => isAuthenticated(args)

/**
 * Policy: Restrict access to admins or staff members.
 */
export const adminOrStaff: Access = (args: AccessArgs) => isAdmin(args) || isStaff(args)

/**
 * Policy: Allows admins full access, or users access to records they own
 * (based on a 'user' relationship field).
 */
export const adminOrOwner: Access = (args: AccessArgs) => {
  if (isAdmin(args)) return true
  return ownerFilter(args.req?.user as User, 'user')
}

/**
 * Policy: Allows admins full access, or users access to their own record
 * (specifically for the Users collection using 'id').
 */
export const adminOrSelfAccess: Access = (args: AccessArgs) => {
  if (isAdmin(args)) return true
  return ownerFilter(args.req?.user as User, 'id')
}

/**
 * Policy: Allows authenticated users full access, or public access to published records.
 */
export const authenticatedOrPublished: Access = ({ req: { user } }) => {
  if (user) return true
  return { _status: { equals: 'published' } }
}

/**
 * Helper specifically for checking if a user can access the admin panel via collection-level access.
 */
export const isAdminOrSelf = (args: { req: PayloadRequest; id?: string | number }): boolean => {
  const user = args?.req?.user as User | undefined
  if (!user) return false
  if (isAdmin(args)) return true
  return user.id === args?.id
}

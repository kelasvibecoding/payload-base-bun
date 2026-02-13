/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Access, AccessArgs, PayloadRequest, Where } from 'payload'
import type { User } from '../payload-types'

/* ==========================================================================
   Boolean Helpers (Context-Agnostic)
   ========================================================================== */

/**
 * Checks if the user is an admin.
 */
export const isAdmin = (
  args: { req?: PayloadRequest; user?: User | null | any } | AccessArgs | any,
): boolean => {
  const user = args?.user || args?.req?.user
  return user?.role === 'admin' || false
}

/**
 * Checks if the user is staff.
 */
export const isStaff = (
  args: { req?: PayloadRequest; user?: User | null | any } | AccessArgs | any,
): boolean => {
  const user = args?.user || args?.req?.user
  return user?.role === 'staff' || false
}

/**
 * Checks if the user is authenticated.
 */
export const isAuthenticated = (
  args: { req?: PayloadRequest; user?: User | null | any } | AccessArgs | any,
): boolean => {
  const user = args?.user || args?.req?.user
  return Boolean(user)
}

/**
 * Helper specifically for admin panel access.
 */
export const canAccessAdmin = (
  args: { req?: PayloadRequest; user?: User | null | any } | AccessArgs | any,
): boolean => {
  return isAdmin(args) || isStaff(args)
}

/**
 * Checks if the user is an admin or the owner (based on matching IDs).
 */
export const isAdminOrSelf = (args: { req: PayloadRequest; id?: string | number }): boolean => {
  const user = args?.req?.user as User | undefined
  if (!user) return false
  if (isAdmin(args)) return true
  return user.id === args?.id
}

/* ==========================================================================
   Ownership Filter Logic
   ========================================================================== */

/**
 * Internal helper to generate ownership filters.
 */
const ownerFilter = (user: User | null | undefined, fieldName: string): Where => ({
  [fieldName]: {
    equals: user?.id,
  },
})

/* ==========================================================================
   Payload Access Control Functions
   ========================================================================== */

export const anyone: Access = () => true

export const admin: Access = (args: AccessArgs) => isAdmin(args)

export const authenticated: Access = (args: AccessArgs) => isAuthenticated(args)

export const adminOrStaff: Access = (args: AccessArgs) => isAdmin(args) || isStaff(args)

/**
 * Allows admins all, or users their own records based on 'user' field.
 */
export const adminOrOwner: Access = (args: AccessArgs) => {
  if (isAdmin(args)) return true
  return ownerFilter(args.req?.user as User, 'user')
}

/**
 * Allows admins all, or users their own record (Users collection).
 */
export const adminOrSelfAccess: Access = (args: AccessArgs) => {
  if (isAdmin(args)) return true
  return ownerFilter(args.req?.user as User, 'id')
}

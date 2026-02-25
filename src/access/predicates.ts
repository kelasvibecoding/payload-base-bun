/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AccessArgs, PayloadRequest } from 'payload'
import type { User } from '../payload-types'

/**
 * Checks if the user has the 'admin' role.
 */
export const isAdmin = (
  args: { req?: PayloadRequest; user?: User | null | any } | AccessArgs | any,
): boolean => {
  const user = args?.user || args?.req?.user
  return user?.role === 'admin' || false
}

/**
 * Checks if the user has the 'staff' role.
 */
export const isStaff = (
  args: { req?: PayloadRequest; user?: User | null | any } | AccessArgs | any,
): boolean => {
  const user = args?.user || args?.req?.user
  return user?.role === 'staff' || false
}

/**
 * Checks if the user has the 'customer' role.
 */
export const isCustomer = (
  args: { req?: PayloadRequest; user?: User | null | any } | AccessArgs | any,
): boolean => {
  const user = args?.user || args?.req?.user
  return user?.role === 'customer' || false
}

/**
 * Checks if the user is authenticated (not null).
 */
export const isAuthenticated = (
  args: { req?: PayloadRequest; user?: User | null | any } | AccessArgs | any,
): boolean => {
  const user = args?.user || args?.req?.user
  return Boolean(user)
}

/**
 * Helper specifically for checking if a user can access the admin panel.
 */
export const canAccessAdmin = (
  args: { req?: PayloadRequest; user?: User | null | any } | AccessArgs | any,
): boolean => {
  return isAdmin(args) || isStaff(args)
}

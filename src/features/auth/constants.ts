import { extractValues, type Option } from '@/lib/schemas/utils'
import { User } from '../../payload-types'

/**
 * User roles available in the system.
 */
export type UserRole = User['role']

export const USER_ROLE_OPTIONS = [
  {
    label: 'Admin',
    value: 'admin',
  },
  {
    label: 'Staff',
    value: 'staff',
  },
  {
    label: 'Customer',
    value: 'customer',
  },
] as const satisfies readonly Option<string>[]

export const USER_ROLE_VALUES = extractValues(USER_ROLE_OPTIONS)

export const DEFAULT_ROLE_REDIRECTS: Record<string, string> = {
  admin: '/admin',
  staff: '/',
  customer: '/',
}

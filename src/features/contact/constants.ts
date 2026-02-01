import { extractValues, type Option } from '@/lib/schemas/utils'
import { ContactRequest } from '../../payload-types'

// These types ensure that if you add something here that isn't in Payload, 
// TypeScript will stop you.
type ContactType = ContactRequest['contactType']
type ServiceType = NonNullable<ContactRequest['service']>[number]

export const CONTACT_TYPE_OPTIONS = [
  { label: 'General Inquiry', value: 'general' },
  { label: 'Support', value: 'support' },
  { label: 'Sales', value: 'sales' },
  { label: 'Other', value: 'other' },
] as const satisfies readonly Option<ContactType>[]

export const SERVICE_OPTIONS = [
  { label: 'Web Development', value: 'web-dev' },
  { label: 'Mobile App Development', value: 'mobile-dev' },
  { label: 'IOS Application Development', value: 'ios-app-dev' },
  { label: 'Android Application Development', value: 'android-app-dev' },
  { label: 'UI/UX Design', value: 'ui-ux' },
  { label: 'Cloud Infrastructure', value: 'cloud' },
  { label: 'Cyber Security', value: 'security' },
  { label: 'Data Analytics', value: 'data' },
  { label: 'AI/ML Development', value: 'ai-ml-dev' },
  { label: 'Blockchain Development', value: 'blockchain-dev' },
  { label: 'Game Development', value: 'game-dev' },
  { label: 'E-commerce Development', value: 'ecommerce-dev' },
  { label: 'CRM Development', value: 'crm-dev' },
  { label: 'ERP Development', value: 'erp-dev' },
] as const satisfies readonly Option<ServiceType>[]

// Extract values as tuple for Zod enum (preserves literal types)
export const CONTACT_TYPE_VALUES = extractValues(CONTACT_TYPE_OPTIONS)
export const SERVICE_VALUES = extractValues(SERVICE_OPTIONS)


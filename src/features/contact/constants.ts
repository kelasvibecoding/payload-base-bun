import { ContactRequest } from '../../payload-types'

// These types ensure that if you add something here that isn't in Payload, 
// TypeScript will stop you.
type ContactType = ContactRequest['contactType']
type ServiceType = NonNullable<ContactRequest['service']>[number]

interface Option<T> {
  label: string
  value: T
}

export const CONTACT_TYPE_OPTIONS: Option<ContactType>[] = [
  { label: 'General Inquiry', value: 'general' },
  { label: 'Support', value: 'support' },
  { label: 'Sales', value: 'sales' },
  { label: 'Other', value: 'other' },
]

export const SERVICE_OPTIONS: Option<ServiceType>[] = [
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
]

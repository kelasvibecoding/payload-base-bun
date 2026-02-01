import { z } from 'zod'
import { CONTACT_TYPE_OPTIONS } from './constants'

export const ContactFormSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  contactType: z.enum(CONTACT_TYPE_OPTIONS.map(opt => opt.value) as [string, ...string[]], {
    message: 'Please select a contact type',
  }),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  preferredDate: z.date().optional(),
  service: z.array(z.string()).default([]),
  examplePassword: z.string().min(8, 'Password must be at least 8 characters').optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export type ContactFormValues = z.infer<typeof ContactFormSchema>

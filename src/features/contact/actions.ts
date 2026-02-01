'use server'

import { getPayload } from 'payload'
import config from '@payload-config'
import { ContactFormSchema, type ContactFormValues } from './schemas'

export async function submitContactForm(data: ContactFormValues) {
  const result = ContactFormSchema.safeParse(data)

  if (!result.success) {
    return { success: false, error: result.error.issues[0].message }
  }

  try {
    const payload = await getPayload({ config })

    await payload.create({
      collection: 'contact-requests',
      data: {
        ...result.data,
        preferredDate: result.data.preferredDate?.toISOString(),
      } as Omit<typeof result.data, 'preferredDate'> & { preferredDate?: string },
    })

    return { success: true, message: 'Message sent successfully!' }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return { success: false, error: 'Failed to send message.' }
  }
}

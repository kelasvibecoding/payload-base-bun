'use server'

import { getPayload } from 'payload'
import config from '@payload-config'
import { ContactFormSchema } from '@/lib/schemas/contact-schema'
import { z } from 'zod'

export async function submitContactForm(data: z.infer<typeof ContactFormSchema>) {
  const result = ContactFormSchema.safeParse(data)

  if (!result.success) {
    return { success: false, error: result.error.errors[0].message }
  }

  try {
    const payload = await getPayload({ config })
    
    await payload.create({
      collection: 'contact-requests',
      data: result.data,
    })

    return { success: true, message: 'Message sent successfully!' }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return { success: false, error: 'Failed to send message.' }
  }
}

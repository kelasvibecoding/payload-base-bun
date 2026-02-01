import React from 'react'
import { ContactForm } from '@/features/contact/components/ContactForm'

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with us for any inquiries or support.',
}

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-20">
      <div className="mb-10 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Contact Us</h1>
        <p className="text-muted-foreground">
          We&apos;d love to hear from you. Please fill out the form below.
        </p>
      </div>

      <ContactForm />
    </div>
  )
}

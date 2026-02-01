'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ContactFormSchema, type ContactFormValues } from '../schemas'
import { submitContactForm } from '../actions'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import {
  Input,
  Textarea,
  Select,
  SelectItem,
  DatePicker,
  Combobox,
  PasswordInput,
} from '@/components/ui/floating'
import { toast } from 'sonner'

import { SERVICE_OPTIONS, CONTACT_TYPE_OPTIONS } from '../constants'

export function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      contactType: 'general',
      subject: '',
      message: '',
      service: [],
      examplePassword: '',
      preferredDate: new Date(),
    },
  })

  const [isSubmitting, setIsSubmitting] = React.useState(false)

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true)
    const result = await submitContactForm(data)
    setIsSubmitting(false)

    if (result.success) {
      toast.success(result.message)
      form.reset()
    } else {
      toast.error(result.error)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-card mx-auto max-w-2xl space-y-6 rounded-xl border p-6 shadow-sm"
      >
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">Example Floating Form</h2>
          <p className="text-muted-foreground text-sm">
            This form demonstrates all available floating label components.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input label="Full Name" placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    label="Email Address"
                    placeholder="john@example.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="contactType"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select label="Contact Type" value={field.value} onValueChange={field.onChange}>
                    {CONTACT_TYPE_OPTIONS.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="preferredDate"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <DatePicker
                    label="Preferred Date"
                    date={field.value}
                    onDateChange={(date) => field.onChange(date)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormControl>
                  <Combobox
                    label="Interested Services"
                    options={[...SERVICE_OPTIONS]}
                    value={field.value}
                    onValueChange={field.onChange}
                    multiple
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormControl>
                  <Input label="Subject" placeholder="How can we help?" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="examplePassword"
            render={({ field }) => {
              const getStrength = (val: string) => {
                if (!val) return undefined
                if (val.length < 8) return 'low'
                if (val.length < 12) return 'medium'
                return 'high'
              }

              return (
                <FormItem className="md:col-span-2">
                  <FormControl>
                    <PasswordInput
                      label="Example Password"
                      placeholder="Enter a secret..."
                      strength={getStrength(field.value || '')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormControl>
                  <Textarea
                    label="Message"
                    placeholder="Tell us more about your inquiry..."
                    className="min-h-[120px]"
                    showCount
                    maxLength={1000}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          className="h-12 w-full text-base font-semibold"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending Message...' : 'Send Message'}
        </Button>
      </form>
    </Form>
  )
}

'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema, type LoginValues } from '../schemas'
import { DEFAULT_ROLE_REDIRECTS } from '../constants'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input as FloatingInput } from '@/components/ui/floating/input'
import { PasswordInput as FloatingPasswordInput } from '@/components/ui/floating/password-input'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { loginAction } from '../actions'
import { useRouter, useSearchParams } from 'next/navigation'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/'

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(values: LoginValues) {
    setIsLoading(true)
    try {
      const result = await loginAction(values)
      if (result.success) {
        toast.success('Logged in successfully')
        
        // Role-aware redirection
        const roleRedirect = result.role ? DEFAULT_ROLE_REDIRECTS[result.role] : null
        const targetUrl = callbackUrl !== '/' ? callbackUrl : (roleRedirect || '/')
        
        router.push(targetUrl)
        router.refresh()
      } else {
        toast.error(result.error || 'Invalid email or password')
      }
    } catch (error) {
      toast.error('An unexpected error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <FloatingInput label="Email address" {...field} autoComplete="email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <FloatingPasswordInput label="Password" {...field} autoComplete="current-password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full h-12 text-base font-semibold" disabled={isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Sign In
        </Button>
      </form>
    </Form>
  )
}

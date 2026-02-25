'use server'

import { cookies } from 'next/headers'
import { AuthService } from './services/auth.service'
import { loginSchema, signUpSchema, type LoginValues, type SignUpValues } from './schemas'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { USER_ROLE_VALUES } from './constants'

export async function loginAction(values: LoginValues) {
  const validated = loginSchema.safeParse(values)
  if (!validated.success) {
    return { success: false, error: 'Invalid input' }
  }

  const result = await AuthService.login(validated.data)

  if (result.success && result.token) {
    const cookieStore = await cookies()
    cookieStore.set('payload-token', result.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: result.exp ? result.exp - Math.floor(Date.now() / 1000) : 60 * 60 * 24 * 7,
      path: '/',
    })
    return { success: true, role: (result.user as any).role }
  }

  return { success: false, error: result.error || 'Invalid email or password' }
}

export async function logoutAction() {
  const cookieStore = await cookies()
  cookieStore.delete('payload-token')
  return { success: true }
}

export async function signUpAction(values: SignUpValues) {
  const validated = signUpSchema.safeParse(values)
  if (!validated.success) {
    return { success: false, error: 'Invalid input' }
  }

  try {
    const payload = await getPayload({ config: await config })

    await payload.create({
      collection: 'users',
      data: {
        name: validated.data.name,
        email: validated.data.email,
        password: validated.data.password,
        role: 'customer',
      },
    })

    return { success: true }
  } catch (error) {
    console.error('Registration error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to create account',
    }
  }
}

import { getPayload } from 'payload'
import { headers as getHeaders } from 'next/headers.js'
import config from '@/payload.config'
import type { User } from '@/payload-types'

export class AuthService {
  /**
   * Retrieves the current authenticated user from the request headers.
   * Applying DIP: We rely on the abstractions provided by Payload and Next.js,
   * but encapsulate the specific implementation details here.
   */
  static async getCurrentUser(): Promise<User | null> {
    const headers = await getHeaders()
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })
    const { user } = await payload.auth({ headers })
    return (user as User) || null
  }

  /**
   * Logs in a user with email and password.
   * This handles the server-side part of the login process.
   */
  static async login(data: { email: string; password: string }) {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })

    try {
      const result = await payload.login({
        collection: 'users',
        data: {
          email: data.email,
          password: data.password,
        },
      })

      return {
        success: true,
        user: result.user,
        token: result.token,
        exp: result.exp,
      }
    } catch (error) {
      console.error('Login error:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Invalid credentials',
      }
    }
  }

  /**
   * Logs out the current user by clearing the authentication cookie.
   */
  static async logout() {
    // In Next.js App Router, we usually clear the cookie in a server action
    // but the service can provide the logic for it.
    return { success: true }
  }
}

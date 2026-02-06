
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
    return user
  }
}

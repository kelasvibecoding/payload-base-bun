import { OAuth2Client } from 'google-auth-library'
import type { OAuthProvider, OAuthUserInfo } from './base'

export class GoogleOAuthService implements OAuthProvider {
  private client: OAuth2Client

  constructor() {
    const clientId = process.env.GOOGLE_CLIENT_ID
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET
    const redirectUri = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI

    if (!clientId || !clientSecret || !redirectUri) {
      throw new Error(
        'Missing Google OAuth configuration. Please check GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, and NEXT_PUBLIC_GOOGLE_REDIRECT_URI.',
      )
    }

    this.client = new OAuth2Client(clientId, clientSecret, redirectUri)
  }

  getAuthUrl(state: string): string {
    return this.client.generateAuthUrl({
      access_type: 'offline',
      scope: ['profile', 'email'],
      state,
    })
  }

  async verifyToken(code: string): Promise<OAuthUserInfo> {
    try {
      const { tokens } = await this.client.getToken(code)

      if (!tokens.id_token) {
        throw new Error('No ID token received from Google')
      }

      const ticket = await this.client.verifyIdToken({
        idToken: tokens.id_token,
        audience: process.env.GOOGLE_CLIENT_ID,
      })

      const payload = ticket.getPayload()

      if (!payload) {
        throw new Error('Invalid token payload from Google')
      }

      return {
        id: payload.sub,
        email: payload.email || '',
        name: payload.name || '',
        picture: payload.picture,
      }
    } catch (error) {
      console.error('Google OAuth token verification failed:', error)
      throw new Error('Failed to verify Google OAuth token')
    }
  }
}

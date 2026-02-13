/**
 * Base OAuth interface for all providers
 * Provides a consistent interface for implementing different OAuth providers
 */

export interface OAuthUserInfo {
  id: string
  email: string
  name: string
  picture?: string
}

export interface OAuthProvider {
  getAuthUrl(state: string): string
  verifyToken(code: string): Promise<OAuthUserInfo>
}

export interface OAuthState {
  callbackUrl: string
  role?: string
}

export interface OAuthResult {
  success: boolean
  user?: unknown
  identity?: 'user' | 'oauth' | 'both' | 'none'
  warning?: string
  token?: string
  exp?: number
}

import { GoogleOAuthService } from '@/features/auth/oauth/google'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const callbackUrl = searchParams.get('callbackUrl') || '/'
    const fromPath = searchParams.get('from') || callbackUrl

    // Create state object with callback URL
    const state = JSON.stringify({
      callbackUrl,
    })

    // Generate Google OAuth URL
    let googleService: GoogleOAuthService
    try {
      googleService = new GoogleOAuthService()
    } catch (configError) {
      console.error('Google OAuth config error:', configError)
      const errorMsg = encodeURIComponent(
        configError instanceof Error ? configError.message : 'Missing Google OAuth configuration',
      )
      return NextResponse.redirect(new URL(`${fromPath}?oauth_error=${errorMsg}`, request.url))
    }

    let authUrl: string
    try {
      authUrl = googleService.getAuthUrl(state)
    } catch (urlError) {
      console.error('Failed to generate OAuth URL:', urlError)
      return NextResponse.redirect(
        new URL(`${fromPath}?oauth_error=Failed to create Google OAuth URL`, request.url),
      )
    }

    // Redirect to Google OAuth
    return NextResponse.redirect(authUrl)
  } catch (error) {
    console.error('Google OAuth initiation error:', error)
    return NextResponse.json({ message: 'Failed to initiate Google OAuth' }, { status: 500 })
  }
}

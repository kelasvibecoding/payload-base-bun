import { GoogleOAuthService } from '@/features/auth/oauth/google'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const callbackUrl = searchParams.get('callbackUrl') || '/'

    // Create state object with callback URL
    const state = JSON.stringify({
      callbackUrl,
    })

    // Generate Google OAuth URL
    const googleService = new GoogleOAuthService()

    let authUrl: string
    try {
      authUrl = googleService.getAuthUrl(state)
    } catch (urlError) {
      console.error('Failed to generate OAuth URL:', urlError)
      return NextResponse.json(
        { error: 'OAuth URL Generation Failed', message: 'Failed to create Google OAuth URL' },
        { status: 500 },
      )
    }

    // Redirect to Google OAuth
    return NextResponse.redirect(authUrl)
  } catch (error) {
    console.error('Google OAuth initiation error:', error)
    return NextResponse.json({ message: 'Failed to initiate Google OAuth' }, { status: 500 })
  }
}

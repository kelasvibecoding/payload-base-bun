'use server'

import type { OAuthState, OAuthUserInfo } from '@/features/auth/oauth/base'
import { GoogleOAuthService } from '@/features/auth/oauth/google'
import configPromise from '@/payload.config'
import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import crypto from 'crypto'
import jwt from 'jsonwebtoken'
import { v4 as uuidv4 } from 'uuid'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const code = searchParams.get('code')
    const state = searchParams.get('state')
    const error = searchParams.get('error')

    // 0. Validate Environment
    if (!process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI) {
      console.error('❌ Missing NEXT_PUBLIC_GOOGLE_REDIRECT_URI env var')
      return NextResponse.json({ message: 'Server configuration error' }, { status: 500 })
    }

    // 1. Check for OAuth errors from Google
    if (error) {
      console.error('❌ Google OAuth error received:', error)
      let errorMessage = 'Google OAuth failed'
      if (error === 'access_denied') errorMessage = 'User denied access to Google account'

      return NextResponse.json({ error: 'OAuth Error', message: errorMessage }, { status: 400 })
    }

    if (!code || !state) {
      return NextResponse.json({ message: 'Missing code or state parameter' }, { status: 400 })
    }

    // 2. Parse state
    let stateData: OAuthState
    try {
      stateData = JSON.parse(state) as OAuthState
    } catch {
      return NextResponse.json({ message: 'Invalid state parameter' }, { status: 400 })
    }

    const { callbackUrl } = stateData

    // 3. Verify Google OAuth token and get user info
    const googleService = new GoogleOAuthService()
    let googleUser: OAuthUserInfo

    try {
      googleUser = await googleService.verifyToken(code)
    } catch (verifyError) {
      console.error('❌ Google OAuth verification failed:', verifyError)
      return NextResponse.json(
        { error: 'OAuth Verification Failed', message: 'Failed to verify Google OAuth token' },
        { status: 400 },
      )
    }

    const email = googleUser.email
    const googleId = googleUser.id
    const name = googleUser.name
    const picture = googleUser.picture

    if (!email || !name) {
      return NextResponse.json(
        { message: 'Invalid OAuth data received from Google' },
        { status: 400 },
      )
    }

    const payload = await getPayload({ config: configPromise })

    // 4. Check if OAuth record exists
    const existingOAuth = await payload.find({
      collection: 'oauth',
      where: {
        and: [{ providerId: { equals: googleId } }, { provider: { equals: 'google' } }],
      },
      limit: 1,
    })

    let user
    let isNewUser = false

    if (existingOAuth.docs.length > 0) {
      // OAuth exists - find linked user
      const oauthRecord = existingOAuth.docs[0]
      try {
        user = await payload.findByID({
          collection: 'users',
          id: oauthRecord.userId as string,
        })

        // Update User avatar and lastLoginAt
        await payload.update({
          collection: 'users',
          id: user.id,
          data: {
            avatar: picture || user.avatar,
            lastLoginAt: new Date().toISOString(),
          },
        })

        // Update OAuth lastLoginAt
        await payload.update({
          collection: 'oauth',
          id: oauthRecord.id,
          data: {
            providerEmail: email,
            providerName: name,
            avatar: picture,
            lastLoginAt: new Date().toISOString(),
          },
        })
      } catch {
        // Linked user not found - find by email or create new
        const existingUser = await payload.find({
          collection: 'users',
          where: { email: { equals: email } },
          limit: 1,
        })

        if (existingUser.docs.length > 0) {
          user = existingUser.docs[0]
          // Update User avatar
          await payload.update({
            collection: 'users',
            id: user.id,
            data: {
              avatar: picture || user.avatar,
              hasOAuth: true,
              lastLoginAt: new Date().toISOString(),
            },
          })

          // Update OAuth record to link to correct user
          await payload.update({
            collection: 'oauth',
            id: oauthRecord.id,
            data: {
              userId: user.id,
              providerEmail: email,
              providerName: name,
              avatar: picture,
              lastLoginAt: new Date().toISOString(),
            },
          })
        } else {
          // Create new user
          user = await payload.create({
            collection: 'users',
            data: {
              email,
              name,
              avatar: picture,
              role: 'staff', // Default to staff for base template or 'user' if defined
              password: 'oauth-' + googleId + '-' + crypto.randomBytes(8).toString('hex'),
              hasOAuth: true,
              hasOAuthOnly: true,
              lastLoginAt: new Date().toISOString(),
            },
          })
          isNewUser = true

          // Update OAuth record
          await payload.update({
            collection: 'oauth',
            id: oauthRecord.id,
            data: {
              userId: user.id,
              targetCollection: 'users',
              lastLoginAt: new Date().toISOString(),
            },
          })
        }
      }
    } else {
      // No OAuth record - check if user exists by email
      const existingUser = await payload.find({
        collection: 'users',
        where: { email: { equals: email } },
        limit: 1,
      })

      if (existingUser.docs.length > 0) {
        // Link OAuth to existing user
        user = existingUser.docs[0]

        // Update User avatar
        await payload.update({
          collection: 'users',
          id: user.id,
          data: {
            avatar: picture || user.avatar,
            hasOAuth: true,
            lastLoginAt: new Date().toISOString(),
          },
        })

        await payload.create({
          collection: 'oauth',
          data: {
            provider: 'google',
            providerId: googleId,
            providerEmail: email,
            providerName: name,
            avatar: picture,
            targetCollection: 'users',
            userId: user.id,
            lastLoginAt: new Date().toISOString(),
          },
        })
      } else {
        // Create new user and OAuth record
        user = await payload.create({
          collection: 'users',
          data: {
            email,
            name,
            avatar: picture,
            role: 'staff',
            password: 'oauth-' + googleId + '-' + crypto.randomBytes(8).toString('hex'),
            hasOAuth: true,
            hasOAuthOnly: true,
            lastLoginAt: new Date().toISOString(),
          },
        })
        isNewUser = true

        await payload.create({
          collection: 'oauth',
          data: {
            provider: 'google',
            providerId: googleId,
            providerEmail: email,
            providerName: name,
            avatar: picture,
            targetCollection: 'users',
            userId: user.id,
            lastLoginAt: new Date().toISOString(),
          },
        })
      }
    }

    // 5. Generate JWT token
    let token: string

    try {
      const originalSecret = process.env.PAYLOAD_SECRET || 'your-secret-key'
      const hashedSecret = crypto
        .createHash('sha256')
        .update(originalSecret)
        .digest('hex')
        .slice(0, 32)

      const sid = uuidv4()
      const sessionExpiry = new Date()
      sessionExpiry.setDate(sessionExpiry.getDate() + 7)

      await payload.update({
        collection: 'users',
        id: user.id,
        data: {
          sessions: [
            ...(user.sessions || []),
            {
              id: sid,
              createdAt: new Date().toISOString(),
              expiresAt: sessionExpiry.toISOString(),
            },
          ],
        },
      })

      token = jwt.sign(
        {
          id: user.id,
          email: user.email,
          collection: 'users',
          sid: sid,
        },
        hashedSecret,
        { expiresIn: '7d' },
      )
    } catch (jwtError) {
      console.error('Failed to generate JWT token:', jwtError)
      throw new Error('OAuth authentication failed - unable to generate token')
    }

    if (!token) {
      return NextResponse.json(
        { message: 'Failed to generate authentication token' },
        { status: 500 },
      )
    }

    // 6. Set cookie and redirect
    const absoluteCallbackUrl = callbackUrl.startsWith('http')
      ? callbackUrl
      : `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}${callbackUrl}`

    const response = NextResponse.redirect(absoluteCallbackUrl)

    response.cookies.set('payload-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
    })

    return response
  } catch (error) {
    console.error('CRITICAL OAUTH ERROR:', error)
    return NextResponse.json({ message: 'Internal Server Error during OAuth' }, { status: 500 })
  }
}

'use client'

import { Suspense } from 'react'
import { GoogleAuthButton } from '@/features/auth/components/google-auth-button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

function GoogleAuthButtonFallback() {
  return (
    <Button variant="outline" className="h-12 w-full border-2" disabled>
      Loading...
    </Button>
  )
}

export default function SignInPage() {
  return (
    <div className="container flex h-screen w-full flex-col items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Sign In</CardTitle>
          <CardDescription>Welcome back! Choose your preferred sign-in method.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Suspense fallback={<GoogleAuthButtonFallback />}>
            <GoogleAuthButton text="Sign in with Google" />
          </Suspense>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-wrap items-center justify-between gap-2">
          <div className="text-muted-foreground text-sm">
            Don&apos;t have an account?{' '}
            <Link href="/sign-up" className="text-primary hover:underline">
              Sign Up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

'use client'

import { Suspense } from 'react'
import { GoogleAuthButton } from '@/features/auth/components/google-auth-button'
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { BackgroundMesh } from '@/features/app-shell/components/background-mesh'
import { GlassCard } from '@/features/app-shell/components/glass-card'
import { m } from 'framer-motion'

function GoogleAuthButtonFallback() {
  return (
    <Button variant="outline" className="h-12 w-full border-2" disabled>
      Loading...
    </Button>
  )
}

export default function SignInPage() {
  return (
    <div className="relative min-h-screen w-full">
      <BackgroundMesh />
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center py-12">
        <GlassCard>
          <CardHeader className="space-y-2 pb-6 text-center">
            <m.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-foreground/5 dark:bg-white/5 ring-1 ring-foreground/10 dark:ring-white/10"
            >
              <div className="h-10 w-10 text-foreground dark:text-white">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
            </m.div>
            <CardTitle className="bg-gradient-to-b from-foreground to-foreground/60 dark:from-white dark:to-white/60 bg-clip-text text-3xl font-bold tracking-tight text-transparent font-outfit">
              Sign In
            </CardTitle>
            <CardDescription className="text-muted-foreground text-base">
              Welcome back! Choose your preferred sign-in method.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <m.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Suspense fallback={<GoogleAuthButtonFallback />}>
                <GoogleAuthButton text="Sign in with Google" />
              </Suspense>
            </m.div>
            
            <m.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative py-2"
            >
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-foreground/10 dark:border-white/10" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or share link</span>
              </div>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <p className="text-muted-foreground text-sm">
                Don&apos;t have an account?{' '}
                <Link href="/sign-up" className="text-foreground dark:text-white hover:text-foreground/80 dark:hover:text-white/80 transition-colors font-medium">
                  Sign Up
                </Link>
              </p>
            </m.div>
          </CardContent>
        </GlassCard>
      </div>
    </div>
  )
}

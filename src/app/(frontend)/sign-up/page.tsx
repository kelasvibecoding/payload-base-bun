'use client'

import { Suspense } from 'react'
import { GoogleAuthButton } from '@/features/auth/components/google-auth-button'
import { SignUpForm } from '@/features/auth/components/sign-up-form'
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
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

export default function SignUpPage() {
  return (
    <div className="relative min-h-screen w-full">
      <BackgroundMesh />
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center pt-28 pb-12">
        <GlassCard>
          <CardHeader className="space-y-2 pb-6 text-center">
            <m.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-foreground/5 ring-foreground/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ring-1 dark:bg-white/5 dark:ring-white/10"
            >
              <div className="text-foreground h-10 w-10 dark:text-white">
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
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  />
                </svg>
              </div>
            </m.div>
            <CardTitle className="from-foreground to-foreground/60 font-outfit bg-gradient-to-b bg-clip-text text-3xl font-bold tracking-tight text-transparent dark:from-white dark:to-white/60">
              Create Account
            </CardTitle>
            <CardDescription className="text-muted-foreground text-base">
              Join us today! Choose your preferred sign-up method.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <m.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Suspense fallback={<GoogleAuthButtonFallback />}>
                <GoogleAuthButton text="Join with Google" />
              </Suspense>
            </m.div>

            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative py-2"
            >
              <div className="absolute inset-0 flex items-center">
                <span className="border-foreground/10 w-full border-t dark:border-white/10" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background text-muted-foreground px-2">Or continue with email</span>
              </div>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <SignUpForm />
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <p className="text-muted-foreground text-sm">
                Already have an account?{' '}
                <Link
                  href="/sign-in"
                  className="text-foreground hover:text-foreground/80 font-medium transition-colors dark:text-white dark:hover:text-white/80"
                >
                  Sign In
                </Link>
              </p>
            </m.div>
          </CardContent>
        </GlassCard>
      </div>
    </div>
  )
}

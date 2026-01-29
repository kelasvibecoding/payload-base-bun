'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { fadeIn } from '@/lib/motions'

export function HeroSection({
  userEmail,
  adminRoute,
}: {
  userEmail?: string | null
  adminRoute: string
}) {
  return (
    <div className="max-w-4xl text-center">
      <motion.h1
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        animate="show"
        className="from-foreground to-foreground/70 mb-4 bg-gradient-to-b bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl lg:text-7xl"
      >
        {userEmail ? (
          <>
            Welcome back, <br /> <span className="text-primary">{userEmail}</span>
          </>
        ) : (
          <>
            Elevate Your <br /> Digital Experience
          </>
        )}
      </motion.h1>
      <motion.p
        variants={fadeIn('up', 0.4)}
        initial="hidden"
        animate="show"
        className="text-muted-foreground mx-auto mb-8 max-w-2xl text-base sm:text-lg"
      >
        Build modern, scalable applications with the power of Payload CMS and Next.js. A seamless
        bridge between your content and your users.
      </motion.p>

      <motion.div
        variants={fadeIn('up', 0.6)}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center justify-center gap-4 sm:flex-row"
      >
        <Button
          size="lg"
          className="h-11 px-8 text-sm font-semibold transition-all hover:scale-105 active:scale-95"
          asChild
        >
          <a href={adminRoute} target="_blank" rel="noopener noreferrer">
            Admin Panel <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="hover:bg-accent/50 h-11 px-8 text-sm font-semibold backdrop-blur-sm transition-all hover:scale-105 active:scale-95"
          asChild
        >
          <a href="https://payloadcms.com/docs" target="_blank" rel="noopener noreferrer">
            Documentation
          </a>
        </Button>
      </motion.div>
    </div>
  )
}

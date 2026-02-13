'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { m, useScroll, useTransform } from 'framer-motion'

interface HeroSectionProps {
  adminRoute?: string
}

export function HeroSection({ adminRoute = '/admin' }: HeroSectionProps) {
  const { scrollY } = useScroll()
  // Disable vertical parallax to prevent layout instability
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="relative z-0 flex min-h-[100dvh] flex-col items-center justify-center px-4 text-center">
      <m.div style={{ opacity }} className="max-w-4xl space-y-8">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary backdrop-blur-md border border-primary/20">
            Payload 3.0 Base Template
          </span>
        </div>
        
        <h1 className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 font-outfit text-5xl font-extrabold tracking-tight leading-[1.1] sm:text-7xl md:text-8xl">
          <span className="bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
            Elevate Your
          </span>
          <br />
          <span className="bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Digital Presence
          </span>
        </h1>

        <p className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed">
          Experience the &quot;LightDay Galaxy&quot; aesthetic. A premium, high-performance foundation built with Payload CMS and Next.js.
        </p>

        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="h-12 px-8 rounded-full text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-105" asChild>
            <Link href={adminRoute} target="_blank">
              Admin Panel <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="h-12 px-8 rounded-full text-base font-semibold border-2 hover:bg-muted transition-all hover:scale-105" asChild>
            <Link href="https://payloadcms.com/docs" target="_blank">
              Documentation
            </Link>
          </Button>
        </div>
      </m.div>
    </section>
  )
}

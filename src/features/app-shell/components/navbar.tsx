'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/components/lib/utils'

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      <nav className={cn(
        "flex items-center justify-between px-6 py-3 rounded-full",
        "bg-white/70 dark:bg-black/50 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg",
        "w-full max-w-4xl transition-all duration-300"
      )}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative h-8 w-8 overflow-hidden rounded-lg">
            <Image
              src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg"
              alt="Payload Logic"
              fill
              className="object-cover transition-transform group-hover:scale-110"
            />
          </div>
          <span className="font-outfit font-bold text-lg tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Payload
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link href="#features" className="hover:text-primary transition-colors">Features</Link>
          <a href="https://payloadcms.com/docs" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Docs</a>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link href="/sign-in" className="hidden sm:block text-sm font-medium hover:text-primary transition-colors">
            Sign In
          </Link>
          <Button asChild size="sm" className="rounded-full px-5 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md">
            <Link href="/sign-up">
              Get Started <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}

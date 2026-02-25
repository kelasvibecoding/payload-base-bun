'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useScrollTo } from '@/hooks/use-scroll-to'

export function NavbarLinks() {
  const scrollTo = useScrollTo()
  const pathname = usePathname()

  useEffect(() => {
    // Handle hash navigation with polling on mount and path change
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '')
      let attempts = 0
      const maxAttempts = 20 // 1 second total

      const checkAndScroll = setInterval(() => {
        attempts++
        if (scrollTo(id, { offset: 0 })) {
          clearInterval(checkAndScroll)
        } else if (attempts >= maxAttempts) {
          clearInterval(checkAndScroll)
        }
      }, 50)

      return () => clearInterval(checkAndScroll)
    }
  }, [scrollTo, pathname])

  const adminRoute = '/sign-up'

  return (
    <>
      {/* Links */}
      <div className="text-muted-foreground hidden items-center gap-8 text-sm font-medium md:flex">
        <Button
          variant="ghost"
          onClick={() => scrollTo('features', { offset: 0 })}
          className="text-muted-foreground hover:text-primary h-auto p-0 text-sm font-medium hover:bg-transparent"
        >
          Features
        </Button>
        <a
          href="https://payloadcms.com/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          Docs
        </a>
        <Link href="/contact" className="hover:text-primary transition-colors">
          Contact
        </Link>
      </div>

      {/* CTA Buttons */}
      <div className="flex items-center gap-3">
        <Link
          href="/sign-in"
          className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
        >
          Sign In
        </Link>
        <Link
          href={adminRoute}
          className={cn(
            'inline-flex items-center gap-2 rounded-full px-4 py-2',
            'bg-primary text-primary-foreground text-sm font-medium',
            'hover:bg-primary/90 transition-all duration-200',
            'shadow-sm hover:shadow-md',
          )}
        >
          Get Started
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </>
  )
}

export function NavbarLogo() {
  const handleLogoClick = () => {
    if (window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }

  return (
    <Link href="/" onClick={handleLogoClick} className="group flex items-center gap-2">
      <div className="bg-primary relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg transition-transform group-hover:scale-110">
        <span className="text-lg font-bold text-white">P</span>
      </div>
      <span className="text-lg font-bold tracking-tight">Payload</span>
    </Link>
  )
}

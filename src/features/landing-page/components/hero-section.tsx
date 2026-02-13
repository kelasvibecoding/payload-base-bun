import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface HeroSectionProps {
  adminRoute?: string
}

export function HeroSection({ adminRoute = '/admin' }: HeroSectionProps) {
  return (
    <section className="relative z-0 flex min-h-[100dvh] flex-col items-center justify-center px-4 text-center">
      <div className="max-w-4xl space-y-8">
        <div className="animate-in fade-in slide-in-from-bottom-8 fill-mode-both duration-1000">
          <span className="bg-primary/10 text-primary border-primary/20 inline-block rounded-full border px-4 py-1.5 text-sm font-semibold backdrop-blur-md">
            Payload 3.0 Base Template
          </span>
        </div>

        <h1 className="animate-in fade-in slide-in-from-bottom-8 fill-mode-both font-outfit text-5xl leading-[1.1] font-extrabold tracking-tight delay-150 duration-1000 sm:text-7xl md:text-8xl">
          <span className="from-foreground to-foreground/70 bg-gradient-to-b bg-clip-text text-transparent">
            Elevate Your
          </span>
          <br />
          <span className="from-primary bg-gradient-to-r via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Digital Presence
          </span>
        </h1>

        <p className="animate-in fade-in slide-in-from-bottom-8 fill-mode-both text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed delay-300 duration-1000 sm:text-xl">
          Experience the &quot;LightDay Galaxy&quot; aesthetic. A premium, high-performance
          foundation built with Payload CMS and Next.js.
        </p>

        <div className="animate-in fade-in slide-in-from-bottom-8 fill-mode-both flex flex-col items-center justify-center gap-4 delay-500 duration-1000 sm:flex-row">
          <Button
            size="lg"
            className="shadow-primary/25 hover:shadow-primary/40 h-12 rounded-full px-8 text-base font-semibold shadow-lg transition-all hover:scale-105"
            asChild
          >
            <Link href={adminRoute} target="_blank">
              Admin Panel <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="hover:bg-muted h-12 rounded-full border-2 px-8 text-base font-semibold transition-all hover:scale-105"
            asChild
          >
            <Link href="https://payloadcms.com/docs" target="_blank">
              Documentation
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

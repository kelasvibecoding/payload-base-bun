import React from 'react'
import Image from 'next/image'
import { fileURLToPath } from 'url'
import { Rocket, ArrowRight } from 'lucide-react'
import Link from 'next/link'

import config from '@/payload.config'
import { HeroSection } from '@/components/HeroSection'
import { HomeFeatures } from '@/components/HomeFeatures'
import { Button } from '@/components/ui/button'
import { AuthService } from '@/features/auth/services/auth.service'

export default async function HomePage() {
  // DIP: Delegating auth logic to a dedicated service
  const user = await AuthService.getCurrentUser()
  const payloadConfig = await config
  
  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <div className="bg-background selection:bg-primary/30 relative min-h-screen w-full overflow-hidden">
      {/* Background blobs for "elegant" feel */}
      <div className="bg-primary/20 animate-blob absolute top-0 -left-4 h-72 w-72 rounded-full opacity-30 mix-blend-multiply blur-3xl filter" />
      <div className="animate-blob animation-delay-2000 absolute top-0 -right-4 h-72 w-72 rounded-full bg-purple-500/20 opacity-30 mix-blend-multiply blur-3xl filter" />
      <div className="animate-blob animation-delay-4000 absolute -bottom-8 left-20 h-72 w-72 rounded-full bg-blue-500/20 opacity-30 mix-blend-multiply blur-3xl filter" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-12">
        {/* Header/Logo */}
        <div className="animate-in fade-in slide-in-from-top-4 mb-8 flex items-center gap-2 duration-1000">
          <picture>
            <source srcSet="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg" />
            <Image
              alt="Payload Logo"
              height={32}
              src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg"
              width={32}
              className="drop-shadow-2xl"
            />
          </picture>
          <span className="text-xl font-bold tracking-tighter">Payload</span>
        </div>

        {/* Hero Section - OCP in action: Composing the content instead of hardcoding it in the component */}
        <HeroSection 
          title={
            <h1>
              {user?.email ? (
                <>
                  Welcome back, <br /> <span className="text-primary">{user.email}</span>
                </>
              ) : (
                <>
                  Elevate Your <br /> Digital Experience
                </>
              )}
            </h1>
          }
          description={
            <p>
              Build modern, scalable applications with the power of Payload CMS and Next.js. A seamless
              bridge between your content and your users.
            </p>
          }
          actions={
            <>
              <Button
                size="lg"
                className="h-11 px-8 text-sm font-semibold transition-all hover:scale-105 active:scale-95"
                asChild
              >
                <a href={payloadConfig.routes.admin} target="_blank" rel="noopener noreferrer">
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
              <Button
                variant="secondary"
                size="lg"
                className="h-11 px-8 text-sm font-semibold transition-all hover:scale-105 active:scale-95"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </>
          }
        />

        {/* Feature Grid */}
        <HomeFeatures />

        {/* Footer info */}
        <div className="text-muted-foreground animate-in fade-in mt-16 flex flex-col items-center gap-4 text-xs delay-700 duration-1000">
          <div className="bg-muted/30 flex items-center gap-2 rounded-full border px-3 py-1 backdrop-blur-sm">
            <span>Powered by</span>
            <div className="bg-border h-3 w-px" />
            <Rocket className="h-3 w-3" />
            <span className="text-foreground font-medium">Payload 3.0</span>
          </div>
          <div className="flex items-center gap-2">
            <p className="m-0 text-center">Update this page by editing</p>
            <a
              className="bg-muted text-foreground hover:bg-muted/80 rounded-md border px-2 py-0.5 font-mono text-[10px] transition-colors"
              href={fileURL}
            >
              app/(frontend)/page.tsx
            </a>
          </div>
        </div>
      </div>

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:14px_24px]" />
    </div>
  )
}

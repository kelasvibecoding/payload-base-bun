import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'
import Link from 'next/link'
import { ArrowRight, Box, Code, Cpu, Globe, Lock, Rocket, Zap } from 'lucide-react'

import config from '@/payload.config'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

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

        {/* Hero Section */}
        <div className="max-w-4xl text-center">
          <h1 className="from-foreground to-foreground/70 animate-in fade-in slide-in-from-bottom-4 mb-4 bg-gradient-to-b bg-clip-text text-4xl font-extrabold tracking-tight text-transparent duration-1000 sm:text-6xl lg:text-7xl">
            {user ? (
              <>
                Welcome back, <br /> <span className="text-primary">{user.email}</span>
              </>
            ) : (
              <>
                Elevate Your <br /> Digital Experience
              </>
            )}
          </h1>
          <p className="text-muted-foreground animate-in fade-in slide-in-from-bottom-8 mx-auto mb-8 max-w-2xl text-base delay-200 duration-1000 sm:text-lg">
            Build modern, scalable applications with the power of Payload CMS and Next.js. A
            seamless bridge between your content and your users.
          </p>

          <div className="animate-in fade-in slide-in-from-bottom-12 flex flex-col items-center justify-center gap-4 delay-300 duration-1000 sm:flex-row">
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
          </div>
        </div>

        {/* Feature Grid */}
        <div className="animate-in fade-in slide-in-from-bottom-16 mt-16 grid w-full grid-cols-1 gap-4 delay-500 duration-1000 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<Cpu className="text-primary h-5 w-5" />}
            title="Modern Backend"
            description="Built with TypeScript, Node.js, and MongoDB/Postgres for maximum performance."
          />
          <FeatureCard
            icon={<Globe className="text-primary h-5 w-5" />}
            title="Headless Power"
            description="Connect your content to any frontend framework via REST or GraphQL APIs."
          />
          <FeatureCard
            icon={<Lock className="text-primary h-5 w-5" />}
            title="Secure by Design"
            description="Production-ready authentication and access control out of the box."
          />
        </div>

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

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Card className="group bg-card/50 hover:border-primary/50 relative overflow-hidden backdrop-blur-sm transition-all hover:shadow-2xl">
      <CardHeader>
        <div className="bg-primary/10 group-hover:bg-primary/20 mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg transition-colors">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <div className="from-primary/50 absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r to-purple-500/50 opacity-0 transition-opacity group-hover:opacity-100" />
    </Card>
  )
}

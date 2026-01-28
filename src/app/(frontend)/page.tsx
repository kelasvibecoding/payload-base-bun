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
    <div className="relative min-h-screen w-full overflow-hidden bg-background selection:bg-primary/30">
      {/* Background blobs for "elegant" feel */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-12">
        {/* Header/Logo */}
        <div className="mb-8 flex items-center gap-2 animate-in fade-in slide-in-from-top-4 duration-1000">
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
          <h1 className="mb-4 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl lg:text-7xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {user ? (
              <>Welcome back, <br /> <span className="text-primary">{user.email}</span></>
            ) : (
              <>Elevate Your <br /> Digital Experience</>
            )}
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-base text-muted-foreground sm:text-lg animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Build modern, scalable applications with the power of Payload CMS and Next.js. 
            A seamless bridge between your content and your users.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
            <Button size="lg" className="h-11 px-8 text-sm font-semibold transition-all hover:scale-105 active:scale-95" asChild>
              <a href={payloadConfig.routes.admin} target="_blank" rel="noopener noreferrer">
                Admin Panel <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="h-11 px-8 text-sm font-semibold backdrop-blur-sm transition-all hover:bg-accent/50 hover:scale-105 active:scale-95" asChild>
              <a href="https://payloadcms.com/docs" target="_blank" rel="noopener noreferrer">
                Documentation
              </a>
            </Button>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="mt-16 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
          <FeatureCard 
            icon={<Cpu className="h-5 w-5 text-primary" />} 
            title="Modern Backend" 
            description="Built with TypeScript, Node.js, and MongoDB/Postgres for maximum performance."
          />
          <FeatureCard 
            icon={<Globe className="h-5 w-5 text-primary" />} 
            title="Headless Power" 
            description="Connect your content to any frontend framework via REST or GraphQL APIs."
          />
          <FeatureCard 
            icon={<Lock className="h-5 w-5 text-primary" />} 
            title="Secure by Design" 
            description="Production-ready authentication and access control out of the box."
          />
        </div>

        {/* Footer info */}
        <div className="mt-16 flex flex-col items-center gap-4 text-xs text-muted-foreground animate-in fade-in duration-1000 delay-700">
          <div className="flex items-center gap-2 rounded-full border bg-muted/30 px-3 py-1 backdrop-blur-sm">
            <span>Powered by</span>
            <div className="h-3 w-px bg-border" />
            <Rocket className="h-3 w-3" />
            <span className="font-medium text-foreground">Payload 3.0</span>
          </div>
          <div className="flex items-center gap-2">
            <p className="m-0 text-center">Update this page by editing</p>
            <a
              className="rounded-md border bg-muted px-2 py-0.5 font-mono text-[10px] text-foreground transition-colors hover:bg-muted/80"
              href={fileURL}
            >
              app/(frontend)/page.tsx
            </a>
          </div>
        </div>
      </div>

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-2xl">
      <CardHeader>
        <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary/50 to-purple-500/50 opacity-0 transition-opacity group-hover:opacity-100" />
    </Card>
  )
}

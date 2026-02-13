'use client'

import React from 'react'
import { Cpu, Globe, Lock, Rocket, Zap, Layers } from 'lucide-react'
import { GlassCard } from '@/features/app-shell/components/glass-card'

function FeatureCard({ icon, title, description, delay }: { icon: React.ReactNode; title: string; description: string; delay: number }) {
  return (
    <GlassCard delay={delay} className="h-full max-w-none p-6 hover:border-primary/30 transition-colors">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-muted/50">
        {icon}
      </div>
      <h3 className="mb-2 font-outfit text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </GlassCard>
  )
}

export function HomeFeatures() {
  return (
    <section id="features" className="relative z-10 py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="font-outfit text-3xl font-bold tracking-tight sm:text-4xl">
            Premium Features
          </h2>
          <p className="mt-4 text-muted-foreground">
            Everything you need to build modern, scalable applications.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard 
            icon={<Cpu className="h-6 w-6 text-primary" />}
            title="Modern Stack"
            description="Next.js 15, React 19, and Payload 3.0. Built for speed and scalability."
            delay={0.1}
          />
          <FeatureCard 
            icon={<Globe className="h-6 w-6 text-blue-500" />}
            title="Headless Power"
            description="Connect to any frontend with robust REST and GraphQL APIs."
            delay={0.2}
          />
          <FeatureCard 
            icon={<Lock className="h-6 w-6 text-purple-500" />}
            title="Secure by Default"
            description="Enterprise-grade authentication and granular access control."
            delay={0.3}
          />
           <FeatureCard 
            icon={<Zap className="h-6 w-6 text-yellow-500" />}
            title="High Performance"
            description="Optimized for Core Web Vitals with minimal layout shifts."
            delay={0.4}
          />
           <FeatureCard 
            icon={<Layers className="h-6 w-6 text-indigo-500" />}
            title="Design System"
            description="Beautiful, accessible UI components built with Radix UI and Tailwind."
            delay={0.5}
          />
           <FeatureCard 
            icon={<Rocket className="h-6 w-6 text-pink-500" />}
            title="Production Ready"
            description="Drafts, versions, and validation ready for serious projects."
            delay={0.6}
          />
        </div>
      </div>
    </section>
  )
}

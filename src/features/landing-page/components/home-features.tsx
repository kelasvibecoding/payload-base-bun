'use client'

import React from 'react'
import { Cpu, Globe, Lock, Rocket, Zap, Layers } from 'lucide-react'
import { m } from 'framer-motion'
import { GlassCard } from '@/features/app-shell/components/glass-card'
import {
  staggeredContainerVariants,
  staggeredItemVariants,
} from '@/features/app-shell/components/motion-config'

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
    <m.div variants={staggeredItemVariants}>
      <GlassCard className="hover:border-primary/30 h-full max-w-none p-6 transition-colors">
        <div className="bg-muted/50 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl">
          {icon}
        </div>
        <h3 className="font-outfit mb-2 text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </GlassCard>
    </m.div>
  )
}

export function HomeFeatures() {
  return (
    <section className="relative z-10 px-4 py-32 font-sans">
      <div
        id="features"
        className="pointer-events-none absolute -top-[100px] left-0 h-px w-full opacity-0"
      />
      <div className="container mx-auto max-w-6xl">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-outfit text-3xl font-bold tracking-tight sm:text-4xl">
            Premium Features
          </h2>
          <p className="text-muted-foreground mt-4">
            Everything you need to build modern, scalable applications.
          </p>
        </m.div>

        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggeredContainerVariants}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <FeatureCard
            icon={<Cpu className="text-primary h-6 w-6" />}
            title="Modern Stack"
            description="Next.js 15, React 19, and Payload 3.0. Built for speed and scalability."
          />
          <FeatureCard
            icon={<Globe className="h-6 w-6 text-blue-500" />}
            title="Headless Power"
            description="Connect to any frontend with robust REST and GraphQL APIs."
          />
          <FeatureCard
            icon={<Lock className="h-6 w-6 text-purple-500" />}
            title="Secure by Default"
            description="Enterprise-grade authentication and granular access control."
          />
          <FeatureCard
            icon={<Zap className="h-6 w-6 text-yellow-500" />}
            title="High Performance"
            description="Optimized for Core Web Vitals with minimal layout shifts."
          />
          <FeatureCard
            icon={<Layers className="h-6 w-6 text-indigo-500" />}
            title="Design System"
            description="Beautiful, accessible UI components built with Radix UI and Tailwind."
          />
          <FeatureCard
            icon={<Rocket className="h-6 w-6 text-pink-500" />}
            title="Production Ready"
            description="Drafts, versions, and validation ready for serious projects."
          />
        </m.div>
      </div>
    </section>
  )
}

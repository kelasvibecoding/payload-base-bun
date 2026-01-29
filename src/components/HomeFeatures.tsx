'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Globe, Lock } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { fadeIn, staggerContainer } from '@/lib/motions'

function FeatureCard({
  icon,
  title,
  description,
  index,
}: {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}) {
  return (
    <motion.div variants={fadeIn('up', index * 0.1)}>
      <Card className="group bg-card/50 hover:border-primary/50 relative h-full overflow-hidden backdrop-blur-sm transition-all hover:shadow-2xl">
        <CardHeader>
          <div className="bg-primary/10 group-hover:bg-primary/20 mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg transition-colors">
            {icon}
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
        </CardHeader>
        <div className="from-primary/50 absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r to-purple-500/50 opacity-0 transition-opacity group-hover:opacity-100" />
      </Card>
    </motion.div>
  )
}

export function HomeFeatures() {
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="mt-16 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      <FeatureCard
        index={0}
        icon={<Cpu className="text-primary h-5 w-5" />}
        title="Modern Backend"
        description="Built with TypeScript, Node.js, and MongoDB/Postgres for maximum performance."
      />
      <FeatureCard
        index={1}
        icon={<Globe className="text-primary h-5 w-5" />}
        title="Headless Power"
        description="Connect your content to any frontend framework via REST or GraphQL APIs."
      />
      <FeatureCard
        index={2}
        icon={<Lock className="text-primary h-5 w-5" />}
        title="Secure by Design"
        description="Production-ready authentication and access control out of the box."
      />
    </motion.div>
  )
}

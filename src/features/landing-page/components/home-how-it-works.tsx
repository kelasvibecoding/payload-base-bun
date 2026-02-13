'use client'

import { m } from 'framer-motion'
import { CircleCheck, Rocket, Zap } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function HomeHowItWorks() {
  return (
    <section id="how-it-works" className="bg-muted/30 relative z-10 px-4 py-32 font-sans">
      <div className="container mx-auto max-w-6xl">
        <m.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16 text-center"
        >
          <h2 className="text-foreground mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            How It Works
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Streamline your workflow with a powerful, opinionated stack designed for modern web
            development.
          </p>
        </m.div>

        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {/* Connector Line (Desktop) */}
          <div className="bg-border absolute top-12 right-[16%] left-[16%] -z-10 hidden h-0.5 md:block" />

          <Step
            icon={<CircleCheck className="text-primary h-10 w-10" />}
            title="Easy Setup"
            description="Get started in minutes with our automated setup scripts and Docker integration."
          />
          <Step
            icon={<Zap className="text-primary h-10 w-10" />}
            title="Fast Development"
            description="Leverage Hot Module Replacement and Turbopack for instant feedback loops."
          />
          <Step
            icon={<Rocket className="text-primary h-10 w-10" />}
            title="Deploy Anywhere"
            description="Build for production with reliable Docker containers or deploy straight to Vercel."
          />
        </m.div>
      </div>
    </section>
  )
}

function Step({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <m.div
      variants={itemVariants}
      className="bg-background/50 border-border/50 flex flex-col items-center rounded-2xl border p-6 text-center shadow-sm backdrop-blur-sm"
    >
      <div className="bg-background border-primary/10 z-10 mb-6 flex h-24 w-24 items-center justify-center rounded-full border-4 shadow-sm transition-transform duration-300 hover:scale-110">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </m.div>
  )
}

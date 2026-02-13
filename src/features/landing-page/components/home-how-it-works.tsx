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
    <section id="how-it-works" className="relative z-10 py-32 px-4 font-sans bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <m.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Streamline your workflow with a powerful, opinionated stack designed for modern web
            development.
          </p>
        </m.div>

        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
        >
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-border -z-10" />

          <Step
            icon={<CircleCheck className="w-10 h-10 text-primary" />}
            title="Easy Setup"
            description="Get started in minutes with our automated setup scripts and Docker integration."
          />
          <Step
            icon={<Zap className="w-10 h-10 text-primary" />}
            title="Fast Development"
            description="Leverage Hot Module Replacement and Turbopack for instant feedback loops."
          />
          <Step
            icon={<Rocket className="w-10 h-10 text-primary" />}
            title="Deploy Anywhere"
            description="Build for production with reliable Docker containers or deploy straight to Vercel."
          />
        </m.div>
      </div>
    </section>
  )
}

function Step({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <m.div
      variants={itemVariants}
      className="flex flex-col items-center text-center bg-background/50 backdrop-blur-sm p-6 rounded-2xl border border-border/50 shadow-sm"
    >
      <div className="w-24 h-24 rounded-full bg-background border-4 border-primary/10 flex items-center justify-center mb-6 shadow-sm z-10 transition-transform hover:scale-110 duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </m.div>
  )
}

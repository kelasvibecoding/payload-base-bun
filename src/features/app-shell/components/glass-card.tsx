'use client'

import { motion } from 'framer-motion'
import { cn } from '@/components/lib/utils'
import { Card } from '@/components/ui/card'

export function GlassCard({ 
  children, 
  className,
  delay = 0 
}: { 
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="w-full max-w-md px-4"
    >
      <Card className={cn(
        "relative overflow-hidden transition-colors duration-300",
        "border-black/5 bg-white/60 backdrop-blur-xl shadow-xl", // Light mode
        "dark:border-white/10 dark:bg-white/[0.03] dark:shadow-2xl", // Dark mode
        "after:absolute after:inset-0 after:z-[-1] after:bg-gradient-to-b after:from-white/40 after:to-transparent after:opacity-0 hover:after:opacity-100 after:transition-opacity",
        "dark:after:from-white/5",
        className
      )}>
        {children}
      </Card>
    </motion.div>
  )
}

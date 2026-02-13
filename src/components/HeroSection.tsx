'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/motions'

interface HeroSectionProps {
  title: React.ReactNode
  description?: React.ReactNode
  actions?: React.ReactNode
}

/**
 * HeroSection Component
 *
 * Applies SOLID Principles:
 * - OCP (Open/Closed): Open for extension (via children/props), closed for modification.
 *   You can change the text/buttons without editing this file.
 * - SRP (Single Responsibility): purely presentational (layout & animation), not logic-bound.
 */
export function HeroSection({ title, description, actions }: HeroSectionProps) {
  return (
    <div className="max-w-4xl text-center">
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        animate="show"
        className="from-foreground to-foreground/70 mb-4 bg-gradient-to-b bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl lg:text-7xl"
      >
        {title}
      </motion.div>

      {description && (
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          animate="show"
          className="text-muted-foreground mx-auto mb-8 max-w-2xl text-base sm:text-lg"
        >
          {description}
        </motion.div>
      )}

      {actions && (
        <motion.div
          variants={fadeIn('up', 0.6)}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          {actions}
        </motion.div>
      )}
    </div>
  )
}

'use client'

import { motion, type HTMLMotionProps } from 'framer-motion'
import React from 'react'

interface MotionWrapperProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
}

export const MotionDiv = motion.div

export const FadeIn = ({ children, ...props }: MotionWrapperProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    {...props}
  >
    {children}
  </motion.div>
)

export const StaggerContainer = ({ children, ...props }: MotionWrapperProps) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    {...props}
  >
    {children}
  </motion.div>
)

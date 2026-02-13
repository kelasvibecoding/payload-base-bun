'use client'

import React from 'react'
import { LazyMotion, domAnimation, type Variants } from 'framer-motion'

/**
 * MotionConfig provides optimized Framer Motion support via LazyMotion.
 * It uses the 'domAnimation' subset to keep the initial bundle size small.
 */
export function MotionConfig({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      {children}
    </LazyMotion>
  )
}

export const staggeredContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const staggeredItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

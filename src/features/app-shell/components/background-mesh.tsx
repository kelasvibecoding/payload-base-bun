'use client'

import { motion } from 'framer-motion'
import { cn } from '@/components/lib/utils'

export function BackgroundMesh({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <div className={cn('relative min-h-screen w-full overflow-hidden bg-background transition-colors duration-500', className)}>
      {/* Mesh Gradients */}
      <div className="absolute inset-0 z-0 opacity-60 dark:opacity-100">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-[10%] -left-[10%] h-[60%] w-[60%] rounded-full bg-violet-400/30 blur-[120px] dark:bg-violet-600/20"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -80, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-[20%] -right-[10%] h-[50%] w-[50%] rounded-full bg-blue-400/30 blur-[100px] dark:bg-blue-600/10"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-[10%] left-[20%] h-[55%] w-[55%] rounded-full bg-indigo-400/30 blur-[120px] dark:bg-indigo-600/15"
        />
      </div>

      {/* Grain Overlay */}
      <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Content */}
      <div className="relative z-10 w-full min-h-screen flex flex-col">
        {children}
      </div>
    </div>
  )
}

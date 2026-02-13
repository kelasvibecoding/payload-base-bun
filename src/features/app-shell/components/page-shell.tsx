import React from 'react'
import { cn } from '@/components/lib/utils'
import { BackgroundMesh } from './background-mesh'
import { Footer } from './footer'

interface PageShellProps {
  children: React.ReactNode
  className?: string
  withPadding?: boolean
  showFooter?: boolean
}

export function PageShell({
  children,
  className,
  withPadding = true,
  showFooter = true,
}: PageShellProps) {
  return (
    <div className={cn('bg-background relative flex min-h-[100dvh] w-full flex-col', className)}>
      <BackgroundMesh />
      <div
        className={cn(
          'relative z-10 flex flex-1 flex-col',
          withPadding ? 'pt-24 sm:pt-32' : 'pt-0',
        )}
      >
        <main className="flex-grow">{children}</main>
        {showFooter && <Footer />}
      </div>
    </div>
  )
}

import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'

export function GlassCard({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <div
      style={{
        animationDelay: `${delay}s`,
        opacity: 0, // Initial state before animation starts
      }}
      className="animate-fade-up w-full max-w-md px-4"
    >
      <Card
        className={cn(
          'relative overflow-hidden transition-colors duration-300',
          'border-black/5 bg-white/60 shadow-xl backdrop-blur-xl', // Light mode
          'dark:border-white/10 dark:bg-white/[0.03] dark:shadow-2xl', // Dark mode
          'after:absolute after:inset-0 after:z-[-1] after:bg-gradient-to-b after:from-white/40 after:to-transparent after:opacity-0 after:transition-opacity hover:after:opacity-100',
          'dark:after:from-white/5',
          className,
        )}
      >
        {children}
      </Card>
    </div>
  )
}

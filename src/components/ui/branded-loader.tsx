import { cn } from '@/lib/utils'

interface BrandedLoaderProps {
  className?: string
  text?: string
}

export const BrandedLoader = ({ className, text = 'Loading...' }: BrandedLoaderProps) => {
  return (
    <div className={cn('flex flex-col items-center justify-center gap-4', className)}>
      <div className="flex items-center gap-2">
        <div className="bg-primary relative flex h-10 w-10 animate-pulse items-center justify-center overflow-hidden rounded-lg shadow-md">
          <span className="text-xl font-bold text-white">P</span>
        </div>
        <span className="animate-pulse text-2xl font-bold tracking-tight">Payload</span>
      </div>
      {text && <p className="text-muted-foreground animate-pulse text-sm">{text}</p>}
    </div>
  )
}

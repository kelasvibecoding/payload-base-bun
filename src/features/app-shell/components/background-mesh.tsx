import { cn } from '@/components/lib/utils'

export function BackgroundMesh({ className }: { className?: string }) {
  // Standalone background component to strictly decouple visual effects from page layout.
  return (
    <div className={cn('absolute inset-0 z-0 overflow-hidden pointer-events-none bg-background transition-colors duration-500', className)}>
      {/* Mesh Gradients */}
      <div className="absolute inset-0 z-0 opacity-60 dark:opacity-100">
        <div className="absolute -top-[10%] -left-[10%] h-[60%] w-[60%] rounded-full bg-violet-400/30 blur-[120px] dark:bg-violet-600/20 animate-mesh-1" />
        <div className="absolute top-[20%] -right-[10%] h-[50%] w-[50%] rounded-full bg-blue-400/30 blur-[100px] dark:bg-blue-600/10 animate-mesh-2" />
        <div className="absolute -bottom-[10%] left-[20%] h-[55%] w-[55%] rounded-full bg-indigo-400/30 blur-[120px] dark:bg-indigo-600/15 animate-mesh-3" />
      </div>

      {/* Grain Overlay */}
      <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  )
}

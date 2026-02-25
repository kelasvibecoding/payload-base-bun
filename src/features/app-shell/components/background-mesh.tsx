import { cn } from '@/lib/utils'

export function BackgroundMesh({ className }: { className?: string }) {
  // Standalone background component to strictly decouple visual effects from page layout.
  return (
    <div
      className={cn(
        'bg-background pointer-events-none absolute inset-0 z-0 overflow-hidden transition-colors duration-500',
        className,
      )}
    >
      {/* Mesh Gradients */}
      <div className="absolute inset-0 z-0 opacity-60 dark:opacity-100">
        <div className="animate-mesh-1 absolute -top-[10%] -left-[10%] h-[60%] w-[60%] rounded-full bg-violet-400/30 blur-[120px] dark:bg-violet-600/20" />
        <div className="animate-mesh-2 absolute top-[20%] -right-[10%] h-[50%] w-[50%] rounded-full bg-blue-400/30 blur-[100px] dark:bg-blue-600/10" />
        <div className="animate-mesh-3 absolute -bottom-[10%] left-[20%] h-[55%] w-[55%] rounded-full bg-indigo-400/30 blur-[120px] dark:bg-indigo-600/15" />
      </div>

      {/* Grain Overlay */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
    </div>
  )
}

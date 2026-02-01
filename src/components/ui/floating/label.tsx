import * as React from 'react'
import { Label } from '@/components/ui/label'
import { cn } from '@/components/lib/utils'

export interface FloatingLabelProps extends React.ComponentPropsWithoutRef<typeof Label> {
  id: string
}

const FloatingLabel = React.forwardRef<
  React.ElementRef<typeof Label>,
  FloatingLabelProps
>(({ className, ...props }, ref) => {
  return (
    <Label
      className={cn(
        'absolute start-2 z-10 origin-[0] transform bg-background px-2 text-sm text-gray-500 duration-300 transition-all',
        // Peer logic (for Input, Textarea)
        'peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100',
        'peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-foreground',
        // Manual "Always up" logic (for Select or when field has value)
        'not-peer-placeholder-shown:top-2 not-peer-placeholder-shown:-translate-y-4 not-peer-placeholder-shown:scale-75',
        'cursor-text pointer-events-none',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
FloatingLabel.displayName = 'FloatingLabel'

export { FloatingLabel }

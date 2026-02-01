import * as React from 'react'
import { Label } from '@/components/ui/label'
import { cn } from '@/components/lib/utils'

export interface FloatingLabelProps extends React.ComponentPropsWithoutRef<typeof Label> {
  id: string
}

const FloatingLabel = React.forwardRef<React.ElementRef<typeof Label>, FloatingLabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <Label
        className={cn(
          'bg-background absolute start-2 z-10 origin-[0] transform px-2 text-sm text-gray-500 transition-all duration-300',
          // Peer logic (for Input, Textarea)
          'peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100',
          'peer-focus:text-foreground peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2',
          // Manual "Always up" logic (for Select or when field has value)
          'not-peer-placeholder-shown:top-2 not-peer-placeholder-shown:-translate-y-4 not-peer-placeholder-shown:scale-75',
          'pointer-events-none cursor-text',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
FloatingLabel.displayName = 'FloatingLabel'

export { FloatingLabel }

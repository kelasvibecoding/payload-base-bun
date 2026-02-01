import * as React from 'react'
import { cn } from '@/components/lib/utils'
import { Textarea as BaseTextarea } from '@/components/ui/textarea'
import { FloatingLabel } from './label'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  showCount?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ id, label, className, showCount, maxLength, value, ...props }, ref) => {
    const generatedId = React.useId()
    const finalId = id || generatedId

    const currentCount = React.useMemo(() => {
      if (typeof value === 'string') return value.length
      if (typeof value === 'number') return value.toString().length
      return 0
    }, [value])

    return (
      <div className="relative w-full space-y-1.5">
        <div className="relative">
          <BaseTextarea
            {...props}
            id={finalId}
            value={value}
            maxLength={maxLength}
            placeholder=" "
            className={cn('peer min-h-[120px] px-3 py-3', className)}
            ref={ref}
          />
          <FloatingLabel htmlFor={finalId} id={finalId} className="top-6">
            {label}
          </FloatingLabel>
        </div>
        {(showCount || maxLength) && (
          <div className="flex justify-end px-1">
            <p className="text-muted-foreground text-[11px] font-semibold tracking-widest uppercase">
              {currentCount}
              {maxLength ? ` / ${maxLength}` : ''} Characters
            </p>
          </div>
        )}
      </div>
    )
  },
)
Textarea.displayName = 'Textarea'

export { Textarea }

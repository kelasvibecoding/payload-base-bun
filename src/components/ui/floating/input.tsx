import * as React from 'react'
import { cn } from '@/lib/utils'
import { Input as BaseInput } from '@/components/ui/input'
import { FloatingLabel } from './label'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, className, ...props }, ref) => {
    const generatedId = React.useId()
    const finalId = id || generatedId

    return (
      <div className="relative">
        <BaseInput
          {...props}
          id={finalId}
          placeholder=" "
          className={cn('peer h-12', className)}
          ref={ref}
        />
        <FloatingLabel htmlFor={finalId} id={finalId}>
          {label}
        </FloatingLabel>
      </div>
    )
  },
)
Input.displayName = 'Input'

export { Input }

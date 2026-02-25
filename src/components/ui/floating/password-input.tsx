'use client'

import * as React from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Input as BaseInput } from '@/components/ui/input'
import { FloatingLabel } from './label'
import { Button } from '@/components/ui/button'

export type PasswordStrength = 'low' | 'medium' | 'high'

export interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  strength?: PasswordStrength
}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ id, label, className, strength, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)
    const generatedId = React.useId()
    const finalId = id || generatedId

    const strengthConfig = {
      low: { color: 'bg-red-500', width: 'w-1/3', label: 'Weak' },
      medium: { color: 'bg-yellow-500', width: 'w-2/3', label: 'Medium' },
      high: { color: 'bg-green-500', width: 'w-full', label: 'Strong' },
    }

    const currentStrength = strength ? strengthConfig[strength] : null

    return (
      <div className="w-full space-y-3">
        <div className="relative">
          <BaseInput
            {...props}
            id={finalId}
            type={showPassword ? 'text' : 'password'}
            placeholder=" "
            className={cn('peer h-12 pr-10 pl-3', className)}
            ref={ref}
          />
          <FloatingLabel htmlFor={finalId} id={finalId}>
            {label}
          </FloatingLabel>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="text-muted-foreground absolute top-0 right-0 h-12 px-3 py-2 transition-colors hover:bg-transparent"
            onClick={() => setShowPassword((prev) => !prev)}
            tabIndex={-1}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Eye className="h-4 w-4" aria-hidden="true" />
            )}
            <span className="sr-only">{showPassword ? 'Hide password' : 'Show password'}</span>
          </Button>
        </div>

        {currentStrength && (
          <div className="space-y-2 px-1">
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
              <div
                className={cn(
                  'h-full transition-all duration-500 ease-in-out',
                  currentStrength.color,
                  currentStrength.width,
                )}
              />
            </div>
            <p
              className={cn(
                'text-[11px] font-semibold tracking-widest uppercase transition-colors duration-300',
                strength === 'low' && 'text-red-500',
                strength === 'medium' && 'text-yellow-600',
                strength === 'high' && 'text-green-600',
              )}
            >
              {currentStrength.label}
            </p>
          </div>
        )}
      </div>
    )
  },
)
PasswordInput.displayName = 'PasswordInput'

export { PasswordInput }

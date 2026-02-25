'use client'

import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { FloatingLabel } from './label'
import {
  Select as BaseSelect,
  SelectGroup,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectSeparator,
} from '../select'

export interface SelectProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> {
  id?: string
  label: string
  placeholder?: string
}

const Select = ({ id, label, children, value, onValueChange, ...props }: SelectProps) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [internalValue, setInternalValue] = React.useState(value || '')
  const generatedId = React.useId()
  const finalId = id || generatedId

  React.useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value)
    }
  }, [value])

  const handleValueChange = (val: string) => {
    setInternalValue(val)
    onValueChange?.(val)
  }

  const isActive = isOpen || Boolean(internalValue)

  return (
    <div className="group relative w-full">
      <BaseSelect
        value={internalValue}
        onValueChange={handleValueChange}
        onOpenChange={(open) => setIsOpen(open)}
        {...props}
      >
        <SelectPrimitive.Trigger
          id={finalId}
          className={cn(
            'peer border-input bg-background ring-offset-background focus:ring-ring flex h-12 w-full items-center justify-between rounded-md border px-3 py-2 text-sm transition-all focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[placeholder]:text-transparent',
          )}
        >
          <SelectValue />
          <SelectPrimitive.Icon asChild>
            <ChevronDown className="h-4 w-4 opacity-50 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
        <SelectContent>{children}</SelectContent>
      </BaseSelect>
      <FloatingLabel
        id={`${finalId}-label`}
        htmlFor={finalId}
        className={cn(
          'transition-all duration-300',
          isActive
            ? 'top-2 -translate-y-4 scale-75 text-gray-500'
            : 'top-1/2 -translate-y-1/2 scale-100 text-gray-500 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75',
          isOpen && 'text-foreground font-medium',
        )}
      >
        {label}
      </FloatingLabel>
    </div>
  )
}

export { Select, SelectGroup, SelectValue, SelectItem, SelectSeparator }

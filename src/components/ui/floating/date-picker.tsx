'use client'

import * as React from 'react'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { FloatingLabel } from './label'

export interface DatePickerProps {
  id?: string
  label: string
  date?: Date
  onDateChange?: (date: Date | undefined) => void
  className?: string
  placeholder?: string
}

export function DatePicker({
  id,
  label,
  date,
  onDateChange,
  className,
  placeholder,
}: DatePickerProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const generatedId = React.useId()
  const finalId = id || generatedId

  const isActive = isOpen || Boolean(date)

  return (
    <div className={cn('group relative w-full', className)}>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            id={finalId}
            variant={'outline'}
            className={cn(
              'peer border-input bg-background ring-offset-background focus-visible:ring-ring relative flex h-12 w-full items-center justify-start rounded-md border px-3 py-2 text-left text-sm font-normal transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
              !date && 'text-muted-foreground',
            )}
          >
            <div className="flex items-center gap-2 truncate overflow-hidden">
              {date ? (
                format(date, 'PPP')
              ) : (
                <span className="opacity-0">{placeholder || 'Pick a date'}</span>
              )}
            </div>
            <CalendarIcon className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(newDate) => {
              onDateChange?.(newDate)
              setIsOpen(false)
            }}
            initialFocus
          />
        </PopoverContent>
      </Popover>
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

'use client'

import * as React from 'react'
import { Check, ChevronsUpDown, X } from 'lucide-react'
import { cn } from '@/components/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { FloatingLabel } from './label'
import { Badge } from '@/components/ui/badge'

export interface ComboboxOption {
  label: string
  value: string
}

type SingleComboboxProps = {
  multiple?: false
  value?: string
  onValueChange?: (value: string) => void
}

type MultiComboboxProps = {
  multiple: true
  value?: string[]
  onValueChange?: (value: string[]) => void
}

export type ComboboxProps = {
  id?: string
  label: string
  options: ComboboxOption[]
  className?: string
  placeholder?: string
  emptyMessage?: string
} & (SingleComboboxProps | MultiComboboxProps)

export function Combobox({
  id,
  label,
  options,
  value,
  onValueChange,
  multiple,
  className,
  placeholder,
  emptyMessage = 'No options found.',
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const generatedId = React.useId()
  const finalId = id || generatedId

  const handleSelect = (optionValue: string) => {
    if (multiple) {
      const currentValue = (value as string[]) || []
      const newValue = currentValue.includes(optionValue)
        ? currentValue.filter((v) => v !== optionValue)
        : [...currentValue, optionValue]
      ;(onValueChange as (val: string[]) => void)?.(newValue)
    } else {
      ;(onValueChange as (val: string) => void)?.(optionValue === value ? '' : optionValue)
      setOpen(false)
    }
  }

  const isSelected = (optionValue: string) => {
    if (multiple) {
      return ((value as string[]) || []).includes(optionValue)
    }
    return value === optionValue
  }

  const getSelectedLabels = () => {
    if (multiple) {
      const selected = options.filter((o) => ((value as string[]) || []).includes(o.value))
      return selected.map((s) => s.label).join(', ')
    }
    const selected = options.find((o) => o.value === value)
    return selected?.label || ''
  }

  const hasValue = multiple ? ((value as string[]) || []).length > 0 : Boolean(value)
  const isActive = open || hasValue

  return (
    <div className={cn('group relative w-full', className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id={finalId}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              'peer border-input bg-background ring-offset-background focus:ring-ring flex h-12 w-full items-center justify-between rounded-md border px-3 py-2 text-left text-sm font-normal transition-all focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
            )}
          >
            <div className="flex max-w-[90%] items-center gap-1.5 overflow-hidden">
              {hasValue ? (
                multiple ? (
                  <div className="flex flex-nowrap items-center gap-1.5 overflow-hidden">
                    {((value as string[]) || []).slice(0, 2).map((v) => {
                      const option = options.find((o) => o.value === v)
                      if (!option) return null
                      return (
                        <Badge
                          key={v}
                          variant="secondary"
                          className="shrink-0 rounded-sm px-2 py-0.5 font-normal"
                        >
                          {option.label}
                          <span
                            role="button"
                            tabIndex={0}
                            className="ring-offset-background focus:ring-ring ml-1.5 cursor-pointer rounded-full outline-none focus:ring-2 focus:ring-offset-2"
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault()
                                e.stopPropagation()
                                handleSelect(v)
                              }
                            }}
                            onMouseDown={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                            }}
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              handleSelect(v)
                            }}
                          >
                            <X className="text-muted-foreground hover:text-foreground h-3.5 w-3.5" />
                          </span>
                        </Badge>
                      )
                    })}
                    {((value as string[]) || []).length > 2 && (
                      <Badge
                        variant="secondary"
                        className="shrink-0 rounded-sm px-2 py-0.5 font-normal"
                      >
                        + {((value as string[]) || []).length - 2} more
                      </Badge>
                    )}
                  </div>
                ) : (
                  <span className="truncate">{getSelectedLabels()}</span>
                )
              ) : (
                <span className="opacity-0">{placeholder || 'Select...'}</span>
              )}
            </div>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[--radix-popover-trigger-width] p-0" align="start">
          <Command>
            <CommandInput placeholder={`Search ${label.toLowerCase()}...`} />
            <CommandList className="max-h-[200px]">
              <CommandEmpty>{emptyMessage}</CommandEmpty>
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.label}
                    onSelect={() => handleSelect(option.value)}
                  >
                    <Check
                      className={cn(
                        'mr-2 h-4 w-4',
                        isSelected(option.value) ? 'opacity-100' : 'opacity-0',
                      )}
                    />
                    {option.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <FloatingLabel
        id={`${finalId}-label`}
        htmlFor={finalId}
        className={cn(
          isActive
            ? 'top-2 -translate-y-4 scale-75 text-gray-500'
            : 'top-1/2 -translate-y-1/2 scale-100 text-gray-500 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75',
          open && 'text-foreground font-medium',
        )}
      >
        {label}
      </FloatingLabel>
    </div>
  )
}

'use client'

import * as React from 'react'
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { DayButton, DayPicker, getDefaultClassNames } from 'react-day-picker'

import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = 'label',
  buttonVariant = 'ghost',
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>['variant']
}) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        'bg-background group/calendar p-3 [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent',
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className,
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) => date.toLocaleString('default', { month: 'short' }),
        ...formatters,
      }}
      classNames={{
        root: cn('w-full', defaultClassNames.root),
        months: cn('flex flex-col gap-4', defaultClassNames.months),
        month: cn('flex flex-col gap-4', defaultClassNames.month),
        nav: cn(
          'absolute inset-x-0 px-6 flex w-full items-center justify-between gap-1',
          defaultClassNames.nav,
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
          defaultClassNames.button_previous,
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
          defaultClassNames.button_next,
        ),
        month_caption: cn(
          'flex h-7 w-full items-center justify-center px-8',
          defaultClassNames.month_caption,
        ),
        dropdowns: cn(
          'flex h-[--cell-size] w-full items-center justify-center gap-1.5 text-sm font-medium',
          defaultClassNames.dropdowns,
        ),
        dropdown_root: cn(
          'has-focus:border-ring border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative rounded-md border',
          defaultClassNames.dropdown_root,
        ),
        dropdown: cn('bg-popover absolute inset-0 opacity-0', defaultClassNames.dropdown),
        caption_label: cn(
          'select-none font-medium',
          captionLayout === 'label'
            ? 'text-sm'
            : '[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5',
          defaultClassNames.caption_label,
        ),
        table: 'w-full border-collapse space-y-1',
        weekdays: cn('flex', defaultClassNames.weekdays),
        weekday: cn(
          'text-muted-foreground w-9 rounded-md text-[0.8rem] font-normal',
          defaultClassNames.weekday,
        ),
        week: cn('flex w-full mt-2', defaultClassNames.week),
        day: cn(
          'relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:bg-accent first:[&:has([data-selected])]:rounded-l-md last:[&:has([data-selected])]:rounded-r-md',
          defaultClassNames.day,
        ),
        range_start: 'day-range-start',
        range_end: 'day-range-end',
        selected: cn(
          buttonVariants({ variant: 'default' }),
          'h-9 w-9 p-0 font-normal aria-selected:opacity-100',
        ),
        today: 'bg-accent text-accent-foreground',
        outside: 'text-muted-foreground opacity-50',
        disabled: 'text-muted-foreground opacity-50',
        hidden: 'invisible',
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div data-slot="calendar" ref={rootRef} className={cn('p-3', className)} {...props} />
          )
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === 'left') {
            return <ChevronLeftIcon className={cn('h-4 w-4', className)} {...props} />
          }

          if (orientation === 'right') {
            return <ChevronRightIcon className={cn('h-4 w-4', className)} {...props} />
          }

          return <ChevronDownIcon className={cn('h-4 w-4', className)} {...props} />
        },
        DayButton: ({ className, ...props }) => (
          <DayButton
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'h-9 w-9 p-0 font-normal aria-selected:opacity-100',
              className,
            )}
            {...props}
          />
        ),
        ...components,
      }}
      {...props}
    />
  )
}

export { Calendar }

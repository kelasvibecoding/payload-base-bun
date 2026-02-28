'use client'

import React from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import type { Media } from '@/payload-types'
import { MediaImage } from './Image'

interface MediaLightboxProps {
  images: (Media | string)[]
  initialIndex?: number
  open?: boolean
  onOpenChange?: (open: boolean) => void
  title?: string
  children?: React.ReactNode // For the trigger
}

export function MediaLightbox({
  images,
  initialIndex = 0,
  open,
  onOpenChange,
  title = 'Media Preview',
  children,
}: MediaLightboxProps) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(initialIndex)

  React.useEffect(() => {
    if (!api) return

    api.scrollTo(initialIndex)
    setCurrent(api.selectedScrollSnap())

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api, initialIndex])

  const renderImage = (img: Media | string, index: number) => {
    const isMedia = typeof img !== 'string'
    const url = isMedia ? img.url : img
    const alt = isMedia ? img.alt : `Image ${index + 1}`

    if (!url) return null

    return (
      <div className="relative h-full w-full p-4 md:p-10">
        {isMedia ? (
          <MediaImage
            media={img as Media}
            size="card"
            alt={alt || ''}
            fill
            className="object-contain"
            quality={90}
            priority
            sizes="100vw"
          />
        ) : (
          <Image
            src={url}
            alt={alt || ''}
            fill
            className="object-contain"
            quality={90}
            priority
            sizes="100vw"
          />
        )}
      </div>
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}
      <DialogContent className="z-[6000] h-full max-h-screen w-full max-w-screen-xl border-none bg-black/95 p-0 sm:rounded-none">
        <VisuallyHidden>
          <DialogTitle>{title}</DialogTitle>
        </VisuallyHidden>

        <div className="relative flex h-full w-full items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-[6001] text-white/70 hover:bg-white/10 hover:text-white"
            onClick={() => onOpenChange?.(false)}
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </Button>

          {images.length > 1 ? (
            <>
              <Carousel
                setApi={setApi}
                opts={{
                  startIndex: initialIndex,
                  loop: true,
                }}
                className="h-full w-full"
              >
                <CarouselContent className="-ml-0 h-full">
                  {images.map((img, index) => (
                    <CarouselItem
                      key={index}
                      className="relative flex h-full items-center justify-center pl-0"
                    >
                      {renderImage(img, index)}
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 border-white/10 bg-black/50 text-white hover:bg-black/70 hover:text-white disabled:opacity-30" />
                <CarouselNext className="right-4 border-white/10 bg-black/50 text-white hover:bg-black/70 hover:text-white disabled:opacity-30" />
              </Carousel>

              {/* Pagination Dots */}
              <div className="absolute bottom-8 left-1/2 z-[6001] flex -translate-x-1/2 gap-2 rounded-full bg-black/40 p-2 backdrop-blur-md">
                {images.map((_, i) => (
                  <button
                    key={i}
                    className={`h-2 w-2 rounded-full transition-all ${
                      i === current ? 'scale-125 bg-white' : 'bg-white/40 hover:bg-white/60'
                    }`}
                    onClick={() => api?.scrollTo(i)}
                  />
                ))}
              </div>
            </>
          ) : (
            images.length === 1 && renderImage(images[0], 0)
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

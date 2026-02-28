'use client'

import Image, { ImageProps } from 'next/image'
import type { Media } from '@/payload-types'

export type SizeKey = 'thumbnail' | 'card'

interface MediaImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  media: Media | string | null | undefined
  size?: SizeKey
  alt?: string
}

export function MediaImage({
  media,
  size,
  alt,
  fill,
  priority,
  loading,
  ...props
}: MediaImageProps) {
  if (!media) return null

  let src = ''
  let finalAlt = alt || ''

  if (typeof media === 'string') {
    src = media
  } else {
    // It's a Media object
    finalAlt = alt || media.alt || ''

    // Attempt to get the specific size
    if (size && media.sizes && media.sizes[size]?.url) {
      src = media.sizes[size].url!
    } else {
      // Fallback to original URL
      src = media.url || ''
    }
  }

  if (!src) return null

  return (
    <Image src={src} alt={finalAlt} fill={fill} priority={priority} loading={loading} {...props} />
  )
}

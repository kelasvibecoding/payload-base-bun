import { cn } from '@/lib/utils'
import RichText from '@/components/RichText'
import React from 'react'

import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import type { MediaBlock as MediaBlockProps } from '@/payload-types'

import { MediaImage, type SizeKey } from '@/components/Media/Image'

type Props = MediaBlockProps & {
  className?: string
}

export const MediaBlock: React.FC<Props> = (props) => {
  const { className, media, size, priority, loading } = props

  let caption: SerializedEditorState | null = null
  if (media && typeof media === 'object' && 'caption' in media) {
    caption = media.caption as SerializedEditorState
  }

  return (
    <div className={cn('container my-12 last:mb-0', className)}>
      {media && (
        <MediaImage
          className="border-border h-auto w-full rounded-[0.8rem] border"
          media={media}
          size={size as SizeKey | undefined}
          priority={Boolean(priority)}
          loading={loading as 'lazy' | 'eager' | undefined}
        />
      )}
      {caption && (
        <div className="mt-6">
          <RichText data={caption} enableGutter={false} />
        </div>
      )}
    </div>
  )
}

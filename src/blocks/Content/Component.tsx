import { cn } from '@/components/lib/utils'
import React from 'react'
import RichText from '@/components/RichText'

import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import type { ContentBlock as ContentBlockProps } from '@/payload-types'

export const ContentBlock: React.FC<ContentBlockProps> = (props) => {
  const { columns } = props

  const colsSpanClasses = {
    full: '12',
    half: '6',
    oneThird: '4',
    twoThirds: '8',
  }

  return (
    <div className="container my-16">
      <div className="grid grid-cols-4 gap-x-16 gap-y-8 lg:grid-cols-12">
        {columns &&
          columns.length > 0 &&
          columns.map((col, index) => {
            const { richText, size } = col

            return (
              <div
                className={cn(`col-span-4 lg:col-span-${colsSpanClasses[size!]}`, {
                  'md:col-span-2': size !== 'full',
                })}
                key={index}
              >
                {richText && (
                  <RichText data={richText as SerializedEditorState} enableGutter={false} />
                )}
              </div>
            )
          })}
      </div>
    </div>
  )
}

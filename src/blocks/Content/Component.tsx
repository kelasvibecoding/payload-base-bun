import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import type { ContentBlock as ContentBlockType } from '@/payload-types'
import { RichText } from '@/components/rich-text'
import { cn } from '@/lib/utils'
import React from 'react'

export const ContentBlock: React.FC<ContentBlockType> = (props) => {
  const { columns } = props

  const colsSpanClasses: Record<string, string> = {
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
          columns.map((col, index: number) => {
            const { richText, size } = col

            return (
              <div
                className={cn(`col-span-4 lg:col-span-${colsSpanClasses[size as string]}`, {
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

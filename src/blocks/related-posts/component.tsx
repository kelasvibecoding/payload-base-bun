import { RichText } from '@/components/rich-text'
import clsx from 'clsx'
import React from 'react'

import type { Post } from '@/payload-types'

import { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'
import { PostCard } from '@/features/blog/components/post-card'

export type RelatedPostsProps = {
  className?: string
  docs?: Post[]
  introContent?: DefaultTypedEditorState
}

export const RelatedPosts: React.FC<RelatedPostsProps> = (props) => {
  const { className, docs, introContent } = props

  return (
    <div className={clsx('lg:container', className)}>
      {introContent && <RichText data={introContent} enableGutter={false} />}

      <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 md:gap-8">
        {docs?.map((doc, index) => {
          if (typeof doc === 'string') return null

          return <PostCard key={index} post={doc} showCategories />
        })}
      </div>
    </div>
  )
}

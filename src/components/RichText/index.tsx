'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import {
  DefaultNodeTypes,
  SerializedBlockNode,
  SerializedLinkNode,
  SerializedUploadNode,
} from '@payloadcms/richtext-lexical'
import {
  JSXConvertersFunction,
  LinkJSXConverter,
  RichText as ConvertRichText,
} from '@payloadcms/richtext-lexical/react'

// Import blocks
import { BannerBlock } from '@/blocks/Banner/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { MediaBlock } from '@/blocks/Media/Component'

type NodeTypes = DefaultNodeTypes | SerializedBlockNode | SerializedLinkNode | SerializedUploadNode

/**
 * Handle internal link routing.
 * By default, it maps collection slugs to paths (e.g., 'posts' -> '/posts/my-post').
 * Override this via the `internalDocToHref` prop if you have custom routes.
 */
const defaultInternalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }) => {
  const { value, relationTo } = linkNode.fields.doc!

  if (typeof value !== 'object') {
    return `/${relationTo}/${value}`
  }

  const slug = value.slug || value.id

  // Custom mappings can be handled here or passed via props
  const customMappings: Record<string, string> = {
    places: 'place',
    events: 'event',
  }

  const prefix = customMappings[relationTo] || relationTo
  return `/${prefix}/${slug}`
}

export const defaultJSXConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref: defaultInternalDocToHref }),
  upload: ({ node }: { node: SerializedUploadNode }) => {
    const { value } = node
    if (!value || typeof value !== 'object') return null

    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    const { url, alt, width, height } = value as any
    if (!url) return null

    return (
      <div className="my-8 flex justify-center">
        <Image
          src={url}
          alt={alt || ''}
          width={width || 800}
          height={height || 600}
          className="rounded-lg object-cover shadow-md"
        />
      </div>
    )
  },
  blocks: {
    banner: ({ node }: { node: SerializedBlockNode }) => (
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
      <BannerBlock {...(node.fields as any)} />
    ),
    content: ({ node }: { node: SerializedBlockNode }) => (
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
      <ContentBlock {...(node.fields as any)} />
    ),
    mediaBlock: ({ node }: { node: SerializedBlockNode }) => (
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
      <MediaBlock {...(node.fields as any)} />
    ),
  },
})

interface Props {
  data: SerializedEditorState
  className?: string
  enableGutter?: boolean
  enableProse?: boolean
  converters?: JSXConvertersFunction<NodeTypes>
}

export default function RichText(props: Props) {
  const { className, enableGutter = false, enableProse = true, data, converters, ...rest } = props

  if (!data || !data.root || !data.root.children) return null

  return (
    <div
      className={cn(
        {
          'container mx-auto': enableGutter,
          'prose prose-slate dark:prose-invert max-w-none': enableProse,
        },
        className,
      )}
    >
      <ConvertRichText
        converters={(args) => ({
          ...defaultJSXConverters(args),
          ...(converters ? converters(args) : {}),
        })}
        data={data}
        {...rest}
      />
    </div>
  )
}

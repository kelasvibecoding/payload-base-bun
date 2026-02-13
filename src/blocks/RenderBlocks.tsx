import React, { Fragment } from 'react'
import type {
  BannerBlock as BannerBlockType,
  ContentBlock as ContentBlockType,
  MediaBlock as MediaBlockType,
} from '@/payload-types'

import { BannerBlock } from '@/blocks/Banner/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { MediaBlock } from '@/blocks/Media/Component'

type BlockType = BannerBlockType | ContentBlockType | MediaBlockType

const blockComponents = {
  banner: BannerBlock,
  content: ContentBlock,
  mediaBlock: MediaBlock,
}

export const RenderBlocks: React.FC<{
  blocks: BlockType[]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
            const Block = blockComponents[blockType as keyof typeof blockComponents] as any

            if (Block) {
              return (
                <div className="my-16" key={index}>
                  <Block {...block} />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}

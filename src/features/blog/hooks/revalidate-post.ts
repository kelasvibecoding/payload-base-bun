import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { triggerRevalidation } from '@/features/blog/utils/revalidate'

export const revalidatePost: CollectionAfterChangeHook = async ({
  doc,
  previousDoc,
  req: { payload },
}) => {
  if (doc._status === 'published') {
    const path = `/blog/${doc.slug}`

    payload.logger.info(`Revalidating post at ${path}`)

    // Revalidate the post page
    void triggerRevalidation(path)

    // Revalidate the blog listing page
    void triggerRevalidation('/blog')
  }

  // If the doc was un-published, revalidate the post page and blog listing
  if (previousDoc?._status === 'published' && doc._status !== 'published') {
    const oldPath = `/blog/${previousDoc.slug}`

    payload.logger.info(`Revalidating unpublished post at ${oldPath}`)

    void triggerRevalidation(oldPath)
    void triggerRevalidation('/blog')
  }

  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook = async ({ doc, req: { payload } }) => {
  if (doc._status === 'published') {
    const path = `/blog/${doc.slug}`

    payload.logger.info(`Revalidating deleted post at ${path}`)

    void triggerRevalidation(path)
    void triggerRevalidation('/blog')
  }

  return doc
}

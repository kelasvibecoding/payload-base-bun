import type { CollectionAfterReadHook } from 'payload'

import type { User } from '@/payload-types'

export const populateAuthors: CollectionAfterReadHook = async ({ doc, req }) => {
  if (doc?.authors) {
    const authorDocs: User[] = []

    for (const author of doc.authors) {
      const authorId = typeof author === 'object' ? author.id : author

      // Get author from 'users' collection
      try {
        const authorDoc = await req.payload.findByID({
          id: authorId,
          collection: 'users',
          depth: 0,
          req, // Maintain transaction context
        })

        if (authorDoc) {
          authorDocs.push(authorDoc as User)
        }
      } catch (err) {
        // Silently fail if author not found
        req.payload.logger.error(`Failed to populate author ${authorId}: ${err}`)
      }
    }

    doc.populatedAuthors = authorDocs.map((author) => ({
      id: author.id,
      name: author.name,
    }))
  }

  return doc
}

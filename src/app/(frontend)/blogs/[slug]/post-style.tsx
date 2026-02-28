/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FC } from 'react'

import { Clock, User as UserIcon } from 'lucide-react'

import Image from 'next/image'

import { CommentsBlock } from '@/blocks/comment-block'
import { RichText } from '@/components/rich-text'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import type { Post, User } from '@/payload-types'
import type { BreadcrumbItem } from '@/features/blogs/types/breadcrumb'
import { getServerSideURL } from '@/utilities/get-url'
import { getMediaUrl } from '@/utilities/get-media-url'

// import { ModeToggle } from '@/components/layout/mode-toggle'

import { BackToTopButton } from './components/back-to-top-button'
import { LanguageSwitcher } from './components/language-switcher'
import { PostBreadcrumb } from './components/post-breadcrumb'
import { PostShareSection } from './components/post-share-section'
import { RichTextWithIds } from './components/rich-text-with-ids'
import { TableOfContent } from './components/table-of-content'

import { blogBlockTranslations, Locale as TranslationLocale } from '@/blocks/translations'

type Heading = {
  id: string
  text: string
  level: number
  slug: string
}

type PostStyleProps = {
  post: Post
  headings: Heading[]
  readTime: { minutes: number; wordCount: number }
  user: unknown
  url: string
  draft: boolean
  breadcrumbItems?: BreadcrumbItem[] | null
  locale: string
}

export const PostStyle: FC<PostStyleProps> = async ({
  post,
  headings,
  readTime,
  user,
  url,
  breadcrumbItems,
  locale,
}) => {
  const currentLocale = (locale as TranslationLocale) || 'en'
  const t = {
    on: blogBlockTranslations.on[currentLocale],
    minRead: blogBlockTranslations.minRead[currentLocale],
    category: blogBlockTranslations.category[currentLocale],
    share: blogBlockTranslations.share[currentLocale],
    relatedPosts: blogBlockTranslations.relatedPosts[currentLocale],
    admin: blogBlockTranslations.admin[currentLocale],
    untitledCategory: blogBlockTranslations.untitledCategory[currentLocale],
    heroImageAlt: blogBlockTranslations.heroImageAlt[currentLocale],
  }

  const categories = post?.categories || []
  const populatedAuthors = post.populatedAuthors || []
  const shareUrl = getServerSideURL() + url
  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const commentsEnabled = (post as Post & { enableComments?: boolean })?.enableComments ?? true
  const conclusion = (post as Post & { conclusion?: any }).conclusion
  const heroImage = (post as Post & { heroImage?: any })?.heroImage

  // Check if conclusion has actual content (not just empty children arrays)
  const hasConclusion = (() => {
    if (!conclusion || typeof conclusion !== 'object' || !('root' in conclusion)) return false

    const root = (conclusion as { root?: { children?: any[] } }).root
    if (!root || typeof root !== 'object' || !Array.isArray(root.children)) return false

    if (root.children.length === 0) return false

    // Check if any child has actual content (not just empty children arrays)
    return root.children.some((child: any) => {
      if (!child || typeof child !== 'object') return false

      // If child has text content, it's valid
      if (typeof child.text === 'string' && child.text.trim().length > 0) return true

      // If child has children, check if those children have content
      if (Array.isArray(child.children)) {
        if (child.children.length === 0) return false
        // Recursively check nested children
        return child.children.some((nestedChild: any) => {
          if (typeof nestedChild?.text === 'string' && nestedChild.text.trim().length > 0)
            return true
          return false
        })
      }

      return false
    })
  })()

  return (
    <section className="py-32 font-sans">
      <div className="container">
        {/* Breadcrumbs */}
        {breadcrumbItems && breadcrumbItems.length > 0 && (
          <div className="mb-4 sm:mb-0">
            <PostBreadcrumb breadcrumbItems={breadcrumbItems} />
          </div>
        )}

        {/* Header Section */}
        <h1 className="mt-7 mb-6 max-w-3xl text-3xl font-semibold md:text-5xl">{post?.title}</h1>

        {/* Author Section */}
        <div className="flex items-center gap-3 text-sm">
          <UserIcon className="text-muted-foreground h-4 w-4" />
          <span>
            <span className="font-medium">
              {populatedAuthors?.length > 0
                ? populatedAuthors.map((author: any) => author.name).join(', ')
                : t.admin}
            </span>
            <span className="text-muted-foreground ml-1">
              {t.on}{' '}
              {new Date(post?.updatedAt || post?.createdAt).toLocaleDateString(
                currentLocale === 'id' ? 'id-ID' : 'en-US',
                {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                },
              )}
            </span>
          </span>
          <span className="text-muted-foreground flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {readTime.minutes} {t.minRead}
          </span>
        </div>

        <Separator className="mt-8 mb-16" />

        {/* 12-Column Grid Layout */}
        <div className="relative grid grid-cols-12 gap-6 lg:grid">
          {/* Hero Image */}
          {heroImage && typeof heroImage === 'object' && (
            <div className="relative col-span-12 mb-16 aspect-[16/9] overflow-hidden rounded-lg lg:col-span-8">
              <Image
                src={getMediaUrl(
                  heroImage.url || (heroImage.filename ? `/media/${heroImage.filename}` : null),
                  heroImage.updatedAt,
                )}
                alt={heroImage.alt || post?.title || t.heroImageAlt}
                fill
                className="rounded-lg object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
              />
            </div>
          )}

          {/* Content Area */}
          <div className="col-span-12 lg:col-span-8">
            <RichTextWithIds
              data={post.content}
              headings={headings}
              className="prose-headings:scroll-mt-24"
              enableGutter={false}
              enableProse={true}
            />

            {/* Conclusion Section */}
            {hasConclusion && (
              <div className="bg-muted mt-8 w-full rounded-lg p-5 [&>h2]:mt-0">
                <RichText
                  data={conclusion}
                  className="dark:prose-invert prose w-full max-w-none"
                  enableGutter={false}
                  enableProse={true}
                />
              </div>
            )}

            <BackToTopButton headings={headings} className="mt-8" />
          </div>

          {/* Sidebar */}
          <div className="sticky top-28 col-span-3 col-start-10 hidden h-fit lg:block">
            {/* Theme and Language Switchers */}
            <div className="mb-6 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                {/* <ModeToggle /> */}
                <LanguageSwitcher />
              </div>
            </div>

            <TableOfContent headings={headings} labelOffset={112} />

            {/* Category Section */}
            {hasCategories && (
              <>
                <Separator className="my-6" />
                <div className="flex flex-col gap-4">
                  <span className="text-sm font-medium">{t.category}</span>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category, index) => {
                      if (typeof category === 'object' && category) {
                        const categoryTitle = (category as any).title || t.untitledCategory
                        return (
                          <Badge key={index} variant="secondary">
                            {categoryTitle}
                          </Badge>
                        )
                      }
                      return null
                    })}
                  </div>
                </div>
              </>
            )}

            <PostShareSection title={post?.title || ''} shareUrl={shareUrl} shareLabel={t.share} />
          </div>
        </div>

        {/* Comments Section - Aligned with Content Area */}
        {commentsEnabled && (
          <div className="relative grid grid-cols-12 gap-6 lg:grid">
            <div className="col-span-12 lg:col-span-8">
              <Separator className="mt-16 mb-8" />
              <div className="mx-auto w-full max-w-3xl font-sans">
                <CommentsBlock
                  blockName="comments"
                  blockType="comments"
                  doc={post}
                  relationTo="posts"
                  user={user as User}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Sections */}
      <div className="flex flex-col items-center gap-4 pt-8">
        {/* Related Posts - simplified */}
        {post.relatedPosts && post.relatedPosts.length > 0 && (
          <div className="container">
            <h3 className="mb-6 text-2xl font-semibold">{t.relatedPosts}</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {post.relatedPosts.slice(0, 3).map((relatedPost: any) => (
                <a
                  key={relatedPost.id}
                  href={`/blogs/${relatedPost.slug}`}
                  className="block rounded-lg border p-4 transition-shadow hover:shadow-md"
                >
                  <h4 className="mb-2 font-medium">{relatedPost.title}</h4>
                  {relatedPost.publishedAt && (
                    <p className="text-muted-foreground text-sm">
                      {new Date(relatedPost.publishedAt).toLocaleDateString()}
                    </p>
                  )}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

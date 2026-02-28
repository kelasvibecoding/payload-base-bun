'use client'

import { useMemo } from 'react'
import { useLocale } from 'next-intl'
import { blogBlockTranslations, type Locale } from './index'

/**
 * Hook to get translated strings for blog
 * @returns Object with translated strings based on current locale
 */
export const useBlogTranslations = () => {
  const locale = useLocale()

  return useMemo(() => {
    const currentLocale = (locale as Locale) || 'en'

    return {
      allArticles: blogBlockTranslations.allArticles[currentLocale],
      checkBackLater: blogBlockTranslations.checkBackLater[currentLocale],
      featuredPosts: blogBlockTranslations.featuredPosts[currentLocale],
      latestBlogPosts: blogBlockTranslations.latestBlogPosts[currentLocale],
      latestUpdates: blogBlockTranslations.latestUpdates[currentLocale],
      minRead: blogBlockTranslations.minRead[currentLocale],
      noDescriptionAvailable: blogBlockTranslations.noDescriptionAvailable[currentLocale],
      noPostsFound: blogBlockTranslations.noPostsFound[currentLocale],
      on: blogBlockTranslations.on[currentLocale],
      readArticle: blogBlockTranslations.readArticle[currentLocale],
      readMore: blogBlockTranslations.readMore[currentLocale],
      relatedPosts: blogBlockTranslations.relatedPosts[currentLocale],
      showingPosts: blogBlockTranslations.showingPosts[currentLocale],
      somethingWentWrong: blogBlockTranslations.somethingWentWrong[currentLocale],
      searchPosts: blogBlockTranslations.searchPosts[currentLocale],
      allCategories: blogBlockTranslations.allCategories[currentLocale],
      filter: blogBlockTranslations.filter[currentLocale],
      search: blogBlockTranslations.search[currentLocale],
      searching: blogBlockTranslations.searching[currentLocale],
      blog: blogBlockTranslations.blog[currentLocale],
      blogDescription: blogBlockTranslations.blogDescription[currentLocale],
      by: blogBlockTranslations.by[currentLocale],
      category: blogBlockTranslations.category[currentLocale],
      share: blogBlockTranslations.share[currentLocale],
      shareOnTwitter: blogBlockTranslations.shareOnTwitter[currentLocale],
      shareOnFacebook: blogBlockTranslations.shareOnFacebook[currentLocale],
      shareOnLinkedIn: blogBlockTranslations.shareOnLinkedIn[currentLocale],
      shareOnWhatsApp: blogBlockTranslations.shareOnWhatsApp[currentLocale],
      copyLink: blogBlockTranslations.copyLink[currentLocale],
      linkCopied: blogBlockTranslations.linkCopied[currentLocale],
      failedToCopy: blogBlockTranslations.failedToCopy[currentLocale],
      loadingPosts: blogBlockTranslations.loadingPosts[currentLocale],
      admin: blogBlockTranslations.admin[currentLocale],
      untitledCategory: blogBlockTranslations.untitledCategory[currentLocale],
      heroImageAlt: blogBlockTranslations.heroImageAlt[currentLocale],
      unknown: blogBlockTranslations.unknown[currentLocale],
    }
  }, [locale])
}

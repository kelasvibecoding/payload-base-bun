'use client'

import { useMemo } from 'react'
import { useLocale } from 'next-intl'
import { paginationTranslations, type Locale } from './index'

/**
 * Hook to get translated strings for pagination
 * @returns Object with translated strings based on current locale
 */
export const usePaginationTranslations = () => {
  const locale = useLocale()

  return useMemo(() => {
    const currentLocale = (locale as Locale) || 'en'

    return {
      goToNextPage: paginationTranslations.goToNextPage[currentLocale],
      goToPreviousPage: paginationTranslations.goToPreviousPage[currentLocale],
      next: paginationTranslations.next[currentLocale],
      previous: paginationTranslations.previous[currentLocale],
    }
  }, [locale])
}

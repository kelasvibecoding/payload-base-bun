'use client'

import { useCallback } from 'react'

interface ScrollToOptions {
  offset?: number
  behavior?: ScrollBehavior
}

export function useScrollTo() {
  const scrollToId = useCallback((elementId: string, options: ScrollToOptions = {}) => {
    const { offset = 0, behavior = 'smooth' } = options

    const element = document.getElementById(elementId)

    if (element) {
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - offset

      window.scrollTo({
        top: offsetPosition,
        behavior,
      })

      // Update URL without jumping
      window.history.pushState(null, '', `#${elementId}`)

      return true
    } else if (window.location.pathname !== '/') {
      window.location.href = `/#${elementId}`
      return true
    }

    return false
  }, [])

  return scrollToId
}

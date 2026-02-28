'use client'

import useSWR from 'swr'
import { PaginatedDocs } from 'payload'

export function usePayloadSearch<T>(collection: string, searchTerm: string) {
  const query = searchTerm ? `?where[or][0][title][contains]=${encodeURIComponent(searchTerm)}` : ''
  const { data, error, isLoading, mutate } = useSWR<PaginatedDocs<T>>(
    searchTerm ? `/api/${collection}${query}` : null,
  )

  return {
    results: data?.docs || [],
    isLoading,
    isError: error,
    mutate,
  }
}

'use client'

import useSWR from 'swr'
import { PaginatedDocs } from 'payload'

export function usePayloadCollection<T>(collection: string, query?: Record<string, any>) {
  const queryString = query ? `?${new URLSearchParams(query).toString()}` : ''
  const { data, error, isLoading, mutate } = useSWR<PaginatedDocs<T>>(
    `/api/${collection}${queryString}`,
  )

  return {
    docs: data?.docs || [],
    totalDocs: data?.totalDocs || 0,
    isLoading,
    isError: error,
    mutate,
    data,
  }
}

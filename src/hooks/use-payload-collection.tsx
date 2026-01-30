'use client'

import useSWR from 'swr'
import { PaginatedDocs } from 'payload'

export function usePayloadCollection<T>(
  collection: string,
  query?: Record<string, string | number | boolean>,
) {
  const queryString = query
    ? `?${new URLSearchParams(query as unknown as Record<string, string>).toString()}`
    : ''
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

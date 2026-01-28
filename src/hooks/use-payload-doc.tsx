'use client'

import useSWR from 'swr'

export function usePayloadDoc<T>(collection: string, id: string) {
  const { data, error, isLoading, mutate } = useSWR<T>(id ? `/api/${collection}/${id}` : null)

  return {
    doc: data,
    isLoading,
    isError: error,
    mutate,
  }
}

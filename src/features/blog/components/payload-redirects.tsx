'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export function PayloadRedirects({ url: _url }: { url: string }) {
  const router = useRouter()

  useEffect(() => {
    router.replace('/404')
  }, [router])

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-2xl font-bold">Post not found</h1>
        <p className="text-gray-600">Redirecting to 404 page...</p>
      </div>
    </div>
  )
}

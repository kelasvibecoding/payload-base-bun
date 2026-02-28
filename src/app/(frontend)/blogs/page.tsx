/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import '@/app/globals.css'
import { useEffect, useState } from 'react'
import { useLocale } from 'next-intl'

import { PostCard } from '@/features/blogs/components/post-card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { BlogsPagination } from '@/features/blogs/components/blogs-pagination'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useBlogTranslations } from '@/blocks/translations/useBlogTranslations'

// Client-side data fetching functions
const fetchPosts = async ({
  page = 1,
  limit = 12,
  category,
  search,
  locale,
}: {
  page?: number
  limit?: number
  category?: string
  search?: string
  locale: string
}) => {
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    locale,
  })

  if (category && category !== 'all') {
    params.set('category', category)
  }

  if (search) {
    params.set('search', search)
  }

  const response = await fetch(`/api/blogs/posts?${params.toString()}`)

  if (!response.ok) {
    throw new Error('Failed to fetch posts')
  }

  return response.json()
}

const fetchCategories = async (locale: string) => {
  const response = await fetch(`/api/blogs/categories?locale=${locale}`)

  if (!response.ok) {
    throw new Error('Failed to fetch categories')
  }

  return response.json()
}

export default function BlogsPage() {
  const locale = useLocale()
  const t = useBlogTranslations()

  // State management
  const [posts, setPosts] = useState<any[]>([])
  const [categories, setCategories] = useState<any[]>([])
  const [totalPages, setTotalPages] = useState(1)
  const [totalDocs, setTotalDocs] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Filter state
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [page, setPage] = useState(1)

  // Load initial data
  useEffect(() => {
    const loadInitialData = async () => {
      try {
        setLoading(true)
        setError(null)

        const [postsData, categoriesData] = await Promise.all([
          fetchPosts({ page: 1, limit: 12, locale }),
          fetchCategories(locale),
        ])

        setPosts(postsData.posts)
        setTotalPages(postsData.totalPages)
        setTotalDocs(postsData.totalDocs)
        setCategories(categoriesData)
      } catch (err) {
        setError(t.somethingWentWrong)
        console.error('Error loading blog data:', err)
      } finally {
        setLoading(false)
      }
    }

    loadInitialData()
  }, [locale, t.somethingWentWrong])

  // Handle filtering
  const handleSearch = async () => {
    try {
      setLoading(true)
      setError(null)
      setPage(1) // Reset to first page when searching

      const categoryValue = category === 'all' ? undefined : category
      const postsData = await fetchPosts({
        page: 1,
        limit: 12,
        category: categoryValue,
        search: search || undefined,
        locale,
      })

      setPosts(postsData.posts)
      setTotalPages(postsData.totalPages)
      setTotalDocs(postsData.totalDocs)
    } catch (err) {
      setError(t.somethingWentWrong)
      console.error('Error searching posts:', err)
    } finally {
      setLoading(false)
    }
  }

  // Handle page change
  const handlePageChange = async (newPage: number) => {
    try {
      setLoading(true)
      setError(null)
      setPage(newPage)

      const categoryValue = category === 'all' ? undefined : category
      const postsData = await fetchPosts({
        page: newPage,
        limit: 12,
        category: categoryValue,
        search: search || undefined,
        locale,
      })

      setPosts(postsData.posts)
      setTotalPages(postsData.totalPages)
      setTotalDocs(postsData.totalDocs)

      // Scroll to top of posts
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (err) {
      setError(t.somethingWentWrong)
      console.error('Error loading page:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">{t.blog}</h1>
        <p className="text-lg text-gray-600">{t.blogDescription}</p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8">
        <div className="flex flex-col gap-4 md:flex-row">
          {/* Search Input */}
          <div className="flex-1">
            <Input
              type="text"
              placeholder={t.searchPosts}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
          </div>

          {/* Category Filter */}
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder={t.allCategories} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t.allCategories}</SelectItem>
              {categories.map((cat: any) => (
                <SelectItem key={cat.id} value={cat.id}>
                  {cat.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button onClick={handleSearch} disabled={loading}>
            {loading ? t.searching : t.filter}
          </Button>
        </div>
      </div>

      {/* Error State */}
      {error && (
        <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-red-800">
          {error}
        </div>
      )}

      {/* Results Count */}
      {!error && (
        <div className="mb-6 text-gray-600">
          {loading ? t.loadingPosts : t.showingPosts(posts.length, totalDocs)}
        </div>
      )}

      {/* Posts Grid */}
      <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {loading
          ? // Loading skeletons
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="mb-4 aspect-[3/2] rounded-lg bg-gray-200"></div>
                <div className="space-y-3">
                  <div className="h-4 w-3/4 rounded bg-gray-200"></div>
                  <div className="h-4 w-1/2 rounded bg-gray-200"></div>
                  <div className="h-3 w-1/4 rounded bg-gray-200"></div>
                </div>
              </div>
            ))
          : posts.map((post: any) => <PostCard key={post.id} post={post} />)}
      </div>

      {/* Pagination */}
      {!loading && posts.length > 0 && (
        <BlogsPagination
          currentPage={page}
          totalPages={totalPages}
          baseUrl="/blogs"
          category={category}
          search={search}
          onPageChange={handlePageChange}
        />
      )}

      {/* No Posts Found */}
      {!loading && posts.length === 0 && !error && (
        <div className="py-12 text-center">
          <h2 className="mb-4 text-2xl font-semibold">{t.noPostsFound}</h2>
          <p className="text-gray-600">
            {search || (category && category !== 'all') ? t.checkBackLater : t.checkBackLater}
          </p>
        </div>
      )}
    </div>
  )
}

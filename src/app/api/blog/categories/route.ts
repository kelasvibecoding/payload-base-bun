import { NextResponse } from 'next/server'
import logger from '@/lib/logger'

import configPromise from '@payload-config'
import { getPayload } from 'payload'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const locale = (searchParams.get('locale') || 'id') as 'en' | 'id'

    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
      collection: 'categories',
      limit: 0,
      locale,
      select: {
        title: true,
        slug: true,
      },
    })

    return NextResponse.json(result.docs)
  } catch (error) {
    logger.error({ err: error }, 'Error fetching categories')
    return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 })
  }
}

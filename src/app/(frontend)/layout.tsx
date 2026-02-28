import React from 'react'
import { Inter } from 'next/font/google'
import { Outfit } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import { SWRProvider } from '@/providers/SWRProvider'
import { Navbar } from '@/features/app-shell/components/navbar'
import { cn } from '@/lib/utils'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  manifest: '/manifest.json',
  title: 'Payload Blank Template',
}

export const viewport = {
  themeColor: '#000000',
}

import { Toaster } from '@/components/ui/sonner'
import { MotionConfig } from '@/features/app-shell/components/motion-config'
import { NextIntlProvider } from '@/features/blogs/components/next-intl-provider'
import { getUserLocale } from '@/utilities/get-locale'

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const locale = await getUserLocale()

  return (
    <html lang={locale} className={cn(inter.variable, outfit.variable)} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <NextTopLoader
          color="#0066FF"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #0066FF,0 0 5px #0066FF"
        />
        <Toaster position="top-right" richColors />
        <SWRProvider>
          <NextIntlProvider>
            <MotionConfig>
              <Navbar />
              <main>{children}</main>
            </MotionConfig>
          </NextIntlProvider>
        </SWRProvider>
      </body>
    </html>
  )
}

import React from 'react'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  manifest: '/manifest.json',
  title: 'Payload Blank Template',
}

export const viewport = {
  themeColor: '#000000',
}

import { SWRProvider } from '@/providers/SWRProvider'

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">
        <SWRProvider>
          <main>{children}</main>
        </SWRProvider>
      </body>
    </html>
  )
}

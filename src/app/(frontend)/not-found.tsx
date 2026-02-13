import Link from 'next/link'
import React from 'react'
import { ArrowLeft, FileQuestion } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="bg-background selection:bg-primary/30 relative min-h-screen w-full overflow-hidden">
      {/* Background blobs for consistency */}
      <div className="bg-primary/20 animate-blob absolute top-0 -left-4 h-72 w-72 rounded-full opacity-30 mix-blend-multiply blur-3xl filter" />
      <div className="animate-blob animation-delay-2000 absolute top-0 -right-4 h-72 w-72 rounded-full bg-purple-500/20 opacity-30 mix-blend-multiply blur-3xl filter" />
      <div className="animate-blob animation-delay-4000 absolute -bottom-8 left-20 h-72 w-72 rounded-full bg-blue-500/20 opacity-30 mix-blend-multiply blur-3xl filter" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-12">
        <div className="text-center">
          <div className="animate-in fade-in zoom-in mb-8 flex justify-center duration-1000">
            <div className="bg-primary/10 relative inline-flex h-24 w-24 items-center justify-center rounded-2xl transition-colors">
              <FileQuestion className="text-primary h-12 w-12" />
              <div className="bg-primary/50 absolute -top-1 -right-1 h-3 w-3 animate-ping rounded-full" />
            </div>
          </div>

          <h1 className="from-foreground to-foreground/70 animate-in fade-in slide-in-from-bottom-4 mb-4 bg-gradient-to-b bg-clip-text text-6xl font-extrabold tracking-tight text-transparent duration-1000 sm:text-8xl">
            404
          </h1>

          <h2 className="animate-in fade-in slide-in-from-bottom-6 mb-6 text-2xl font-semibold tracking-tight delay-100 duration-1000 sm:text-3xl">
            Page Not Found
          </h2>

          <p className="text-muted-foreground animate-in fade-in slide-in-from-bottom-8 mx-auto mb-10 max-w-md text-base delay-200 duration-1000 sm:text-lg">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on
            track.
          </p>

          <div className="animate-in fade-in slide-in-from-bottom-12 delay-300 duration-1000">
            <Button
              size="lg"
              className="h-11 px-8 text-sm font-semibold transition-all hover:scale-105 active:scale-95"
              asChild
            >
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" /> Return Home
              </Link>
            </Button>
          </div>
        </div>

        {/* Footer info */}
        <div className="text-muted-foreground animate-in fade-in mt-16 flex flex-col items-center gap-4 text-xs delay-500 duration-1000">
          <div className="bg-muted/30 flex items-center gap-2 rounded-full border px-3 py-1 backdrop-blur-sm">
            <span className="text-foreground font-medium">Error Code: NULL_POINTER_TO_CONTENT</span>
          </div>
        </div>
      </div>

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:14px_24px]" />
    </div>
  )
}

import Link from 'next/link'
import React from 'react'
import { ArrowLeft, FileQuestion } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background selection:bg-primary/30">
      {/* Background blobs for consistency */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-12">
        <div className="text-center">
          <div className="mb-8 flex justify-center animate-in fade-in zoom-in duration-1000">
            <div className="relative inline-flex h-24 w-24 items-center justify-center rounded-2xl bg-primary/10 transition-colors">
              <FileQuestion className="h-12 w-12 text-primary" />
              <div className="absolute -top-1 -right-1 h-3 w-3 animate-ping rounded-full bg-primary/50" />
            </div>
          </div>

          <h1 className="mb-4 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-6xl font-extrabold tracking-tight text-transparent sm:text-8xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
            404
          </h1>
          
          <h2 className="mb-6 text-2xl font-semibold tracking-tight sm:text-3xl animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
            Page Not Found
          </h2>

          <p className="mx-auto mb-10 max-w-md text-base text-muted-foreground sm:text-lg animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            The page you are looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>

          <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
            <Button size="lg" className="h-11 px-8 text-sm font-semibold transition-all hover:scale-105 active:scale-95" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" /> Return Home
              </Link>
            </Button>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-16 flex flex-col items-center gap-4 text-xs text-muted-foreground animate-in fade-in duration-1000 delay-500">
          <div className="flex items-center gap-2 rounded-full border bg-muted/30 px-3 py-1 backdrop-blur-sm">
            <span className="font-medium text-foreground">Error Code: NULL_POINTER_TO_CONTENT</span>
          </div>
        </div>
      </div>

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  )
}

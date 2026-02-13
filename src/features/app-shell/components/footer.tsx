import React from 'react'

export function Footer() {
  return (
    <footer className="relative z-10 py-12 text-center text-sm text-muted-foreground snap-start">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 rounded-full border bg-muted/30 px-4 py-1.5 backdrop-blur-sm">
            <span>Powered by</span>
            <div className="h-4 w-px bg-border" />
            <span className="font-medium text-foreground">Payload 3.0</span>
          </div>
          <p>&copy; {new Date().getFullYear()} KelasVibe Coding. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

import React from 'react'

export function Footer() {
  return (
    <footer className="text-muted-foreground relative z-10 snap-start py-12 text-center text-sm">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4">
          <div className="bg-muted/30 flex items-center gap-2 rounded-full border px-4 py-1.5 backdrop-blur-sm">
            <span>Powered by</span>
            <div className="bg-border h-4 w-px" />
            <span className="text-foreground font-medium">Payload 3.0</span>
          </div>
          <p>&copy; {new Date().getFullYear()} KelasVibe Coding. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

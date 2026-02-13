import React from 'react'
import config from '@/payload.config'
import { BackgroundMesh } from '@/features/app-shell/components/background-mesh'
import { Navbar } from '@/features/app-shell/components/navbar'
import { HeroSection } from '@/features/landing-page/components/hero-section'
import { HomeFeatures } from '@/features/landing-page/components/home-features'

export default async function HomePage() {
  const payloadConfig = await config
  
  return (
    <div className="bg-background selection:bg-primary/30 relative min-h-screen w-full overflow-hidden font-sans">
      <BackgroundMesh className="bg-transparent">
        <Navbar />
        <HeroSection adminRoute={payloadConfig.routes.admin} />
        <HomeFeatures />
        
        {/* Footer */}
        <footer className="relative z-10 py-12 text-center text-sm text-muted-foreground">
          <div className="container mx-auto">
             <div className="flex flex-col items-center gap-4">
               <div className="flex items-center gap-2 rounded-full border bg-muted/30 px-4 py-1.5 backdrop-blur-sm">
                 <span>Powered by</span>
                 <div className="h-4 w-px bg-border" />
                 <span className="font-medium text-foreground">Payload 3.0</span>
               </div>
               <p>© {new Date().getFullYear()} KelasVibe Coding. All rights reserved.</p>
             </div>
          </div>
        </footer>
      </BackgroundMesh>
    </div>
  )
}

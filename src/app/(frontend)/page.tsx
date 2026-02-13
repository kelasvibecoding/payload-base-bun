import config from '@/payload.config'
import { PageShell } from '@/features/app-shell/components/page-shell'
import { HeroSection } from '@/features/landing-page/components/hero-section'
import { HomeFeatures } from '@/features/landing-page/components/home-features'
import { HomeHowItWorks } from '@/features/landing-page/components/home-how-it-works'

// Force Next.js Router Cache Invalidation: Using Landing Page Features
export default async function HomePage() {
  const payloadConfig = await config

  return (
    <PageShell withPadding={false}>
      <HeroSection adminRoute={payloadConfig.routes.admin} />
      <HomeFeatures />
      <HomeHowItWorks />
    </PageShell>
  )
}

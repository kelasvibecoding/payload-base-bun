import { BrandedLoader } from '@/components/ui/branded-loader'

export default function Loading() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center p-4">
      <BrandedLoader />
    </div>
  )
}

export default function ContactLoading() {
  return (
    <div className="container mx-auto min-h-[100dvh] p-4 py-8">
      <div className="mx-auto max-w-2xl space-y-6">
        {/* Header skeleton */}
        <div className="space-y-2">
          <div className="h-10 w-48 animate-pulse rounded-md bg-muted" />
          <div className="h-5 w-full max-w-md animate-pulse rounded-md bg-muted" />
        </div>

        {/* Form skeleton */}
        <div className="space-y-4 rounded-lg border bg-card p-6 shadow-sm">
          <div className="space-y-2">
            <div className="h-4 w-16 animate-pulse rounded bg-muted" />
            <div className="h-10 w-full animate-pulse rounded-md bg-muted" />
          </div>
          <div className="space-y-2">
            <div className="h-4 w-16 animate-pulse rounded bg-muted" />
            <div className="h-10 w-full animate-pulse rounded-md bg-muted" />
          </div>
          <div className="space-y-2">
            <div className="h-4 w-20 animate-pulse rounded bg-muted" />
            <div className="h-32 w-full animate-pulse rounded-md bg-muted" />
          </div>
          <div className="h-10 w-full animate-pulse rounded-md bg-primary/20" />
        </div>
      </div>
    </div>
  )
}

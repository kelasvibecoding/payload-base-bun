export default function SignUpLoading() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header skeleton */}
        <div className="space-y-2 text-center">
          <div className="bg-muted mx-auto h-8 w-48 animate-pulse rounded-md" />
          <div className="bg-muted mx-auto h-4 w-64 animate-pulse rounded-md" />
        </div>

        {/* Form skeleton */}
        <div className="bg-card space-y-4 rounded-lg border p-6 shadow-sm">
          <div className="space-y-2">
            <div className="bg-muted h-4 w-16 animate-pulse rounded" />
            <div className="bg-muted h-10 w-full animate-pulse rounded-md" />
          </div>
          <div className="space-y-2">
            <div className="bg-muted h-4 w-16 animate-pulse rounded" />
            <div className="bg-muted h-10 w-full animate-pulse rounded-md" />
          </div>
          <div className="space-y-2">
            <div className="bg-muted h-4 w-20 animate-pulse rounded" />
            <div className="bg-muted h-10 w-full animate-pulse rounded-md" />
          </div>
          <div className="bg-primary/20 h-10 w-full animate-pulse rounded-md" />
        </div>

        {/* Footer skeleton */}
        <div className="bg-muted mx-auto h-4 w-56 animate-pulse rounded" />
      </div>
    </div>
  )
}

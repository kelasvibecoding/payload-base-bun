export const fetcher = async (url: string) => {
  const res = await fetch(url)

  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.')
    // Attach extra info to the error object.
    const info = await res.json()
    // @ts-expect-error - Attach custom info to standard Error object
    error.info = info
    // @ts-expect-error - Attach HTTP status to standard Error object
    error.status = res.status
    throw error
  }

  return res.json()
}

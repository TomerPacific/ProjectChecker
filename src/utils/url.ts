export function extractServiceNameFromUrl(endpoint: string): string {
  try {
    const url = new URL(endpoint)
    const segments = url.pathname.split('/').filter(Boolean)
    if (segments.length > 0) {
      return segments[segments.length - 1]
    }
    return url.hostname.replace(/^www\./, '')
  } catch {
    const splitEndpoint = endpoint.split('/').filter(Boolean)
    return splitEndpoint[splitEndpoint.length - 1] ?? endpoint
  }
}

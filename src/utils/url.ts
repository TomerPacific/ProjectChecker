const ALLOWED_SCHEMES = new Set(['http:', 'https:'])

export function getSafeHttpUrl(raw: string): string | null {
  try {
    const url = new URL(raw)
    if (!ALLOWED_SCHEMES.has(url.protocol)) {
      return null
    }
    return url.href
  } catch {
    return null
  }
}

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

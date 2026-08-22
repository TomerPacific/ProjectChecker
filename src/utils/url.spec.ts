import { describe, expect, it } from 'vitest'
import { getSafeHttpUrl } from './url'

describe('getSafeHttpUrl', () => {
  it('allows http URLs', () => {
    expect(getSafeHttpUrl('http://example.com/path')).toBe('http://example.com/path')
  })

  it('allows https URLs', () => {
    expect(getSafeHttpUrl('https://example.com/path')).toBe('https://example.com/path')
  })

  it('rejects javascript URLs', () => {
    expect(getSafeHttpUrl('javascript:alert(1)')).toBeNull()
  })

  it('rejects data URLs', () => {
    expect(getSafeHttpUrl('data:text/html,<script>alert(1)</script>')).toBeNull()
  })

  it('rejects invalid URLs', () => {
    expect(getSafeHttpUrl('not a url')).toBeNull()
  })
})

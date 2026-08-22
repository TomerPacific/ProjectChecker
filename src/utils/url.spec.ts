import { describe, expect, it } from 'vitest'
import { extractServiceNameFromUrl, getSafeHttpUrl } from './url'

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

describe('extractServiceNameFromUrl', () => {
  it('uses the last path segment when the URL has a trailing slash', () => {
    expect(extractServiceNameFromUrl('https://tomerpacific.github.io/Portfolio/')).toBe(
      'Portfolio',
    )
  })

  it('uses the last path segment when the URL has no trailing slash', () => {
    expect(extractServiceNameFromUrl('https://tomerpacific.github.io/pull-request-presenter')).toBe(
      'pull-request-presenter',
    )
  })

  it('falls back to the hostname when the path is empty', () => {
    expect(extractServiceNameFromUrl('https://example.com/')).toBe('example.com')
  })

  it('strips www from the hostname fallback', () => {
    expect(extractServiceNameFromUrl('https://www.example.com')).toBe('example.com')
  })

  it('falls back to the last slash segment for non-URL inputs', () => {
    expect(extractServiceNameFromUrl('some/path/project-name')).toBe('project-name')
  })

  it('returns the original input when it cannot be split into segments', () => {
    expect(extractServiceNameFromUrl('not-a-valid-url')).toBe('not-a-valid-url')
  })
})

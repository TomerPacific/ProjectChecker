<script setup lang="ts">
import { computed } from 'vue'
import type { WebsiteStatus } from '../models/website_status'
import { extractServiceNameFromUrl, getSafeHttpUrl } from '../utils/url'

const props = defineProps<{
  website: WebsiteStatus
}>()

const isOnline = computed(() => props.website.status === 200)
const serviceName = computed(() => extractServiceNameFromUrl(props.website.name))
const safeUrl = computed(() => getSafeHttpUrl(props.website.name))
const statusLabel = computed(() =>
  isOnline.value ? 'Online' : `Offline (${props.website.status})`,
)
const ariaLabel = computed(() => {
  const status = isOnline.value ? 'online' : 'offline'
  if (safeUrl.value) {
    return `${serviceName.value} is ${status}`
  }
  return `${serviceName.value} is ${status}, link unavailable`
})
</script>

<template>
  <component
    :is="safeUrl ? 'a' : 'div'"
    class="card"
    :class="{ 'card--static': !safeUrl }"
    :href="safeUrl ?? undefined"
    :target="safeUrl ? '_blank' : undefined"
    :rel="safeUrl ? 'noopener noreferrer' : undefined"
    :aria-label="ariaLabel"
  >
    <div class="card__content">
      <span class="card__name">{{ serviceName }}</span>
      <span class="card__url">{{ website.name }}</span>
    </div>
    <span
      class="card__badge"
      :class="isOnline ? 'card__badge--online' : 'card__badge--offline'"
    >
      <span class="card__badge-dot" aria-hidden="true"></span>
      {{ statusLabel }}
    </span>
  </component>
</template>

<style scoped>
.card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.125rem;
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
  text-decoration: none;
  color: inherit;
  transition:
    box-shadow 0.15s,
    border-color 0.15s,
    background-color 0.15s,
    transform 0.15s;
}

.card:hover {
  background: var(--color-card-hover);
  border-color: var(--color-border-hover);
  box-shadow: var(--shadow-card-hover);
  transform: translateY(-1px);
}

.card--static {
  cursor: default;
}

.card--static:hover {
  transform: none;
}

.card:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

.card__content {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 0;
  text-align: left;
}

.card__name {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--color-heading);
}

.card__url {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.25rem 0.625rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 999px;
  white-space: nowrap;
  flex-shrink: 0;
}

.card__badge--online {
  color: var(--color-status-online);
  background: var(--color-status-online-bg);
}

.card__badge--offline {
  color: var(--color-status-offline);
  background: var(--color-status-offline-bg);
}

.card__badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
}
</style>

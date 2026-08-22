<script setup lang="ts">
import { computed } from 'vue'
import type { WebsiteStatus } from '../models/website_status'

const props = defineProps<{
  statuses: WebsiteStatus[]
  lastChecked: Date | null
}>()

const onlineCount = computed(
  () => props.statuses.filter((s) => s.status === 200).length,
)
const offlineCount = computed(() => props.statuses.length - onlineCount.value)
const allOnline = computed(
  () => props.statuses.length > 0 && offlineCount.value === 0,
)

function formatLastChecked(date: Date): string {
  return date.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
  })
}
</script>

<template>
  <div class="summary">
    <div class="summary__stats">
      <span class="summary__stat summary__stat--online">
        <span class="summary__dot summary__dot--online" aria-hidden="true"></span>
        {{ onlineCount }} online
      </span>
      <span class="summary__stat summary__stat--offline">
        <span class="summary__dot summary__dot--offline" aria-hidden="true"></span>
        {{ offlineCount }} offline
      </span>
      <span v-if="lastChecked" class="summary__last-checked">
        Last checked {{ formatLastChecked(lastChecked) }}
      </span>
    </div>
    <p v-if="allOnline" class="summary__all-clear">All systems operational</p>
  </div>
</template>

<style scoped>
.summary {
  margin-bottom: 1.25rem;
  padding: 0.875rem 1rem;
  background: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

.summary__stats {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem 1.25rem;
  font-size: 0.875rem;
}

.summary__stat {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 500;
}

.summary__stat--online {
  color: var(--color-status-online);
}

.summary__stat--offline {
  color: var(--color-status-offline);
}

.summary__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.summary__dot--online {
  background: var(--color-status-online);
}

.summary__dot--offline {
  background: var(--color-status-offline);
}

.summary__last-checked {
  color: var(--color-text-muted);
  font-size: 0.8125rem;
}

.summary__all-clear {
  margin-top: 0.5rem;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--color-status-online);
}
</style>

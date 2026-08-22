<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { WebsiteStatus } from '../models/website_status'
import type { WebsiteStatusResponse } from '../models/website_status_response'
import ProjectHeader from './ProjectHeader.vue'
import StatusSummary from './StatusSummary.vue'
import ProjectCard from './ProjectCard.vue'
import LoadingSkeleton from './LoadingSkeleton.vue'
import ErrorBanner from './ErrorBanner.vue'

const BASE_URL = 'https://project-checker.onrender.com/checkStatus'

const statuses = ref<WebsiteStatus[]>([])
const isLoading = ref(true)
const hasError = ref(false)
const lastChecked = ref<Date | null>(null)
let fetchController: AbortController | null = null

async function fetchStatuses() {
  fetchController?.abort()
  const controller = new AbortController()
  fetchController = controller

  isLoading.value = true
  hasError.value = false

  try {
    const result = await fetch(BASE_URL, { signal: controller.signal })

    if (!result.ok) {
      throw new Error(`HTTP ${result.status}`)
    }

    const data: WebsiteStatusResponse = await result.json()

    if (!Array.isArray(data.websites)) {
      throw new Error('Invalid response shape')
    }

    statuses.value = data.websites
    lastChecked.value = new Date()
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      return
    }
    hasError.value = true
    statuses.value = []
  } finally {
    if (fetchController === controller) {
      isLoading.value = false
    }
  }
}

onMounted(fetchStatuses)
</script>

<template>
  <div class="dashboard">
    <ProjectHeader :loading="isLoading" @refresh="fetchStatuses" />

    <ErrorBanner v-if="hasError && !isLoading" @retry="fetchStatuses" />

    <StatusSummary
      v-if="!isLoading && !hasError && statuses.length > 0"
      :statuses="statuses"
      :last-checked="lastChecked"
    />

    <LoadingSkeleton v-if="isLoading" />

    <ul
      v-else-if="!hasError && statuses.length > 0"
      class="project-list"
      aria-label="Project statuses"
    >
      <li v-for="website in statuses" :key="website.name">
        <ProjectCard :website="website" />
      </li>
    </ul>

    <p v-else-if="!hasError && !isLoading" class="empty-state">
      No projects configured.
    </p>
  </div>
</template>

<style scoped>
.dashboard {
  animation: fadeIn 0.3s ease;
}

.project-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.empty-state {
  padding: 2rem;
  text-align: center;
  color: var(--color-text-muted);
  font-size: 0.875rem;
  border: 1px dashed var(--color-border);
  border-radius: var(--radius-md);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

<script setup lang="ts">
defineEmits<{
  retry: []
}>()
</script>

<template>
  <div class="error-banner" role="alert">
    <div class="error-banner__content">
      <svg
        class="error-banner__icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
      <div>
        <p class="error-banner__title">Unable to load project statuses</p>
        <p class="error-banner__message">
          Something went wrong while fetching data. Please try again.
        </p>
      </div>
    </div>
    <button class="error-banner__retry" type="button" @click="$emit('retry')">
      Retry
    </button>
  </div>
</template>

<style scoped>
.error-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.875rem 1rem;
  margin-bottom: 1.25rem;
  background: var(--color-status-offline-bg);
  border: 1px solid var(--color-status-offline);
  border-radius: var(--radius-md);
}

.error-banner__content {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.error-banner__icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: var(--color-status-offline);
  margin-top: 1px;
}

.error-banner__title {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-status-offline);
}

.error-banner__message {
  margin-top: 0.15rem;
  font-size: 0.8125rem;
  color: var(--color-text-muted);
}

.error-banner__retry {
  padding: 0.4rem 0.875rem;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--color-status-offline);
  background: transparent;
  border: 1px solid var(--color-status-offline);
  border-radius: var(--radius-sm);
  cursor: pointer;
  flex-shrink: 0;
  transition:
    background-color 0.15s,
    color 0.15s;
}

.error-banner__retry:hover {
  background: var(--color-status-offline);
  color: white;
}

.error-banner__retry:focus-visible {
  outline: 2px solid var(--color-status-offline);
  outline-offset: 2px;
}
</style>

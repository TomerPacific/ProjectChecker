<script setup lang="ts">
defineProps<{
  loading?: boolean
}>()

defineEmits<{
  refresh: []
}>()
</script>

<template>
  <header class="header">
    <div class="header__brand">
      <img class="header__logo" src="../assets/logo.png" alt="ProjectChecker logo" />
      <div>
        <h1 class="header__title">ProjectChecker</h1>
        <p class="header__subtitle">Monitor your deployed projects</p>
      </div>
    </div>
    <button
      class="header__refresh"
      type="button"
      :disabled="loading"
      aria-label="Refresh project statuses"
      @click="$emit('refresh')"
    >
      <svg
        class="header__refresh-icon"
        :class="{ 'header__refresh-icon--spinning': loading }"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M21 12a9 9 0 1 1-3-6.7" />
        <polyline points="21 3 21 9 15 9" />
      </svg>
      Refresh
    </button>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.75rem;
}

.header__brand {
  display: flex;
  align-items: center;
  gap: 0.875rem;
}

.header__logo {
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  object-fit: contain;
}

.header__title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-heading);
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.header__subtitle {
  margin-top: 0.2rem;
  font-size: 0.875rem;
  color: var(--color-text-muted);
}

.header__refresh {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 0.875rem;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--color-accent);
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition:
    background-color 0.15s,
    border-color 0.15s,
    color 0.15s;
  flex-shrink: 0;
}

.header__refresh:hover:not(:disabled) {
  background: var(--color-background-soft);
  border-color: var(--color-border-hover);
  color: var(--color-accent-hover);
}

.header__refresh:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

.header__refresh:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.header__refresh-icon {
  width: 14px;
  height: 14px;
}

.header__refresh-icon--spinning {
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>

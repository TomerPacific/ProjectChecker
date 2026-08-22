<template>
  <div class="skeleton-list" aria-hidden="true">
    <div v-for="n in 4" :key="n" class="skeleton-card">
      <div class="skeleton-card__text">
        <div class="skeleton skeleton--title"></div>
        <div class="skeleton skeleton--url"></div>
      </div>
      <div class="skeleton skeleton--badge"></div>
    </div>
  </div>
</template>

<style scoped>
.skeleton-list {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.skeleton-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.125rem;
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

.skeleton-card__text {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
}

.skeleton {
  border-radius: var(--radius-sm);
  background: linear-gradient(
    90deg,
    var(--color-background-mute) 25%,
    var(--color-background-soft) 50%,
    var(--color-background-mute) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.4s ease-in-out infinite;
}

.skeleton--title {
  width: 40%;
  height: 14px;
}

.skeleton--url {
  width: 65%;
  height: 10px;
}

.skeleton--badge {
  width: 72px;
  height: 24px;
  border-radius: 999px;
  flex-shrink: 0;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>

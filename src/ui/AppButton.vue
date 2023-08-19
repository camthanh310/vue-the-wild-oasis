<script lang="ts" setup>
import type { PropType } from 'vue'

type Variations = 'primary' | 'secondary' | 'danger'

type Sizes = 'small' | 'medium' | 'large'

defineProps({
  size: {
    type: String as PropType<Sizes>,
    default: 'medium'
  },
  variation: {
    type: String as PropType<Variations>,
    default: 'primary'
  }
})
</script>

<template>
  <button class="button" :class="[variation, size]">
    <slot />
  </button>
</template>

<style scoped>
.button {
  border: none;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
}

.primary {
  color: var(--color-brand-50);
  background-color: var(--color-brand-600);
}

.primary:hover {
  background-color: var(--color-brand-700);
}

.secondary {
  color: var(--color-grey-600);
  background: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
}

.secondary:hover {
  background-color: var(--color-grey-50);
}

.danger {
  color: var(--color-red-100);
  background-color: var(--color-red-700);
}

.danger:hover {
  background-color: var(--color-red-800);
}

.small {
  font-size: 1.2rem;
  padding: 0.4rem 0.8rem;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
}

.medium {
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
}

.large {
  font-size: 1.6rem;
  padding: 1.2rem 2.4rem;
  font-weight: 500;
}
</style>

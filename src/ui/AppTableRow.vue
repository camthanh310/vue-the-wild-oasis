<script lang="ts" setup>
import { columnInjectionKey } from '@/keys/injection-key';
import { inject } from 'vue';

const columns = inject(columnInjectionKey)
</script>

<template>
  <div role="row" class="row">
    <slot />
  </div>
</template>

<style scoped>
.row {
  display: grid;
  grid-template-columns: v-bind(columns);
  column-gap: 2.4rem;
  align-items: center;
  transition: none;

  padding: 1.2rem 2.4rem;
}

.row:not(:last-child) {
  border-bottom: 1px solid var(--color-grey-100);
}
</style>

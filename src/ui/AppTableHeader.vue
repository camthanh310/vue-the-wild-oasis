<script lang="ts" setup>
import { columnInjectionKey } from '@/keys/injection-key';
import { inject } from 'vue';

const columns = inject(columnInjectionKey)
</script>

<template>
  <header role="row" class="header">
    <slot />
  </header>
</template>

<style scoped>
.header {
  display: grid;
  grid-template-columns: v-bind(columns);
  column-gap: 2.4rem;
  align-items: center;
  transition: none;

  padding: 1.6rem 2.4rem;
  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
}
</style>
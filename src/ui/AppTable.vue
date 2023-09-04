<script lang="ts" setup>
import { columnInjectionKey } from '@/keys/injection-key';
import { provide } from 'vue';

const props = defineProps({
  columns: {
    type: String,
    default: ''
  }
})

provide(columnInjectionKey, props.columns)
</script>

<template>
  <div role="table" class="table">
    <slot />
  </div>
</template>

<style scoped>
.table {
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
}
</style>

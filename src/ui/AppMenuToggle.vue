<script lang="ts" setup>
import { Icon } from '@iconify/vue';
import type { MenuPosition } from '@/types/MenuPosition';

const props = defineProps({
  id: {
    type: [String, Number],
    required: true
  }
})

const emit = defineEmits<{
  'on-toggle': [id: number | string, position: MenuPosition]
}>()

function handleClick(e: Event) {
  const rect = (e.target as HTMLInputElement).closest('button')?.getBoundingClientRect()
  const x = window.innerWidth - Number(rect?.width) - Number(rect?.x)
  const y = Number(rect?.y) + Number(rect?.height) + 8

  emit('on-toggle', props.id, { x, y })
}
</script>

<template>
  <button class="toggle" @click.stop="handleClick">
    <Icon icon="heroicons:ellipsis-vertical-solid" />
  </button>
</template>

<style scoped>
.toggle {
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
}

.toggle:hover {
  background-color: var(--color-grey-100);
}

.toggle svg {
  width: 2.4rem;
  height: 2.4rem;
  color: var(--color-grey-700);
}
</style>

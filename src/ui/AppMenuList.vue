<script lang="ts" setup>
import { computed, type PropType } from 'vue';
import { vOnClickOutside } from '@vueuse/components'
import type { MenuPosition } from '@/types/MenuPosition';

const props = defineProps({
  id: {
    type: [String, Number],
    required: true
  },
  openId: {
    type: [String, Number],
    required: true
  },
  position: {
    type: Object as PropType<MenuPosition>,
    required: true
  }
})

const emit = defineEmits<{
  'on-close': []
}>()

const right = computed<string>(() => `${props.position.x}px`)
const top = computed<string>(() => `${props.position.y}px`)

function closeMenu() {
  emit('on-close')
}
</script>

<template>
  <Teleport to="body">
    <ul class="list" v-if="openId === id" v-on-click-outside="closeMenu">
      <slot />
    </ul>
  </Teleport>
</template>

<style scoped>
.list {
  position: fixed;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  right: v-bind(right);
  top: v-bind(top);
}
</style>

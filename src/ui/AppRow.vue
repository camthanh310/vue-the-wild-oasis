<script lang="ts" setup>
import type { PropType } from 'vue'

type Axis = 'horizontal' | 'vertical'

defineProps({
  axis: {
    type: String as PropType<Axis>,
    default: 'vertical'
  }
})
</script>

<template>
  <div class="row" :class="[axis]">
    <slot />
  </div>
</template>

<style scoped>
.row {
  display: flex;
}

.horizontal {
  justify-content: space-between;
  align-items: center;
}

.vertical {
  flex-direction: column;
  gap: 1.6rem;
}
</style>

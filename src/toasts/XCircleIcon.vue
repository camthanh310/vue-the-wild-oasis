<script lang="ts" setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <Icon icon="heroicons:x-circle-solid" class="x-close-icon" fill="currentColor" stroke="currentColor" />
</template>

<style scoped>
.x-close-icon {
  width: 28px;
  height: 28px;
  stroke: #fff;
  stroke-width: 1;
}

.x-close-icon:deep(path) {
  color: #ff4b4b;
}
</style>


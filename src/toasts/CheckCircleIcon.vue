<script lang="ts" setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <Icon icon="heroicons:check-circle-solid" class="check-circle-icon" />
</template>

<style scoped>
.check-circle-icon {
  width: 28px;
  height: 28px;
  stroke: #fff;
  stroke-width: 1;
}

.check-circle-icon:deep(path) {
  color: #61d345;
}
</style>
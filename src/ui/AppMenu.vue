<script lang="ts" setup>
import { reactive, ref } from 'vue';
import type { MenuPosition } from '@/types/MenuPosition';

const openId = ref<number | string>('')
const position = reactive({
  x: 0,
  y: 0
})

function open(id: number | string, rectPosition: MenuPosition) {
  position.x = rectPosition.x
  position.y = rectPosition.y
  openId.value === '' || openId.value !== id ? openId.value = id : close()
}

function close() {
  openId.value = ''
}
</script>

<template>
  <div class="menu">
    <slot :open="open" :close="close" :open-id="openId" :position="position" />
  </div>
</template>

<style scoped>
.menu {
  display: flex;
  align-items: center;
  justify-content: end;
}
</style>
<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { ref } from 'vue';
import { vOnClickOutside } from '@vueuse/components'

const open = ref(false)

function openModal() {
  open.value = true
}

function closeModal() {
  open.value = false
}

</script>

<template>
  <slot name="open" :open="openModal" />
  <Teleport to="body">
    <div class="overlay" v-if="open">
      <div class="modal" v-on-click-outside="closeModal">
        <button class="button" @click="closeModal">
          <Icon icon="heroicons:x-mark" />
        </button>

        <div>
          <slot :close="closeModal" />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--border-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
}

.button {
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;
}

.button:hover {
  background-color: var(--color-grey-100);
}

.button svg {
  width: 2.4rem;
  height: 2.4rem;
  /* Sometimes we need both */
  /*
  fill: var(--color-grey-500);
  stroke: var(--color-grey-500);
   */
  color: var(--color-grey-500);
}
</style>
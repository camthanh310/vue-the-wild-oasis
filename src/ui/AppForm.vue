<script lang="ts" setup>
import type { PropType } from 'vue'

type FormType = 'regular' | 'modal'

defineProps({
  formType: {
    type: String as PropType<FormType>,
    default: 'regular'
  }
})
</script>

<template>
  <form class="form" :class="formType">
    <slot />
  </form>
</template>

<style scoped>
.form {
  overflow: hidden;
  font-size: 1.4rem;
}

.regular {
  padding: 2.4rem 4rem;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
}

.modal {
  width: 80rem;
}
</style>

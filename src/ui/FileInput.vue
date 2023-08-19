<script lang="ts" setup>
defineProps({
  modelValue: {
    type: [String, File],
    default: ''
  }
})

defineOptions({
  inheritAttrs: false
})

const emit = defineEmits<{
  'update:model-value': [file: File | null]
}>()

function updateFile(event: Event) {
  const target = event.target as HTMLInputElement
  const file = (target.files as FileList)[0]
  emit('update:model-value', file)
}
</script>

<template>
  <input type="file" v-bind="{ ...$attrs, onInput: updateFile }" />
</template>

<style scoped>
.file {
  font-size: 1.4rem;
  border-radius: var(--border-radius-sm);
}

input::file-selector-button {
  font: inherit;
  font-weight: 500;
  padding: 0.8rem 1.2rem;
  margin-right: 1.2rem;
  border-radius: var(--border-radius-sm);
  border: none;
  color: var(--color-brand-50);
  background-color: var(--color-brand-600);
  cursor: pointer;
  transition: color 0.2s, background-color 0.2s;
}

.file:hover {
  background-color: var(--color-brand-700);
}
</style>
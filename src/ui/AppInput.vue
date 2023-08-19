<script lang="ts" setup>
defineOptions({
  inheritAttrs: false
})

defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  modelModifiers: { default: () => ({}) }
})

const emit = defineEmits<{
  'update:model-value': [value: String | Number]
}>()

function updateValue(event: Event) {
  emit('update:model-value', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <input v-bind="{ ...$attrs, onInput: updateValue }" class="input" :value="modelValue" />
</template>

<style scoped>
.input {
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  padding: 0.8rem 1.2rem;
}
</style>

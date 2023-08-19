<script lang="ts" setup>
defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  modelModifiers: { default: () => ({}) }
})

defineOptions({
  inheritAttrs: false
})

const emit = defineEmits<{
  'update:model-value': [value: string | number]
}>()

function updateValue(event: Event) {
  emit('update:model-value', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <textarea class="textarea" v-bind="{ ...$attrs, onInput: updateValue }" :value="modelValue"></textarea>
</template>

<style scoped>
.textarea {
  padding: 0.8rem 1.2rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 5px;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  width: 100%;
  height: 8rem;
}
</style>

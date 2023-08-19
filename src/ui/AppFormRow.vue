<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  error: {
    type: [String, Array, Object],
    default: () => ({})
  }
})

const errorMessage = computed(() => {
  if (typeof props.error === 'string') {
    return [props.error]
  }

  return props.error
})
</script>

<template>
  <div class="form-row">
    <label v-if="label" class="label" :for="$slots.default?.()[0]?.props?.id">
      {{ label }}
    </label>
    <slot />

    <span class="error" v-if="errorMessage.length">
      <template v-for="error in errorMessage" :key="error">
        {{ error }}
      </template>
    </span>
  </div>
</template>

<style scoped>
.form-row {
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;
}

.formr-ow:first-child {
  padding-top: 0;
}

.form-row:last-child {
  padding-bottom: 0;
}

.form-row:not(:last-child) {
  border-bottom: 1px solid var(--color-grey-100);
}

.form-row:has(button) {
  display: flex;
  justify-content: flex-end;
  gap: 1.2rem;
}

.label {
  font-weight: 500;
}

.error {
  font-size: 1.4rem;
  color: var(--color-red-700);
}
</style>

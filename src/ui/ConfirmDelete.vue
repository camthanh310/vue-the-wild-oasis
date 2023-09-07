<script lang="ts" setup>
import AppHeading from '@/ui/AppHeading.vue';
import AppButton from '@/ui/AppButton.vue';

defineProps({
  resourceName: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits<{
  'on-close': [],
  'on-confirm': []
}>()

function handleClose() {
  emit('on-close')
}

function handleConfirm() {
  emit('on-confirm')
}
</script>

<template>
  <div class="confirm-delete">
    <AppHeading as="h3">
      Delete {{ resourceName }}
    </AppHeading>
    <p>
      Are you sure you want to delete this {{ resourceName }} permanently? This
      action cannot be undo.
    </p>

    <div>
      <AppButton variation="secondary" :disabled="disabled" @click="handleClose">
        Cancel
      </AppButton>

      <AppButton variation="danger" :disabled="disabled" @click="handleConfirm">
        Delete
      </AppButton>
    </div>
  </div>
</template>

<style scoped>
.confirm-delete {
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.confirm-delete p {
  color: var(--color-grey-500);
  margin-bottom: 1.2rem;
}

.confirm-delete div {
  display: flex;
  justify-content: flex-end;
  gap: 1.2rem;
}
</style>
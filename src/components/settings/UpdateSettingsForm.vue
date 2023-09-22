<script lang="ts" setup>
import { ref, watch } from 'vue';
import AppForm from '@/ui/AppForm.vue';
import AppFormRow from '@/ui/AppFormRow.vue';
import AppInput from '@/ui/AppInput.vue';
import { useSetting } from './useSetting';
import AppSpinner from '@/ui/AppSpinner.vue';
import type { Setting, SettingResponse } from '@/types/Setting'
import { useUpdateSetting } from './useUpdateSetting';

const {
  isLoading,
  settings
} = useSetting(1)

const setting = ref<SettingResponse | null>(null)

const { isUpdating, updateSetting } = useUpdateSetting()

function handleUpdate(e: Event, field: Setting) {
  const value = (e.target as HTMLInputElement).value

  if (!value) {
    return
  }

  setting.value = { ...setting.value, [field]: Number(value) } as SettingResponse

  updateSetting({
    setting: setting.value,
    id: 1
  })
}

watch(
  settings,
  (newSetting) => {
    if (newSetting) {
      setting.value = newSetting
    }
  },
  {
    immediate: true
  }
)
</script>

<template>
  <AppSpinner v-if="isLoading" />

  <AppForm v-else>
    <AppFormRow label="Minimum nights/booking">
      <AppInput type="number" id="min-nights" :model-value="setting?.min_booking_length"
        @blur="handleUpdate($event, 'min_booking_length')" :disabled="isUpdating" />
    </AppFormRow>

    <AppFormRow label="maximum nights/booking">
      <AppInput type="number" id="max-nights" :model-value="setting?.max_booking_length"
        @blur="handleUpdate($event, 'max_booking_length')" :disabled="isUpdating" />
    </AppFormRow>

    <AppFormRow label="maximum guests/booking">
      <AppInput type="number" id="max-guests" :model-value="setting?.max_guest_per_booking"
        @blur="handleUpdate($event, 'max_guest_per_booking')" :disabled="isUpdating" />
    </AppFormRow>

    <AppFormRow label="Breakfast price">
      <AppInput type="number" id="breakfast-price" :model-value="setting?.breakfast_price"
        @blur="handleUpdate($event, 'breakfast_price')" :disabled="isUpdating" />
    </AppFormRow>
  </AppForm>
</template>

<script lang="ts" setup>
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

const { isUpdating, updateSetting } = useUpdateSetting()

function handleUpdate(e: Event, field: Setting) {
  const value = (e.target as HTMLInputElement).value

  if (!value) {
    return
  }

  const setting = { ...settings.value, [field]: Number(value) } as SettingResponse

  updateSetting({
    setting,
    id: 1
  })
}
</script>

<template>
  <AppSpinner v-if="isLoading" />

  <AppForm v-else>
    <AppFormRow label="Minimum nights/booking">
      <AppInput type="number" id="min-nights" :model-value="settings?.min_booking_length"
        @blur="handleUpdate($event, 'min_booking_length')" :disabled="isUpdating" />
    </AppFormRow>

    <AppFormRow label="maximum nights/booking">
      <AppInput type="number" id="max-nights" :model-value="settings?.max_booking_length"
        @blur="handleUpdate($event, 'max_booking_length')" :disabled="isUpdating" />
    </AppFormRow>

    <AppFormRow label="maximum guests/booking">
      <AppInput type="number" id="max-guests" :model-value="settings?.max_guest_per_booking"
        @blur="handleUpdate($event, 'max_guest_per_booking')" :disabled="isUpdating" />
    </AppFormRow>

    <AppFormRow label="Breakfast price">
      <AppInput type="number" id="breakfast-price" :model-value="settings?.breakfast_price"
        @blur="handleUpdate($event, 'breakfast_price')" :disabled="isUpdating" />
    </AppFormRow>
  </AppForm>
</template>

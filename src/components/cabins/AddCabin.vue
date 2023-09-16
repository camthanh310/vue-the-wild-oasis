<script lang="ts" setup>
import CabinForm from '@/components/cabins/CabinForm.vue'
import AppButton from '@/ui/AppButton.vue';
import AppModal from '@/ui/AppModal.vue';
import type { CabinData } from '@/types/Cabin';
import { useCreateCabin } from './useCreateCabin';

const { isCreating, createCabin, errorCreateCabin, resetCreateCabin } = useCreateCabin()

function openModal(open: Function) {
  resetCreateCabin()
  open()
}

function handleSubmit(cabin: CabinData, closeModal: Function) {
  createCabin(cabin,
    {
      onSuccess: () => {
        closeModal()
      }
    }
  )
}
</script>

<template>
  <div>
    <AppModal>
      <template #open="{ open }">
        <AppButton @click="openModal(open)">
          Add new cabin
        </AppButton>
      </template>
      <template #default="{ close }">
        <CabinForm @on-close="close" @on-submit="handleSubmit($event, close)" :is-loading="isCreating"
          :errors="errorCreateCabin" />
      </template>
    </AppModal>
  </div>
</template>

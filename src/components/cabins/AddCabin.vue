<script lang="ts" setup>
import CreateCabinForm from '@/components/cabins/CreateCabinForm.vue'
import AppButton from '@/ui/AppButton.vue';
import AppModal from '@/ui/AppModal.vue';

</script>

<template>
  <div>
    <AppModal>
      <template #open="{ open }">
        <AppButton @click="open">
          Add new cabin
        </AppButton>
      </template>
      <template #default="{ close }">
        <CreateCabinForm @on-close="close" />
      </template>
    </AppModal>
  </div>
</template>

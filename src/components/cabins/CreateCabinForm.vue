<script lang="ts" setup>
import { reactive } from 'vue'
import AppForm from '@/ui/AppForm.vue'
import AppFormRow from '@/ui/AppFormRow.vue'
import AppInput from '@/ui/AppInput.vue'
import AppTextarea from '@/ui/AppTextarea.vue'
import FileInput from '@/ui/FileInput.vue'
import type { CreateCabin } from '@/types/Cabin'
import AppButton from '@/ui/AppButton.vue'
import { useCreateCabin } from './useCreateCabin'

const emit = defineEmits<{
  'on-close': []
}>()

const formCabin: CreateCabin = reactive({
  name: '',
  max_capacity: '',
  price: '',
  discount: 0,
  description: '',
  image: ''
})

const { isCreating, createCabin, errorCreateCabin } = useCreateCabin()

function handleCreateCabin() {
  createCabin(formCabin,
    {
      onSuccess: () => {
        handleCloseModal()
      }
    }
  )
}



function handleCloseModal() {
  emit('on-close')
}
</script>

<template>
  <AppForm @submit.prevent="handleCreateCabin" form-type="modal">
    <AppFormRow label="Cabin name" :error="errorCreateCabin?.name">
      <AppInput type="text" id="name" v-model="formCabin.name" :disabled="isCreating" />
    </AppFormRow>

    <AppFormRow label="Maximum capacity" :error="errorCreateCabin?.max_capacity">
      <AppInput type="number" id="maxCapacity" v-model.number="formCabin.max_capacity" :disabled="isCreating" />
    </AppFormRow>

    <AppFormRow label="Regular Price" :error="errorCreateCabin?.price">
      <AppInput type="number" id="regularPrice" v-model.number="formCabin.price" :disabled="isCreating" />
    </AppFormRow>

    <AppFormRow label="Discount" :error="errorCreateCabin?.discount">
      <AppInput type="number" id="discount" v-model.number="formCabin.discount" :disabled="isCreating" />
    </AppFormRow>

    <AppFormRow label="Description for website" :error="errorCreateCabin?.description">
      <AppTextarea id="name" v-model="formCabin.description" :disabled="isCreating" />
    </AppFormRow>

    <AppFormRow label="Cabin photo" :error="errorCreateCabin?.image">
      <FileInput id="image" accept="image/*" v-model="formCabin.image" :disabled="isCreating" />
    </AppFormRow>

    <AppFormRow>
      <AppButton variation="secondary" @click="handleCloseModal" type="button" :disabled="isCreating">
        Cancel
      </AppButton>

      <AppButton type="submit" :disabled="isCreating">
        Create new cabin
      </AppButton>
    </AppFormRow>
  </AppForm>
</template>

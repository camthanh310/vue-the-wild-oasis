<script lang="ts" setup>
import { computed, reactive } from 'vue'
import AppForm from '@/ui/AppForm.vue'
import AppFormRow from '@/ui/AppFormRow.vue'
import AppInput from '@/ui/AppInput.vue'
import AppTextarea from '@/ui/AppTextarea.vue'
import FileInput from '@/ui/FileInput.vue'
import type { CabinValidation, CabinValidationErrorResponse, CreateCabin } from '@/types/Cabin'
import AppButton from '@/ui/AppButton.vue'
import { useCreateCabin } from './useCreateCabin'
import type { ValidationError } from '@/types/Validation'

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

const errors = computed<CabinValidationErrorResponse>(() => ((errorCreateCabin.value as CabinValidation)?.validationError as ValidationError<CabinValidationErrorResponse>)?.response?.data?.errors)

function handleCloseModal() {
  emit('on-close')
}
</script>

<template>
  <AppForm @submit.prevent="handleCreateCabin" form-type="modal">
    <AppFormRow label="Cabin name" :error="errors?.name">
      <AppInput type="text" id="name" v-model="formCabin.name" :disabled="isCreating" />
    </AppFormRow>

    <AppFormRow label="Maximum capacity" :error="errors?.max_capacity">
      <AppInput type="number" id="maxCapacity" v-model.number="formCabin.max_capacity" :disabled="isCreating" />
    </AppFormRow>

    <AppFormRow label="Regular Price" :error="errors?.price">
      <AppInput type="number" id="regularPrice" v-model.number="formCabin.price" :disabled="isCreating" />
    </AppFormRow>

    <AppFormRow label="Discount" :error="errors?.discount">
      <AppInput type="number" id="discount" v-model.number="formCabin.discount" :disabled="isCreating" />
    </AppFormRow>

    <AppFormRow label="Description for website" :error="errors?.description">
      <AppTextarea id="name" v-model="formCabin.description" :disabled="isCreating" />
    </AppFormRow>

    <AppFormRow label="Cabin photo" :error="errors?.image">
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

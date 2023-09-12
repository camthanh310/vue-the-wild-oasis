<script lang="ts" setup>
import { reactive, watchEffect, computed } from 'vue'
import AppForm from '@/ui/AppForm.vue'
import AppFormRow from '@/ui/AppFormRow.vue'
import AppInput from '@/ui/AppInput.vue'
import AppTextarea from '@/ui/AppTextarea.vue'
import FileInput from '@/ui/FileInput.vue'
import type { CabinData, CabinResponse, CabinValidationErrorResponse } from '@/types/Cabin'
import AppButton from '@/ui/AppButton.vue'

const props = defineProps<{
  cabin?: CabinResponse,
  errors: CabinValidationErrorResponse | null,
  isLoading: boolean
}>()

const emit = defineEmits<{
  'on-close': [],
  'on-submit': [cabin: CabinData]
}>()

const formCabin: CabinData = reactive({
  name: '',
  max_capacity: '',
  price: '',
  discount: 0,
  description: '',
  image: ''
})

const buttonText = computed<string>(() => props.cabin ? 'Edit Cabin' : 'Create new cabin')

function onSubmit() {
  emit('on-submit', formCabin)
}

function handleCloseModal() {
  emit('on-close')
}

watchEffect(
  () => {
    if (props.cabin) {
      formCabin.name = props.cabin.name
      formCabin.price = props.cabin.price
      formCabin.description = props.cabin.description
      formCabin.max_capacity = props.cabin.max_capacity
      formCabin.discount = props.cabin.discount
    }
  }
)
</script>

<template>
  <AppForm @submit.prevent="onSubmit" form-type="modal">
    <AppFormRow label="Cabin name" :error="errors?.name">
      <AppInput type="text" id="name" v-model="formCabin.name" :disabled="isLoading" />
    </AppFormRow>

    <AppFormRow label="Maximum capacity" :error="errors?.max_capacity">
      <AppInput type="number" id="maxCapacity" v-model.number="formCabin.max_capacity" :disabled="isLoading" />
    </AppFormRow>

    <AppFormRow label="Regular Price" :error="errors?.price">
      <AppInput type="number" id="regularPrice" v-model.number="formCabin.price" :disabled="isLoading" />
    </AppFormRow>

    <AppFormRow label="Discount" :error="errors?.discount">
      <AppInput type="number" id="discount" v-model.number="formCabin.discount" :disabled="isLoading" />
    </AppFormRow>

    <AppFormRow label="Description for website" :error="errors?.description">
      <AppTextarea id="name" v-model="formCabin.description" :disabled="isLoading" />
    </AppFormRow>

    <AppFormRow label="Cabin photo" :error="errors?.image">
      <FileInput id="image" accept="image/*" v-model="formCabin.image" :disabled="isLoading" />
    </AppFormRow>

    <AppFormRow>
      <AppButton variation="secondary" @click="handleCloseModal" type="button" :disabled="isLoading">
        Cancel
      </AppButton>

      <AppButton type="submit" :disabled="isLoading">
        {{ buttonText }}
      </AppButton>
    </AppFormRow>
  </AppForm>
</template>

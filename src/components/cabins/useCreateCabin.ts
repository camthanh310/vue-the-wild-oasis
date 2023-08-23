import { computed } from 'vue'
import { useMutation } from '@tanstack/vue-query'
import { useToast } from 'vue-toastification'
import { createCabin as apiCreateCabin } from '@/services/apiCabins'
import type { CabinValidation, CabinValidationErrorResponse } from '@/types/Cabin'

export function useCreateCabin() {
  const toast = useToast()

  const {
    mutate: createCabin,
    isLoading: isCreating,
    error
  } = useMutation({
    mutationFn: apiCreateCabin,
    onSuccess: () => {
      toast.success('New cabin successfully created')
    },
    onError: (err: any) => {
      const errorResponse = err as CabinValidation
      if (!errorResponse?.isValidationError()) {
        toast.error(errorResponse?.getErrorMessage())
      }
    }
  })

  const errorCreateCabin = computed<CabinValidationErrorResponse | null>(() => {
    const err = error.value as CabinValidation
    if (err?.isValidationError()) {
      return err?.getValidationErrors()
    }

    return null
  })

  return { isCreating, createCabin, errorCreateCabin }
}

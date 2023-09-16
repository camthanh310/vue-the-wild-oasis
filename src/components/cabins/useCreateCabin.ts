import { computed } from 'vue'
import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { useToast } from 'vue-toastification'
import { createCabin as apiCreateCabin } from '@/services/apiCabins'
import type { CabinValidation, CabinValidationErrorResponse } from '@/types/Cabin'
import { FETCH_CABINS } from '@/keys/vue-query-keys'

export function useCreateCabin() {
  const toast = useToast()
  const queryClient = useQueryClient()

  const {
    mutate: createCabin,
    isLoading: isCreating,
    error,
    reset: resetCreateCabin
  } = useMutation({
    mutationFn: apiCreateCabin,
    onSuccess: () => {
      toast.success('New cabin successfully created')
      queryClient.invalidateQueries({ queryKey: [FETCH_CABINS] })
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

  return { isCreating, createCabin, errorCreateCabin, resetCreateCabin }
}

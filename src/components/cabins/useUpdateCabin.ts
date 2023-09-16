import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { useToast } from 'vue-toastification'
import { updateCabin as apiUpdateCabin } from '@/services/apiCabins'
import type { CabinValidation, CabinValidationErrorResponse } from '@/types/Cabin'
import { FETCH_CABINS } from '@/keys/vue-query-keys'
import { computed } from 'vue'

export function useUpdateCabin() {
  const toast = useToast()
  const queryClient = useQueryClient()

  const {
    isLoading: isUpdating,
    mutate: updateCabin,
    error,
    reset: resetUpdateCabin
  } = useMutation({
    mutationFn: apiUpdateCabin,
    onSuccess: () => {
      toast.success('Cabin successfully updated')
      queryClient.invalidateQueries({ queryKey: [FETCH_CABINS] })
    },
    onError: (err: any) => {
      const errorResponse = err as CabinValidation
      if (!errorResponse?.isValidationError()) {
        toast.error(errorResponse?.getErrorMessage())
      }
    }
  })

  const errorUpdateCabin = computed<CabinValidationErrorResponse | null>(() => {
    const err = error.value as CabinValidation
    if (err?.isValidationError()) {
      return err?.getValidationErrors()
    }

    return null
  })

  return { isUpdating, updateCabin, errorUpdateCabin, resetUpdateCabin }
}

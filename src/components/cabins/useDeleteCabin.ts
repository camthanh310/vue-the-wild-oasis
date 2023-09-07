import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { useToast } from 'vue-toastification'
import { deleteCabin as deleteCabinApi } from '@/services/apiCabins'
import { FETCH_CABINS } from '@/keys/vue-query-keys'
import type { CabinValidation } from '@/types/Cabin'

export function useDeleteCabin() {
  const toast = useToast()
  const queryClient = useQueryClient()

  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: (id: number | string) => deleteCabinApi(id),
    onSuccess: () => {
      toast.success('Cabin successfully deleted!')

      queryClient.invalidateQueries({
        queryKey: [FETCH_CABINS]
      })
    },
    onError: (err: any) => {
      const errorResponse = err as CabinValidation
      if (errorResponse?.isValidationError()) {
        toast.error(errorResponse?.getErrorMessage())
      }
    }
  })

  return {
    isDeleting,
    deleteCabin
  }
}

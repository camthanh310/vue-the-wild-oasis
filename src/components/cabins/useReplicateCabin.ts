import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { useToast } from 'vue-toastification'
import { replicateCabin as apiReplicateCabin } from '@/services/apiCabins'
import { FETCH_CABINS } from '@/keys/vue-query-keys'
import type { CabinValidation } from '@/types/Cabin'

export function useReplicateCabin() {
  const toast = useToast()
  const queryClient = useQueryClient()

  const { mutate: replicateCabin, isLoading: isReplicating } = useMutation({
    mutationFn: apiReplicateCabin,
    onSuccess: () => {
      toast.success('Duplicated cabin successfully')
      queryClient.invalidateQueries({ queryKey: [FETCH_CABINS] })
    },
    onError: (err: any) => {
      const errorResponse = err as CabinValidation
      if (!errorResponse?.isValidationError()) {
        toast.error(errorResponse?.getErrorMessage())
      }
    }
  })

  return { isReplicating, replicateCabin }
}

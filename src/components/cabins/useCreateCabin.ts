import { createCabin as apiCreateCabin } from '@/services/apiCabins'
import { useMutation } from '@tanstack/vue-query'

export function useCreateCabin() {
  const {
    mutate: createCabin,
    isLoading: isCreating,
    error: errorCreateCabin
  } = useMutation({
    mutationFn: apiCreateCabin,
    onSuccess: () => {
      console.log('new cabin create')
    }
  })

  return { isCreating, createCabin, errorCreateCabin }
}

import { getCabins } from '@/services/apiCabins'
import { useQuery } from '@tanstack/vue-query'
import { FETCH_CABINS } from '@/keys/vue-query-keys'

export function useCabins() {
  const {
    isLoading,
    data: cabins,
    error
  } = useQuery({
    queryKey: [FETCH_CABINS],
    queryFn: getCabins
  })

  return { isLoading, cabins, error }
}

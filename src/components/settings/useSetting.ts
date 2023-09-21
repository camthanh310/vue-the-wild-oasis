import { useQuery } from '@tanstack/vue-query'
import { FETCH_SETTINGS } from '@/keys/vue-query-keys'
import { getSettings } from '@/services/apiSettings'

export function useSetting(settingId: number) {
  const {
    isLoading,
    error,
    data: settings
  } = useQuery({
    queryKey: [FETCH_SETTINGS, settingId],
    queryFn: () => getSettings(settingId)
  })

  return { isLoading, error, settings }
}

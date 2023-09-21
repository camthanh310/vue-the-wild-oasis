import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { updateSetting as apiUpdateSetting } from '@/services/apiSettings'
import type { SettingValidation } from '@/types/Setting'
import { useToast } from 'vue-toastification'
import { FETCH_SETTINGS } from '@/keys/vue-query-keys'

export function useUpdateSetting() {
  const queryClient = useQueryClient()
  const toast = useToast()

  const { isLoading: isUpdating, mutate: updateSetting } = useMutation({
    mutationFn: apiUpdateSetting,
    onSuccess: () => {
      toast.success('Setting successfully edited')

      queryClient.invalidateQueries({
        queryKey: [FETCH_SETTINGS, 1]
      })
    },
    onError: (err: any) => {
      const errorResponse = err as SettingValidation
      if (!errorResponse?.isValidationError()) {
        toast.error(errorResponse?.getErrorMessage())
      }
    }
  })

  return { isUpdating, updateSetting }
}

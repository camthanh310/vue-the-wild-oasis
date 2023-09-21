import http from '@/plugins/axios'
import { SettingValidation, type SettingResponse } from '@/types/Setting'

export async function getSettings(id: number): Promise<SettingResponse | undefined> {
  try {
    const response = await http.get(`/settings/${id}`)
    return response.data.data
  } catch (error: any) {
    throw new SettingValidation(error)
  }
}

export async function updateSetting({
  setting,
  id
}: {
  setting: SettingResponse
  id: number | string
}): Promise<SettingResponse | undefined> {
  try {
    const response = await http.patch(`/settings/${id}/update`, setting)
    return response.data.data
  } catch (error: any) {
    throw new SettingValidation(error)
  }
}

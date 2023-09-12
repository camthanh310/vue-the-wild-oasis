import http from '@/plugins/axios'
import { CabinValidation, type CabinResponse, type CabinData } from '@/types/Cabin'

export async function createCabin(newCabin: CabinData): Promise<CabinResponse | undefined> {
  try {
    const form = new FormData()

    form.append('name', newCabin.name)
    form.append('max_capacity', newCabin.max_capacity.toString())
    form.append('price', newCabin.price.toString())
    form.append('discount', newCabin.discount.toString())
    form.append('description', newCabin.description)
    form.append('image', newCabin?.image || '')

    const response = await http.post('/cabins/create', form, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    return response.data.data
  } catch (error: any) {
    throw new CabinValidation(error)
  }
}

export async function getCabins(): Promise<Array<CabinResponse> | undefined> {
  try {
    const response = await http.get('/cabins/index')
    return response.data.data
  } catch (error: any) {
    throw new CabinValidation(error)
  }
}

export async function deleteCabin(cabinId: number | string): Promise<CabinResponse | undefined> {
  try {
    const response = await http.delete(`/cabins/${cabinId}/delete`)
    return response.data.data
  } catch (error: any) {
    throw new CabinValidation(error)
  }
}

export async function replicateCabin(cabinId: number | string): Promise<CabinResponse | undefined> {
  try {
    const response = await http.post(`/cabins/${cabinId}/replicate`)
    return response.data.data
  } catch (error: any) {
    throw new CabinValidation(error)
  }
}

export async function updateCabin({
  updateCabin,
  cabinId
}: {
  updateCabin: CabinData
  cabinId: number | string
}): Promise<CabinResponse | undefined> {
  try {
    const form = new FormData()
    console.log(updateCabin)
    form.append('name', updateCabin.name)
    form.append('price', updateCabin.price.toString())
    form.append('discount', updateCabin.discount.toString())
    form.append('max_capacity', updateCabin.max_capacity.toString())
    form.append('description', updateCabin.description)
    form.append('image', updateCabin?.image || '')
    form.append('_method', 'PATCH')

    const response = await http.post(`/cabins/${cabinId}/update`, form, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    return response.data.data
  } catch (error: any) {
    throw new CabinValidation(error)
  }
}

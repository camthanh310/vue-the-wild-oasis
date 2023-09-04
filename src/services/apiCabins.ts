import http from '@/plugins/axios'
import { CabinValidation, type CabinResponse, type CreateCabin } from '@/types/Cabin'

export async function createCabin(newCabin: CreateCabin): Promise<CabinResponse | undefined> {
  try {
    const form = new FormData()

    form.append('name', newCabin.name)
    form.append('max_capacity', newCabin.max_capacity.toString())
    form.append('price', newCabin.price.toString())
    form.append('discount', newCabin.discount.toString())
    form.append('description', newCabin.description)
    form.append('image', newCabin?.image || '')

    const response = await http.post('/cabins/create', form)
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

import type { ValidationError } from './Validation'

export interface CreateCabin {
  name: string
  max_capacity: number | string
  price: number | string
  discount: number
  description: string
  image?: File | string
}

export interface CabinResponse {
  id: number
  max_capacity: number
  price: number
  discount: number
  description: string
  image_url: string
}

export interface CabinValidationErrorResponse {
  name: Array<string>
  description: Array<string>
  max_capacity: Array<string>
  price: Array<string>
  discount: Array<string>
  image: Array<string>
}

export class CabinValidation {
  constructor(public validationError: ValidationError<CabinValidationErrorResponse>) {}
}

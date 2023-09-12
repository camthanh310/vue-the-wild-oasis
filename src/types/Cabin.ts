import type { ValidationError } from './Validation'

export interface CabinData {
  name: string
  max_capacity: number | string
  price: number | string
  discount: number
  description: string
  image?: File | string
}

export interface CabinResponse {
  id: number
  name: string
  max_capacity: number
  price: number
  discount: number
  description: string
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

  getValidationErrors(): CabinValidationErrorResponse {
    return this.validationError.response.data.errors
  }

  isValidationError(): boolean {
    return this.validationError.response.status === 422
  }

  getErrorMessage(): string {
    return this.validationError.response.data.message ?? 'Something went wrong'
  }
}

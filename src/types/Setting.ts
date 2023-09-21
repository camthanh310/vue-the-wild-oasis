import type { ValidationError } from './Validation'

export type Setting =
  | 'min_booking_length'
  | 'max_booking_length'
  | 'max_guest_per_booking'
  | 'breakfast_price'

export interface SettingResponse {
  id: number
  min_booking_length: number
  max_booking_length: number
  max_guest_per_booking: number
  breakfast_price: number
}

export interface SettingValidationErrorResponse {
  min_booking_length: Array<string>
  max_booking_length: Array<string>
  max_guest_per_booking: Array<string>
  breakfast_per_price: Array<string>
}

export class SettingValidation {
  constructor(public validationError: ValidationError<SettingValidationErrorResponse>) {}

  getValidationErrors(): SettingValidationErrorResponse {
    return this.validationError.response.data.errors
  }

  isValidationError(): boolean {
    return this.validationError.response.status === 422
  }

  getErrorMessage(): string {
    return this.validationError.response.data.message ?? 'Something went wrong'
  }
}

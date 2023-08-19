import type { AxiosError, AxiosResponse } from 'axios'

interface ValidationResponse<TError = Record<string, Array<string>>> extends AxiosResponse {
  status: 422
  data: {
    message?: string
    errors: TError
  }
}

export interface ValidationError<TError> extends AxiosError {
  response: ValidationResponse<TError>
}

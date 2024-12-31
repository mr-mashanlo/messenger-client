export interface ErrorResponseType {
  code: number,
  type: string,
  name: string,
  message: string
}

export interface ErrorZodType {
  validation: string,
  message: string
}
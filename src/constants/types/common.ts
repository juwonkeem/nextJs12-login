export type AlertType = {
  message: string
  OkCallback?(): void
  CancelCallback?(): void
}

export type ApiResponse<T> = {
  code: string
  message: string
  data: T
}

export interface IUpdateHandler {
  handleUpdate(): void
  getDeltaTime: number
  initUpdateLoop(): void
  reset(): void
}

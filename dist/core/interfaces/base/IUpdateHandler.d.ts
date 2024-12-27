export interface IUpdateHandler {
    handleUpdate(): void;
    getDeltaTime: number;
    reset(): void;
}

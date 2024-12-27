/**
 * TaskManager is a class that manages tasks that are resolved after a certain amount of time and binded to game loop.
 */
export declare class TaskManager {
    private static _idCounter;
    private static resolvers;
    static task(ms: number): Promise<void>;
    static update(deltaTime: number): void;
}

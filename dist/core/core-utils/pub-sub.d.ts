/**
 * Create a custom event class that extends EventBase
 */
export declare class EventBase {
    args: any[];
    constructor(...args: any[]);
}
/**
 * Subscribe to an custom event witch is a class that extends EventBase
 * @param eventClass
 * @param handler
 */
export declare function subscribe<T extends EventBase>(eventClass: {
    new (...args: any[]): T;
}, handler: (...args: any[]) => void): {
    unsubscribe: () => void;
};
/**
 * Publish a custom event
 * @param event
 */
export declare function publish(event: EventBase): void;

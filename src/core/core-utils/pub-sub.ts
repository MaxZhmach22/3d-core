/**
 * Create a custom event class that extends EventBase
 */
export class EventBase {
  args: any[]
  constructor(...args: any[]) {
    this.args = args
  }
}

/**
 * Subscribe to an custom event witch is a class that extends EventBase
 * @param eventClass
 * @param handler
 */
export function subscribe<T extends EventBase>(
  eventClass: { new (...args: any[]): T },
  handler: (...args: any[]) => void,
) {
  const sugar = (event: CustomEvent) => {
    handler(...event.detail)
  }
  // @ts-expect-error no type for CustomEvent
  document.addEventListener(eventClass.name, sugar, { passive: true })
  return {
    // @ts-expect-error no type for CustomEvent
    unsubscribe: () => document.removeEventListener(eventClass.name, sugar),
  }
}

/**
 * Publish a custom event
 * @param event
 */
export function publish(event: EventBase) {
  const ev = new CustomEvent(event.constructor.name, {
    detail: event.args,
  })
  document.dispatchEvent(ev)
}

import { ApplicationEventData } from "./ApplicationEventData";

/**
 * Provides functions to interact with an event.
 */
export interface ApplicationEventHelper {
    /**
     * Gets an object containing the old and new values of the changed field.
     * 
     * @returns An object containing the new and old values of the changed field.
     */
    getData(): ApplicationEventData;
    /**
     * Allows an event to proceed.
     * 
     * @remarks
     * This functions requires the intercept option to be enabled.
     * ```typescript
     * client.events.on("event.name", eventCallback, {intercept: true});     
     * ```
     */
    done(): void;

    /**
     * Prevents an event from completing.
     * @param message - The error message to pass to the listeners.
     * 
     * @remarks
     * This functions requires the intercept option to be enabled.
     * ```typescript
     * client.events.on("event.name", eventCallback, {intercept: true});     
     * ```
     */
    fail(message: string): void;
}

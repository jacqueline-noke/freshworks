/**
 * Represents the data of an application event.
 */
export interface ApplicationEventData {
    /**
     * Gets the previous value of the data.
     */
    old: Record<string, any>;
    /**
     * Gets the current value of the data.
     */
    new: Record<string, any>;
}

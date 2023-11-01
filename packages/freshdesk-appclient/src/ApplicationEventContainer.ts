import { ApplicationEventHelper } from "./ApplicationEventHelper";

/**
 * Represents an application client event.
 */
export interface ApplicationEventContainer {
    /**
     * A helper object to interact with the event.
     */
    readonly helper: ApplicationEventHelper;
}
import { ApplicationEventContainer } from "./ApplicationEventContainer";
import { ApplicationEventOptions } from "./ApplicationEventOptions";

export interface ApplicationEventApi {
    on(event: string, callback: (payload: ApplicationEventContainer) => void, options: ApplicationEventOptions): void;
    on(event: string, callback: (payload: ApplicationEventContainer) => void): void;
}
export type * from './ApplicationClient';
export type * from './ApplicationDataApi';
export type * from './ApplicationDataStoreApi';
export type * from './ApplicationDataType';
export type * from './ApplicationDataTypes';
export type * from './ApplicationEventApi';
export type * from './ApplicationEventContainer';
export type * from './ApplicationEventData';
export type * from './ApplicationEventHelper';
export type * from './ApplicationEventOptions';
export type * from './DataStoreSetCondition';
export type * from './DataStoreSetOptions';
export type * from './DataTypes';
export type * from './FreshdeskApplication';
import { FreshdeskApplication } from "./FreshdeskApplication";

declare global {
    interface Window {
        /**
         * Represents a global instance of the Freshdesk application object.
         */
        readonly app: FreshdeskApplication
    }
}
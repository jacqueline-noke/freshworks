import { ApplicationDataTypes } from "./ApplicationDataTypes";
import { DataTypesMap } from "./DataTypes/DataTypesMap";

/**
 * Provides a data type for the specified key.
 */
export type ApplicationDataType<Key extends ApplicationDataTypes | string> = Key extends ApplicationDataTypes ? {
    [Page in keyof DataTypesMap]: Key extends keyof DataTypesMap[Page] ?
    Pick<DataTypesMap[Page], Key> & {
        /**
         * Represents the kind of data.
         */
        kind: Key;
        /**
         * Represents the page(s) the data is available on.
         */
        page: Page;
    } : never;
}[keyof DataTypesMap] : {
    [K in Key]: Record<string, any>;
} & {
    /**
     * Represents the kind of data.
     */
    type: Key;
    /**
     * Represents the page(s) the data is available on.
     */
    page: "unknown";
};
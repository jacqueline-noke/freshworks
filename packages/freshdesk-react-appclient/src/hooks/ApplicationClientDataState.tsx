import { ApplicationDataType } from "@byteassign/freshdesk-appclient";

export declare interface ApplicationClientDataState<T extends string> {
    data?: ApplicationDataType<T> | null;
    loading: boolean;
    error: Error | null;
}
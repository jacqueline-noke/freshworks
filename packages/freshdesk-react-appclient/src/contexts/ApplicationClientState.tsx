import { ApplicationClient } from "@byteassign/freshdesk-appclient";

export declare interface ApplicationClientState {
    client: ApplicationClient | null;
    loading: boolean;
    error?: Error;
}
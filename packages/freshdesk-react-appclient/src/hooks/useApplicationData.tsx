import { ApplicationDataTypes } from "@byteassign/freshdesk-appclient";
import { useEffect, useState } from "react";
import { ApplicationClientDataState } from "./ApplicationClientDataState";
import { useApplicationClient } from "./useApplicationClient";

const initialValue = {
    data: null,
    loading: false,
    error: null
}

export function useApplicationData<T extends string>(name: T): ApplicationClientDataState<T>;
export function useApplicationData<T extends ApplicationDataTypes>(name: T): ApplicationClientDataState<T>;
export function useApplicationData<T extends string>(name: T): ApplicationClientDataState<T> {
    const context = useApplicationClient();

    if (!context) {
        throw new Error("useDataMethod must be used within a FreshworksAppClientProvider.");
    }

    const [state, setState] = useState<ApplicationClientDataState<T>>(initialValue);

    useEffect(() => {
        let isMounted = true;

        if (!context || !context.client){
            return;
        }

        const getData = async () => {
            setState(() => ({ ...initialValue, loading: true }));

            try {
                const data = await context.client!.data.get(name);
                if (isMounted) {
                    setState(() => ({ ...initialValue, data }));
                }
            }
            catch (error: any) {
                if (isMounted) {
                    setState(() => ({ ...initialValue, error }));
                }
            }
        };
        getData();

        return () => {
            isMounted = false;
        };
    }, [name, context]);

    return state;
}
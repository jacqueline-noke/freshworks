import { ApplicationDataType, ApplicationDataTypes } from "@byteassign/freshdesk-appclient";
import { useContext, useEffect, useState } from "react";
import { ApplicationClientContext } from "../context/ApplicationClientContext";
import { USE_APPLICATIONDATA_ERROR } from "./constants";

interface ApplicationDataProps<T extends string> {
    data?: ApplicationDataType<T> | null;
    loading: boolean;
    error: Error | null;
}

const initialValue = {
    data: null,
    loading: false,
    error: null
}


export function useApplicationData<T extends string>(source: T): ApplicationDataProps<T>;
export function useApplicationData<T extends ApplicationDataTypes>(source: T): ApplicationDataProps<T>;
export function useApplicationData<T extends string>(source: T): ApplicationDataProps<T> {
    const context = useContext(ApplicationClientContext);

    if (!context) {
        throw new Error(USE_APPLICATIONDATA_ERROR);
    }

    const [state, setState] = useState<ApplicationDataProps<T>>(initialValue);

    useEffect(() => {
        let isMounted = true;

        if (!context.client) {
            return;
        }

        const getData = async () => {
            setState(() => ({ ...initialValue, loading: true }));

            try {
                const data = await context.client!.data.get(source);
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
    }, [name, context.client]);

    return state;
}
import { FreshdeskApplication } from "@byteassign/freshdesk-appclient";
import React, { PropsWithChildren, useLayoutEffect, useState } from "react";
import { ApplicationClientContext, ApplicationClientState } from "../contexts";

const initialState = {
    client: null,
    loading: false
};

/**
 * Represents the Freshdesk application client provider.
 */
export const ApplicationClientProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [state, setState] = useState<ApplicationClientState>(initialState);

    
    useLayoutEffect(() => {
        let isMounted = true;

        const getClient = async () => {
            setState(() => ({
                ...initialState,
                loading: true
            }));

            try {
                const app = await loadAppclientScript();
                const client = await app.initialized();

                if (isMounted) {
                    setState(() => ({
                        ...initialState,
                        client: client
                    }));
                }
            }
            catch (error: any) {
                if (isMounted) {
                    setState(() => ({
                        ...initialState,
                        error: error
                    }));
                }
            }
        }

        getClient();

        return (() => {
            isMounted = false;
        })
    }, []);

    return (
        <ApplicationClientContext.Provider value={state}>
            {children}
        </ApplicationClientContext.Provider>)
}

function loadAppclientScript(): Promise<FreshdeskApplication> {
    if ((typeof window.app !== 'undefined' || window.app !== 'null')) {
        if (typeof window.app.initialized === 'function') {
            return new Promise<FreshdeskApplication>((resolve) => resolve(window.app));
        }
        throw new Error("Invalid platform. Unable to locate `initialized()` function.");
    }

    var script = document.createElement('script') as HTMLScriptElement;
    script.src = '{{{appclient}}}';
    script.async = true;

    document.head.appendChild(script);

    return new Promise<FreshdeskApplication>((resolve, reject) => {
        script.addEventListener('load', () => {
            resolve(window.app);
        });

        script.addEventListener('error', (error) => {
            reject(error);
        });
    })
}

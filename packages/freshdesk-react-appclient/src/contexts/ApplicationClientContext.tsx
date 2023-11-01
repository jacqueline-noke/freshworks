import { createContext } from "react";
import { ApplicationClientState } from "./ApplicationClientState";

export const ApplicationClientContext = createContext<ApplicationClientState>({
    client: null,    
    loading: false    
});
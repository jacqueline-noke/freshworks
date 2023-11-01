import { useContext } from "react";
import { ApplicationClientContext } from "../contexts";

export function useApplicationClient() {
    return useContext(ApplicationClientContext);
}
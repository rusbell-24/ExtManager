import { useContext } from "react";
import { ExtensionsContext } from "./extensions";

export const useExtensions = () => {
    const context = useContext(ExtensionsContext);
    if(!context) {
        throw new Error("useExtensions must be used inside ExtensionsProvider");
    }
    return context;
}

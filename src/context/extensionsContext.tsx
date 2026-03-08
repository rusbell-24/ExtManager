import { type ReactNode, useState } from "react";
import type { CardType } from "../types/cardType";
import data from "../../data.json"
import { ExtensionsContext, type Filter } from "./extensions";



export const ExtensionsProvider = ({ children }: {children: ReactNode }) => {
    const [filter, setFilter] = useState<Filter>("All")
    const [extensions, setExtensions] = useState<CardType[]>(data)

    return (
        <ExtensionsContext.Provider
            value={{filter, setFilter, extensions, setExtensions}}
        >
            {children}
        </ExtensionsContext.Provider>
    )
};


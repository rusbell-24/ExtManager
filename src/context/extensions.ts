import { createContext } from "react";
import type {Dispatch, SetStateAction} from "react"
import type { CardType } from "../types/cardType";

export type Filter = "All" | "Active" | "Inactive";

export type ExtensionContextType = {
    filter: Filter,
    setFilter: Dispatch<SetStateAction<Filter>>,
    extensions: CardType[],
    setExtensions: Dispatch<SetStateAction<CardType[]>>,
}

export const ExtensionsContext = createContext<ExtensionContextType | null>(null);



import { createContext } from "react";
import type { Dispatch } from "react";

export type FavoriteItem = {
    id: string | number;
};

export type FavoriteAction =
    | { type: "Add"; payload: { id: string | number } }
    | { type: "Delete"; payload: { id: string | number } };

export const FavoriteContext = createContext<FavoriteItem[]>([]);

export const FavoriteDispatchContext =
    createContext<Dispatch<FavoriteAction> | null>(null);



export const CartContext = createContext(null);

export const CartDispatchContext = createContext(null);
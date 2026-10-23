
import { useReducer, type Context, type ReactNode } from "react";
import {CartContext, CartDispatchContext, FavoriteContext, FavoriteDispatchContext,} from "../contexts/cartContext";
import cartReducer from "../reducers/cartReducer";
import favoriteReducer from "../reducers/favoriteReducer";

export default function CartProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [cart, dispatch] = useReducer(cartReducer, []);
    const [favorites, favoriteDispatch] = useReducer(favoriteReducer, []);
    const TypedCartContext = CartContext as Context<typeof cart | null>;
    const TypedCartDispatchContext = CartDispatchContext as Context<typeof dispatch | null>;

    return (
        <TypedCartContext value={cart}>
            <TypedCartDispatchContext value={dispatch}>
                <FavoriteContext value={favorites}>
                    <FavoriteDispatchContext value={favoriteDispatch}>
                      {children}
                    </FavoriteDispatchContext>
                </FavoriteContext>
            </TypedCartDispatchContext>
        </TypedCartContext>
    );
}

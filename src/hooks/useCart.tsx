
import { useContext } from "react";
import { CartContext } from "../contexts/cartContext";

export default function useCart() {
    const cart = useContext(CartContext);

    return cart;
}
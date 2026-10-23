import { useContext } from "react";
import { CartDispatchContext } from "../contexts/cartContext";

export default function useDispatchCart() {
    const dispatch = useContext(CartDispatchContext);


    return dispatch;

}



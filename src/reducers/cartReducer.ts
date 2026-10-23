

export default function cartReducer(
    cart: { id: string | number; quantity: number }[],
    action: { type: string; payload: { id: string | number } }
) {

    if (action.type == "Add") {
        const existingItem = cart.some(item => item.id === action.payload.id);

        if (existingItem) return cart;

        return [
            ...cart,

            {
                id: action.payload.id,
                quantity: 1,
            }
        ]
    } 


    else if (action.type == "Delete") {
        return cart.filter(item => item.id !== action.payload.id);
    }

    else if (action.type == "Increment") {
        return cart.map(item => {
            if (item.id == action.payload.id) {
                return {
                    ...item,
                    quantity: item.quantity + 1,
                }
            }
            return item;
        })
    }

    else if (action.type == "Decrement") {
        return cart.map(item => {
            if (item.id == action.payload.id) {
                return {
                    ...item,
                    quantity: item.quantity == 1 ? 1 : item.quantity - 1,
                }
            }
            return item;
        })
    }

    else {
        return cart;
    }
}

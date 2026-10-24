
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { products } from "../data/products";
import useCart from "./hooks/useCart";
import useDispatchCart from "./hooks/useDispatchCart";
import type { CartItem } from "../types/cart.ts";
import { toast } from "react-toastify";

type Props = {
    onHide: () => void;
}

type CartAction = {
    type: "Increment" | "Decrement" | "Delete";
    payload: {
        id: number | string;
    };
};

export default function CartPopup({ onHide }: Props) {
    
    const cartItems = useCart() as CartItem[] | null;
    const dispatch = useDispatchCart() as ((action: CartAction) => void) | null;
    
    if (cartItems == null) {
        return <h2>No Item Found</h2>

}

    // Generate Cart Products

    const cartProducts = cartItems.map((item) => {
        const product = products.find((product) => product.id === item.id);

        if (!product) return null;

        return {
            ...product,
            quantity: item.quantity,
        };
    }).filter((item) => item !== null);

    const notify = (message: string) => toast.success(message);



    const subtotal = cartProducts.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm">

            {/* Cart Popup */}
            <div className="flex max-h-[70vh] w-full max-w-md flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
                    <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                            <ShoppingBag size={22} />
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-slate-900">
                                Shopping Cart
                            </h2>
                            <p className="text-sm text-slate-500">
                                {cartProducts.length} products in your cart
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={onHide}
                        type="button"
                        aria-label="Close cart"
                        className="flex h-9 w-9 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-900"
                    >
                        <X size={21} />
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 space-y-5 overflow-y-auto px-6 py-3">
                    {cartProducts.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center gap-4 border-b border-slate-100 pb-5 last:border-0 last:pb-0"
                        >
                            {/* Product Image */}
                            <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-slate-50 p-2">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-contain"
                                />
                            </div>

                            {/* Product Information */}
                            <div className="min-w-0 flex-1">
                                <h3 className="line-clamp-2 text-sm font-semibold text-slate-800">
                                    {item.title}
                                </h3>

                                <p className="mt-1 text-lg font-bold text-indigo-600">
                                    ${item.price.toLocaleString()}
                                </p>

                                <div className="mt-3 flex items-center justify-between">

                                    {/* Quantity Controls */}
                                    <div className="flex items-center overflow-hidden rounded-lg border border-slate-200">
                                        <button
                                            onClick={() => dispatch?.({
                                                type: "Decrement",
                                                payload: {
                                                    id: item.id,
                                                }
                                          })}
                                            type="button"
                                            aria-label="Decrease quantity"
                                            className="flex h-8 w-8 items-center justify-center text-slate-600 hover:bg-slate-50"
                                        >
                                            <Minus size={14} />
                                        </button>

                                        <span className="flex h-8 w-8 items-center justify-center border-x border-slate-200 text-sm font-semibold text-slate-800">
                                            {item.quantity}
                                        </span>

                                        <button
                                            onClick={() => dispatch?.({
                                                type: "Increment",
                                                payload: {
                                                    id: item.id,
                                                }
                                           })}
                                            type="button"
                                            aria-label="Increase quantity"
                                            className="flex h-8 w-8 items-center justify-center text-slate-600 hover:bg-slate-50"
                                        >
                                            <Plus size={14} />
                                        </button>
                                    </div>

                                    {/* Remove Button */}
                                    <button
                                        onClick={() => {
                                            dispatch?.({
                                                type: "Delete",
                                                payload: {
                                                    id: item.id,
                                                },
                                            });
                                            notify(`${item.title} removed from cart`);
                                        }}
                                        type="button"
                                        aria-label={`Remove ${item.title}`}
                                        className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-red-50 hover:text-red-500"
                                    >
                                        <Trash2 size={17} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Cart Footer */}
                <div className="border-t border-slate-100 bg-slate-50/70 px-6 py-5">




                    <div className="border-t border-slate-200 pt-3">
                        <div className="flex items-center justify-between">
                            <span className="text-base font-bold text-slate-900">
                                Total
                            </span>
                            <span className="text-2xl font-bold text-indigo-600">
                                ${subtotal.toLocaleString()}
                            </span>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    );
}

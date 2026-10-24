
import { ShoppingBag, Trash2, X } from "lucide-react";
import { products } from "../data/products";
import { useContext } from "react";
import { FavoriteContext, FavoriteDispatchContext } from "./contexts/cartContext";
import { toast } from "react-toastify";

type Props = {
    favoriteonHide: () => void;
};

export default function FavoriteCartPopup({ favoriteonHide }: Props) {
  
    const favoriteItems = useContext(FavoriteContext);
    const favoeiteDispatch = useContext(FavoriteDispatchContext);


    if (favoriteItems == null || favoeiteDispatch == null) {
        return <h2>No Item Found</h2>

    }

    // Generate Cart Products

const favoriteProducts = favoriteItems.map((item) => {
        const product = products.find(
            (product) => product.id === item.id
        );

        if (!product) return null;

        return product;
    })
        .filter((item) => item !== null);
    const notify = (message: string) => toast.success(message);


    // const subtotal = cartProducts.reduce((total, item) => total + item.price * item.quantity, 0);

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
                            {favoriteProducts.length} products in your favorites
                            {/* <p className="text-sm text-slate-500">
                                {cartProducts.length} products in your cart
                            </p> */}
                        </div>
                    </div>

                    <button
                        onClick={favoriteonHide}
                        type="button"
                        aria-label="Close cart"
                        className="flex h-9 w-9 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-900"
                    >
                        <X size={21} />
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 space-y-5 overflow-y-auto px-6 py-3">

                    {favoriteProducts.map((item) => (
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
                                    <div className="flex items-center overflow-hidden rounded-lg border border-slate-200">
                                                                
                                    </div> 
                                    <button onClick={() => {
                                        favoeiteDispatch({
                                            type: "Delete",
                                            payload: { id: item.id },
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
                            {/* <span className="text-2xl font-bold text-indigo-600">
                                ${subtotal.toLocaleString()}
                            </span> */}
                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
}

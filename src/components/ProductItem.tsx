import { Heart, ShoppingCart, Star } from 'lucide-react';
import type { Product } from '../../types/product';
import useDispatchCart from '../hooks/useDispatchCart';
import useCart from "../hooks/useCart";
import { toast } from "react-toastify";

import { useContext } from "react";
import {
  FavoriteContext,
  FavoriteDispatchContext,
} from "../contexts/cartContext";


export default function ProductItem({ product }: { product: Product }) {

    const favorites = useContext(FavoriteContext);
    const favoriteDispatch = useContext(FavoriteDispatchContext);

     const dispatch = useDispatchCart() as ((action: {
        type: "Add";
        payload: { id: Product["id"] };
    }) => void) | null;
    const cart = (typeof useCart === "function"
        ? (useCart as unknown as () => Product[] | undefined)()
        : undefined) as Product[] | undefined;

    const isAdded = cart?.some((item: { id: Product["id"] }) => item.id === product.id) ?? false;
    
    const isFavorite = favorites?.some(
        (item) => item.id === product.id);
    
    const notify = (message: string) => toast.success(message);

    return (
        <div
            key={product.id}
            className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >

            {/* Product Image */}
            <div className="relative flex h-60 items-center justify-center overflow-hidden bg-slate-100 p-6">

                <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    className="h-100% w-100% bg-cover object-contain transition-transform duration-500 group-hover:scale-110"/>

                {/* Wishlist Button */}
                <button
                    onClick={() => {
                        favoriteDispatch?.({
                            type: "Add",
                            payload: { id: product.id },
                        });
                        notify(`${product.title} added to wishlist`);
                    }}
                    type="button"
                    aria-label={`Add ${product.title} to wishlist`}
                    className={`absolute top-4 right-4 flex h-10 w-10 items-center justify-center
                        rounded-full bg-white shadow-sm transition-colors ${
                                    isFavorite ? "text-rose-500"
                            : "text-slate-500 hover:text-rose-500"}`}>
                    <Heart size={19} className={isFavorite ? "fill-rose-500" : ""} />
                </button>

            </div>

            {/* Product Details */}
            <div className="p-5">

                {/* Rating */}
                <div className="mb-3 flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                            key={star}
                            size={15}
                            className={
                                star <= product.rating
                                    ? "fill-amber-400 text-amber-400"
                                    : "fill-slate-100 text-slate-200"
                            }
                        />
                    ))}

                    <span className="ml-2 text-sm font-medium text-slate-500">
                        ({product.rating}.0)
                    </span>
                </div>

                {/* Product Title */}
                <h3 className="mb-3 line-clamp-2 min-h-12 text-base font-semibold leading-6 text-slate-800 transition-colors group-hover:text-indigo-600">
                    {product.title}
                </h3>

                {/* Price */}
                <div className="mb-5">
                    <span className="text-2xl font-bold text-slate-900">
                        ${product.price.toLocaleString()}
                    </span>
                </div>

                {/* Add to Cart Button */}
                <button
                    onClick={() => {
                        dispatch?.({
                            type: "Add",
                            payload: { id: product.id },
                        });
                        notify(`${product.title} added to cart`);
                    }}
                    type="button"
                   className={`flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold text-white transition-colors ${
                    isAdded
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-blue-600 hover:bg-blue-700"}`}>
                    <ShoppingCart size={19} />
                    {isAdded ? "Added to Cart" : "Add to Cart"}
                </button>

            </div>
        </div>
    )
}


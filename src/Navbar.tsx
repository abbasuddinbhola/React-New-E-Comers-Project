
import { Heart, ShoppingCart, Store } from "lucide-react";
import { useContext, useState } from "react";
import CartPopup from "./CartPopup";
import useCart from "./hooks/useCart";
import FavoriteCartPopup from "./FavoriteCartPopup";
import { FavoriteContext } from "./contexts/cartContext";


export default function Navbar() {

    const [show, setShow] = useState(false);
    const [favoriteShow, favoriteSetShow] = useState(false);
    const cart = useCart();
    const favorites = useContext(FavoriteContext)

    return (
        <>
            <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
                <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                    {/* Logo */}
                    <a href="/" className="flex items-center gap-2.5">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white">
                            <Store size={24} />
                        </div>

                        <span className="text-2xl font-bold tracking-tight text-slate-900">
                            Shop<span className="text-indigo-600">Nest.</span>
                        </span>
                    </a>

                    {/* Navigation Links */}
                    <div className="hidden items-center gap-8 md:flex">
                        <a
                            href="#home"
                            className="text-sm font-semibold text-indigo-600"
                        >
                            Home
                        </a>

                        <a
                            href="#products"
                            className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600"
                        >
                            Products
                        </a>

                        <a
                            href="#about"
                            className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600"
                        >
                            About Us
                        </a>

                        <a
                            href="#contact"
                            className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3">

                        {/* Wishlist Button */}
                        <button onClick={() => favoriteSetShow(true)}
                            type="button"
                            aria-label="Wishlist"
                            className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition-all hover:border-rose-200 hover:bg-rose-50 hover:text-rose-500"
                        >
                            <Heart size={21} />

                            <span className="absolute -top-2 -right-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-bold text-white">
                                {favorites ? favorites.length : 0}
                            </span>
                        </button>

                        {/* Cart Button */}
                        <button
                            onClick={() => setShow(true)}
                            type="button"
                            aria-label="Shopping Cart"
                            className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition-all hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                        >
                            <ShoppingCart size={21} />

                            <span className="absolute -top-2 -right-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-indigo-600 px-1 text-[10px] font-bold text-white">
                                {(cart as { length: number } | null)?.length ?? 0}
                            </span>
                        </button>

                    </div>
                </nav>
            </header>

            {/* Cart Popup Section */}
            {show && (
                <CartPopup
                    onHide={(() => setShow(false)) as never}
                />
            )}
            {favoriteShow && <FavoriteCartPopup favoriteonHide={() => favoriteSetShow(false)} />}
          
        </>
    );
}

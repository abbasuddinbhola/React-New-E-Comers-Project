import { ArrowRight, ShoppingBag, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950">
      {/* Background Image */}
      <img
        src="/banner-image.jpeg"
        alt="ShopNest shopping collection"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-slate-950/95 via-slate-950/75 to-slate-950/20" />

      {/* Hero Content */}
      <div className="mx-auto flex min-h-130 max-w-7xl items-center px-5 py-20 sm:px-8 sm:py-24 lg:min-h-155">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-indigo-200 backdrop-blur-sm">
            <Sparkles size={16} className="text-amber-400" />
            Discover Your Next Favorite
          </div>

          {/* Heading */}
          <h1 className="text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl">
            Shop Smarter.
            <br />
            Live <span className="text-indigo-400">Better.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Discover quality products, explore the latest trends, and
            find everything you love in one place. Your next great
            shopping experience starts here.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-600/25 transition duration-300 hover:-translate-y-1 hover:bg-indigo-500"
            >
              <ShoppingBag size={19} />
              Shop Now
              <ArrowRight size={18} />
            </a>

            <a
              href="#about"
              className="rounded-xl border border-white/25 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition duration-300 hover:border-white/50 hover:bg-white/10"
            >
              Explore More
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-300">
            <span>✓ Quality Products</span>
            <span>✓ Easy Shopping</span>
            <span>✓ Great Experience</span>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="h-1 w-full bg-linear-to-r from-indigo-600 via-violet-500 to-pink-500" />
    </section>
  );
}


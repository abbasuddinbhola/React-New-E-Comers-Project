import { Heart, ShoppingBag, Mail, ArrowRight, Share2, Camera, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <div>
     
    <footer className="bg-slate-950 text-slate-300">
      {/* Newsletter */}
      <div className="border-b border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Stay in the <span className="text-indigo-400">loop.</span>
            </h2>
            <p className="mt-2 max-w-lg text-sm leading-6 text-slate-400">
              Subscribe to get special offers, free giveaways, and
              the latest updates from ShopNest.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-md gap-2"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              aria-label="Email address"
              className="min-w-0 flex-1 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-500"
            />

            <button
              type="submit"
              className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
              Subscribe
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-14 sm:px-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <a href="/" className="inline-flex items-center gap-2">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/20">
              <ShoppingBag size={23} />
            </span>

            <span className="text-2xl font-extrabold tracking-tight text-white">
              Shop<span className="text-indigo-400">Nest</span>
            </span>
          </a>

          <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
            Discover products you love, enjoy a seamless shopping
            experience, and find something special every day.
          </p>

          <div className="mt-6 flex gap-3">
            {[
              { Icon: Share2, label: "Facebook" },
              { Icon: Camera, label: "Instagram" },
              { Icon: MessageCircle, label: "Twitter" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 transition hover:border-indigo-500 hover:bg-indigo-600 hover:text-white"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-base font-bold text-white">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            {["Home", "Shop", "About Us", "Contact Us"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="transition hover:pl-1 hover:text-indigo-400"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="mb-5 text-base font-bold text-white">
            Customer Service
          </h3>

          <ul className="space-y-3 text-sm">
            {[
              "My Account",
              "Shopping Cart",
              "Wishlist",
              "Shipping Information",
              "Return Policy",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="transition hover:pl-1 hover:text-indigo-400"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-base font-bold text-white">
            Get in Touch
          </h3>

          <p className="text-sm leading-7 text-slate-400">
            Have questions or need help? Our team is here to help
            you with your shopping experience.
          </p>

          <a
            href="mailto:support@shopnest.com"
            className="mt-5 inline-flex items-center gap-3 text-sm transition hover:text-indigo-400"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-indigo-400">
              <Mail size={18} />
            </span>
            support@shopnest.com
          </a>

          <div className="mt-5 flex items-center gap-2 text-sm text-slate-400">
            <Heart size={16} className="fill-rose-500 text-rose-500" />
            Made with care for our customers
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-center text-xs text-slate-500 sm:px-8 md:flex-row md:text-left">
          <p>
            © {new Date().getFullYear()} ShopNest. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-white">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>

    </div>
  )
}

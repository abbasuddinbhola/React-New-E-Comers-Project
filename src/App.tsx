
import { products } from "../data/products";
import Navbar from "./Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProductItem from "./components/ProductItem";


export default function App() {
  return (
    <>
   
          
      <Navbar />
      <Hero/>
      <section className="min-h-screen bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="mb-10 text-center">
            <span className="mb-3 inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-semibold text-indigo-600">
              Our Collection
            </span>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Explore Our Products
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-slate-500">
              Discover our collection of quality products at great prices.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>

        </div>
      </section>

    <Footer/>

    </>
  )
}
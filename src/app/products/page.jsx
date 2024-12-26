import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products";

export default function ProductsPage() {
  return (
    <main>
      <Navbar />
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Our Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

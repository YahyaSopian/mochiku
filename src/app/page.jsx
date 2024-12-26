import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

const dummyProducts = [
  {
    id: 1,
    name: "Mochi Matcha",
    description: "Soft and chewy mochi with matcha filling.",
    price: "3.99",
    image: "/images/mochi-matcha.jpg",
  },
  {
    id: 2,
    name: "Mochi Chocolate",
    description: "Rich chocolate-filled mochi.",
    price: "4.99",
    image: "/images/mochi-chocolate.jpg",
  },
  {
    id: 3,
    name: "Mochi Strawberry",
    description: "Fresh strawberry-flavored mochi.",
    price: "3.49",
    image: "/images/mochi-strawberry.jpg",
  },
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <section className="py-10 container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Best Mochi</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {dummyProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}

import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <Image src={product.image} alt={product.name} width={200} height={200} className="rounded-md mx-auto" />
      <h2 className="text-lg font-bold text-gray-800 mt-4">{product.name}</h2>
      <p className="text-gray-600 text-sm">{product.description}</p>
      <p className="text-yellow-600 font-bold mt-2">Rp {product.price.toLocaleString("id-ID")}</p>
      <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
    </div>
  );
}

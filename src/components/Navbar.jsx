import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-yellow-500">Mochiku</h1>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-gray-700 hover:text-yellow-500 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="text-gray-700 hover:text-yellow-500 transition duration-300">
              Products
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-700 hover:text-yellow-500 transition duration-300">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

import "./globals.css";

export const metadata = {
  title: "Mochiku - Delicious Mochi",
  description: "Discover the best handmade mochi at Mochiku!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}

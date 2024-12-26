export async function GET(request) {
  const products = [
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
    {
      id: 4,
      name: "Mochi Mango",
      description: "Sweet and tropical mango-flavored mochi.",
      price: "4.29",
      image: "/images/mochi-mango.jpg",
    },
  ];

  return new Response(JSON.stringify(products), {
    headers: { "Content-Type": "application/json" },
  });
}

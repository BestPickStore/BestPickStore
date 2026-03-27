"use client";

import { useState } from "react";

export default function Home() {
  const categories = [
    {
      name: "Tech Accessories",
      products: [
        {
          id: 1,
          name: "Smart Watch Box",
          price: "-29% $20.99",
          image: "/Watch.jpg",
          link: "https://amzn.to/4rQW58B",
        },
        {
          id: 2,
          name: "Wireless Earbuds",
          price: "-47% $12.99",
          image: "/EarBuds.jpg",
          link: "https://amzn.to/4c5pk2S",
        },
        {
          id: 3,
          name: "Powerbank",
          price: "$49.99",
          image: "/powerbank.jpg",
          link: "https://amzn.to/4s6rW5y",
        },
        {
          id: 4,
          name: "Bluetooth Speaker",
          price: "$49.95",
          image: "/Bluetooth Speaker.jpg",
          link: "https://amzn.to/4bNcKEe",
        },
      ],
    },
    {
      name: "Beauty & Skincare",
      products: [
        {
          id: 5,
          name: "Cream",
          price: "-46% $14.38",
          image: "/Cream.jpg",
          link: "https://amzn.to/4t6PRm1",
        },
        {
          id: 6,
          name: "Niacinamide Serum",
          price: "$17.99",
          image: "/Serum.jpg",
          link: "https://amzn.to/4tdm8YT",
        },
        {
          id: 7,
          name: "Sunscreen",
          price: "-33% $8.88",
          image: "/sunscreen.jpg",
          link: "https://amzn.to/4bP3GOW",
        },
        {
          id: 8,
          name: "Facial Cleanser",
          price: "-30% $10.46",
          image: "/facialcleanser.jpg",
          link: "https://amzn.to/4tacy95",
        },
      ],
    },
    {
      name: "Home & Kitchen Gadgets",
      products: [
        {
          id: 9,
          name: "Air Fryer",
          price: "$49.62",
          image: "/airfryer.jpg",
          link: "https://amzn.to/4dbr3Vw",
        },
        {
          id: 10,
          name: "Electric Kettle",
          price: "-15% $22.94",
          image: "/Kettle.jpg",
          link: "https://amzn.to/47RMmI0",
        },
        {
          id: 11,
          name: "Coffee Maker",
          price: "-17% $29.99",
          image: "/coffee maker.jpg",
          link: "https://amzn.to/4bMtNGt",
        },
        {
          id: 12,
          name: "Professional Blender",
          price: "-18% $89.98",
          image: "/Professional Blender.jpg",
          link: "https://amzn.to/4rYlaPc",
        },
      ],
    },
    {
      name: "Fashion & Accessories",
      products: [
        {
          id: 13,
          name: "Backpack",
          price: "$23.99",
          image: "/Backpack.jpg",
          link: "https://amzn.to/4sxInZj",
        },
        {
          id: 14,
          name: "Wallet",
          price: "$26.99",
          image: "/wallet.jpg",
          link: "https://amzn.to/4dLkNnr",
        },
        {
          id: 15,
          name: "Sunglasses",
          price: "$26.99",
          image: "/Sunglasses.jpg",
          link: "https://amzn.to/3NNvWcW",
        },
      ],
    },
    {
      name: "Books & Learning Guides",
      products: [
        {
          id: 16,
          name: "self-help Book",
          price: "-19% $16.14",
          image: "/self-help Book.jpg",
          link: "https://amzn.to/3NXKMO5",
        },
        {
          id: 17,
          name: "Reference Guide Pamphlet",
          price: "$8.95",
          image: "/reference guide.jpg",
          link: "https://amzn.to/47nNzXm",
        },
      ],
    },
  ];

  const [search, setSearch] = useState("");

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-5 md:px-16 lg:px-32 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-3">
  <img
    src="/bg.jpg" // your logo in public folder
    alt="BestPickStore Logo"
    className="h-10 w-10 object-contain" // adjust size as needed
  />
  <h1 className="text-2xl font-bold text-blue-600">BestPickStore</h1>
</div>
          <input
            type="text"
            placeholder="Search products..."
            className="border rounded-md px-3 py-1 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}np
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </nav>

     {/* Hero Section */}
<section className="bg-blue-600 text-white text-center py-16 px-5 relative">
  {/* Logo */}
  <img
    src="/bg.jpg"
    alt="BestPickStore Logo"
    className="mx-auto mb-6 w-24 h-24 object-contain rounded-full shadow-lg"
  />

  {/* Headline */}
  <h2 className="text-4xl font-bold mb-4">Welcome to BestPickStore</h2>

  {/* Subtitle */}
  <p className="text-lg mb-6">
    Discover the best deals on Tech, Skincare, Home Gadgets, Fashion & more!
  </p>

  {/* Call-to-Action Button */}
  <a
    href="#"
    className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition inline-block"
  >
    Shop Now
  </a>
</section>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-5 md:px-16 lg:px-32 py-10">
        {categories.map((category) => (
          <section key={category.name} className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 border-b-2 border-blue-600 inline-block pb-1">
              {category.name}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.products
                .filter((p) =>
                  p.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((product) => (
                  <div
                    key={product.id}
                    className="bg-white border rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 p-4 flex flex-col items-center"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-contain rounded-md"
                    />
                    <h3 className="mt-3 text-lg font-medium">{product.name}</h3>
                    <p className="font-bold mt-1">{product.price}</p>
                    <div className="flex items-center mt-2">
                      {/* Optional: add rating stars */}
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927C9.26 2.337 10.74 2.337 10.951 2.927l1.288 3.973a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.973c.211.59-.553 1.079-1.118.747l-3.38-2.454a1 1 0 00-1.176 0l-3.38 2.454c-.565.332-1.329-.157-1.118-.747l1.287-3.973a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.288-3.973z" />
                        </svg>
                      ))}
                    </div>
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 w-full"
                    >
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition-colors cursor-pointer">
                        Buy Now
                      </button>
                    </a>
                  </div>
                ))}
            </div>
          </section>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-white mt-16 py-6 shadow-inner text-center text-gray-600 text-sm">
        <p>© 2026 BestPickStore. All rights reserved.</p>
        <div className="flex justify-center mt-2 space-x-4">
          <a href="#" className="hover:text-blue-600 transition">Facebook</a>
          <a href="#" className="hover:text-blue-600 transition">Twitter</a>
          <a href="#" className="hover:text-blue-600 transition">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

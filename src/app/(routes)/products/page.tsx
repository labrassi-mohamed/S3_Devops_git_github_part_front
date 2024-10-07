import Image from "next/image";
import Link from "next/link";
import React from "react";

const products = [
  {
    id: 1,
    title: "Product 1",
    price: 29.99,
    image: "/images/image2.jpg",  
  },
  {
    id: 2,
    title: "Product 2",
    price: 49.99,
    image: "/images/image3.jpg",  
  },
  {
    id: 3,
    title: "Product 3",
    price: 39.99,
    image: "/images/image4.jpg",  
  },
  {
    id: 4,
    title: "Product 4",
    price: 19.99,
    image: "/images/image1.jpg",  
  },
  {
    id: 5,
    title: "Product 1",
    price: 29.99,
    image: "/images/image1.jpg",  
  },
  {
    id: 6,
    title: "Product 2",
    price: 49.99,
    image: "/images/image4.jpg",  
  },
  {
    id: 7,
    title: "Product 3",
    price: 39.99,
    image: "/images/image1.jpg", 
  },
  {
    id: 8,
    title: "Product 4",
    price: 19.99,
    image: "/images/image2.jpg",  
  },
  {
    id: 9,
    title: "Product 21",
    price: 49.99,
    image: "/images/image3.jpg",  
  },
  {
    id: 9,
    title: "Product 2",
    price: 49.99,
    image: "/placeholder-product.jpg", 
  },
  {
    id: 10,
    title: "Product 3",
    price: 39.99,
    image: "/placeholder-product.jpg", 
  },
  {
    id: 11,
    title: "Product 4",
    price: 19.99,
    image: "/placeholder-product.jpg", 
  },
];

const page = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">All Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg">
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h2 className="text-lg font-semibold mt-4 text-gray-800">
                {product.title}
              </h2>
              <p className="text-gray-500 mt-1">${product.price.toFixed(2)}</p>

              {/* Updated Link without <a> tag */}
              <Link
                href={`/product/${product.id}`}
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;

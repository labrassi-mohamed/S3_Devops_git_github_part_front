import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white my-10 rounded-lg shadow-lg">
      <div className="flex flex-col lg:flex-row">
        {/* Product Image */}
        <div className="flex-1">
          <Image
            src="/placeholder-product.jpg"
            alt="Product Image"
            width={400}
            height={400}
            className="w-full rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 lg:ml-10 mt-6 lg:mt-0">
          <h1 className="text-3xl font-bold text-gray-800">Product Title</h1>
          <p className="text-gray-500 mt-2">Brand Name</p>
          <div className="mt-4">
            <span className="text-xl font-semibold text-red-600">$49.99</span>
            <span className="text-sm text-gray-500 line-through ml-2">
              $59.99
            </span>
          </div>
          <div className="mt-4">
            <span className="text-green-500 font-semibold">In Stock</span>
          </div>

          {/* Product Description */}
          <div className="mt-6">
            <h2 className="text-lg font-medium text-gray-700">
              Product Description
            </h2>
            <p className="text-gray-600 mt-2">
              This is a great product that provides many benefits to the user.
              It is crafted with high-quality materials and offers excellent
              value.
            </p>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="mt-6">
            <div className="flex items-center">
              <label htmlFor="quantity" className="mr-4 text-gray-700">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                defaultValue="1"
                min="1"
                className="border border-gray-300 p-2 rounded w-16"
              />
            </div>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <a href="#" className="text-xl font-bold">
          ShopLogo
        </a>
        <div className="space-x-4">
          <a href="#" className="text-gray-600">
            Home
          </a>
          <a href="#" className="text-gray-600">
            Products
          </a>
          <a href="#" className="text-gray-600">
            Cart
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

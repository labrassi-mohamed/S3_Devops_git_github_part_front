import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Footer Links */}
          <div>
            <h4 className="text-xl font-bold mb-2">ShopLogo</h4>
            <p className="text-sm">1234 Market Street, San Francisco, CA</p>
            <p className="text-sm">Email: support@shoplogo.com</p>
          </div>

          {/* Footer Navigation */}
          <div className="mt-4 lg:mt-0 space-y-2">
            <a href="#" className="block text-sm hover:text-gray-400">
              About Us
            </a>
            <a href="#" className="block text-sm hover:text-gray-400">
              Contact
            </a>
            <a href="#" className="block text-sm hover:text-gray-400">
              Privacy Policy
            </a>
            <a href="#" className="block text-sm hover:text-gray-400">
              Terms of Service
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-4 lg:mt-0 space-x-4">
            <a href="#" className="text-sm hover:text-gray-400">
              Facebook
            </a>
            <a href="#" className="text-sm hover:text-gray-400">
              Twitter
            </a>
            <a href="#" className="text-sm hover:text-gray-400">
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-gray-400">
          &copy; 2024 ShopLogo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

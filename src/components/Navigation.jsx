import React from 'react';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-[#bfb800]">eShopex</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#registro" className="bg-[#dad100] hover:bg-[#f6ea00] text-white px-4 py-2 rounded-md transition-colors">
              Registrarse
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
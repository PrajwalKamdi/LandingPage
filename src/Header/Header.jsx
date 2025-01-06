import React from "react";

function Header() {
  return (
    <header className="z-10 px-20 py-5 text-white">
      <nav className="flex justify-between items-center">
        <h1 className="text-5xl font-serif text-red-600">Tesla</h1>
        <ul className="flex gap-10">
          <li className="py-1 px-5 duration-500 hover:cursor-pointer  hover:text-black hover:bg-gray-50 rounded-3xl">
            Home
          </li>
          <li className="py-1 px-5 duration-500 hover:cursor-pointer  hover:text-black hover:bg-gray-50 rounded-3xl">
            Our Service
          </li>
          <li className="py-1 px-5 duration-500 hover:cursor-pointer  hover:text-black hover:bg-gray-50 rounded-3xl">
            Testomonials
          </li>
          <li className="py-1 px-5 duration-500 hover:cursor-pointer  hover:text-black hover:bg-gray-50 rounded-3xl">
            Contact Us
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

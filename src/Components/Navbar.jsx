import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [navItems, setNavItems] = useState([
    "Home",
    "Categories",
    "Services",
    "About",
    "Blogs",
  ]);
  return (
    <div className=" flex justify-between items-center px-6 h-20 text-white  bg-black/30">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-25" />
      </div>

      <div className="flex space-x-6">
        {navItems.map((item) => (
          <a key={item} href="" className="hover:text-yellow-300 transition">
            {item}
          </a>
        ))}
      </div>

      <div className="flex space-x-4">
        <button className="border border-white px-4 py-1  rounded-full hover:bg-white hover:text-black transition">
          Login
        </button>
        <button className="border border-white bg-yellow-400 text-black px-4 py-1  rounded-full hover:bg-yellow-500 hover:text-white transition">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;

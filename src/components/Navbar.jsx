import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setnav] = useState(false);

  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 ">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">Logo</h1>
      <ul className="hidden md:flex">
        <li className="p-4">
          <a href={"#home"}>Home</a>
        </li>
        <li className="p-4">
          <a href={"#about"}>About</a>
        </li>
        <li className="p-4">
          <a href={"#services"}>Services</a>
        </li>
        <li className="p-4">
          <a href={"#contact"}>Contact</a>
        </li>
      </ul>
      <div onClick={() => setnav(!nav)} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r bg-[#000300] border-r-gray-900 ease-in-out duration-500"
            : "fixed left-[-100%] ease-out"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">Logo</h1>
        <ul className="p-4 uppercase">
          <li
            className="p-4 border-b border-gray-600"
            onClick={() => setnav(!nav)}
          >
            <a href={"#home"}>Home</a>
          </li>
          <li
            className="p-4 border-b border-gray-600"
            onClick={() => setnav(!nav)}
          >
            <a href={"#about"}>About</a>
          </li>
          <li
            className="p-4 border-b border-gray-600"
            onClick={() => setnav(!nav)}
          >
            <a href={"#services"}>Services</a>
          </li>
          <li className="p-4" onClick={() => setnav(!nav)}>
            <a href={"#contact"}>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

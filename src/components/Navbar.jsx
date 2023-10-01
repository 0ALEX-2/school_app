import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setnav] = useState(false);

  return (
    <div className="border border-b-2 border-slate-400 h-24 shadow-2xl w-full bg-gradient-to-r from-[#f7d1b7] via-white to-green-200">
      <div className="text-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 ">
        {/* <h1 className="w-full text-3xl font-bold text-[#ee660c]">Logo</h1> */}
        <div className="flex gap-3 xs:gap-2 items-center">
          <Link to={"/"}>
            <motion.img
              src={logo}
              alt="logo"
              className="h-[85px] xs:h-[76px]"
              whileTap={{ scale: 0.7 }}
            />
          </Link>
          <h2 className="text-2xl xs:text-xl font-bold">
            <span className="text-green-700">Students'</span>{" "}
            <span className=" text-[#ee660c]">Care</span>{" "}
            <span className="text-blue-700">Academy</span>
          </h2>
        </div>
        <ul className="hidden md:flex text-xl font-semibold text-slate-800 ">
          <motion.li
            whileTap={{ scale: 0.7 }}
            className="p-4 hover:text-rose-700"
          >
            <Link to={"/"}>Home</Link>
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.7 }}
            className="p-4 hover:text-rose-700"
          >
            <Link to={"/about"}>About</Link>
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.7 }}
            className="p-4 hover:text-rose-700"
          >
            <Link to={"/services"}>Services</Link>
          </motion.li>
          <motion.li
            whileTap={{ scale: 0.7 }}
            className="p-4 hover:text-rose-700"
          >
            <Link to={"/contact"}>Contact</Link>
          </motion.li>
        </ul>
        <motion.div
          whileTap={{ scale: 0.7 }}
          onClick={() => setnav(!nav)}
          className="block md:hidden"
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </motion.div>
        <div
          className={
            nav
              ? "fixed left-0 top-24 w-[100%] h-full ease-in-out duration-500 bg-green-500"
              : "fixed left-[-100%] ease-out"
          }
        >
          {/* <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">Logo</h1> */}
          <ul className="p-4 uppercase font-bold text-slate-800 text-center">
            <motion.li
              whileTap={{ scale: 0.7 }}
              className="p-4 border-b border-gray-600 hover:bg-green-700 hover:text-white rounded-lg"
              onClick={() => setnav(!nav)}
            >
              <Link to={"/"}>Home</Link>
            </motion.li>
            <motion.li
              whileTap={{ scale: 0.7 }}
              className="p-4 border-b border-gray-600 hover:bg-green-700 hover:text-white rounded-lg"
              onClick={() => setnav(!nav)}
            >
              <Link to={"/about"}>About</Link>
            </motion.li>
            <motion.li
              whileTap={{ scale: 0.7 }}
              className="p-4 border-b border-gray-600 hover:bg-green-700 hover:text-white rounded-lg"
              onClick={() => setnav(!nav)}
            >
              <Link to={"/services"}>Services</Link>
            </motion.li>
            <motion.li
              whileTap={{ scale: 0.7 }}
              className="p-4 hover:bg-green-700 hover:text-white rounded-lg"
              onClick={() => setnav(!nav)}
            >
              <Link to={"/contact"}>Contact</Link>
            </motion.li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

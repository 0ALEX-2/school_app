// Footer.js

import React from "react";

const Footer = () => {
  return (
    <footer className="border border-t-2 border-slate-400 font-bold shadow-2xl bg-gradient-to-r from-[#f3c19f] via-white to-green-200 text-slate-600 py-4 fixed w-full">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} M.I.T.S STUDENTS' CARE ACADEMY</p>
      </div>
    </footer>
  );
};

export default Footer;

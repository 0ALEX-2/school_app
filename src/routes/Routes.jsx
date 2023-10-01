import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import DefaultLayout from "../components/DefaultLayout";

const Routess = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/about" element={<DefaultLayout />}>
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/services" element={<DefaultLayout />}>
          <Route path="/services" element={<Services />} />
        </Route>
        <Route path="/contact" element={<DefaultLayout />}>
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Routess;

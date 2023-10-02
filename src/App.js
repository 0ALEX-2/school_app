import React from "react";
import Navbar from "./components/Navbar";
// import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./components/Scrollbar.css";
import Routess from "./routes/Routes";

const App = () => {
  return (
    <div className="">
      {/* <Navbar /> */}
      <Routess />
      {/* <div className="app lg:h-[80vh] sm:h-[87vh]ss:h-[87.5vh] xs:h-[87.5vh] h-[82.5vh] overflow-x-hidden pt-3">
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div> */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;

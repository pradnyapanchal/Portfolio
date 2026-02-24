import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import viteLogo from "/diamondbleu.svg";
import "./index.css";

import React from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
// import { Home } from "lucide-react";

const App = () => {
  return (
    <div className=" bg-[#0a0f2c] text-[#ccd6f6] min-h-screen ">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;

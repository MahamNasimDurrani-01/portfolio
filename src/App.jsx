import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Services from "./components/services/Services";
import MyWork from "./components/myWork/MyWork";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white">
      <Navbar />
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  );
}

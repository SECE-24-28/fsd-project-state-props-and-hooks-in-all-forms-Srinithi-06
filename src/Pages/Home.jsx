import React from "react";

import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import PopularDestinations from "../Components/PopularDestinations";
import Categories from "../Components/Categories";

import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import FAQ from "../Components/FAQ";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <PopularDestinations />
      <Categories />      
      <Contact />
      <FAQ />
      <Footer />
    </>
  );
}

export default Home;
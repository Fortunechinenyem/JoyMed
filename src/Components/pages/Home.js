import React from "react";
import Footer from "../Footer";
import HomeFeatures from "../HomeFeatures";
import HomeHero from "../HomeHero";
import NavBar from "../Navbar";

const Home = () => {
  return (
    <article>
      <NavBar />
      <HomeHero />
      <HomeFeatures />
      <Footer />
    </article>
  );
};

export default Home;

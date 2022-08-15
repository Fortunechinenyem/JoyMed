import React from "react";
import Footer from "../Footer";
import HomeBody from "../HomeBody";
import HomeFeatures from "../HomeFeatures";
import HomeHero from "../HomeHero";

const Home = () => {
  return (
    <article>
      <HomeHero />
      <HomeFeatures />
      <HomeBody />
      <Footer />
    </article>
  );
};

export default Home;

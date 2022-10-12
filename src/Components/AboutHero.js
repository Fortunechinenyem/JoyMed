import React from "react";

import Heroimage from "../images/image3.jpg";
const AboutHero = () => {
  return (
    <article>
      <div className="w-75 homehero mb-5 mt-5 mx-auto ">
        <div className="herotext ">
          <h1 className="text-center mb-3">Who We Are</h1>
        </div>
        <div className="heroimage">
          <img src={Heroimage} alt={AboutHero.png} />
        </div>
      </div>
    </article>
  );
};

export default AboutHero;

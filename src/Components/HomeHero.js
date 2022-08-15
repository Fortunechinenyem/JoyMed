import React from "react";
import Heroimage from "../images/figmasame.png";

function HomeHero() {
  return (
    <div className="w-100 homehero mb-5 mx-auto">
      <div className="heroimage">
        <img src={Heroimage} alt={HomeHero.png} />
      </div>
    </div>
  );
}

export default HomeHero;

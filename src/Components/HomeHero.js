import React from "react";
import { Link } from "react-router-dom";
import Heroimage from "../images/joyhero.png";

function HomeHero() {
  return (
    <div className="w-75 homehero mb-5 mt-5 mx-auto d-flex">
      <div className="herotext ">
        <h1>Welcome to JoyMed!</h1>
        <h4>Your wellbeing is our priority!</h4>
        <Link to="/about" className="btn btn-primary">
          More about Clinic
        </Link>
      </div>
      <div className="heroimage">
        <img src={Heroimage} alt={HomeHero.png} />
      </div>
    </div>
  );
}

export default HomeHero;

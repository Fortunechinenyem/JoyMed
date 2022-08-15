import React from "react";
import Heroimage from "../images/image4.jpg";
import { Link } from "react-router-dom";

function HomeHero() {
  return (
    <div className="homehero d-flex mb-3">
      <div className="herotext w-25">
        <h1 className="mb-4">Welcome to our Clinic</h1>
        <Link to="/about" className="btn btn-primary">
          More about Clinic
        </Link>
      </div>
      <div className="heroimage w-75">
        <img src={Heroimage} alt={HomeHero.png} />
      </div>
    </div>
  );
}

export default HomeHero;

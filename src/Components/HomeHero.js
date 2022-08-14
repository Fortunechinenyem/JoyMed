import React from "react";
import background from "../images/image4.jpg";
import { Link } from "react-router-dom";

function HomeHero() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        height: "80vh",
        backgroundPosition: "center",
      }}
    >
      <div className="herotext">
        <h1 className="mb-4">
          Welcome to <span>our Clinic</span>
        </h1>
        <Link to="/about" className="btn btn-primary">
          More about Clinic
        </Link>
      </div>
    </div>
  );
}

export default HomeHero;

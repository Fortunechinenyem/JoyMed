import React from "react";
import { Link } from "react-router-dom";

const HomeBody = () => {
  return (
    <div className="w-50 mx-auto">
      <Link to="/about" className="btn btn-primary">
        More about Clinic
      </Link>
    </div>
  );
};

export default HomeBody;

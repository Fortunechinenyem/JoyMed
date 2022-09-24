import React from "react";
import { BsHandThumbsUp } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";

import { CgWorkAlt } from "react-icons/cg";
import { Link } from "react-router-dom";

const HomeBody = () => {
  return (
    <section>
      <div className="d-flex homebody w-75 mx-auto mt-3 mb-5">
        <div className="">
          <div className="content">
            <h4>100%</h4>
            <h5>Quality</h5>
          </div>
          <div className="logo">
            <BsHandThumbsUp />
          </div>
        </div>
        <div className="">
          <div className="content">
            <h4>5000</h4>
            <h5>Patients a year</h5>
          </div>
          <div className="logo">
            <BsPeople />
          </div>
        </div>
        <div className="">
          <div className="content">
            <h4>50 +</h4>
            <h5>Dedicated Staff</h5>
          </div>
          <div className="logo">
            <BsPeople />
          </div>
        </div>
        <div className="">
          <div className="content">
            <h4>27 +</h4>
            <h5>Years of Experience</h5>
          </div>
          <div className="logo">
            <CgWorkAlt />
          </div>
        </div>
      </div>
      <div className=" w-50 mx-auto mb-5 text-center">
        <Link to="/appointment" className="btn btn-primary">
          Book An Appointment
        </Link>
      </div>
    </section>
  );
};

export default HomeBody;

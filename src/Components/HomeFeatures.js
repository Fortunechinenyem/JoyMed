import React from "react";
import { Link } from "react-router-dom";
import Db from "../DB.json";

const HomeFeatures1 = (props) => {
  const { id, title, text } = props;
  return (
    <div key={id} className="card d-flex">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <Link to="/menu" className="btn btn-primary">
          View Menu
        </Link>
      </div>
    </div>
  );
};

const HomeFeatures = () => {
  return (
    <>
      <div className="container row g-3 w-75 mx-auto">
        {Db.homefeatures.map((homefeaturesItem) => {
          return (
            <div className="col-sm-6 col-md-6">
              <HomeFeatures1 {...homefeaturesItem}></HomeFeatures1>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomeFeatures;

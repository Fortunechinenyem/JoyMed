import React from "react";

import Db from "../DB.json";

const HomeFeatures1 = (props) => {
  const { id, title, text } = props;
  return (
    <div key={id} className="card d-flex">
      <div className="card-body">
        <h5 className="card-title text-white">{title}</h5>
        <p className="card-text text-white">{text}</p>
      </div>
    </div>
  );
};

const HomeFeatures = () => {
  return (
    <>
      <div className="container card1 row g-3 w-75 mx-auto">
        {Db.homefeatures.map((homefeaturesItem) => {
          return (
            <div className="col-sm-6 col-md-3 mb-3 mt-3">
              <HomeFeatures1 {...homefeaturesItem}></HomeFeatures1>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomeFeatures;

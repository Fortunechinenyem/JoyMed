import React from "react";
import Homeimage from "../images/image5.jpg";

const HomeBody = () => {
  return (
    <>
      <div className="card mb-3 w-100 mx-auto">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={Homeimage} className="" alt={Homeimage.jpg} />
          </div>
          <div className="col-md-8">
            <div className="">
              <h5 className="card-title">Card title</h5>
              <p className="card-text1">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBody;

import React from "react";

const EachService = ({ img, title }) => {
  return (
    <div>
      <div className="card w-80 glass">
        <figure className="p-5">
          <img src={img} alt="car!" />
        </figure>
        <div className="card-body items-center text-center ">
          <h2 className="card-title ml-4 ">{title}</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default EachService;

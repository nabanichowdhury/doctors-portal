import React from "react";

const review = ({ review }) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
            est dolor nostrum nemo recusandae harum modi, corporis, sunt
            voluptate,{" "}
          </p>
          <div className="card-actions justify-end"></div>
        </div>
        <div className="flex items-center ">
          <div>
            <div className="avatar p-5">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={review.img} />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl">{review.name}</h1>
            <h2 className="texl-xl">{review.location}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default review;

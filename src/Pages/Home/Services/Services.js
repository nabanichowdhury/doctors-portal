import React from "react";
import EachService from "./EachService";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import treatment from "../../../assets/images/treatment.png";

const Services = () => {
  return (
    <div className="text-center ">
      <h3 className="text-secondary font-bold">OUR SERVICES</h3>
      <p className="text-2xl">Services We Provide</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-12">
        <EachService img={fluoride} title="Fluoride Treatment"></EachService>
        <EachService img={cavity} title="Cavity Filling"></EachService>
        <EachService img={whitening} title="Teeth Whitening"></EachService>
      </div>

      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row p-12">
          <img
            src={treatment}
            className="max-w-sm rounded-lg shadow-2xl w-486 h-576 m-10"
          />
          <div className="text-left">
            <h1 className="text-5xl font-bold">
              Exceptional Dental Care On Your term{" "}
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

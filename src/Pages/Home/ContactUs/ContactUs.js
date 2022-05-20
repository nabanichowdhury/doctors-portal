import React from "react";
import appointment from "../../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <div
      className="align-middle mt-10 text-center p-10 "
      style={{
        background: `url(${appointment})`,
      }}
    >
      <h1 className="text-primary text-xl font-bold">Contact us</h1>
      <h1 className="text-white text-3xl">Stay Connected with us</h1>
      <input
        type="text"
        placeholder="Email address"
        className="input input-bordered w-full max-w-xs m-5"
      />
      <br />
      <input
        type="text"
        placeholder="Subject"
        className="input input-bordered w-full max-w-xs m-5"
      />
      <br />
      <textarea
        className="textarea textarea-bordered w-full max-w-xs m-5"
        placeholder=" Your Message"
      ></textarea>
      <br />
      <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">
        Get Started
      </button>
    </div>
  );
};

export default ContactUs;

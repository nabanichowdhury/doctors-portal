import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";

const MakeAppointment = () => {
  return (
    <div>
      <section
        style={{ background: `url(${appointment})` }}
        className="flex items-center justify-center  "
      >
        <div>
          <img className="mt-[-100px] hidden lg:block" src={doctor} alt="" />
        </div>
        <div>
          <h3 className="text-xl text-primary">Appointment</h3>
          <h2 className="text-3xl text-white">Make an appointment today</h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rerum
            minima praesentium autem sequi eveniet, dolore sed pariatur. Quae
            nisi consequuntur sunt voluptate, ad officiis velit repellendus,
            corrupti explicabo deserunt iure? Voluptatem, tenetur dolorum.
          </p>
          <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default MakeAppointment;

import React from "react";

const Service = ({ service, setTreatment }) => {
  return (
    <div className="text-center">
      <div class="card lg:max-w lg:max-h w-96 bg-base-100 shadow-xl ">
        <div class="card-body ">
          <h2 class="text-xl text-secondary font-bold">{service.name}</h2>
          <p>
            {service.slots.length ? (
              <span>{service.slots[0]}</span>
            ) : (
              <span className="text-red-500 text-sm">Try another Date</span>
            )}
          </p>
          <p>
            {service.slots.length}:
            {service.slots.length > 1 ? "Spaces" : "Space"} available
          </p>
          <div class="card-actions justify-center">
            <label
              for="booking-modal"
              disabled={service.slots.length === 0}
              class="btn btn-secondary text-white btn modal-button bg-gradient-to-r from-secondary to-primary"
              onClick={() => setTreatment(service)}
            >
              Available Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

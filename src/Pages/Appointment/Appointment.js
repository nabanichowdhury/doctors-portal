import React, { useState } from "react";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointments from "./AvailableAppointments";
import Footer from "../Shared/Footer";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="p-12">
      <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
      <AvailableAppointments
        date={date}
        setDate={setDate}
      ></AvailableAppointments>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;

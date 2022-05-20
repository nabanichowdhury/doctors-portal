import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
          <h2 className="text-5xl font-bold text-purple-500">Dashboard</h2>
          <Outlet></Outlet>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-50 bg-base-100 text-base-content">
            {/* <---Slidebar content here-----> */}
            <li>
              <Link to="/dashboard">My Appointment </Link>
            </li>
            <li>
              <Link to="/dashboard/review">My Review</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Admin = () => {
  return (
    <div className="min-h-screen ">
      <div class=" grid grid-rows-3 grid-flow-col ">
        <div class="row-span-3 ...">
          <Sidebar/>
        </div>
        <div class="col-span-2 mt-5 me-5 ">
          <Outlet/>
        </div>
        {/* <div class="row-span-2 col-span-2 ...">03</div> */}
      </div>
    </div>
  );
};

export default Admin;

// bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-violet-900 to-stone-900 transparent
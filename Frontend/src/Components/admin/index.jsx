import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Admin = () => {
  return (
    <>
      <Sidebar />

      <div className="ms-56">
        <Outlet />
      </div>
    </> 
  );
};

export default Admin;

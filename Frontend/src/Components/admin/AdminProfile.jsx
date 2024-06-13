import React from "react";
import { ReactTyped } from "react-typed";
// import ManageUser from "./ManageUser";

const AdminProfile = () => {
  return (
    <div>
      <div>
        {/* <div className="text-center my-72 text-7xl font-bold">
          <p>Welcome to Admin Dashboard</p>
        </div> */}
      {/* <ManageUser/> */}
        <div className="text-center my-72">
          <h1 >
            <ReactTyped
              className="text-7xl font-bold "
              strings={["Welcome to Admin Dashboard"]}
              typeSpeed={150}
              loop
            />
          </h1>
        </div>

          
      </div>
    </div>
  );
};

export default AdminProfile;

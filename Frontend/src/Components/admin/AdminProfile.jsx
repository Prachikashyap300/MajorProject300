import React from "react";
import { ReactTyped } from "react-typed";
// import ManageUser from "./ManageUser";

const AdminProfile = () => {
  return (
    <div>
      <div>
      {/* <ManageUser/> */}
        <div className="text-center mt-5">
          <h1 >
            <ReactTyped
              className="text-white text-3xl "
              strings={["Welcome to Admin Dashboard"]}
              typeSpeed={100}
              loop
            />
          </h1>
        </div>

          
      </div>
    </div>
  );
};

export default AdminProfile;

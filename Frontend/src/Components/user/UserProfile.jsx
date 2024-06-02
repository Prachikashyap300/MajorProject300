import React from "react";

const UserProfile = () => {
  return (
    <div className="vh-100">
      <div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-700 via-violet-900 to-stone-900 transparent">
        <div className="container mx-auto py-8 ">
          {/* <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4 mt-20"> */}
            {/* <div className="col-span-4 sm:col-span-3"> */}
              <div className=" p-6 mt-5">
                <div className="flex flex-col text-white items-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/94.jpg"
                    className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                  />
                  <h1 className="text-xl font-bold ">John Doe</h1>
                  
                </div>
                
              </div>
            {/* </div> */}
            {/* <div className="col-span-4 sm:col-span-9"> */}
              <div className="bg-gray/50 shadow rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4 text-white">About</h2>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  finibus est vitae tortor ullamcorper, ut vestibulum velit
                  convallis. Aenean posuere risus non velit egestas suscipit.
                  Nunc finibus vel ante id euismod. Vestibulum ante ipsum primis
                  in faucibus orci luctus et ultrices posuere cubilia Curae;
                  Aliquam erat volutpat. Nulla vulputate pharetra tellus, in
                  luctus risus rhoncus id.
                </p>
               
                <h2 className="text-xl font-bold mt-6 mb-4 text-white">Experience</h2>
                <div className="mb-6">
                  <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-white font-bold">
                      College
                    </span>
                    <p>
                      <span className="text-white mr-2">at ABC Company</span>
                      <span className="text-white">2017 - 2019</span>
                    </p>
                  </div>
                  <p className="mt-2 text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    finibus est vitae tortor ullamcorper, ut vestibulum velit
                    convallis. Aenean posuere risus non velit egestas suscipit.
                  </p>
                </div>
                <div className="mb-6">
                  <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-white font-bold">
                      Web Developer
                    </span>
                    <p>
                      <span className="text-white mr-2">at ABC Company</span>
                      <span className="text-white">2017 - 2019</span>
                    </p>
                  </div>
                  <p className="mt-2 text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    finibus est vitae tortor ullamcorper, ut vestibulum velit
                    convallis. Aenean posuere risus non velit egestas suscipit.
                  </p>
                </div>
                <div className="mb-6 text-white">
                  <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-white font-bold">
                      Web Developer
                    </span>
                    <p>
                      <span className="text-white mr-2">at ABC Company</span>
                      <span className="text-white">2017 - 2019</span>
                    </p>
                  </div>
                  <p className="mt-2 text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    finibus est vitae tortor ullamcorper, ut vestibulum velit
                    convallis. Aenean posuere risus non velit egestas suscipit.
                  </p>
                </div>
              </div>
            {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

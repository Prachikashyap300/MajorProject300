import React from "react";

const UserProfile = () => {
  return (
    <main className="p-40  min-h-screen bg-gradient-to-r from-transparent via-blue-200 to-green-100 ">
  {/* <header className="h-24 sm:h-32 flex items-center z-30 w-full">
    <div className="container mx-auto px-6 flex items-center justify-between">
      <div className="uppercase text-gray-800 dark:text-white font-black text-3xl">
        Watch.ME
      </div>
      <div className="flex items-center">
        <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
          <a href="#" className="py-2 px-6 flex">
            Home
          </a>
          <a href="#" className="py-2 px-6 flex">
            Watch
          </a>
          <a href="#" className="py-2 px-6 flex">
            Product
          </a>
          <a href="#" className="py-2 px-6 flex">
            Contact
          </a>
          <a href="#" className="py-2 px-6 flex">
            Carrer
          </a>
        </nav>
        <button className="lg:hidden flex flex-col ml-4">
          <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
          <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
          <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
        </button>
      </div>
    </div>
  </header> */}
  <div className="flex relative z-20 items-center overflow-hidden">
    <div className="container mx-auto px-6 flex relative py-16">
      <div className="lg:w-4/5 flex flex-col relative z-20">
        <span className="w-20 h-2 bg-gray-800 mb-12"></span>
        <h3 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
          Dev
        </h3>
        <p className="text-sm sm:text-base text-gray-700 dark:text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem reiciendis ut commodi illo, labore, nam amet corporis in quaerat ratione quae, assumenda id corrupti modi velit ad necessitatibus dolore accusamus!  
        </p>
        <div className="flex mt-8 ">
          <a
            href="#"
            className="uppercase py-2 px-20 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
          >
            Github
          </a>
          {/* <a
            href="#"
            className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md"
          >
            Read more
          </a> */}
        </div>
      </div>
      <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
        <img
          src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJPdYP6xHcCGlVk1M1SEy9MkaaSueF64oHpA&s"}
          className="max-w-xs md:max-w-sm m-auto"
        />
      </div>
    </div>
  </div>
</main>


    // <div className="vh-100">
    //   <div className="bg-gradient-to-r from-transparent via-blue-200 to-green-100">
    //     <div className="container mx-auto py-8 ">
    //       {/* <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4 mt-20"> */}
    //         {/* <div className="col-span-4 sm:col-span-3"> */}
    //           <div className=" p-6 mt-5">
    //             <div className="flex flex-col text-white items-center">
    //               <img
    //                 src="https://randomuser.me/api/portraits/men/94.jpg"
    //                 className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
    //               />
    //               <h1 className="text-xl font-bold ">John Doe</h1>
                  
    //             </div>
                
    //           </div>
    //         {/* </div> */}
    //         {/* <div className="col-span-4 sm:col-span-9"> */}
    //           <div className="bg-gray/50 shadow rounded-lg p-6">
    //             <h2 className="text-xl font-bold mb-4 text-white">About</h2>
    //             <p className="text-white">
    //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
    //               finibus est vitae tortor ullamcorper, ut vestibulum velit
    //               convallis. Aenean posuere risus non velit egestas suscipit.
    //               Nunc finibus vel ante id euismod. Vestibulum ante ipsum primis
    //               in faucibus orci luctus et ultrices posuere cubilia Curae;
    //               Aliquam erat volutpat. Nulla vulputate pharetra tellus, in
    //               luctus risus rhoncus id.
    //             </p>
               
    //             <h2 className="text-xl font-bold mt-6 mb-4 text-white">Experience</h2>
    //             <div className="mb-6">
    //               <div className="flex justify-between flex-wrap gap-2 w-full">
    //                 <span className="text-white font-bold">
    //                   College
    //                 </span>
    //                 <p>
    //                   <span className="text-white mr-2">at ABC Company</span>
    //                   <span className="text-white">2017 - 2019</span>
    //                 </p>
    //               </div>
    //               <p className="mt-2 text-white">
    //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
    //                 finibus est vitae tortor ullamcorper, ut vestibulum velit
    //                 convallis. Aenean posuere risus non velit egestas suscipit.
    //               </p>
    //             </div>
    //             <div className="mb-6">
    //               <div className="flex justify-between flex-wrap gap-2 w-full">
    //                 <span className="text-white font-bold">
    //                   Web Developer
    //                 </span>
    //                 <p>
    //                   <span className="text-white mr-2">at ABC Company</span>
    //                   <span className="text-white">2017 - 2019</span>
    //                 </p>
    //               </div>
    //               <p className="mt-2 text-white">
    //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
    //                 finibus est vitae tortor ullamcorper, ut vestibulum velit
    //                 convallis. Aenean posuere risus non velit egestas suscipit.
    //               </p>
    //             </div>
    //             <div className="mb-6 text-white">
    //               <div className="flex justify-between flex-wrap gap-2 w-full">
    //                 <span className="text-white font-bold">
    //                   Web Developer
    //                 </span>
    //                 <p>
    //                   <span className="text-white mr-2">at ABC Company</span>
    //                   <span className="text-white">2017 - 2019</span>
    //                 </p>
    //               </div>
    //               <p className="mt-2 text-white">
    //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
    //                 finibus est vitae tortor ullamcorper, ut vestibulum velit
    //                 convallis. Aenean posuere risus non velit egestas suscipit.
    //               </p>
    //             </div>
    //           </div>
    //         {/* </div> */}
    //       {/* </div> */}
    //     </div>
    //   </div>
    // </div>
  );
};

export default UserProfile;

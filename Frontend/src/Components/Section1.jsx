import React from "react";
import Aim from "../assets/Aimm.jpg";
import "./Sign.css";

const Section1 = () => {
  return (
    <section className="bg-violet-700">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
      <div className="font-light text-white sm:text-lg ">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
          We didn't reinvent the wheel
        </h2>
        <p className="mb-4">
          We are strategists, designers and developers. Innovators and problem
          solvers. Small enough to be simple and quick, but big enough to deliver
          the scope you want at the pace you need. Small enough to be simple and
          quick, but big enough to deliver the scope you want at the pace you
          need.
        </p>
        <p>
          We are strategists, designers and developers. Innovators and problem
          solvers. Small enough to be simple and quick.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-8">
        <img
          className="w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
          alt="office content 1"
        />
        <img
          className="mt-4 w-full lg:mt-10 rounded-lg"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
          alt="office content 2"
        />
      </div>
    </div>
  </section>
  


    // <>
    // <div className="flex justify-center items-center p-10 bg-gray-100 sec1">
    //   <div className="flex flex-col items-center">
    //     <h1 className="text-5xl font-bold mb-2">Our Aim</h1>
    //     <img src={Aim} alt="Aim" className="img-sec1" />
    //   </div>
    //   <div className="flex flex-col justify-start items-start ml-10">
    //     <ul className=" space-y-2">
    //       <li> <span className="text-3xl font-bold text-blue-500">Foster Creativity:</span></li>
    //       <li  className="text-xl text-black-500">Encourage and nurture creative expression across a wide range of disciplines.</li>
    //       <li> <span className="text-3xl font-bold text-blue-500">Promote Collaboration:</span></li>
    //       <li className="text-xl text-black-500"> Build a collaborative platform for sharing ideas and resources among creators.</li>
    //       <li> <span className="text-3xl font-bold text-blue-500">Enhance Skills:</span></li>
    //       <li className="text-xl text-black-500"> Provide educational opportunities and resources to help creators refine and advance their skills.</li>
    //       <li> <span className="text-3xl font-bold text-blue-500">Support Innovation:</span></li>
    //       <li className="text-xl text-black-500"> Support innovative projects and ideas that push the boundaries of traditional creativity.</li>
    //       <li> <span className="text-3xl font-bold text-blue-500">Expand Networks:</span></li>
    //       <li className="text-xl text-black-500"> Create networking opportunities that allow creators to connect, partner, and grow professionally.</li>
    //     </ul>
    //   </div>
    // </div>
    // </>
  );
};

export default Section1;

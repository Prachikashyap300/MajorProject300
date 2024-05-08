import React from 'react'

const FormDesign = () => {
  return (
    <div>FormDesign</div>
  )
}

export default FormDesign







// import React from "react";

// const MenuBar = () => {
//   return (
//     <header className="mt-3 fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border-0  bg-blue-100/60 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
//       <div className="px-4">
//         <div className="flex items-center justify-between">
//           <div className="flex shrink-0">
//             <a aria-current="page" className="flex items-center" href="/">
//               <img
//                 className="h-7 w-auto"
//                 src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
//                 alt=""
//               />
//               <p className="sr-only">Website Title</p>
//             </a>
//           </div>
//           <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
//             <a
//               className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
//               href="#"
//             >
//               Pricing
//             </a>
//             <a
//               className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
//               href="#"
//             >
//               Pricing
//             </a>
//             <a
//               className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
//               href="#"
//             >
//               Pricing
//             </a>
//           </div>
//           <div className="flex items-center justify-end gap-3">
//             <a
//               className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
//               href="/Signup"
//             >
//               Sign up
//             </a>
//             <a
//               className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
//               href="/Login"
//             >
//               Login
//             </a>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default MenuBar;

// // // /*
// // //   This example requires some changes to your config:

// // //   ```
// // //   // tailwind.config.js
// // //   module.exports = {
// // //     // ...
// // //     plugins: [
// // //       // ...
// // //       require('@tailwindcss/forms'),
// // //     ],
// // //   }
// // //   ```
// // // */
// // // import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
// // // import "../Components/FormDesign.css"
// // // export default function Example() {
// // //   return (
// // //     <>
// // //   {/*Start Background Animation Body*/}
// // //   <div className="area">
// // //     <ul className="circles">
// // //       <li />
// // //       <li />
// // //       <li />
// // //       <li />
// // //       <li />
// // //       <li />
// // //       <li />
// // //       <li />
// // //       <li />
// // //       <li />
// // //     </ul>
// // //   </div>
// // //   {/*End Background Animation Body*/}
// // // </>

// // //   )
// // // }

// // import React from "react";
// // import Aim from "../assets/Aimm.jpg";
// // import "./Sign.css";

// // const Section1 = () => {
// //   return (
// //     <section className="bg-gradient-to-r from-blue-800 to-black ">
// //     <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
// //       <div className="font-light text-white sm:text-lg ">
// //         <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
// //           We didn't reinvent the wheel
// //         </h2>
// //         <p className="mb-4">
// //           We are strategists, designers and developers. Innovators and problem
// //           solvers. Small enough to be simple and quick, but big enough to deliver
// //           the scope you want at the pace you need. Small enough to be simple and
// //           quick, but big enough to deliver the scope you want at the pace you
// //           need.
// //         </p>
// //         <p>
// //           We are strategists, designers and developers. Innovators and problem
// //           solvers. Small enough to be simple and quick.
// //         </p>
// //       </div>
// //       <div className="grid grid-cols-2 gap-4 mt-8">
// //         <img
// //           className="w-full rounded-lg"
// //           src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
// //           alt="office content 1"
// //         />
// //         <img
// //           className="mt-4 w-full lg:mt-10 rounded-lg"
// //           src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
// //           alt="office content 2"
// //         />
// //       </div>
// //     </div>
// //   </section>

// //     // <>
// //     // <div className="flex justify-center items-center p-10 bg-gray-100 sec1">
// //     //   <div className="flex flex-col items-center">
// //     //     <h1 className="text-5xl font-bold mb-2">Our Aim</h1>
// //     //     <img src={Aim} alt="Aim" className="img-sec1" />
// //     //   </div>
// //     //   <div className="flex flex-col justify-start items-start ml-10">
// //     //     <ul className=" space-y-2">
// //     //       <li> <span className="text-3xl font-bold text-blue-500">Foster Creativity:</span></li>
// //     //       <li  className="text-xl text-black-500">Encourage and nurture creative expression across a wide range of disciplines.</li>
// //     //       <li> <span className="text-3xl font-bold text-blue-500">Promote Collaboration:</span></li>
// //     //       <li className="text-xl text-black-500"> Build a collaborative platform for sharing ideas and resources among creators.</li>
// //     //       <li> <span className="text-3xl font-bold text-blue-500">Enhance Skills:</span></li>
// //     //       <li className="text-xl text-black-500"> Provide educational opportunities and resources to help creators refine and advance their skills.</li>
// //     //       <li> <span className="text-3xl font-bold text-blue-500">Support Innovation:</span></li>
// //     //       <li className="text-xl text-black-500"> Support innovative projects and ideas that push the boundaries of traditional creativity.</li>
// //     //       <li> <span className="text-3xl font-bold text-blue-500">Expand Networks:</span></li>
// //     //       <li className="text-xl text-black-500"> Create networking opportunities that allow creators to connect, partner, and grow professionally.</li>
// //     //     </ul>
// //     //   </div>
// //     // </div>
// //     // </>
// //   );
// // };

// // export default Section1;

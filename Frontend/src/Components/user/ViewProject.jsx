import React, { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'

const ViewProject = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const res = await fetch("http://localhost:4000/Project/getall");
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setProjects(data.filter((project) => project.verified));
    }
  };
  useEffect(() => {
    fetchProjects();
  }, []);

  const displayProjects = () => {
    return projects.map((item) => (
      <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-110 hover:shadow-xl">
        <a href="#">
          <img
            src={"http://localhost:4000/" + item.pimage}
            alt="Product"
            class="h-80 w-72 object-cover rounded-t-xl"
          />
          <div class="px-4 py-3 w-72">
            <p class="text-lg font-bold text-black truncate block capitalize">
              {item.ptitle}
            </p>
            <div class="flex items-center">
              <p class="text-lg font-semibold text-black cursor-auto my-3">
                {item.pcateogory}
              </p>
              <p class="text-lg font-semibold text-black cursor-auto my-3">
                {item.porganisation}
              </p>
              <p>{item.pdescription}</p>
            </div>
          </div>
        </a>
      </div>
    ));
  };
  return (
    <section>
      <div className="mt-20">
         
        <section
          id="Projects"
          class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
        >
          {displayProjects()}
        </section>

        
      </div>
    </section>
  );
};

    // const displayProjects = () => {
    //   return projects.map((item) => (
    //     <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-110 hover:shadow-xl">
    //       <a href="#">
    //         <img
    //           src={"http://localhost:4000/" + item.pimage}
    //           alt="Product"
    //           class="h-80 w-72 object-cover rounded-t-xl"
    //         />
    //         <div class="px-4 py-3 w-72">
    //           <p class="text-lg font-bold text-black truncate block capitalize">
    //             {item.ptitle}
    //           </p>
    //           <div class="flex items-center">
    //             <p class="text-lg font-semibold text-black cursor-auto my-3">
    //               {item.pcateogory}
    //             </p>
    //             <p class="text-lg font-semibold text-black cursor-auto my-3">
    //               {item.porganisation}
    //             </p>
    //             <p>{item.pdescription}</p>
    //           </div>
    //         </div>
    //       </a>
    //     </div>
    //   ));
    // };
  // return (
    // <h1>Product details</h1>
    // <div>
    // {displayProjects()}

    // </div>

//     <div className='mt-40 p-10'>
//       <h1>Product Details</h1>
//       {/* <h2>{project.pname}</h2>
//       <h3>{project.pprice}</h3>
//       <h3>{project.pdescription}</h3> */}
//       <Link to="/">Back to Home</Link>
//     </div>
//   )
// }

export default ViewProject
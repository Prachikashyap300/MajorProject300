  import React, { useState, useEffect } from "react";
  import {Link} from 'react-router-dom'
  const ProjectListing = () => {
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
          <Link to={"/user/ViewProject/" + item._id}>
            <img
              src={"http://localhost:4000/" + item.pimage}
              alt="Product"
              class="h-80 w-72 object-cover rounded-t-xl"
            />
            <div class="px-4 py-3 w-72">
              <p class="text-lg font-bold text-black truncate block capitalize">
                {item.ptitle}
              </p>
              <p class="text-lg font-semibold text-black cursor-auto my-3">
                {item.pcateogory}
              </p>
              <p class="text-lg text-wrap text-black cursor-auto my-3">
                {item.pdescription}
              </p>
              {/* <div class="flex items-center">
                
              </div> */}
            </div>
          </Link>
        </div>
      ));
    };
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-transparent via-blue-200 to-pink-100 transparent">
        <div className="mt-40">

          <section
            id="Projects"
            class="w-fit text-wrap mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
          >
            {displayProjects()}
          </section>

          <div class="text-center text-dark py-10 px-10">
            <h2 class="font-bold text-2xl md:text-4xl mb-4">
              Keep up the good work!
            </h2>
          </div>
        </div>
      </section>
    );
  };

  export default ProjectListing;

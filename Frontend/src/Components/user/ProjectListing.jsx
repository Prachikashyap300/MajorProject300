import React, { useState, useEffect } from "react";

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
    <section className="flex items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-violet-900 to-stone-900 transparent">
      <div className="mt-20">
        <div class="text-center p-10">
          {/* <h1 class="font-bold text-4xl mb-4 text-white">Responsive Product card grid</h1> */}
          {/* <h1 class="text-3xl mb-4 text-white">Tailwind CSS</h1> */}
          <form className="max-w-lg mx-auto">
            <div className="flex">
              
              <button
                id="dropdown-button"
                data-dropdown-toggle="dropdown"
                className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 outline-none "
                type="button"
              >
                All categories{" "}
                <svg
                  className="w-2.5 h-2.5 ms-2.5 outline-none"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdown"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdown-button"
                >
                  <li>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Mockups
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Templates
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Design
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Logos
                    </button>
                  </li>
                </ul>
              </div>
              <div className="relative w-full">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 outline-none"
                  placeholder="Search Mockups, Logos, Design Templates..."
                  required=""
                />
                <button
                  type="submit"
                  className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 outline-none "
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>
          </form>
        </div>

    
        <section
          id="Projects"
          class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
        >
          {displayProjects()}
        </section>

        <div class="text-center text-white py-10 px-10">
          <h2 class="font-bold text-2xl md:text-4xl mb-4">
            Keep up the good work!
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ProjectListing;

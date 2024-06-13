import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const ViewProject = () => {
  const {id} = useParams();
  const [project, setProject] = useState({});

  const fetchProject = async () => {
    const res = await fetch("http://localhost:4000/project/getbyid/" + id);
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setProject(data)
      // setProject(data.filter((project) => project.verified));
    }
  };
  useEffect(() => {
    fetchProject();
  }, [id]);

 
  return (
    <div className="min-h-screen bg-gradient-to-r from-transparent via-blue-200 to-pink-100 ">
      <div className="p-40">
        <div className="max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz1VVsrmRqJPA3CbWiT4gDgH5_jYhgPa0wRA&s"}//project.pimage
                  alt="Product Image"
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                    Like
                  </button>
                </div>
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                    Comment
                  </button>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                Project Title
                {project.ptitle}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante
                justo. Integer euismod libero id mauris malesuada tincidunt.
              </p>

              <div className="mb-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Cateogory
                </span>
                <div className="flex items-center mt-2">
                  <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-20 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    Information technology
                  </button>
                  
                </div>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Description:
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                  ante justo. Integer euismod libero id mauris malesuada tincidunt.
                  Vivamus commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue
                  vel ipsum pretium, et venenatis sem blandit. Quisque ut erat vitae
                  nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum
                  lacinia, non sagittis mauris blandit. Morbi fermentum libero vel
                  nisl suscipit, nec tincidunt mi consectetur.
                </p>
              </div>
              <div className="mb-4 mt-5">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Developer Profile:
                </span>
                <Link to="/user/UserProfile">
                <div className="flex items-center mt-2">
                  {/* <img
                    src={"https://cdn-icons-png.flaticon.com/128/17/17004.png" + item.pimage}
                    alt="Product"
                    class="h-80 w-72 object-cover rounded-t-xl"
                  /> */}
                  <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2" />

                  <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2" />
                </div>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default ViewProject
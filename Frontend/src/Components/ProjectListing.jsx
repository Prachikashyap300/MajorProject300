import React, { useState, useEffect } from "react";

const ProjectListing = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const res = await fetch("http://localhost:4000/Project/getall");
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setProjects(data);
    }
  };
  useEffect(() => {
    fetchProjects();
  }, []);

  const displayProjects = () => {
    return projects.map((item) => (
      <div className="container ">
        <div className="col-md-4">
          <div className="card p-3 mb-5 bg-dark">
            <h3 className="mt-3 text-light">{item.pname}</h3>
            <h5 className="mt-3 text-light">{item.pprice}</h5>
            <p className="mt-3 text-light">{item.pdescription}</p>
          </div>
        </div>
      </div>
    ));
  };
  return (
    <div>
      <header className="bg-body-tertiary bg-dark">
        <div className="container py-5">
          <p className="font-3 text-center text-white">All Projects</p>
          <input type="text" placeholder="Search Projects" className="input" />
        </div>
      </header>

      <div className="container mt-5">
        <div className="row mt-5 p-5">{displayProjects()}</div>
      </div>
    </div>
  );
};

export default ProjectListing;

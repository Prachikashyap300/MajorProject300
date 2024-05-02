import React, { useState, useEffect } from "react";

const ManageProject = () => {
  const [Data, setData] = useState([]);

  const fetchProjectData = async () => {
    const res = await fetch("http://localhost:4000/project/getall");
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setData(data);
    }
  };
  useEffect(() => {
    fetchProjectData();
  }, []);

  const deleteProject = async (id) => {
    console.log(id);
    const res = await fetch("http://localhost:4000/project/delete/" + id, {
      method: "DELETE",
    });
    if (res.status === 200) {
      enqueueSnackbar("Project deleted successfully", {variant:"success"})
      fetchProjectData();
    }else{
      enqueueSnackbar("something went wrong", {variant:"error"})
    }
  };


  const displayProject = () => {
    return Data.map((project) => (
      <tr>
        <td>{project.ptitle}</td>
        <td>{project.pdescription}</td>
        <td>
          <button
            onClick={() => {
              deleteProject(project._id);
            }}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  };
  return (
    <section className="intro mt-5">
      <div className="bg-image h-100" style={{ backgroundColor: "#f5f7fa" }}>
        <div className="mask d-flex align-items-center h-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="table-card">
                  <div className="table-card-body p-0">
                    <div
                      className="table-responsive table-scroll"
                      data-mdb-perfect-scrollbar="true"
                      style={{ position: "relative", height: 700 }}
                    >
                      <table className="table table-striped mb-0">
                        <thead style={{ backgroundColor: "#002d72" }}>
                          <tr className="">
                            <th>Name</th>
                            <th>Email</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>{displayProject()}</tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    // <div>
    //     <header className='text-center mt-5'>
    //         <div className="container">
    //             <h1 className='font-3 text-white'>Manage Project</h1>
    //         </div>
    //     </header>

    //     <div className="container mt-5 text-white">
    //         <table className="table table-dark">
    //             <thead>
    //                 <tr className='text-white'>
    //                     <th>Title</th>
    //                     <th>Description</th>
    //                     <th></th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {displayProject()}
    //             </tbody>
    //         </table>
    //     </div>
    // </div>
  );
};

export default ManageProject;

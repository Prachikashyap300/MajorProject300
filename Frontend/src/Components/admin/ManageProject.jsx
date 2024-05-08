import { enqueueSnackbar } from "notistack";
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
      enqueueSnackbar("Project deleted successfully", { variant: "success" });
      fetchProjectData();
    } else {
      enqueueSnackbar("something went wrong", { variant: "error" });
    }
  };

  const updateVerified = async (projectId) => {
    console.log(projectId);
    const res = await fetch(
      `http://localhost:4000/project/update/${projectId}`,
      {
        method: "PUT",
        body: JSON.stringify({ verified: true }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.status === 200) {
      setData(
        Data.map((project) =>
          project._id === projectId ? { ...project, verified: true } : project
        )
      );
      enqueueSnackbar("project verified successfully", { variant: "success" });
    } else {
      enqueueSnackbar("something went wrong", { variant: "error" });
    }
  };

  const displayProject = () => {
    return Data.map((project) => (
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="px-6 py-4">{project.ptitle}</td>
        <td className="px-6 py-4">{project.pdescription}</td>
        <td className="px-6 py-4">
          <button
            onClick={() => {
              deleteProject(project._id);
            }}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
        <td className="px-6 py-4">
          <button
            onClick={() => {
              updateVerified(project._id);
            }}
            className="btn btn-danger"
          >
          
            {project.verified ? "Verified" : "Verify"}
          </button>
        </td>
      </tr>
    ));
  };
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-3">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Project Title
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>{displayProject()}</tbody>
      </table>
    </div>

    // <section className="intro mt-5">
    //   <div className="bg-image h-100">
    //     <div className="mask d-flex align-items-center h-100">
    //       <div className="container">
    //         <div className="row justify-content-center">
    //           <div className="col-12">
    //             <div className="table-card">
    //               <div className="table-card-body p-0">
    //                 <div
    //                   className="table-responsive table-scroll"
    //                   data-mdb-perfect-scrollbar="true"
    //                   style={{ position: "relative", height: 700 }}
    //                 >
    //                   <table className="table table-striped mb-0" >
    //                     <thead style={{ backgroundColor: "#002d72", color:"white" }}>
    //                       <tr className="">
    //                         <th className="text-white">Title</th>
    //                         <th className="text-white">Description</th>
    //                         <th></th>
    //                       </tr>
    //                     </thead>
    //                     <tbody>{displayProject()}</tbody>
    //                   </table>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

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

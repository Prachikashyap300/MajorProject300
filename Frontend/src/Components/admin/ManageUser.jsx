import { enqueueSnackbar } from "notistack";
import React, { useState, useEffect } from "react";

const ManageUser = () => {
  const [Data, setData] = useState([]);

  const fetchUserData = async () => {
    const res = await fetch("http://localhost:4000/user/getall");
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setData(data);
    }
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  const deleteUser = async (id) => {
    console.log(id);
    const res = await fetch("http://localhost:4000/user/delete/" + id, {
      method: "DELETE",
    });
    if (res.status === 200) {
      enqueueSnackbar("user deleted successfully", { variant: "success" });
      fetchUserData();
    } else {
      enqueueSnackbar("something went wrong", { variant: "error" });
    }
  };

  const displayUser = () => {
    return Data.map((user) => (
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="px-6 py-4">{user.fname}</td>
        <td className="px-6 py-4">{user.email}</td>
        <td className="px-6 py-4">
          <button
            onClick={() => {
              deleteUser(user._id);
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
    <div className="mt-28 relative overflow-x-auto shadow-md sm:rounded-lg p-3 ">
      <table className=" w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              
            </th>
            
          </tr>
        </thead>
        <tbody>
         {displayUser()}
        </tbody>
      </table>
    </div>

    // <section className="intro mt-5">
    //   <div className="bg-image h-100" >
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
    //                   <table className="table table-striped mb-0">
    //                     <thead style={{ backgroundColor: "#002d72" }}>
    //                       <tr className="">
    //                         <th className="text-white">Name</th>
    //                         <th className="text-white">Email</th>
    //                         <th className="text-white"></th>
    //                       </tr>
    //                     </thead>
    //                     <tbody>{displayUser()}</tbody>
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
    //         <table className="table table-light table-striped">
    //             <thead style={{ backgroundColor: "#002d72" }}>
    //                 <tr className=''>
    //                     <th>Name</th>
    //                     <th>Email</th>
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

export default ManageUser;

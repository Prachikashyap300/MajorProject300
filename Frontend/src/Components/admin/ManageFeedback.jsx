import { enqueueSnackbar } from "notistack";
import React, { useState, useEffect } from "react";

const ManageFeedback = () => {
  const [Data, setData] = useState([]);

  const fetchUserFeedback = async () => {
    const res = await fetch("http://localhost:4000/contact/getall");
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setData(data);
    }
  };
  useEffect(() => {
    fetchUserFeedback();
  }, []);

  const deleteFeedback = async (id) => {
    console.log(id);
    const res = await fetch("http://localhost:4000/contact/delete/" + id, {
      method: "DELETE",
    });
    if (res.status === 200) {
      enqueueSnackbar("Feedback deleted successfully", { variant: "success" });
      fetchUserFeedback();
    } else {
      enqueueSnackbar("something went wrong", { variant: "error" });
    }
  };

  const displayFeedback = () => {
    return Data.map((contact) => (
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-1gray-600">
        <td className="px-6 py-4">{contact.name}</td>
        <td className="px-6 py-4">{contact.email}</td>
        <td className="px-6 py-4">{contact.subject}</td>
        <td className="px-6 py-4">{contact.message}</td>
        <td className="px-6 py-4">
          <button
            onClick={() => {
              deleteFeedback(contact._id);
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
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-3 ">
      <table className="mt-5 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
          <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Subject
            </th>
            <th scope="col" className="px-6 py-3">
              Message
            </th>
            <th scope="col" className="px-6 py-3">
              
            </th>
            
          </tr>
        </thead>
        <tbody>
         {displayFeedback()}
        </tbody>
      </table>
    </div>

      );
};

export default ManageFeedback;

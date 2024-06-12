import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { enqueueSnackbar } from "notistack";
import { Link, useNavigate } from "react-router-dom";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

const AddProjectSchema = Yup.object().shape({
  ptitle: Yup.string().required("Title is required**"),
  pcateogory: Yup.string().required("Cateogory is required**"),
  pdescription: Yup.string().required("Description is required**"),
  porganisation: Yup.string().required("Organisation name is required**"),
  // pimage: Yup.string().required("Image  is required**"),
});

const AddProject = () => {
  const [file, setSelFile] = useState([]);
  // step 1: formik initialization
  const AddProjectForm = useFormik({
    initialValues: {
      ptitle: "",
      pcateogory: "",
      pdescription: "",
      porganisation: "",
      pimage: "",
    },
    onSubmit: async (values, action) => {
      values.pimage = file.name
      console.log(values);
      const res = await fetch("http://localhost:4000/project/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.status);
      action.resetForm();

      if (res.status === 200) {
        enqueueSnackbar("Application submitted wait for response", {
          variant: "success",
        });
        // navigate("/Login");
      } else {
        enqueueSnackbar("Application not submitted", { variant: "error" });
      }
    },
    validationSchema: AddProjectSchema,
  });

  const uploadfile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setSelFile(file);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:4000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
      }
    });
  };

  return (
    <section className="p-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-violet-900 to-stone-900 "> 
       <form
      className="hover:scale-105 m-40 mt-20 p-20 bg-white rounded shadow-2xl transition-all duration-1000 "
      onSubmit={AddProjectForm.handleSubmit}
    >
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-dark md:text-2xl">
            Project Details
          </h1>
          {/* <h2 className="text-base font-semibold leading-7 text-dark">
            Project Details
          </h2> */}
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Add the details of your project
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label className="me-2 text-sm font-medium leading-6 text-gray-900">
                Title
              </label>
              <span style={{ color: "red", fontSize: "8" }}>
                {AddProjectForm.touched.ptitle && AddProjectForm.errors.ptitle}
              </span>
              <div className="mt-2">
                <input
                  id="ptitle"
                  type="text"
                  className="hover:scale-95 transition-all duration-1000 bg-slate-50/50 border-bottom shadow-bottom text-gray-900 sm:text-sm rounded-lg outline-none block w-full p-2.5  "
              
                  onChange={AddProjectForm.handleChange}
                  value={AddProjectForm.values.ptitle}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label className="me-2 text-sm font-medium leading-6 text-gray-900">
                Cateogory
              </label>
              <span style={{ color: "red", fontSize: "8" }}>
                {AddProjectForm.touched.pcateogory &&
                  AddProjectForm.errors.pcateogory}
              </span>
              <div className="mt-2">
                <select
                  id="pcateogory"
                  className="hover:scale-95 transition-all duration-1000 bg-slate-50/50 border-bottom shadow-bottom text-gray-900 sm:text-sm rounded-lg outline-none block w-full p-2.5  "
                  onChange={AddProjectForm.handleChange}
                  value={AddProjectForm.values.pcateogory}
                >
                  {/* <option>Reading /Writing</option> */}
                  <option>Information technology </option>
                  <option>Design </option>
                  <option>Management </option>
                  {/* <option>Problem solving/ desicion making </option>
                  <option>Real world authentic projects </option> */}
                </select>
              </div>
            </div>

            

            <div className="col-span-full">
              <label className="me-2 text-sm font-medium leading-6 text-gray-900">
                Description
              </label>
              <span style={{ color: "red", fontSize: "8" }}>
                {AddProjectForm.touched.pdescription &&
                  AddProjectForm.errors.pdescription}
              </span>
              <div className="mt-2">
                <textarea
                  id="pdescription"
                  className="hover:scale-95 transition-all duration-1000 bg-slate-50/50 border-bottom shadow-bottom text-gray-900 sm:text-sm rounded-lg outline-none block w-full p-2.5  "

                  rows={3}
                  defaultValue={""}
                  onChange={AddProjectForm.handleChange}
                  value={AddProjectForm.values.pdescription}
                />
              </div>
              
            </div>

            {/* <div className="sm:col-span-4">
              <label className="me-2 text-sm font-medium leading-6 text-gray-900">
                Organisation
              </label>
              <span style={{ color: "red", fontSize: "8" }}>
                {AddProjectForm.touched.ptitle && AddProjectForm.errors.ptitle}
              </span>
              <div className="mt-2">
                <input
                  id="porganisation"
                  className="hover:scale-95 transition-all duration-1000 bg-slate-50/50 border-bottom shadow-bottom text-gray-900 sm:text-sm rounded-lg outline-none block w-full p-2.5  "

                  type="text"
                  onChange={AddProjectForm.handleChange}
                  value={AddProjectForm.values.porganisation}
                />
              </div>
            </div> */}

            <div className="col-span-full">
              <label className="me-2 text-sm font-medium leading-6 text-gray-900">
                Project Image
              </label>
              <span style={{ color: "red", fontSize: "8" }}>
               
              </span>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon
                    className="mx-auto h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                    
                        type="file"
                        // className="sr-only"
                       onChange={uploadfile}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        >
          Submit
        </button>
        <button
          type="reset"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
      </div>
    </form>
    </section>
   
  );
};

export default AddProject;

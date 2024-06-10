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
  pimage: Yup.string().required("Image  is required**"),
});

const Project = () => {
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
    setSelFile(file.name);
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
    <section className="p-10"> 
    <form
      className=" m-5 p-5 bg-gray-100 rounded shadow "
      onSubmit={AddProjectForm.handleSubmit}
    >
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Project Details
          </h2>
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  onChange={AddProjectForm.handleChange}
                  value={AddProjectForm.values.pcateogory}
                >
                  <option>Reading/ Writing</option>
                  <option>Information technology </option>
                  <option>Design </option>
                  <option>Management </option>
                  <option>Problem solving/ desicion making </option>
                  <option>Real world authentic projects </option>
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
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                  onChange={AddProjectForm.handleChange}
                  value={AddProjectForm.values.pdescription}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Describe your Project.
              </p>
            </div>

            <div className="sm:col-span-3">
              <label className="me-2 text-sm font-medium leading-6 text-gray-900">
                Organisation
              </label>
              <span style={{ color: "red", fontSize: "8" }}>
                {AddProjectForm.touched.porganisation &&
                  AddProjectForm.errors.porganisation}
              </span>
              <div className="mt-2">
                <input
                  type="text"
                  id="porgansation"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={AddProjectForm.handleChange}
                  value={AddProjectForm.values.porganisation}
                />
              </div>
            </div>

            <div className="col-span-full">
              <label className="me-2 text-sm font-medium leading-6 text-gray-900">
                Cover photo
              </label>
              <span style={{ color: "red", fontSize: "8" }}>
                {AddProjectForm.touched.pimage && AddProjectForm.errors.pimage}
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
                        id="pimage"
                        type="file"
                        className="sr-only"
                        onChange={AddProjectForm.handleChange}
                        value={AddProjectForm.values.pimage}
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

export default Project;

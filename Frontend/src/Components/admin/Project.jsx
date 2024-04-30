import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { enqueueSnackbar } from "notistack";
import { Link } from "react-router-dom";

const AddProjectSchema = Yup.object().shape({
  ptitle: Yup.string().required("Name is required"),
  // pcateogory: Yup.string().required("pcateogory is required"),
  // pprice: Yup.string().required("Price is required"),
  pdescription: Yup.string().required("Description is required"),
});

const Project = () => {
  // step 1: formik initialization
  const AddProjectForm = useFormik({
    initialValues: {
      ptitle: "",
      // pcateogory: "",
      // pprice: "",
      pdescription: "",
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
        enqueueSnackbar("Application submitted wait for response", { variant: "success" });
      } else {
        enqueueSnackbar("Application not submitted", { variant: "error" });
      }
    },
    validationSchema: AddProjectSchema,
  });

  const uploadFile = (e) => {
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
    <div className="container w-50  p-2">
    <div className="card">
      <div className="card-header bg-primary text-light">
        <h6>Project Details</h6>
      </div>
      <div className="card-body">
        <form className="" onSubmit={AddProjectForm.handleSubmit}>
          <div className="">
          <span style={{ color: "red", fontSize: "8px" }}> 
            {AddProjectForm.touched.ptitle && AddProjectForm.errors.ptitle}
          </span><br />
            <input
              placeholder="Title"
              type="text"
              className="form-control form-control-sm"
              id="ptitle"
              onChange={AddProjectForm.handleChange}
              value={AddProjectForm.values.ptitle}
            />
          </div>
          <div className="mb-3">
          <span style={{ color: "red", fontSize: "8px" }}> 
            {AddProjectForm.touched.pdescription && AddProjectForm.errors.pdescription}
          </span><br />
            <textarea
              placeholder="Description"
              className="form-control"
              rows={3}
              id="pdescription"
              onChange={AddProjectForm.handleChange}
              value={AddProjectForm.values.pdescription}
            />
          </div>
          <button type="submit" className="btn btn-sm btn-primary">
            Add Project
          </button>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Project;

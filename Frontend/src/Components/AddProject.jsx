import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { enqueueSnackbar } from "notistack";
import { Link } from "react-router-dom";

const AddProjectSchema = Yup.object().shape({
  pname: Yup.string().required("Name is required"),
  // pcateogory: Yup.string().required("pcateogory is required"),
  // pprice: Yup.string().required("Price is required"),
  pdescription: Yup.string().required("Description is required"),
});

const AddProject = () => {
  // step 1: formik initialization
  const AddProjectForm = useFormik({
    initialValues: {
      pname: "",
      pcateogory: "",
      pprice: "",
      pdescription: "",
    },
    onSubmit: async (values, action) => {
      console.log(values);
      const res = await fetch("http://localhost:4 000/user/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.status);
      action.resetForm();

      if (res.status === 200) {
        enqueueSnackbar("Signup successful", { variant: "success" });
      } else {
        enqueueSnackbar("Signup failed", { variant: "error" });
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
    <div className="container">
      <div className="card form-card">
        <div className="card-header">
          <h3 className="font-3">Project Details</h3>
        </div>
        <div className="card-body">
          {/* step2: handling when submit */}
          <form onSubmit={AddProjectForm.handleSubmit}>
            <div className="form-group">
              <span style={{ color: "#051832", fontSize: "10" }}>
                {AddProjectForm.touched.pname && AddProjectForm.errors.pname}
              </span>
              <input
                placeholder="Title"
                type="text"
                className="inp mb-4"
                id="pname"
                onChange={AddProjectForm.handleChange}
                value={AddProjectForm.values.pname}
              />
            </div>
            {/* <div className="form-group">
              <label>Cateogory</label>
              <span style={{ color: "#051832", fontSize: "10" }}>
                {AddProjectForm.touched.pcateogory &&
                  AddProjectForm.errors.pcateogory}
              </span>
              <input
                type="text"
                className="inp mb-4"
                id="pcateogory"
                onChange={AddProjectForm.handleChange}
                value={AddProjectForm.values.pcateogory}
              />
            </div> */}
            {/* <div className="form-group">
              <label>Price</label>
              <span style={{ color: "#051832", fontSize: "10" }}>
                {AddProjectForm.touched.pprice && AddProjectForm.errors.pprice}
              </span>
              <input
                type="text"
                className="inp mb-4"
                id="pprice"
                onChange={AddProjectForm.handleChange}
                value={AddProjectForm.values.pprice}
              />
            </div> */}
            <div className="form-group">
              <span style={{ color: "#051832", fontSize: "10" }}>
                {AddProjectForm.touched.pdescription &&
                  AddProjectForm.errors.pdescription}
              </span>
              <input
                placeholder="Description"
                type="text"
                className="inp mb-4"
                id="pdescription"
                onChange={AddProjectForm.handleChange}
                value={AddProjectForm.values.pdescription}
              />
            </div>
            <div className="text-center">
              <button type="submit" className="font-2 submit-button">
                <p>Add Project</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProject;

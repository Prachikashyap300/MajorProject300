import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { enqueueSnackbar } from "notistack";
import { Link, useNavigate } from "react-router-dom";

const AddProjectSchema = Yup.object().shape({
  ptitle: Yup.string().required("Name is required"),
  pcateogory: Yup.string().required("pcateogory is required"),
  pdescription: Yup.string().required("Description is required"),
  pimage: Yup.string().required("Image  is required"),
});

const AddProject = () => {
  const [file, setSelFile] = useState([]);
  // step 1: formik initialization
  const AddProjectForm = useFormik({
    initialValues: {
      ptitle: "",
      pcateogory: "",
      pimage: "",
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
    <>
      {/* Section: Design Block */}
      <section className="text-center">
        {/* Background image */}
        <div
          className="p-5 bg-image"
          style={{
            backgroundImage:
              'url("https://mdbootstrap.com/img/new/textures/full/171.jpg")',
            height: 200,
          }}
        />
        {/* Background image */}
        <div
          className="card mx-4 mx-md-5 shadow-5-strong bg-body-tertiary"
          style={{ marginTop: "-100px", backdropFilter: "blur(30px)" }}
        >
          <div className="card-body py-5 px-1">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <h1 className="fw-bold mb-5">Project Details</h1>
                <form onSubmit={AddProjectForm.handleSubmit}>
                  <div data-mdb-input-init="" className="form-outline mb-4">
                    <span style={{ color: "#051832", fontSize: "10" }}>
                      {AddProjectForm.touched.ptitle &&
                        AddProjectForm.errors.ptitle}
                    </span>
                    <input
                      placeholder="Title"
                      type="text"
                      id="ptitle"
                      className="form-control"
                      onChange={AddProjectForm.handleChange}
                      value={AddProjectForm.values.ptitle}
                    />
                  </div>
                  <div data-mdb-input-init="" className="form-outline mb-4">
                    <span style={{ color: "#051832", fontSize: "10" }}>
                      {AddProjectForm.touched.pcateogory &&
                        AddProjectForm.errors.pcateogory}
                    </span>
                    <input
                      placeholder="Cateogory"
                      type="text"
                      id="pcateogory"
                      className="form-control"
                      onChange={AddProjectForm.handleChange}
                      value={AddProjectForm.values.pcateogory}
                    />
                  </div>
                  <div data-mdb-input-init="" className="form-outline mb-4">
                    <span style={{ color: "#051832", fontSize: "10" }}>
                      {AddProjectForm.touched.pdescription &&
                        AddProjectForm.errors.pdescription}
                    </span>
                    <input
                      placeholder="Description"
                      type="password"
                      id="pdescription"
                      className="form-control"
                      onChange={AddProjectForm.handleChange}
                      value={AddProjectForm.values.pdescription}
                    />
                  </div>
                  <div data-mdb-input-init="" className="form-outline mb-4">
                    <span style={{ color: "#051832", fontSize: "10" }}>
                      {AddProjectForm.touched.pimage &&
                        AddProjectForm.errors.pimage}
                    </span>
                    <input
                      placeholder="Upload Image"
                      type="file"
                      id="pimage"
                      className="form-control"
                      onChange={AddProjectForm.handleChange}
                      value={AddProjectForm.values.pimage}
                    />
                  </div>

                  <button
                    type="submit"
                    data-mdb-button-init=""
                    data-mdb-ripple-init=""
                    className="btn btn-primary btn-block mb-4"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section: Design Block */}
    </>
  );
};

export default AddProject;

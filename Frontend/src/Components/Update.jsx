import { Formik } from "formik";
import { useEffect, useState } from "react";
// import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const [projectData, setProductData] = useState(null);
  const [selFile, setSelFile] = useState("");

  const navigate = useNavigate();

  const fetchproductData = async () => {
    const res = await fetch("http://localhost:4000/project/getbyid/" + id);
    const data = await res.json();

    console.log(data);
    setProjecttData(data);
  };

  useEffect(() => {
    fetchprojectData();
  }, []);

  const submitForm = async (values) => {
    console.log(values);
    values.simage = selFile;
    const res = await fetch("http://localhost:4000/project/update/" + id, {
      method: "PUT",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(res.status);

    if (res.status === 200) {
      // toast("Updated successfully")
      enqueueSnackbar("Updated successfully", { variant: "success" });
      navigate("/ProductListing");
    }
  };

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
    <div>
      <div className="col-md-3 mx-auto pt-5">
        <div className="card">
          <div className="card-body">
            <h3 className="text-center my-5">Update Service</h3>
            {projectData !== null ? (
              <Formik initialValues={projectData} onSubmit={submitForm}>
                {(AddProjectForm) => (
                  <form onSubmit={AddProjectForm.handleSubmit}>
                    <label>Project Title</label>

                    <span
                      style={{ color: "red", fontSize: 10, marginLeft: 10 }}
                    >
                      {AddProjectForm.errors.ptitle}
                    </span>
                    <input
                      id="ptitle"
                      onChange={AddProjectForm.handleChange}
                      value={AddProjectForm.values.ptitle}
                      type="text"
                      className="form-control mb-4"
                    />

                    <label>Project Description</label>
                    <input
                      id="pdescription"
                      onChange={AddProjectForm.handleChange}
                      value={AddProjectForm.values.pdescription}
                      type="text"
                      className="form-control mb-4"
                    />

                    {/* <label>Upload Image</label>
                    <input
                      type="file"
                      id="pimage"
                      className="form-control mb-4"
                      placeholder="Upload Image"
                      onChange={uploadFile}
                    /> */}

                    <button type="submit" className="btn btn-primary w-100">
                      Submit
                    </button>
                  </form>
                )}
              </Formik>
            ) : (
              <h1 className="text-center my-5">Loading ... </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;

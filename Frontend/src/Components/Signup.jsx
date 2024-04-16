import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { enqueueSnackbar } from "notistack";
import "../App.css";

const SignupSchema = Yup.object().shape({
  fname: Yup.string() .required("First Name is requiyellowgreen"),
  lname: Yup.string() .required("Last Name is requiyellowgreen"),
  email: Yup.string() .required("Email is requiyellowgreen"),
  course: Yup.string() .required("Course is requiyellowgreen"),
  semester: Yup.string() .required("Semester is requiyellowgreen"),
  college: Yup.string() .required("Course is requiyellowgreen"),
  password: Yup.string() .required("Password is requiyellowgreen"),
  cpassword: Yup.string() .required("Confirm your password"),
});

const Signup = () => {
  // step 1: formik initialization
  const signupForm = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      course: "",
      semester: "",
      college: "",
      password: "",
      cpassword: "",
    },
    onSubmit: async (values, action) => {
      console.log(values);
      const res = await fetch("http://localhost:4000/user/add", {
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
    validationSchema: SignupSchema,
  });
  return (
    <div className="container ">
      <div className="row p-5">
        <div className="col p-2">
          <div className="card  w-75 d-block mx-auto">
            <div className="card-header text-white">
              <h3 className="font">Signup</h3>
            </div>
            <div className="card-body">
              {/* step2: handling when submit */}
              <form onSubmit={signupForm.handleSubmit}>
                <div className="form-group">
                  <div className="row">
                    <div className="col-md-6">
                      <span style={{ color: "yellow", fontSize: "10" }}>
                        {signupForm.touched.fname && signupForm.errors.fname}
                      </span>
                      <input
                        placeholder="First Name"
                        type="text"
                        className="font-2 form-control mb-3 inp bg-dark"
                        id="fname"
                        onChange={signupForm.handleChange}
                        value={signupForm.values.fname}
                      />
                    </div>
                    <div className="col-md-6">
                    <span style={{ color: "yellow", fontSize: "10" }}>
                      {signupForm.touched.lname && signupForm.errors.lname}
                    </span>
                    <input
                      placeholder="Last Name"
                      type="text"
                      className="font-2 form-control mb-3  inp bg-dark text-white"
                      id="lname"
                      onChange={signupForm.handleChange}
                      value={signupForm.values.lname}
                    />
                  </div>
                  </div>
                  
                </div>
                <div className="form-group">
                  <span style={{ color: "yellow", fontSize: "10" }}>
                    {signupForm.touched.email && signupForm.errors.email}
                  </span>
                  <input
                    placeholder="Email"
                    type="text"
                    className="font-2 form-control mb-3  inp bg-dark text-white"
                    id="email"
                    onChange={signupForm.handleChange}
                    value={signupForm.values.email}
                  />
                </div>
                <div className="form-group">
                  <span style={{ color: "yellow", fontSize: "10" }}>
                    {signupForm.touched.course && signupForm.errors.course}
                  </span>
                  <input
                    placeholder="Course"
                    type="text"
                    className="font-2 form-control mb-3  inp bg-dark text-white"
                    id="course"
                    onChange={signupForm.handleChange}
                    value={signupForm.values.course}
                  />
                </div>
                <div className="form-group">
                  <span style={{ color: "yellow", fontSize: "10" }}>
                    {signupForm.touched.semester && signupForm.errors.semester}
                  </span>
                  <input
                    placeholder="Semester"
                    type="text"
                    className="font-2 form-control mb-3  inp bg-dark text-white"
                    id="semester"
                    onChange={signupForm.handleChange}
                    value={signupForm.values.semester}
                  />
                </div>
                <div className="form-group">
                  <span style={{ color: "yellow", fontSize: "10" }}>
                    {signupForm.touched.college && signupForm.errors.college}
                  </span>
                  <input
                    placeholder="College"
                    type="text"
                    className="font-2 form-control mb-3  inp bg-dark text-white"
                    id="college"
                    onChange={signupForm.handleChange}
                    value={signupForm.values.college}
                  />
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-md-6">
                      <span style={{ color: "yellow", fontSize: "10" }}>
                        {signupForm.touched.password &&
                          signupForm.errors.password}
                      </span>
                      <input
                        placeholder="Password"
                        type="text"
                        className="font-2 form-control mb-3  inp bg-dark text-white"
                        id="password"
                        onChange={signupForm.handleChange}
                        value={signupForm.values.password}
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <span style={{ color: "yellow", fontSize: "10" }}>
                          {signupForm.touched.cpassword &&
                            signupForm.errors.cpassword}
                        </span>
                        <input
                          placeholder="Confirm Password"
                          type="text"
                          className="font-2 form-control mb-3  inp bg-dark text-white "
                          id="cpassword"
                          onChange={signupForm.handleChange}
                          value={signupForm.values.cpassword}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button type="submit" className=" font-2 w-100 button">
                  Signup
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

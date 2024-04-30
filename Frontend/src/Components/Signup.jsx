import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { enqueueSnackbar } from "notistack";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
  cpassword: Yup.string().required("Confirm your password"),
});

const Signup = () => {
  const navigate = useNavigate();
  // step 1: formik initialization
  const signupForm = useFormik({
    initialValues: {
      name: "",
      email: "",
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
        navigate("/Login");
      } else {
        enqueueSnackbar("Signup failed", { variant: "error" });
      }
    },
    validationSchema: SignupSchema,
  });
  return (
    <div className="container w-50 p-5">
      <div className="row">
        <div className="col-lg-0">
        </div>
        <div className="col-lg-12">
          <div className="myForm">
            <form className="" onSubmit={signupForm.handleSubmit}>
              <div className="row">
                <div className="col-lg-12">
                  <div className="">
                    <span style={{ color: "red", fontSize: "5px" }}>
                      {signupForm.touched.name && signupForm.errors.name}
                    </span>
                    <br />
                    <input
                      placeholder="Name"
                      type="text"
                      className="input"
                      id="name"
                      onChange={signupForm.handleChange}
                      value={signupForm.values.name}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="">
                    <span style={{ color: "red", fontSize: "8px" }}>
                      {signupForm.touched.email && signupForm.errors.email}
                    </span>
                    <br />
                    <input
                      placeholder="Email"
                      type="email"
                      className="input"
                      id="email"
                      onChange={signupForm.handleChange}
                      value={signupForm.values.emial}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="">
                    <span style={{ color: "red", fontSize: "8px" }}>
                      {signupForm.touched.password &&
                        signupForm.errors.password}
                    </span>
                    <br />
                    <input
                      placeholder="Password"
                      type="text"
                      className="input"
                      id="password"
                      onChange={signupForm.handleChange}
                      value={signupForm.values.password}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb-3">
                    <span style={{ color: "red", fontSize: "8px" }}>
                      {signupForm.touched.cpassword &&
                        signupForm.errors.cpassword}
                    </span>
                    <br />
                    <input
                      placeholder="Confirm Password"
                      type="text"
                      className="input"
                      id="cpassword"
                      onChange={signupForm.handleChange}
                      value={signupForm.values.cpassword}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="">
                    <button type="submit" className="submit-button">
                      Signup
                    </button>
                  </div>
                </div><br /><br />

                <div className="col-lg-12">
                  <div>
                    <p
                      className="text-white mt-2 mb-0 text-center"
                      style={{ fontSize: "12px" }}
                    >
                      Alreadt have an account? <Link to="/Login">Login</Link>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

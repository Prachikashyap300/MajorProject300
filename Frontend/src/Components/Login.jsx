import React from "react";
import im from "../assets/bg.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { enqueueSnackbar } from "notistack";
import "../App.css";
import { Link } from 'react-router-dom';

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Email is requ"),
  password: Yup.string().required("Password is requ"),
});

const Login = () => {
  // step 1: formik initialization
  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
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
        enqueueSnackbar("Login successful", { variant: "success" });
      } else {
        enqueueSnackbar("Login failed", { variant: "error" });
      }
    },
    validationSchema: LoginSchema,
  });
  return (
    <div className="container">
          <div className="card form-card">
            <div className="card-header">
              <h2 className="font">
                Welcome to IdeaHub <br /> Login to continue
              </h2>
            </div>
            <div className="card-body">
              <form onSubmit={loginForm.handleSubmit}>
                <div className="from-group">
                  <span style={{ color: "#051832", fontSize: "10" }}>
                    {loginForm.
                    touched.email && loginForm.errors.email}
                  </span><br />
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    onChange={loginForm.handleChange}
                    value={loginForm.values.email}
                    className="inp"
                  />


                </div>
                <div className="from-group">
                  <span style={{ color: "#051832", fontSize: "10" }}>
                    {loginForm.touched.password && loginForm.errors.password}
                  </span><br />
                  <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    onChange={loginForm.handleChange}
                    value={loginForm.values.password}
                    className="inp"
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="font-2 submit-button">
                    <p>Signup</p>
                  </button>
                  <p className="mt-5 text-center">Dont have an account? <Link className="links" to="/Signup">Signup</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
  );
};

export default Login;

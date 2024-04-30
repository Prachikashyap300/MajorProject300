import React from "react";
import im from "../assets/bg.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { enqueueSnackbar } from "notistack";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import useUserContext from "../UserContext";

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  //for logout

  const { setLoggedIn } = useUserContext;

  // step 1: formik initialization
  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, action) => {
      console.log(values);
      const res = await fetch("http://localhost:4000/user/authenticate", {
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
        navigate("/");
        setLoggedIn(true);

        const data = await res.json();
        console.log(data);
        //to save user data ini session , inbuilt api session storage
        sessionStorage.setItem("user", JSON.stringify(data));
      } else {
        enqueueSnackbar("Login failed", { variant: "error" });
      }
    },
    validationSchema: LoginSchema,
  });
  return (
    <div className="container w-50 p-5">
      <div className="row">
        <div className="col-0"></div>
        <div className="col-12">
          <div className="myForm">
            <form onSubmit={loginForm.handleSubmit}>
              <div className="row">
                <div className="col-lg-12">
                <div className="">
                <span style={{ color: "#051832", fontSize: "10" }}>
                  {loginForm.touched.email && loginForm.errors.email}
                </span>
                <br />
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  onChange={loginForm.handleChange}
                  value={loginForm.values.email}
                  className="input"
                />
              </div>
                </div>
                <div className="col-lg-12">
                <div className="mb-3">
                <span style={{ color: "#051832", fontSize: "10" }}>
                  {loginForm.touched.password && loginForm.errors.password}
                </span>
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  onChange={loginForm.handleChange}
                  value={loginForm.values.password}
                  className="input"
                />
              </div>
                </div>
                <div className="col-lg-12">
                  <div className="">
                    <button type="submit" className="submit-button">
                      Login
                    </button>
                  </div>
                </div><br /><br />

                <div className="col-lg-12">
                  <div>
                    <p
                      className="text-white mt-2 mb-0 text-center"
                      style={{ fontSize: "12px" }}
                    >
                      Alreadt have an account? <Link to="/Signup">Signup</Link>
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

export default Login;

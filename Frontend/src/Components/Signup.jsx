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
    <div>
      {/* Section: Design Block */}
      <section className="background-radial-gradient overflow-hidden">
        {/* <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    .background-radial-gradient {\n      background-color: hsl(218, 41%, 15%);\n      background-image: radial-gradient(650px circle at 0% 0%,\n          hsl(218, 41%, 35%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%),\n        radial-gradient(1250px circle at 100% 100%,\n          hsl(218, 41%, 45%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%);\n    }\n\n    #radius-shape-1 {\n      height: 220px;\n      width: 220px;\n      top: -60px;\n      left: -130px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    #radius-shape-2 {\n      border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;\n      bottom: -60px;\n      right: -110px;\n      width: 300px;\n      height: 300px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    .bg-glass {\n      background-color: hsla(0, 0%, 100%, 0.9) !important;\n      backdrop-filter: saturate(200%) blur(25px);\n    }\n  ",
        }}
      /> */}
        <div className="container px-2 py-2 px-md-5 text-center text-sm-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
              <h1
                className="my-5 display-5 fw-bold ls-tight"
                style={{ color: "purple" }}
              >
                The best offer <br />
                <span style={{ color: "purple" }}>for your business</span>
              </h1>
              <p className="mb-4 opacity-70" style={{ color: "black" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                ab ipsum nisi dolorem modi. Quos?
              </p>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div
                id="radius-shape-1"
                className="position-absolute rounded-circle shadow-5-strong"
              />
              <div
                id="radius-shape-2"
                className="position-absolute shadow-5-strong"
              />
              <div className="card bg-glass">
                <div className="card-body px-4 py-5 px-md-5">
                  <form onSubmit={signupForm.handleSubmit}>
                    {/* Name input */}
                    <div data-mdb-input-init="" className="form-outline mb-4">
                      <span style={{ color: "#051832", fontSize: "10" }}>
                        {signupForm.touched.name && signupForm.errors.name}
                      </span>
                      <input
                        placeholder="Name"
                        type="text"
                        id="name"
                        className="form-control"
                        onChange={signupForm.handleChange}
                        value={signupForm.values.name}
                      />
                      {/* <label className="form-label" htmlFor="form3Example3">
                      Name
                    </label> */}
                    </div>
                    {/* Email input */}
                    <div data-mdb-input-init="" className="form-outline mb-4">
                      <span style={{ color: "#051832", fontSize: "10" }}>
                        {signupForm.touched.email && signupForm.errors.email}
                      </span>
                      <input
                        placeholder="Email"
                        type="email"
                        id="email"
                        className="form-control"
                        onChange={signupForm.handleChange}
                        value={signupForm.values.email}
                      />
                    </div>
                    {/* Password input */}
                    <div data-mdb-input-init="" className="form-outline mb-4">
                      <span style={{ color: "#051832", fontSize: "10" }}>
                        {signupForm.touched.password &&
                          signupForm.errors.password}
                      </span>
                      <input
                        placeholder="Password"
                        type="password"
                        id="password"
                        className="form-control"
                        onChange={signupForm.handleChange}
                        value={signupForm.values.password}
                      />
                    </div>
                    <div data-mdb-input-init="" className="form-outline mb-4">
                      <span style={{ color: "#051832", fontSize: "10" }}>
                        {signupForm.touched.cpassword &&
                          signupForm.errors.cpassword}
                      </span>
                      <input
                        placeholder="Confirm Password"
                        type="password"
                        id="cpassword"
                        className="form-control"
                        onChange={signupForm.handleChange}
                        value={signupForm.values.cpassword}
                      />
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      data-mdb-button-init=""
                      data-mdb-ripple-init=""
                      className="btn btn-primary btn-block mb-2"
                    >
                      Sign up
                    </button>
                    <div>
                      <p>
                        Already have an account ? <Link to="/Login">Login</Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section: Design Block */}
    </div>
  );
};

export default Signup;

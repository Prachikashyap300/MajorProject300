import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { enqueueSnackbar } from "notistack";
import "../App.css";

const SignupSchema = Yup.object().shape({
  name: Yup.string() .required("First Name is requiyellowgreen"),
  email: Yup.string() .required("Email is requiyellowgreen"),
  password: Yup.string() .required("Password is requiyellowgreen"),
  cpassword: Yup.string() .required("Confirm your password"),
});

const Signup = () => {
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
          <div className="card signupc ">
            <div className="card-header ">
              <h3 className="font">Signup</h3>
            </div>
            <div className="card-body">
              {/* step2: handling when submit */}
              <form onSubmit={signupForm.handleSubmit}>
                <div className="form-group">
                  <div className="row g-5">
                    <div className="col-md-6">
                      <span style={{ color: "yellow", fontSize: "10" }}>
                        {signupForm.touched.name && signupForm.errors.name}
                      </span><br />
                      <input
                        placeholder="First Name"
                        type="text"
                        className="inp "
                        id="name"
                        onChange={signupForm.handleChange}
                        value={signupForm.values.name}
                      />
                    </div>
                    
                  </div>
                  
                </div>
                <div className="form-group">
                  <span style={{ color: "yellow", fontSize: "10" }}>
                    {signupForm.touched.email && signupForm.errors.email}
                  </span><br />
                  <input
                    placeholder="Email"
                    type="text"
                    className="inp "
                    id="email"
                    onChange={signupForm.handleChange}
                    value={signupForm.values.email}
                  />
                </div>
                
                
                
                <div className="form-group">
                  <div className="row">
                    <div className="col-md-6">
                      <span style={{ color: "yellow", fontSize: "10" }}>
                        {signupForm.touched.password &&
                          signupForm.errors.password}
                      </span><br />
                      <input
                        placeholder="Password"
                        type="text"
                        className="inp "
                        id="password"
                        onChange={signupForm.handleChange}
                        value={signupForm.values.password}
                      />
                    </div>
                    
                  </div>
                  <div className="col-md-6">
                      <div className="form-group">
                        <span style={{ color: "yellow", fontSize: "10" }}>
                          {signupForm.touched.cpassword &&
                            signupForm.errors.cpassword}
                        </span><br />
                        <input
                          placeholder="Confirm Password"
                          type="text"
                          className="inp  "
                          id="cpassword"
                          onChange={signupForm.handleChange}
                          value={signupForm.values.cpassword}
                        />
                      </div>
                    </div>
                </div>

                <button type="submit" className="font-2 submit-button">
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

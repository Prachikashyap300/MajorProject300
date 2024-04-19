import React from 'react'
import im from '../assets/bg.jpg'
import { useFormik } from "formik";
import * as Yup from "yup";
import { enqueueSnackbar } from "notistack";
import "../App.css";

const LoginSchema = Yup.object().shape({
  email: Yup.string() .required("Email is requ"),
  password: Yup.string() .required("Password is requ"),
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
    <div className='container'>
      <div className="row mt-5 p-5">
        <div className="col p-2">
          <div className="card w-75 d-block mx-auto">
            <div className="card-header">
              <h2 className='font'>Welcome to IdeaHub <br /> Login to continue
              </h2>
            </div>
            <div className="card-body">
              <form onSubmit={loginForm.handleSubmit}>
                <div className="from-group">
                <span style={{ color: "yellow", fontSize: "10" }}>
                        {loginForm.touched.email && loginForm.errors.email}
                      </span>
                  <input type="email" placeholder='Email' 
                  id='email'
                  onChange={loginForm.handleChange}
                  value={loginForm.values.email}
                  className='font-2 form-control inp mb-4' />
                </div>
                <div className="from-group">
                <span style={{ color: "yellow", fontSize: "10" }}>
                        {loginForm.touched.password && loginForm.errors.password}
                      </span>
                  <input type="password" placeholder='Password'
                  id='password'
                  onChange={loginForm.handleChange}
                  value={loginForm.values.password}
                   className='font-2 form-control inp mb-4  ' />
                </div>
                <button type='submit' className=' font-2 w-100 button'>Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Login
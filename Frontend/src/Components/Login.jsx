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
    <section className="h-screen w-screen bg-violet-500 ">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className=" bg-gray-100 w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Login into your account
          </h1>
          <form className="space-y-4 md:space-y-6 " action="#" onSubmit={loginForm.handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="me-2 mb-2 text-sm font-medium text-gray-900 "
              >
                Your email
              </label>
              <span style={{ color: "red", fontSize: "8" }}>
                  {loginForm.touched.email && loginForm.errors.email}
                </span>
              <input
                placeholder="name@company.com"
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={loginForm.handleChange}
                value={loginForm.values.email}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="me-2 mb-2 text-sm font-medium text-gray-900 "
              >
                Password
              </label>
              <span style={{ color: "red", fontSize: "8" }}>
                  {loginForm.touched.password && loginForm.errors.password}
                </span>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={loginForm.handleChange}
                value={loginForm.values.password}
              />
            </div>
            
            <button type="submit" class="w-100 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Login
            </button>
            
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don't have an account?{" "}
              <a
                href="/Signup"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Signup here
              </a>
            </p>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              <a
                href="/ForgetPassword"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Forget Password
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Login;

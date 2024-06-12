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

  const { setLoggedIn } = useUserContext();

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
        setLoggedIn(true);
        navigate("/");

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
    <section className="vh-100 flex items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-violet-900 to-stone-900 ">
      <div className="mt-20 w-2/5">
        <form
          className="hover:scale-110 p-8 rounded shadow-2xl bg-white transition-all duration-1000"
          onSubmit={loginForm.handleSubmit}
        >
          <div className="space-y-12 mb-5">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-dark md:text-2xl">
              Log into your account
            </h1>

            <div className="">
              <div className="">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <span style={{ color: "red", fontSize: "8" }}>
                  {loginForm.touched.email && loginForm.errors.email}
                </span>
                <div className="mt-1">
                  <input
                    type="email"
                    id="email"
                    className="hover:scale-95 transition-all duration-1000 bg-slate-50/50 border-bottom shadow-bottom text-gray-900 sm:text-sm rounded-lg outline-none block w-full p-2.5  "
                    onChange={loginForm.handleChange}
                    value={loginForm.values.email}
                  />
                </div>
              </div>
              <div className="mt-8">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <span style={{ color: "red", fontSize: "8" }}>
                  {loginForm.touched.password && loginForm.errors.password}
                </span>
                <div className="mt-1">
                  <input
                    type="password"
                    id="password"
                    className="hover:scale-95 transition-all duration-1000 bg-slate-50/50 border-bottom shadow-bottom text-gray-900 sm:text-sm rounded-lg outline-none block w-full p-2.5  "
                    onChange={loginForm.handleChange}
                    value={loginForm.values.password}
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            class="w-50 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Login
          </button>
          <div className="flex  text-sm">
            <p className="mt-3 justify-content-between text-sm font-light text-gray-500 dark:text-gray-400">
              Don't have an account?{" "}
              <Link
                to="/Signup"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Signup here
              </Link>
              <p><Link to="/ForgetPassword">Forgot Password?</Link></p>
            </p>
            
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;

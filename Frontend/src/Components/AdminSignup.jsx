import React from "react";
// import im from "../assets/bg.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { enqueueSnackbar } from "notistack";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import useUserContext from "../UserContext";

const AdminSignupSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const AdminSignup = () => {
  const navigate = useNavigate();
  //for logout

  const { setLoggedIn } = useUserContext();

  // step 1: formik initialization
  const AdminSignupForm = useFormik({
    initialValues: {
      email: "",
      name:"",
      password: "",
      cpassword:"",
    },
    onSubmit: async (values, action) => {
      console.log(values);
      const res = await fetch("http://localhost:4000/admin/add", {
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
        setLoggedIn(true);
        navigate("/AdminLogin");

        const data = await res.json();
        console.log(data);
        //to save user data ini session , inbuilt api session storage
        sessionStorage.setItem("admin", JSON.stringify(data));
      } else {
        enqueueSnackbar("Signup failed", { variant: "error" });
      }
    },
    validationSchema: AdminSignupSchema,
  });
  return (
    <section className="vh-100 flex items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-violet-900 to-stone-900 transparent">
      <div className="mt-20 w-2/5">
        <form
          className="hover:scale-110 p-8 rounded shadow-2xl bg-gray-50/50 transition-all duration-1000"
          onSubmit={AdminSignupForm.handleSubmit}
        >
          <div className="space-y-12 mb-5">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
              Admin Signup
            </h1>

            <div className="">
              <div className="">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Name
                </label>
                <span style={{ color: "red", fontSize: "8" }}>
                  {AdminSignupForm.touched.email && AdminSignupForm.errors.email}
                </span>
                <div className="mt-1">
                  <input
                    type="text"
                    id="name"
                    className="hover:scale-95 transition-all duration-1000 bg-slate-50/50 border-bottom shadow-bottom text-gray-900 sm:text-sm rounded-lg outline-none block w-full p-2.5  "
                    onChange={AdminSignupForm.handleChange}
                    value={AdminSignupForm.values.name}
                  />
                </div>
              </div>
              <div className="">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <span style={{ color: "red", fontSize: "8" }}>
                  {AdminSignupForm.touched.email && AdminSignupForm.errors.email}
                </span>
                <div className="mt-1">
                  <input
                    type="email"
                    id="email"
                    className="hover:scale-95 transition-all duration-1000 bg-slate-50/50 border-bottom shadow-bottom text-gray-900 sm:text-sm rounded-lg outline-none block w-full p-2.5  "
                    onChange={AdminSignupForm.handleChange}
                    value={AdminSignupForm.values.email}
                  />
                </div>
              </div>
              <div className="mt-8">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <span style={{ color: "red", fontSize: "8" }}>
                  {AdminSignupForm.touched.password && AdminSignupForm.errors.password}
                </span>
                <div className="mt-1">
                  <input
                    type="password"
                    id="password"
                    className="hover:scale-95 transition-all duration-1000 bg-slate-50/50 border-bottom shadow-bottom text-gray-900 sm:text-sm rounded-lg outline-none block w-full p-2.5  "
                    onChange={AdminSignupForm.handleChange}
                    value={AdminSignupForm.values.password}
                  />
                </div>
              </div>
              <div className="mt-8">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Repeat Password
                </label>
                <span style={{ color: "red", fontSize: "8" }}>
                  {AdminSignupForm.touched.cpassword && AdminSignupForm.errors.cpassword}
                </span>
                <div className="mt-1">
                  <input
                    type="password"
                    id="cpassword"
                    className="hover:scale-95 transition-all duration-1000 bg-slate-50/50 border-bottom shadow-bottom text-gray-900 sm:text-sm rounded-lg outline-none block w-full p-2.5  "
                    onChange={AdminSignupForm.handleChange}
                    value={AdminSignupForm.values.cpassword}
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            class="w-100 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Signup
          </button>
          {/* <div className="flex  text-sm">
            <p className="mt-3 justify-content-between text-sm font-light text-gray-500 dark:text-gray-400">
              Don't have an account?{" "}
              <Link
                to="/AdminSignup"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Signup here
              </Link>
              <p><Link to="/ForgetPassword">Forgot Password?</Link></p>
            </p>
            
          </div> */}
        </form>
      </div>
    </section>
  );
};

export default AdminSignup;

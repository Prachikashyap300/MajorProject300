import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { enqueueSnackbar } from "notistack";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

const SignupSchema = Yup.object().shape({
  fname: Yup.string().required("** First Name is required").min(3, "to short"),
  lname: Yup.string().required("** Last Name is required").min(3, "to short"),
  email: Yup.string().required("** Email is required"),
  college: Yup.string().required("** College is required"),
  course: Yup.string().required(" ** Course is required"),
  uimage: Yup.string().required("** Image is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*[\]{}()?"\\,><':;|_~`=+-])[a-zA-Z\d!@#$%^&*[\]{}()?"\\,><':;|_~`=+-]{8,99}$/,
      "Must contain at least 12 Characters, 1 Uppercase, 1 Lowercase, 1 Special Character, and 1 Number"
    ),
  cpassword: Yup.string().oneOf([Yup.ref("password")], "Passwords must match"),
});

const Signup = () => {
  const navigate = useNavigate();
  // step 1: formik initialization
  const signupForm = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      college: "",
      course: "",
      uimage: "",
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

  const uploadfile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setSelFile(file);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:4000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
      }
    });
  };
  return (
    <section className="flex items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-violet-900 to-stone-900 ">
      <div className="mt-20">
      <form
        className="hover:scale-105 m-5 p-5  rounded shadow-2xl bg-white transition-all duration-1000"
        onSubmit={signupForm.handleSubmit}
      >
        <div className="space-y-12 mb-5">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-dark md:text-2xl">
            Create an account
          </h1>

          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <span style={{ color: "red", fontSize: "8" }}>
                {signupForm.touched.fname && (
                  <span className="text-red">{signupForm.errors.fname}</span>
                )}
              </span>
              <div className="mt-1">
                <input
                  type="tesxt"
                  id="fname"
                  className="hover:scale-95 transition-all duration-1000 bg-slate-50/50 border-bottom shadow-bottom text-gray-900 sm:text-sm rounded-lg outline-none block w-full p-2.5  "
                  onChange={signupForm.handleChange}
                  value={signupForm.values.fname}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <span style={{ color: "red", fontSize: "8" }}>
                {signupForm.touched.lname && signupForm.errors.lname}
              </span>
              <div className="mt-1">
                <input
                  type="text"
                  id="lname"
                  className="hover:scale-95 transition-all duration-1000 bg-slate-50/50 border-bottom shadow-bottom text-gray-900 sm:text-sm rounded-lg outline-none block w-full p-2.5  "
                  onChange={signupForm.handleChange}
                  value={signupForm.values.lname}
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <span style={{ color: "red", fontSize: "8" }}>
                {signupForm.touched.email && signupForm.errors.email}
              </span>
              <div className="mt-1">
                <input
                  type="email"
                  id="email"
                  className="hover:scale-95 transition-all duration-1000 bg-slate-50/50 border-bottom shadow-bottom text-gray-900 sm:text-sm rounded-lg outline-none block w-full p-2.5  "
                  onChange={signupForm.handleChange}
                  value={signupForm.values.email}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                College
              </label>
              <span style={{ color: "red", fontSize: "8" }}>
                {signupForm.touched.college && signupForm.errors.college}
              </span>
              <div className="mt-1">
                <select
                  id="college"
                  autoComplete="country-name"
                  className="hover:scale-95 transition-all duration-1000 bg-slate-50/50 border-bottom shadow-bottom text-gray-900 sm:text-sm rounded-lg outline-none block w-full p-2.5  "
                  onChange={signupForm.handleChange}
                  value={signupForm.values.college}
                >
                  <option>Select your college</option>
                  <option>Modern Girls College Of Professional Studies</option>
                  <option>IIML - Indian Institute of Management, Lucknow</option>
                  <option>BBD</option>
                  <option>Sri Ramswaroop college</option>
                  <option>IT College</option>
                  <option>University of Lucknow</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Course
              </label>
              <span style={{ color: "red", fontSize: "8" }}>
                {signupForm.touched.course && signupForm.errors.course}
              </span>
              <div className="mt-1">
                <input
                  type="text"
                  id="course"
                  className="hover:scale-95 transition-all duration-1000 bg-slate-50/50 border-bottom shadow-bottom text-gray-900 sm:text-sm rounded-lg outline-none block w-full p-2.5  "
                  onChange={signupForm.handleChange}
                  value={signupForm.values.course}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <span style={{ color: "red", fontSize: "8" }}>
                {signupForm.touched.password && signupForm.errors.password}
              </span>
              <div className="mt-1">
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="hover:scale-95 transition-all duration-1000 bg-slate-50/50 border-bottom shadow-bottom text-gray-900 sm:text-sm rounded-lg outline-none block w-full p-2.5  "
                  onChange={signupForm.handleChange}
                  value={signupForm.values.password}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm Password
              </label>
              <span style={{ color: "red", fontSize: "8" }}>
                {signupForm.touched.cpassword && signupForm.errors.cpassword}
              </span>
              <div className="mt-1">
                <input
                  type="password"
                  id="cpassword"
                  placeholder="••••••••"
                  className="hover:scale-95 transition-all duration-1000 bg-slate-50/50 border-bottom shadow-bottom text-gray-900 sm:text-sm rounded-lg outline-none block w-full p-2.5  "
                  onChange={signupForm.handleChange}
                  value={signupForm.values.cpassword}
                />
              </div>
            </div>
            {/* <div className="col-span-full">
              <label className="me-2 text-sm font-medium leading-6 text-gray-900">
                Profile photo
              </label>
              <span style={{ color: "red", fontSize: "8" }}></span>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon
                    className="mx-auto h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload</span>
                      <input
                    
                        type="file"
                        // className="sr-only"
                       onChange={uploadfile}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <button
          type="submit"
          class="w-50 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Signup
        </button>

        <p className="mt-3 text-sm font-light text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
          <a
            href="/Login"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Login here
          </a>
        </p>
      </form>
      </div>
      
    </section>
  );
};

export default Signup;

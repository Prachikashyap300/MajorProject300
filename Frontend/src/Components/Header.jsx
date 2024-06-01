import "./Design.css";
import { ReactTyped } from "react-typed";
import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { LoginContext } from "../Context/LoginContext";
import { useFormik } from "formik";
import { enqueueSnackbar } from "notistack";
import "../Components/FormDesign.css";
import { Link } from "react-router-dom";
import * as Yup from "yup"
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaUserShield,
} from "react-icons/fa"; // Added FaUserShield for admin icon

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

const Header = () => {
  const contactForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: async (values, action) => {
      console.log(values);
      const res = await fetch("http://localhost:4000/contact/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.status);
      action.resetForm();

      if (res.status === 200) {
        enqueueSnackbar("Message send", { variant: "success" });
      } else {
        enqueueSnackbar("Message sending failed", { variant: "error" });
      }
    },
    validationSchema: ContactSchema,
  });

  const navigate = useNavigate();
  // const LoginState = useContext(LoginContext);
  const handleclick = async () => {
    if (LoginState.login === false) {
      enqueueSnackbar("Please Login to upload project", { variant: "error" });
      return;
    }
    navigate("/UploadProjects");
  };
  return (
     <div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-700 via-violet-900 to-stone-900 transparent">
      
      {/*Start Background Animation Body*/}
      <div className="area">
        <ul className="circles">
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
      {/*End Background Animation Body*/}

      <header>
          {/* Container for demo purpose */}
          <div className="container ">
            {/* Section: Design Block */}
            <section className="mb-32 text-center">
              <div className="flex justify-center">
                <div className="max-w-[800px]">
                  <h2 className="my-48 mx-auto md:px-6 mb-12 text-white  text- 5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                    Are you ready <br />
                    <span className="text-primary dark:text-primary-400">
                      for an adventure?
                    </span>
                  </h2>
                  <h5 >
                  <ReactTyped
                    className="text-white text-3xl "
                    strings={["Innovate. Create. Showcase"]}
                    typeSpeed={100}
                    loop
                  />
                </h5>
                <button
                  onClick={handleclick}
                  className=" mt-12 text-white text-lg cursur-pointer bg-blue-500 p-1 rounded-md px-4 py-3 hover:bg-blue-700"
                >
                  <Link to="/AddProject">Upload Project</Link>
                </button>
                </div>
              </div>
            </section>
            {/* Section: Design Block */}
          </div>
          {/* Container for demo purpose */}
  
      </header>

      {/* Section 1 */}
      <section className="">
        <div className="py-8 px-4 mx-20  max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mt-20 mb-4 text-4xl tracking-tight font-extrabold text-white">
              Whyyy Exhibix ?
            </h2>
            {/* <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span> */}
            <p className="text-gray-300 sm:text-xl ">
              Here at Flowbite we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
          </div>
          <div className="container space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div className="hover:bg-black/50 bg-black/50 hover:scale-110 transition duration-1000  p-4 hover:border border-0 rounded-2xl shadow ">
              <div className=" flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                <svg
                  className="animate-pulse tansition duration-100 w-5 h-5  text-primary-600 lg:w-6 lg:h-6 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-white text-xl font-bold ">Marketing</h3>
              <p className="text-gray-300 ">
                Plan it, create it, launch it. Collaborate seamlessly with all
                the organization and hit your marketing goals every month with
                our marketing plan.
              </p>
            </div>
            <div className="hover:bg-black/50 bg-black/50 hover:scale-110 transition duration-1000 p-4 hover:border border-0 rounded-2xl shadow">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Legal</h3>
              <p className="text-gray-300">
                Protect your organization, devices and stay compliant with our
                structured workflows and custom permissions made for you.
              </p>
            </div>
            <div className="hover:bg-black/50 bg-black/50 hover:scale-110 transition duration-1000 p-4 hover:border border-0 rounded-2xl shadow">
              <div className=" flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">
                Business Automation
              </h3>
              <p className="text-gray-300">
                Auto-assign tasks, send Slack messages, and much more. Now power
                up with hundreds of new templates to help you get started.
              </p>
            </div>
            <div className="hover:bg-black/50 bg-black/50 hover:scale-110 transition duration-1000 p-4 hover:border border-0 rounded-2xl shadow">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white ">
                Finance
              </h3>
              <p className="text-gray-300 ">
                Audit-proof software built for critical financial operations
                like month-end close and quarterly budgeting.
              </p>
            </div>
            <div className="hover:bg-black/50 bg-black/50 hover:scale-110 transition duration-1000 p-4 hover:border border-0 rounded-2xl shadow">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">
                Enterprise Design
              </h3>
              <p className="text-gray-300">
                Craft beautiful, delightful experiences for both marketing and
                product with real cross-company collaboration.
              </p>
            </div>
            <div className="hover:bg-black/50 bg-black/50 hover:scale-110 transition duration-1000 p-4 hover:border border-0 rounded-2xl shadow">
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">
                Operations
              </h3>
              <p className="text-gray-300">
                Keep your company's lights on with customizable, iterative, and
                structured workflows built for all efficient teams and
                individual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section2 */}
      <section className=" ">
        <div className="mt-20  gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className=" font-light text-white sm:text-lg ">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
              We didn't reinvent the wheel
            </h2>
            <p className="mb-4">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick, but big
              enough to deliver the scope you want at the pace you need. Small
              enough to be simple and quick, but big enough to deliver the scope
              you want at the pace you need.
            </p>
            <p>
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            {/* <img
              className="w-full rounded-lg hover:shadow-2xl hover:shadow-white "
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            /> */}
          </div>
        </div>
      </section>

      {/* section3 */}
      <div className="h-screen">
        <div className="pt-5 md:pt-20">
          <div className="mt-20 mb-20 p-4 md:p-8">
            <h1 className="text-white text-center pb-8 font-light  text-4xl md:text-5xl lg:text-6xl">
              Get in touch
            </h1>
            <form className="flex flex-col items-center" onSubmit={contactForm.handleSubmit}>
              <div className="md:w-3/4 lg:w-2/3 xl:w-1/2">
                <div className="flex flex-col md:flex-row">
                  
                  <input
                    id="name"
                    type="text"
                    className="my-2 py-2 px-4 rounded-md border rounded shadow w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Name"
                    onChange={contactForm.handleChange}
                    value={contactForm.values.ptitle}
                  />
                  <input
                    id="email"
                    type="email"
                    className="my-2 py-2 px-4 rounded-md border rounded shadow w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Email"
                    onChange={contactForm.handleChange}
                  value={contactForm.values.ptitle}
                  />
                </div>
                <input
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  className="my-2 py-2 px-4 rounded-mdborder rounded shadow w-full outline-none focus:ring-2 focus:ring-blue-600"
                  onChange={contactForm.handleChange}
                  value={contactForm.values.ptitle}
                />
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Say Something"
                  className="my-2 py-2 px-4 rounded-md border rounded shadow w-full outline-none focus:ring-2 focus:ring-blue-600"
                  defaultValue={""}
                  
                />
              </div>
              <button
                type="submit"
                className="border-2 text-md mt-5 rounded-md py-2 px-4 bg-blue-600 hover:bg-blue-700 text-gray-100 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* footer */}
      <footer className="p-6 text-white mt-40">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
          {" "}
          {/* Changed to 4 columns */}
          <div>
            <h2 className="text-lg font-semibold mb-2">About BBD Creators</h2>
            <p className="text-sm">
              BBD Creators is dedicated to building innovative solutions that
              make a difference. Join us on our journey to create impactful
              technology.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
            <ul className="text-sm">
              <li>Email: contact@bbdcreators.com</li>
              <li>Phone: +123 456 7890</li>
              <li>Address: 123 Creator St, Innovation City</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
            <div className="flex items-center space-x-4">
              <a href="https://facebook.com" className="hover:text-blue-300">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" className="hover:text-pink-400">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" className="hover:text-blue-400">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" className="hover:text-blue-300">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div>
            {" "}
            {/* New Admin Panel Div */}
            <div className="flex items-center space-x-2">
              <FaUserShield size={32} />{" "}
              {/* Larger Icon for Visual Distinction */}
              <Link to="/AdminLogin" className="text-lg  hover:underline">
                Access Panel
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center text-sm mt-4">
          © {new Date().getFullYear()} BBD Creators. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Header;

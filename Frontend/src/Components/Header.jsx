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
                      to showcase?
                    </span>
                  </h2>
                  <h5 >
                  <ReactTyped
                    className="text-white text-3xl "
                    strings={["Innovate. Create. Showcase"]}
                    typeSpeed={100}
                    loop
                  />
                </h5><br /><br />
                {/* <button
                  onClick={handleclick}
                  className="mt-12 text-white text-lg cursur-pointer bg-blue-500 p-1 rounded-md px-4 py-3 hover:bg-blue-700"
                  style={{ zIndex: 3   }}
                >
                  <Link to="/user/AddProject">Upload Project</Link>
                </button> */}
                </div>
              </div>
            </section>
            {/* Section: Design Block */}
          </div>
          {/* Container for demo purpose */}
  
      </header>

      {/* Section 1 */}
      <section className="" id="#About">
        <div className="py-8 px-4 mx-20  max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mt-20 mb-4 text-4xl tracking-tight font-extrabold text-white">
              Why Exhibix ?
            </h2>
            {/* <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span> */}
            <p className="text-gray-300 sm:text-xl ">
              Here at Exhibix we focus on projects where technology, innovation,
              and talent can unlock futuristic growth.
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
              <h3 className="mb-2 text-white text-xl font-bold ">Academic Recognition</h3>
              <p className="text-gray-300 ">
              Exhibix is to facilitate the recognition of outstanding student projects, thereby fostering a culture of academic excellence and celebrating the diverse achievements across various departments.
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
              <h3 className="mb-2 text-xl font-bold text-white">Promote Interdisciplinary Collaboration</h3>
              <p className="text-gray-300">
              Exhibix aims to promote interdisciplinary collaboration by providing a platform where students from different departments can showcase their projects, fostering cross-pollination of ideas and innovation.
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
              Empower Student Engagement
              </h3>
              <p className="text-gray-300">
              Empower student engagement by offering a centralized space where their work can be easily accessed and appreciated, motivating them to strive for excellence and contributing positively to their academic journey.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* section2 */}
      <section className=" ">
        <div className="mt-20  gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className=" text-white sm:text-lg ">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
              Our AIM
            </h2>
            <p className="mb-4">
            We want to celebrate the great work our students do in different subjects. But student projects are all over the place! They,re in different departments, and it’s hard to see the big picture of what students are creating.As a result, awesome projects often don’t get noticed. Students don’t feel recognized.
            The absence of a centralized platform means that many excellent projects go unnoticed, diminishing the recognition and sense of accomplishment among students.
            Exhiix aims to provide a dedicated platform for university administrators to showcase and recognize the best projects created by their students. The platform will act as a centralized hub for displaying and promoting outstanding academic achievements. 
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>

      {/* section3 */}
      <div className="h-screen">
        <div className="pt-5 md:pt-20">
          <div className="mt-20 mb-20 p-4 md:p-8">
            <h1 className="text-white text-center pb-8   text-4xl md:text-5xl lg:text-6xl">
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
                    value={contactForm.values.name}
                  />
                  <input
                    id="email"
                    type="email"
                    className="my-2 py-2 px-4 rounded-md border rounded shadow w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Email"
                    onChange={contactForm.handleChange}
                  value={contactForm.values.email}
                  />
                </div>
                <input
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  className="my-2 py-2 px-4 rounded-mdborder rounded shadow w-full outline-none focus:ring-2 focus:ring-blue-600"
                  onChange={contactForm.handleChange}
                  value={contactForm.values.subject}
                />
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Say Something"
                  className="my-2 py-2 px-4 rounded-md border rounded shadow w-full outline-none focus:ring-2 focus:ring-blue-600"
                  // defaultValue={""}
                  onChange={contactForm.handleChange}
                  value={contactForm.values.message}
                  
                />
              </div>
              <button
                type="submit"
                className="mt-3 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
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
            <h2 className="text-lg font-semibold mb-2">About Exhibix</h2>
            <p className="text-sm">
              Exhibix is dedicated to building innovative solutions that
              make a difference. Join us on our journey to create impactful
              technology.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
            <ul className="text-sm">
              <li>Email: contact@exhibix.com</li>
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
              {/* <Link to="/AdminLogin" className="text-lg  hover:underline">
                Access Panel
              </Link> */}
              <Link to="/admin/AdminProfile" className="text-lg  hover:underline">
                Access Panel
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center text-sm mt-4">
          © {new Date().getFullYear()} Exhibix. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Header;

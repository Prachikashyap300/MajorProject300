import React from "react";
import useUserContext from "../UserContext";
import { Link } from "react-router-dom";
import Logo from "../assets/logo_blue.png";

const MenuBar = () => {

  const {loggedIn, logout} = useUserContext();
  console.log(loggedIn);

  const showLoggedin = () => {
    if(loggedIn){
     return(
      <div className="flex items-center justify-end gap-3">
      <button
        className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-red-800 shadow-sm ring-1 ring-inset ring-red-300 transition-all duration-150 hover:bg-red-500 sm:inline-flex"
       onClick={logout}
      >
        Logout
      </button>
      
    </div>
     )
    }else{
      return(
        <div className="flex items-center justify-end gap-3">
        <Link
          className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
          to="/Signup"
        >
          Sign up
        </Link>
        <Link
          className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          to="/Login"
        >
          Login
        </Link>
      </div>
      )
    }
  }
  return (
    <header className="mt-3 fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border-0  bg-white-500/50 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <a aria-current="page" className="flex items-center" href="/">
              <img
                className="h-14 w-auto"
                src={Logo}
                alt=""
              />
              {/* <p className="hover:scale-150 hover:shadow-xl inline-block rounded-lg px-2 py-1 text-xl  font-medium text-white transition-all duration-1000">Exhibix</p> */}
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            <Link
              aria-current="page"
              className="hover:scale-110   inline-block rounded-lg px-2 py-1 text-lg  font-medium text-primary transition-all duration-1000 "
              to="/user/ProjectListing"
            >
              Projects
            </Link>
            <Link
              className="hover:scale-110  inline-block rounded-lg px-2 py-1 text-lg  font-medium text-primary transition-all duration-1000 "
              to="/user/AddProject"
            >
             Upload Project
            </Link>
            {/* <Link
              className="hover:scale-150 hover:shadow-xl inline-block rounded-lg px-2 py-1 text-sm  font-medium text-white transition-all duration-1000 "
              to="/admin/AdminProfile"
            >
              Admin
            </Link> */}
            {/* <Link
              className="hover:scale-150 hover:shadow-xl inline-block rounded-lg px-2 py-1 text-sm  font-medium text-white transition-all duration-1000 "
              to="/user/UserProfile"
            >
              User Profile
            </Link> */}
          </div>
        {
          showLoggedin()
        }
        </div>
      </div>
    </header>
  );
};

export default MenuBar;

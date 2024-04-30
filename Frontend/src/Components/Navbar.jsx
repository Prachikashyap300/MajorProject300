import React from "react";
import useUserContext from "../UserContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="navbar mb-5">
      <Link to="#home">Home</Link>
      <Link to="#about">About</Link>
      <Link to="#contact">Contact</Link>
      <Link to="#signup" class="signup">
        Signup
      </Link>
    </div>
  );
};

export default Navbar;

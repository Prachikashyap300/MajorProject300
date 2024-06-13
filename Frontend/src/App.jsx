import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { SnackbarProvider } from "notistack";
import Signup from "./Components/Signup";
import Login from "./Components/Login";

import Contact from "./Components/Contact";
import AddProject from "./Components/user/AddProject";
import ProjectListing from "./Components/user/ProjectListing";

import { UserProvider } from "./UserContext";
import Admin from "./Components/admin";
import ManageProject from "./Components/admin/ManageProject";
// import Project from "./Components/admin/Project";
// import AdminNavbar from "./Components/admin/AdminNavbar";
import Header from "./Components/Header";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Footer from "./Components/Footer";
// import Navbar from "./Components/Navbar";
import UserProfile from "./Components/user/UserProfile";
import AdminProfile from "./Components/admin/AdminProfile";
import ManageUser from "./Components/admin/ManageUser";
import Project from "./Components/admin/Project";
import FormDesign from "./Components/FormDesign";
import MenuBar from "./Components/MenuBar";
import ForgetPassword from "./Components/ForgetPassword";
import ViewProject from "./Components/user/ViewProject";
import User from "./Components/user";
import AdminLogin from "./Components/AdminLogin";
import AdminSignup from "./Components/AdminSignup";
import ManageFeedback from "./Components/admin/ManageFeedback";
import ManageDevInfo from "./Components/admin/ManageDevInfo";

const App = () => {
  const MainLayout = () => (
    <div>
      <div>
        <Header />
      </div>
      {/* <Section1 />
      <Section2 />
      <Section3 />
      <Footer /> */}
    </div>
  );
  return (
    <div>
      <BrowserRouter>
        <SnackbarProvider>
          {/* <Nav /> */}
          <UserProvider>
            <MenuBar />
            <Routes>
              <Route path="/" element={<Navigate to="/Home" />} />
              <Route path="/Home" element={<MainLayout />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/ForgetPassword" element={<ForgetPassword />} />
              <Route path="/FormDesign" element={<FormDesign />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/AdminLogin" element={<AdminLogin />} />
              <Route path="/AdminSignup" element={ <AdminSignup/>} />
             
              <Route path="user" element={<User />}>
                <Route path="AddProject" element={<AddProject />} />
                <Route path="ProjectListing" element={<ProjectListing />} />
                <Route path="UserProfile" element={<UserProfile />} />
                <Route path="ViewProject" element={<ViewProject />} />
              </Route>

              <Route path="/admin" element={<Admin />}>
                <Route path="ManageProject" element={<ManageProject />} />
                <Route path="ManageDevInfo" element={<ManageDevInfo />} />
                <Route path="ManageUser" element={<ManageUser />} />
                <Route path="ManageFeedback" element={<ManageFeedback/>} />
                <Route path="Project" element={<Project />} />
                <Route path="AdminProfile" element={<AdminProfile />} />
                <Route path="ViewProject" element={<ViewProject />} />
              </Route>
            </Routes>
          </UserProvider>
        </SnackbarProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;

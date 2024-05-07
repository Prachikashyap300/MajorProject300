import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { SnackbarProvider } from "notistack";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Contact from "./Components/Contact";
import AddProject from "./Components/AddProject";
import ProjectListing from "./Components/ProjectListing";

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
import UserProfile from "./Components/UserProfile";
import AdminProfile from "./Components/admin/AdminProfile";
import ManageUser from "./Components/admin/ManageUser";
import Project from "./Components/admin/Project";
import FormDesign from "./Components/FormDesign";
import MenuBar from "./Components/MenuBar";
import ForgetPassword from "./Components/ForgetPassword";

const App = () => {
  const MainLayout =() => (
    <div>
      <div>
        <MenuBar/>
       {/* <Navbar /> */}
        <Header />
      </div>
      <Section1 />
      <Section2 />
      <Section3/>
      <Footer />
    </div>
  ) 
  return (
    <div>
      <SnackbarProvider>
        <BrowserRouter>
        {/* <Nav /> */}
        {/* <MenuBar/> */}
          <UserProvider>
            <Routes>
              <Route path="/" element={<MainLayout />} />
              <Route path="/Home" element={<Header />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/ForgetPassword" element={<ForgetPassword />} />
              <Route path="/FormDesign" element={<FormDesign />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/AddProject" element={<AddProject />} />
              <Route path="/ProjectListing" element={<ProjectListing />} />
            
              <Route path="UserProfile" element={<UserProfile/>}/>

             <Route path="/admin" element={<Admin/>}>
               <Route path="ManageProject" element={<ManageProject/>}/>
               <Route path="ManageUser" element={<ManageUser/>}/>
               <Route path="Project" element={<Project/>}/>
               {/* <Route path="Project" element={<Project/>}/> */}
               {/* <Route path="AdminNavbar" element={<AdminNavbar/>}/> */}
               <Route path="AdminProfile" element={<AdminProfile/>}/>
             </Route>

            </Routes>
          </UserProvider>
        </BrowserRouter>
      </SnackbarProvider>
    </div>
  );
};

export default App;

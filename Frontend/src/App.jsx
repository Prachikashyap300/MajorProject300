import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { SnackbarProvider } from "notistack";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Contact from "./Components/Contact";
import AddProject from "./Components/AddProject";
import ProjectListing from "./Components/ProjectListing";
import ManageUsers from "./Components/ManageUser";
import { UserProvider } from "./UserContext";
import Admin from "./Components/admin";
import ManageProject from "./Components/admin/ManageProject";
import Project from "./Components/admin/Project";
import AdminNavbar from "./Components/admin/AdminNavbar";

import UserProfile from "./Components/UserProfile";
import AdminProfile from "./Components/admin/AdminProfile";

const App = () => {
  return (
    <div>
      <SnackbarProvider>
        <BrowserRouter>
      
          <UserProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/AddProject" element={<AddProject />} />
              <Route path="/ProjectListing" element={<ProjectListing />} />
              <Route path="/ManageUser" element={<ManageUsers />} />
              <Route path="UserProfile" element={<UserProfile/>}/>
             <Route path="/admin" element={<Admin/>}>
               <Route path="ManageProject" element={<ManageProject/>}/>
               <Route path="Project" element={<Project/>}/>
               <Route path="AdminNavbar" element={<AdminNavbar/>}/>
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

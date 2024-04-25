import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { SnackbarProvider } from "notistack";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import AddProject from "./Components/AddProject";
import ProjectListing from "./Components/ProjectListing";
import ManageUsers from "./Components/ManageUser";
import { UserProvider } from "./UserContext";
import Admin from "./Components/admin";
import ManageProject from "./Components/admin/ManageProject";
const App = () => {
  return (
    <div>
      <SnackbarProvider>
        <BrowserRouter>
          <UserProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/AddProject" element={<AddProject />} />
              <Route path="/ProjectListing" element={<ProjectListing />} />
              <Route path="/ManageUser" element={<ManageUsers />} />
             <Route path="/admin" element={<Admin/>}>
               <Route path="/manageproject" element={<ManageProject/>}/>
             </Route>

            </Routes>
          </UserProvider>
        </BrowserRouter>
      </SnackbarProvider>
    </div>
  );
};

export default App;

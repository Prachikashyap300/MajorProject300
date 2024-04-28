import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
import useUserContext from '../UserContext'

const Navbar = () => {

  const{ loggedIn, logout }  = useUserContext();
  console.log(loggedIn);
  const showLoggedIn = () => {
    if(loggedIn) {
      return(
        <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
          <li className='nav-item'>
            <button style={{ fontFamily: "initial"}} className='btn btn-danger mb-3' onClick={logout} >
              Logout
            </button>
          </li>
        </ul>
      );
    } else{
      return <div className="">
        <div className="">
          <Link className='links text-white p-3' to="/Signup">
            Signup
          </Link>
          <Link className='links text-white p-3' to="/login">
            Signin
          </Link>
        </div>
      </div>
    }
  };

  return (
    <div>
      <nav className="navbar  navbar-dark nav-bg">
        <div className="container-fluid">
          
          <Link className="navbar-brand"   to="/Home">
            Exhibix
          </Link>
          
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item text-white">
                <Link className="nav-link" to="/#">
                  About
                </Link>
              </li>
              <li className="nav-item text-white">
                <Link className="nav-link" to="/Contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item text-white">
                <Link className="nav-link" to="/ProjectListing">
                  Projects
                </Link>
              </li>
              <li className="nav-item text-white">
                <Link className="nav-link" to="/AddProject">
                  Add Project
                </Link>
              </li>
              <li className="nav-item text-white">
                <Link className="nav-link" to="/ManageUSer">
                  Manage User
                </Link>
              </li>
              
            </ul>
            
          </div>
          <div>
          {showLoggedIn()}        
          {/* <button className='nav-button'>
              <Link className='links text-white p-3' to="/login">
                Signin
              </Link>
              </button>
            
            
          <button className='nav-button-active'>
            <Link className='links text-white p-3' to="/Signup">
              Signup
            </Link>
          </button>
             */}
          
            </div>          
        </div>
      </nav>

    </div>
  )
}

export default Navbar
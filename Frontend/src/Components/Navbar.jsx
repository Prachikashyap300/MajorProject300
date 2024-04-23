import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark nav-bg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/Home">
            Exhibix
          </a>
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
              
            </ul>
            
          </div>
          <div>
            
              
                <button className='nav-button'>
                <Link className='links text-white p-3' to="/login">
                  Signin
                </Link>
                </button>
              
              
              <button className='nav-button-active'>
                <Link className='links text-white p-3' to="/Signup">
                  Signup
                </Link>
                </button>
              
            
            </div>          
        </div>
      </nav>

    </div>
  )
}

export default Navbar
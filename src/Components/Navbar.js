import React from "react";
import logo from "../images/joylogo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="d-flex">
      <div className="logo">
        <img src={logo} alt={logo.png} />
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="/about"
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/about" className="dropdown-item">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/appointment" className="dropdown-item">
                      Appointment
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                </ul>
              </li>
            </ul>

            <button className="btn btn-primary" type="submit">
              Make an Appointment
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
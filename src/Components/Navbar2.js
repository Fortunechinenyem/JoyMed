import React from "react";

import { Link } from "react-router-dom";

const NavBar2 = () => {
  return (
    <header className="nav2">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link active"
                  aria-current="page"
                >
                  Careers
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/appointment" className="nav-link">
                  Book Appointment
                </Link>
              </li>
              <li className="nav-item">
                <ul className="social-list">
                  <li className="social-list__item">
                    <a className="social-list__link" href="http://linkedin.com">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="social-list__item">
                    <a className="social-list__link" href="https://twitter.com">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="social-list__item">
                    <a
                      className="social-list__link"
                      href="https://whatsapp.com"
                    >
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </li>
                  <li className="social-list__item">
                    <a
                      className="social-list__link"
                      href="https://facebook.com"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar2;

import React, { useState } from "react";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import logo from "../images/joylogo.svg";
const Navbar2 = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <header>
      <div className="logo">
        <img src={logo} alt={logo.png} />
      </div>
      <Nav>
        <div className="hamburger">
          <Bars
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          />
        </div>

        <NavMenu
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <NavLink to="/about" activeStyle>
            Home
          </NavLink>
          <NavLink to="/events" activeStyle>
            Who We Are
          </NavLink>
          <NavLink to="/annual" activeStyle>
            Medical Team
          </NavLink>
          <NavLink to="/team" activeStyle>
            Specialties
          </NavLink>
          <NavLink to="/blogs" activeStyle>
            Contact US
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </header>
  );
};

export default Navbar2;

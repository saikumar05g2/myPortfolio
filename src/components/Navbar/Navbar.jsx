"use client";
import React, { useState } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <h2 className="logo">VSK</h2>
          <ul>
            <li>
              <a className="menu-item">Home</a>
            </li>
            <li>
              <a className="menu-item">Skills</a>
            </li>
            <li>
              <a className="menu-item">Work Experince</a>
            </li>
            <li>
              <a className="menu-item">Contact Me</a>
            </li>
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            <div className="menu-icon">
              {openMenu ? (
                "X"
              ) : (
                <>
                  <div></div>
                  <div></div>
                  <div></div>
                </>
              )}
            </div>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

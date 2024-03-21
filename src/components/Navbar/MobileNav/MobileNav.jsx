import React from "react";
import "./MobileNav.css";
const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
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
        </div>
      </div>
    </>
  );
};

export default MobileNav;

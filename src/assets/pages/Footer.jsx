import React from "react";
import togglelight from "../night.png";
import toggledark from "../day.png";

import { NavLink } from "react-router-dom";

const Footer = ({ theme, setTheme }) => {
  const toggleMode = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <>
      <div className=" container row footer  mt-3">
        <div className="logo col-3 ">
          <i class="fa-solid fa-person-skating me-2"></i>
          <a class="footerLink text-decoration-none fs-5 fw-bolder" href="#">
            Skateshop
          </a>
        </div>

        <div className="help col-3">
          <h5>Helps</h5>
          <ul className="list-unstyled">
            <NavLink to='/about' className="text-dark text-decoration-none">About</NavLink>
           
           <li> <NavLink to='/signin' className="text-dark text-decoration-none">Contact</NavLink></li>
           
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className="social col-3">
          <h5>Social</h5>
          <ul className="list-unstyled">
            <li>Twitter</li>
            <li>GitHub</li>
          
          </ul>
        </div>
        <div className="sub col-3 ">
          <h5>Subscribe to our newsletter</h5>
          <input
            class="form-control me-3"
            type="search"
            placeholder="Skate@gmail.com"
            aria-label="Search"
          />
        </div>
      </div>
      <div className="footer2 d-flex  justify-content-between">
        <div className="one">
          <p className="ms-5 fs-6">
            Built by<mark>Manav.</mark>{" "}
          </p>
        </div>
        <div className="two">
          <i class="fa-brands fa-github me-3"></i>
          <img
            src={theme == "light" ? togglelight : toggledark}
            className="toggleIcon me-2"
            onClick={() => {
              toggleMode();
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Footer;

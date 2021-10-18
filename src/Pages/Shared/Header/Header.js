import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "./../../../Images/logo.png";

const Header = () => {
  return (
    <div className="shadow">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid ">
            <a
              className="navbar-brand d-flex justify-content-center align-items-center"
              href="/"
            >
              <img className="headerLogo" src={logo} alt="" />{" "}
              <div>
                <span className="fw-bold normal_Fonts text-Blue">
                  Health<i class="fas fa-plus"></i>...
                </span>
                <p className="smallest_Fonts text-Gray fw-Samibold">
                  CENTRAL HOSPITAL
                </p>
              </div>
            </a>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/"
                    activeStyle={{
                      color: "#4a79f1",
                    }}
                    className="nav-link"
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/about"
                    activeStyle={{
                      color: "#4a79f1",
                    }}
                    className="nav-link"
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/doctors"
                    activeStyle={{
                      color: "#4a79f1",
                    }}
                    className="nav-link"
                  >
                    Doctors
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/news"
                    activeStyle={{
                      color: "#4a79f1",
                    }}
                    className="nav-link"
                  >
                    News & Blogs
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/department"
                    activeStyle={{
                      color: "#4a79f1",
                    }}
                    className="nav-link"
                  >
                    Department
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/contact"
                    activeStyle={{
                      color: "#4a79f1",
                    }}
                    className="nav-link"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
              <div className="">
                <Link to="login">
                  <button className="btn btns btn_Blue me-3">Log In</button>
                </Link>
                <Link to="logout">
                  <button className="btn btns btn_Blue">Register</button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;

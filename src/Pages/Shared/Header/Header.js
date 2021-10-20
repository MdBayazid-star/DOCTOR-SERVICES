import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "./../../../Images/logo.png";
import useAuth from "../../../Hooks/useAuth";
import users from "./../../../Images/user2.png";
const Header = () => {
  const { logOut, user } = useAuth();
  console.log(user);
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
                  Health<i className="fas fa-plus"></i>...
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
                    to="/blog"
                    activeStyle={{
                      color: "#4a79f1",
                    }}
                    className="nav-link"
                  >
                    Blogs
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
              </ul>
              <div className="">
                <Link to="/signup">
                  <button className="btn btns btn_Blue  me-3">
                    Get Started
                  </button>
                </Link>
                {user.email ? (
                  <Link to="/login">
                    <button onClick={logOut} className="btn btns btn_Blue">
                      Log Out
                    </button>
                  </Link>
                ) : (
                  <Link to="/signup">
                    <button className="btn btns btn_Blue me-3">Sing Up</button>
                  </Link>
                )}
                {user.photoURL ? (
                  <span>
                    <img className="userImg ms-3" src={user.photoURL} alt="" />
                  </span>
                ) : (
                  <span>
                    <img className="userImg ms-3 p-1" src={users} alt="" />
                  </span>
                )}
                {user.displayName ? (
                  <span className="text-Blue fw-bold ms-2">
                    {user.displayName}
                  </span>
                ) : (
                  <span></span>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import "./Footer.css";
import logo from "./../../../Images/logo.png";
import { Link } from "react-router-dom";
import TopFooter from "./TopFooter/TopFooter";

const Footer = () => {
  return (
    <>
      <TopFooter></TopFooter>
      <div className="footer">
        <div className="container ">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 col-12  my-5">
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
              <div>
                <p>We are try to give us best from ourself.</p>
                <div className="d-flex align-items-baseline">
                  <i className="fas fa-map-marker-alt me-4 text-Blue"></i>
                  <p>59 Street, 1200 Techpark</p>
                </div>
                <div className="d-flex align-items-baseline">
                  <i className="fas fa-phone-alt me-4 text-Blue"></i>
                  <p>+59888555</p>
                </div>
                <div className="d-flex align-items-baseline">
                  <i className="fas fa-envelope me-4 text-Blue"></i>
                  <p>healthplus@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12 my-5">
              <div>
                <h3 className="mb-5 border_b">Departments</h3>
              </div>
              <Link to="">
                <li className="footer_Link my-3 ">
                  <i className="fas fa-arrow-right"></i> Who We Are
                </li>
              </Link>
              <Link to="">
                <li className="footer_Link my-3">
                  <i className="fas fa-arrow-right"></i> Our Mission
                </li>
              </Link>
              <Link to="">
                <li className="footer_Link my-3">
                  <i className="fas fa-arrow-right"></i> Awards
                </li>
              </Link>
              <Link to="">
                <li className="footer_Link my-3">
                  <i className="fas fa-arrow-right"></i> Experience
                </li>
              </Link>
              <Link to="">
                <li className="footer_Link my-3">
                  <i className="fas fa-arrow-right"></i> Success Story
                </li>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12 my-5">
              <div>
                <h3 className="mb-5">Quick Links</h3>
              </div>
              <Link to="">
                <li className="footer_Link my-3">Home</li>
              </Link>
              <Link to="">
                <li className="footer_Link my-3">About</li>
              </Link>
              <Link to="">
                <li className="footer_Link my-3">News & Blog</li>
              </Link>

              <Link to="">
                <li className="footer_Link my-3">Doctors</li>
              </Link>
              <Link to="">
                <li className="footer_Link my-3">Blog</li>
              </Link>
              <Link to="">
                <li className="footer_Link my-3">Contact</li>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12 my-5">
              <div>
                <h3 className="mb-5">Opening Hours</h3>
              </div>
              <li className="d-flex footer_Link justify-content-between">
                <p>Monday:</p>
                <p>09:00 am - 10.00 pm</p>
              </li>
              <li className="d-flex footer_Link justify-content-between">
                <p>Tuesday:</p>
                <p>10:00 am - 11.00 pm</p>
              </li>
              <li className="d-flex footer_Link justify-content-between">
                <p>Wednesday:</p>
                <p>09:00 am - 10.00 pm</p>
              </li>
              <li className="d-flex footer_Link justify-content-between">
                <p>Thursday:</p>
                <p>08:00 am - 12.00 pm</p>
              </li>
              <li className="d-flex footer_Link justify-content-between">
                <p>Friday:</p>
                <p className="text-Blue">Closed</p>
              </li>
              <li className="d-flex footer_Link justify-content-between">
                <p>Saturday:</p>
                <p className="text-Blue">Closed</p>
              </li>
              <li className="d-flex footer_Link justify-content-between">
                <p>Sunday:Closed:</p>
                <p>08:00 am - 12.00 pm</p>
              </li>
            </div>
            <div className="">
              <p className="text-center pb-3 ">
                &copy; Copyright Health_Plus 2019. All Right Reserved. Designed
                and Developed by Bayazid.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

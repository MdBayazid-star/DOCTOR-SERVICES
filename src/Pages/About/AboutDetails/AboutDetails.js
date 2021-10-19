import React from "react";
import "./../About.css";
const Aboutdetails = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 my-5">
            <div>
              <h1 className="fw-normal">Our Best Laboratory</h1>
              <h3 className="fw-bold">Medical Center</h3>
              <p className="text-Gray">
                We offer extensive medical services for our patients recommend
                that you use officia.simply dummy text of theprinting and
                typesetting industry medical officia.simply dummy text of
                theprinting.
              </p>
              <p className="text-Gray">
                We offer extensive medical services for our patients recommend
                that you use officia.simply dummy text of theprinting
              </p>
              <ul className="aboutCheck">
                <li className="d-flex">
                  <i className="fas fa-check text-Blue me-3"></i>
                  <p>Qualified Staff of Doctors</p>
                </li>
                <li className="d-flex">
                  <i className="fas fa-check text-Blue me-3"></i>
                  <p>Feel like you are at Home Services</p>
                </li>
                <li className="d-flex">
                  <i className="fas fa-check text-Blue me-3"></i>
                  <p>24x7 Emergency Services</p>
                </li>
                <li className="d-flex">
                  <i className="fas fa-check text-Blue me-3"></i>
                  <p>Easy and Affordable Billing</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 my-5">
            <div className="about1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutdetails;

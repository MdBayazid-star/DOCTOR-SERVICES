import React from "react";
import "./../Home.css";
import welcome from "./../../../../Images/Home/welcome2.png";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="container">
        <div className="row ">
          <div className="col-lg-4 mt-5">
            <img className="img-fluid" src={welcome} alt="" />
          </div>
          <div className="col-lg-4 my-5 py-5">
            <h1 className="mt-4">
              Welcome To <span className="text-Blue">Health</span>
              <span className="text-Blue fs-4 fw-bold">
                <i class="fas fa-plus"></i>
              </span>{" "}
              . Central Hospital
            </h1>
            <p className="text-Gray mt-3">
              Mtandard dummy texr since when an unknown printer took a
              galley.MediPoint Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, At accusam aliquyam.'s standard dummy texr since when an
              unknown printer took a galley consetetur.
            </p>
            <div className="fontFamily mt-5 "> Md Bayazid</div>
          </div>
          <div className="col lg-4 py-5">
            <div className="row mt-5">
              <div className="wlcCart d-flex  align-items-center p-4 my-2">
                <div className="col-lg-10  col-md-10 col-10 d-flex align-items-center">
                  <i class="far fa-calendar-minus  fs-4"></i>
                  <h4 className="ms-3 me-5">Request Appointment</h4>
                </div>
                <div className="col-lg-2  col-md-2 col-2">
                  <i class="fas fa-angle-right ms-4 fw-bold fs-4"></i>
                </div>
              </div>
              <div className="wlcCart d-flex  align-items-center p-4 my-2">
                <div className="col-lg-10  col-md-10 col-10 d-flex align-items-center">
                  <i class="fas fa-user-md fs-4"></i>
                  <h4 className="ms-3 me-5">Finds Doctors</h4>
                </div>
                <div className="col-lg-2  col-md-2 col-2">
                  <i class="fas fa-angle-right ms-4 fw-bold fs-4"></i>
                </div>
              </div>
              <div className="wlcCart d-flex  align-items-center p-4 my-2">
                <div className="col-lg-10  col-md-10 col-10 d-flex align-items-center">
                  <i class="fas fa-map-marker-alt  fs-4"></i>
                  <h4 className="ms-3 me-5">Find Location</h4>
                </div>
                <div className="col-lg-2  col-md-2 col-2">
                  <i class="fas fa-angle-right ms-4 fw-bold fs-4"></i>
                </div>
              </div>
              <div className="wlcCart d-flex  align-items-center p-4 my-2">
                <div className="col-lg-10 col-md-10 col-10 d-flex align-items-center">
                  <i class="far fa-calendar-minus  fs-4"></i>
                  <h4 className="ms-3 me-5">Request Appointment</h4>
                </div>
                <div className="col-lg-2 col-md-2 col-2">
                  <i class="fas fa-angle-right ms-4 fw-bold fs-4"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

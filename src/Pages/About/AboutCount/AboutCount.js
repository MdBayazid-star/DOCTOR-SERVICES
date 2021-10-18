import React from "react";
import "./../About.css";
import aboutIcon1 from "./../../../Images/About/aboutIcon1.png";
import aboutIcon2 from "./../../../Images/About/aboutIcon2.png";
import aboutIcon3 from "./../../../Images/About/aboutIcon3.png";
import aboutIcon4 from "./../../../Images/About/aboutIcon4.png";
const AboutCount = () => {
  return (
    <div className="AboutCount">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 text-center my-5">
            <img src={aboutIcon1} alt="" />
            <h1 className="my-3 fw-bold">22</h1>
            <p className="text-Gray fw-bold">Years of Experience</p>
          </div>
          <div className="col-lg-3 text-center my-5">
            <img src={aboutIcon2} alt="" />
            <h1 className="my-3 fw-bold">390</h1>
            <p className="text-Gray fw-bold">Medical Spesialities</p>
          </div>
          <div className="col-lg-3 text-center my-5">
            <img src={aboutIcon3} alt="" />
            <h1 className="my-3 fw-bold">559</h1>
            <p className="text-Gray fw-bold">Modern Rooms</p>
          </div>
          <div className="col-lg-3 text-center my-5">
            <img src={aboutIcon4} alt="" />
            <h1 className="my-3 fw-bold">6930</h1>
            <p className="text-Gray fw-bold">Happy Patients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCount;

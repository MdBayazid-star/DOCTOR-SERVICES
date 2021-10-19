import React from "react";
import help1 from "./../../../../Images/Home/help1.jpg";
import help2 from "./../../../../Images/Home/help2.jpg";
import help3 from "./../../../../Images/Home/help3.jpg";
import help4 from "./../../../../Images/Home/help4.jpg";
import "./../Home.css";

const Help = () => {
  return (
    <div className="help">
      <div className="container">
        <div className="row text-center py-5">
          <p className="subTitle">Working Process</p>
          <p className="title">How It Helps You Stay Healthy</p>
          <div className="d-flex justify-content-center">
            <hr className="hr" />
          </div>
          <div className="col-lg-3 my-5">
            <div className="helpCart">
              <img className="helpImg" src={help1} alt="" />
              <h3>Comfortable Care</h3>
              <p className="text-Gray mb-5">
                We understand that visiting the dentist can be stressful, so we
                have designed our facility and procedures with your comfort and
                ease in mind
              </p>
            </div>
          </div>
          <div className="col-lg-3 my-5">
            <div className="helpCart">
              <img className="helpImg" src={help2} alt="" />
              <h3>Consultation</h3>
              <p className="text-Gray mb-5">
                Everyone at Comfortable Care Dental, from our front office staff
                to our hygienists and dentists, will make sure that your dental
                treatment is as effective, affordable, and pleasant as possible.
              </p>
            </div>
          </div>
          <div className="col-lg-3 my-5">
            <div className="helpCart">
              <img className="helpImg" src={help3} alt="" />
              <h3>Highest Quality</h3>
              <p className="text-Gray mb-5">
                Your smile is in good hands! The dentists, hygienists, and
                technicians here at Comfortable Care Dental have the education
                and experience to meet all your oral health care needs.
              </p>
            </div>
          </div>
          <div className="col-lg-3 my-5">
            <div className="helpCart">
              <img className="helpImg" src={help4} alt="" />
              <h3>Always Smiling</h3>
              <p className="text-Gray mb-5">
                We are dedicated to maintaining the highest quality of dental
                care through on-going training and continuing education in the
                latest techniques and equipment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;

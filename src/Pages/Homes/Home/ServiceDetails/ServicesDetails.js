import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./ServiceDetails.css";
import ServicesBanner from "./ServicesBanner.js/ServicesBanner";
const ServicesDetails = () => {
  const { key } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/fakeDb.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const ExactIteam = data.filter((td) => td.key === key);

  return (
    <div>
      <ServicesBanner></ServicesBanner>
      <div className="servicesDetails">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 my-5">
              <div className="serDeImg">
                <img
                  className="img-fluid p-3"
                  src={ExactIteam[0]?.img}
                  alt=""
                />
              </div>
              <div className="p-4 bgWhite mt-5">
                <h3 className="fw-bold">Contact Us</h3>
                <hr className="hr" />
                <h5 className="my-4">
                  Phone: <span>+ (123) 1800-567</span>
                </h5>
                <h5 className="my-4">
                  Office: <span>+ (123) 1800-567</span>
                </h5>
                <h5 className="my-4">
                  E-mail: <span>Example@tlprt.com</span>
                </h5>
                <h5 className="my-4">
                  Social:{" "}
                  <span>
                    <i className="fab fa-facebook-f text-Blue mx-3 smallFont"></i>
                    <i className="fab fa-instagram text-Blue mx-3 smallFont"></i>
                    <i className="fab fa-twitter text-Blue mx-3 smallFont"></i>
                    <i className="fab fa-linkedin-in text-Blue mx-3 smallFont"></i>
                  </span>
                </h5>
              </div>
              <div className="p-4 bgBlue mt-5 d-flex">
                <div className="imgIcon me-4">
                  <i className="fas fa-headset"></i>
                </div>
                <div className="text-light">
                  <h3>Emergency Cases</h3>
                  <p>+001236540256</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8 my-5">
              <div className="px-5 bgWhite">
                <div>
                  <h4 className="fw-bold pt-3">About</h4>
                  <hr className="hr" />
                  <div className="">
                    <h3 className="text-Blue text-capitalize">
                      Name : {ExactIteam[0]?.name}
                    </h3>
                    <p>
                      <span className="fw-bold text-Blue text-capitalize fs-5">
                        Description :
                      </span>{" "}
                      <span className="text-Gray fs-5">
                        {ExactIteam[0]?.description}
                      </span>
                    </p>
                    <p>
                      <span className="fw-bold text-Blue fs-5">Price :</span>{" "}
                      <span className="fs-5">{ExactIteam[0]?.price}</span>
                    </p>
                    <p>
                      <span className="fw-bold text-Blue fs-5">Workers :</span>{" "}
                      <span className="fs-5">{ExactIteam[0]?.worker}</span>
                    </p>
                  </div>
                </div>
                <div className="mt-5">
                  <h4 className="fw-bold">Appointmnet Schedules:</h4>
                  <hr className="hr mb-5" />
                  <div className=" py-3  my-3 bg-LightBlue row">
                    <span className=" fs-5 fw-bold col-lg-4 col-md-4 col-12">
                      Day
                    </span>
                    <span className=" fs-5 fw-bold col-lg-4 col-md-4 col-12">
                      Time
                    </span>
                    <span className=" fs-5 fw-bold col-lg-4 col-md-4 col-12">
                      Appointment
                    </span>
                  </div>

                  <div className="row d-flex justify-content-between align-items-center  sm-mx-0 my-3">
                    <div className="col-lg-8 col-md-8 col-12">
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-12 ">
                          <span className="fs-5 fw-bold">SUN</span>
                        </div>
                        <div className="col-lg-8 col-md-8 col-12">
                          <span className=" fs-5 fw-bold">
                            11:30AM - 12:30PM
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                      <div className="m-auto">
                        <button className="btn btns btn_Outline-Blue border_blue my-3">
                          Appointmnet
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-between align-items-center  mt-2 bg-LightBlue">
                    <div className="col-lg-8 col-md-8 col-12">
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-12 ">
                          <span className="fs-5 fw-bold">THU</span>
                        </div>
                        <div className="col-lg-8 col-md-8 col-12">
                          <span className=" fs-5 fw-bold">
                            12:00PM - 5:00PM
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                      <div className="m-auto">
                        <button className="btn btns btn_Outline-Blue border_blue  mt-2">
                          Appointmnet
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-between align-items-center  my-3 pb-4">
                    <div className="col-lg-8 col-md-8 col-12">
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-12 ">
                          <span className="fs-5 fw-bold">MON</span>
                        </div>
                        <div className="col-lg-8 col-md-8 col-12">
                          <span className=" fs-5 fw-bold">2:00PM - 7:30PM</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                      <div className="m-auto">
                        <button className="btn btns btn_Outline-Blue border_blue  mt-2 ">
                          Appointmnet
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mb-5 bgWhite shadow">
              <div className="p-5">
                <p className="fs-5 text-Gray">{ExactIteam[0]?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;

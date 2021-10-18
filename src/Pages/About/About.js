import React from "react";
import AboutAcc from "./AboutAcc/AboutAcc";
import AboutBanner from "./AboutBanner/AboutBanner";
import AboutCount from "./AboutCount/AboutCount";
import Aboutdetails from "./AboutDetails/AboutDetails";

const About = () => {
  return (
    <div>
      <AboutBanner></AboutBanner>
      <Aboutdetails></Aboutdetails>
      <AboutCount></AboutCount>
      <AboutAcc></AboutAcc>
    </div>
  );
};

export default About;

import React from "react";
import Banner from "./Banner/Banner";
import Help from "./Helps/Help";
import "./Home.css";
import Services from "./Services/Services";
import Welcome from "./Welcome/Welcome";
// import banner from "./../../../Images/Home/Banner.jpg";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Welcome></Welcome>
      <Services></Services>
      <Help></Help>
    </div>
  );
};

export default Home;

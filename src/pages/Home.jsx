import React from "react";
import Navbar from "../components/Navbar";
import HomeCarousel from "../components/HomeCarousel";
import Destinations from "../components/Destinations";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeCarousel />
      <Destinations />
    </>
  );
};

export default Home;

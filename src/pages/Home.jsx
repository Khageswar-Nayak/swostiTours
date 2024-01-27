import React from "react";
import Navbar from "../components/Navbar";
import HomeCarousel from "../components/HomeCarousel";
import Destinations from "../components/Destinations";
import MiddleBanner from "../components/MiddleBanner";
import Thumbnail from "../components/Thumbnail";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeCarousel />
      <Destinations />
      <MiddleBanner />
      <Thumbnail />
    </>
  );
};

export default Home;

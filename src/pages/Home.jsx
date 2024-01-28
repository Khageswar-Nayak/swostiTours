import React from "react";
import Navbar from "../components/Navbar";
import HomeCarousel from "../components/HomeCarousel";
import Destinations from "../components/Destinations";
import MiddleBanner from "../components/MiddleBanner";
import Thumbnail from "../components/Thumbnail";
import Services from "../components/Services";
import Achievements from "../components/Achievements";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeCarousel />
      <Destinations />
      <MiddleBanner />
      <Thumbnail />
      <Services />
      <Achievements />
    </>
  );
};

export default Home;

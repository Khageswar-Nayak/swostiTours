import React from "react";
import homeBanner1 from "../assets/homeBanner/homeBanner-1.avif";
import homeBanner2 from "../assets/homeBanner/homeBanner-2.avif";
import homeBanner3 from "../assets/homeBanner/homeBanner-3.avif";

const HomeCarousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner home-carousel-inner">
        <div className="carousel-item active home-carousel-item">
          <img src={homeBanner1} className="d-block w-100" alt="image" />
        </div>
        <div className="carousel-item">
          <img src={homeBanner2} className="d-block w-100" alt="image" />
        </div>
        <div className="carousel-item">
          <img src={homeBanner3} className="d-block w-100" alt="image" />
        </div>
      </div>
      <button
        className="carousel-control-prev home-carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next home-carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HomeCarousel;

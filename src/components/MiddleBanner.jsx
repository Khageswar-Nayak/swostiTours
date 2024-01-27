import middleBanner1 from "../assets/middleBanner/middleBanner1.avif";
import middleBanner2 from "../assets/middleBanner/middleBanner2.avif";
import middleBanner3 from "../assets/middleBanner/middleBanner3.avif";
import middleBanner4 from "../assets/middleBanner/middleBanner4.avif";
import middleBanner5 from "../assets/middleBanner/middleBanner5.avif";
import middleBanner6 from "../assets/middleBanner/middleBanner6.avif";

const MiddleBanner = () => {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={middleBanner1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={middleBanner2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={middleBanner3} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={middleBanner4} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={middleBanner5} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={middleBanner6} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default MiddleBanner;

import { thumbNails } from "../Constants";
import thumbnailBottomImage from "../assets/thumbnail-Image/thumbnail-bottom-image.webp";

const Thumbnail = () => {
  // Split the thumbnails into two groups
  const firstRowThumbnails = thumbNails.slice(0, 3);
  const secondRowThumbnails = thumbNails.slice(3, 5);

  return (
    <>
      <div className="thumbnail-heading">
        <h5>Plan an unforgettable trip from your city</h5>
      </div>
      {/* First Row */}
      <div className="row" style={{ padding: "0 175px" }}>
        {firstRowThumbnails.map((thumbnail, index) => (
          <div key={index} className="col-md-4 p-1">
            <div className="card mb-3 thumbnail-card">
              <div className="row g-0">
                <div className="col-md-4 p-1">
                  <img
                    src={thumbnail.image}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8 h-13">
                  <div className="card-body h-100 p-0">
                    <p className="card-text m-0">Tour packages from</p>
                    <h5 className="card-title m-0">{thumbnail.place}</h5>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        {thumbnail.tours} tours
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Second Row */}
      <div
        className="row justify-content-center"
        style={{ padding: "0 165px" }}
      >
        {secondRowThumbnails.map((thumbnail, index) => (
          <div key={index} className="col-md-4 p-1">
            <div className="card mb-3 thumbnail-card">
              <div className="row g-0">
                <div className="col-md-4 p-1">
                  <img
                    src={thumbnail.image}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8 h-13">
                  <div className="card-body h-100 p-0">
                    <p className="card-text m-0">Tour packages from</p>
                    <h5 className="card-title m-0">{thumbnail.place}</h5>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        {thumbnail.tours} tours
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <img
        src={thumbnailBottomImage}
        alt="tourImage"
        className="thumbnail-bottom-image"
      />
    </>
  );
};

export default Thumbnail;

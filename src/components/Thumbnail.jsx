import { thumbNails } from "../Constants";

const Thumbnail = () => {
  return (
    <>
      {thumbNails.map((thumbnail) => (
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={thumbnail.image}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p className="card-text">Tour packages from</p>
                <h5 className="card-title">{thumbnail.place}</h5>

                <p className="card-text">
                  <small className="text-body-secondary">
                    {thumbnail.tours} tours
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Thumbnail;

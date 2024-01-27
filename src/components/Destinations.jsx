import React, { useState } from "react";
import { worldDestinationDetails } from "../Constants";
import { indiaDestinationDetails } from "../Constants";

const Destinations = () => {
  const [buttonActive, setButtonActive] = useState(true);

  const worldButtonHandler = () => {
    setButtonActive((prevState) => !prevState);
  };

  const indiaButtonHandler = () => {
    setButtonActive((prevState) => !prevState);
  };
  return (
    <>
      <div className="destination-button">
        <button
          style={{ backgroundColor: buttonActive ? "#FFD800" : "" }}
          onClick={worldButtonHandler}
        >
          World
        </button>
        <button
          style={{ backgroundColor: !buttonActive ? "#FFD800" : "" }}
          onClick={indiaButtonHandler}
        >
          India
        </button>
      </div>
      <div className="destinations">
        {buttonActive
          ? worldDestinationDetails.map((destination) => (
              <div
                className="destinations-card"
                key={destination.destinationName}
              >
                <img
                  src={destination.image}
                  alt=".."
                  className="destination_image"
                />
                <h2 className="destinationName">
                  {destination.destinationName}
                </h2>
                <div className="destination-details">
                  <p>
                    <strong>{destination.totalTours}</strong> tours
                  </p>
                  <p>
                    <strong>{destination.totalDepartures}</strong> departures
                  </p>
                  <p>
                    <strong>{destination.totalGuests}</strong> guest travelled
                  </p>
                </div>
              </div>
            ))
          : indiaDestinationDetails.map((destination) => (
              <div
                className="destinations-card"
                key={destination.destinationName}
              >
                <img
                  src={destination.image}
                  alt=".."
                  className="destination_image"
                />
                <h2 className="destinationName">
                  {destination.destinationName}
                </h2>
                <div className="destination-details">
                  <p>
                    <strong>{destination.totalTours}</strong> tours
                  </p>
                  <p>
                    <strong>{destination.totalDepartures}</strong> departures
                  </p>
                  <p>
                    <strong>{destination.totalGuests}</strong> guest travelled
                  </p>
                </div>
              </div>
            ))}
      </div>
    </>
  );
};

export default Destinations;

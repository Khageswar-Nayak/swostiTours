import React from "react";
import { services } from "../Constants";

const Services = () => {
  return (
    <>
      <div className="thumbnail-heading">
        <h5>All inclusive tours, Chalo Bag Bharo Nikal Pado!</h5>
      </div>
      <div className="allServices">
        {services.map((service) => (
          <div key={service.title} className="service">
            <img src={service.image} alt="logo" />
            <div className="service-details">
              <h3>{service.title} </h3>
              <p>{service.detail} </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;

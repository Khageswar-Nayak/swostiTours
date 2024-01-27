import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid ">
        <a className="navbar-brand text-white" href="#">
          SwostiTours
        </a>

        <div className="mx-5">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>

        <div className=" navIcons">
          <i className="bi bi-telephone"></i>
          <i className="bi bi-heart"></i>
          <i className="bi bi-bell"></i>
          <i className="bi bi-person"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

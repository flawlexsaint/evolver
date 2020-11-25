import React from "react";
import "./Shop.css";

import Home from "../../../../Images/shop/shop-1.jpg";
import Hotel from "../../../../Images/shop/shop-2.jpg";
import Office from "../../../../Images/shop/shop-3.jpg";

const Shop = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="container">
          <h1 className="shop_header mt-5">
            Shop By Space{" "}
            <span>
              <a href="#" className="shop_link ml-3">
                View All
              </a>
            </span>{" "}
          </h1>
          <p className="shop_text mt-3 mb-5">
            Select the type of apartment you want to light up.
          </p>
          <div className="row">
            <div className="col-md-4 mb-3">
              <img src={Home} alt="" className="card-img" />
              <div className="card-img-overlay d-flex align-items-end">
                <button className="btn overlay_btn pl-2 pr-5">home</button>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <img src={Office} alt="" className="card-img" />
              <div className="card-img-overlay d-flex align-items-end">
                <button className="btn overlay_btn pl-2 pr-5">office</button>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <img src={Hotel} alt="" className="card-img" />
              <div className="card-img-overlay d-flex align-items-end">
                <button className="btn overlay_btn pl-2 pr-5">hotel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

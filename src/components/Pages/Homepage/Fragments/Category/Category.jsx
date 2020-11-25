import React from "react";
import "./Category.css";

import Category_1 from "../../../../Images/category/category-1.jpg";
import Category_2 from "../../../../Images/category/category-2.jpg";
import Arrow_F from "../../../../Images/category/arrow_f.svg";
import Arrow_B from "../../../../Images/category/arrow_b.svg";

const Category = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="container">
          <h1 className="shop_header mt-5 mb-5">
            Popular Categories <span>
              <a href="#" className="shop_link ml-3">
                View All
              </a>
            </span>{" "}
          </h1>
          <div className="row">
            <div className="col-12 scrollable">
              <div className="d-flex align-items-center">
                <div className="category_one">
                  <img
                    src={Category_1}
                    alt=""
                    className="custom_card_img mr-4"
                    id="scroll-img-1"
                  />
                  <div className="card-img-overlay d-flex align-items-end">
                    <button className="btn overlay_btn pl-3 pr-5">
                      CEILING LAMPS
                    </button>
                  </div>
                </div>
                <img
                  src={Category_2}
                  alt=""
                  className="custom_card_img"
                  id="scroll-img-2"
                />
              </div>
            </div>
          </div>
          <div className="d-flex mt-4 align-items-center justify-content-end">
            <a href="#scroll-img-1">
              <img src={Arrow_B} alt="" />
            </a>
            <a href="#scroll-img-2">
              <img src={Arrow_F} alt="" className="ml-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;

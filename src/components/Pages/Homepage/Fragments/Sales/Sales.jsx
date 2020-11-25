import React from "react";

import Product_1 from "../../../../Images/product/product-1.jpg";
import Product_2 from "../../../../Images/product/product-2.jpg";
import Product_3 from "../../../../Images/product/product-3.jpg";

const Sales = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="container">
          <div className="mt-5 products_bg">
            <div className="">
              <h1 className="shop_header mb-3 pt-3 pl-3">Products on Sale</h1>
            </div>
            <div className="row pl-3 pr-3 pt-4">
              <div className="col-sm-12 col-md-6 col-lg-3">
                <img src={Product_3} alt="" className="card-img" />
                <p className="product_header mt-4">Standing Lamp</p>
                <p className="product_price">#45,000</p>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3">
                <img src={Product_2} alt="" className="card-img" />
                <div className="card-img-overlay">
                  <button className="btn off_btn">10% off</button>
                </div>
                <p className="product_header mt-4">Standing Lamp</p>
                <p className="product_price">#45,000</p>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3">
                <img src={Product_1} alt="" className="card-img" />
                <p className="product_header mt-4">Standing Lamp</p>
                <p className="product_price">#45,000</p>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3">
                <img src={Product_3} alt="" className="card-img" />
                <p className="product_header mt-4">Standing Lamp</p>
                <p className="product_price">#45,000</p>
              </div>
            </div>
            <div className="row pl-3 pr-3 pt-4">
              <div className="col-sm-12 col-md-6 col-lg-3">
                <img src={Product_3} alt="" className="card-img" />
                <p className="product_header mt-4">Standing Lamp</p>
                <p className="product_price">#45,000</p>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3">
                <img src={Product_3} alt="" className="card-img" />
                <p className="product_header mt-4">Standing Lamp</p>
                <p className="product_price">#45,000</p>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3">
                <img src={Product_1} alt="" className="card-img" />
                <p className="product_header mt-4">Standing Lamp</p>
                <p className="product_price">#45,000</p>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3">
                <img src={Product_3} alt="" className="card-img" />
                <div className="card-img-overlay">
                  <button className="btn off_btn">10% off</button>
                </div>
                <p className="product_header mt-4">Standing Lamp</p>
                <p className="product_price">#45,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;

import React from "react";
import "./TopBar.css";

import Avatar from "../../Images/navbar/avatar.svg";
import Cart from "../../Images/navbar/cart-icon.svg";
import List from "../../Images/navbar/list-icon.svg";
import Logo from "../../Images/navbar/logo.svg";
import Search_icon from "../../Images/navbar/search-icon.svg";

const TopBar = () => {
  return (
    <div className="row">
      <div className="col-12 topbar_border">
        <div className="container mt-3 mb-3">
          <div className="top-bar-section d-flex align-items-center justify-content-between">
            <img src={Logo} alt="" />
            <div className="search_area">
              <img src={Search_icon} alt="" className="search_icon" />
              <input
                className="ml-2 top_bar_search"
                type="search"
                name=""
                placeholder="Search for a product, category or space"
                id=""
              />
            </div>
            <div className="profile_section d-flex align-items-center justify-content-between">
              <div className="account">
                <a href="#">
                  <img src={Avatar} alt="" className="avatar_icon" />
                  <p className="mt-2 my_account">my account</p>
                </a>
              </div>
              <div className="account ml-5">
                <a href="#">
                  <img src={List} alt="" className="list_icon" />
                  <p className="mt-2 list">list</p>
                </a>
              </div>
              <div className="account ml-5">
                <a href="#">
                  <img src={Cart} alt="" className="cart_icon" />
                  <p className="mt-2 cart">cart</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

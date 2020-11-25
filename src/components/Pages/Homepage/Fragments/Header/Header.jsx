import React from "react";
import "./Header.css";

import Header_bg from "../../../../Images/header/header-bg.jpg";
import Button_icon from "../../../../Images/header/button-icon.svg";

const Header = () => {
  return (
    <div className="row">
      <div className="col-12 p-0">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={Header_bg} class="d-block w-100" alt="..." />
              <div className="container card-img-overlay d-flex align-items-center">
                <div className="header_overlay_section p-5">
                  <p className="overlay_header pb-4">Explore our Showroom</p>
                  <p className="overlay_text pb-4">
                    Not sure of what you’re looking for? No worries, use{" "}
                    <span className="overlay_text_span nav_color">
                      Lighting Xplorer
                    </span>{" "}
                    to see what you can get.
                  </p>
                  <button className="btn header_btn pl-4 pr-4">
                    Proceed to lighting xplorer{" "}
                    <img src={Button_icon} alt="" className="pl-3" />
                  </button>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img src={Header_bg} class="d-block w-100" alt="..." />
              <div className="container card-img-overlay d-flex align-items-center">
                <div className="header_overlay_section p-5">
                  <p className="overlay_header pb-4">Explore our Showroom</p>
                  <p className="overlay_text pb-4">
                    Not sure of what you’re looking for? No worries, use{" "}
                    <span className="overlay_text_span nav_color">
                      Lighting Xplorer
                    </span>{" "}
                    to see what you can get.
                  </p>
                  <button className="btn header_btn pl-4 pr-4">
                    Proceed to lighting xplorer{" "}
                    <img src={Button_icon} alt="" className="pl-3" />
                  </button>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img src={Header_bg} class="d-block w-100" alt="..." />
              <div className="container card-img-overlay d-flex align-items-center">
                <div className="header_overlay_section p-5">
                  <p className="overlay_header pb-4">Explore our Showroom</p>
                  <p className="overlay_text pb-4">
                    Not sure of what you’re looking for? No worries, use{" "}
                    <span className="overlay_text_span nav_color">
                      Lighting Xplorer
                    </span>{" "}
                    to see what you can get.
                  </p>
                  <button className="btn header_btn pl-4 pr-4">
                    Proceed to lighting xplorer{" "}
                    <img src={Button_icon} alt="" className="pl-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

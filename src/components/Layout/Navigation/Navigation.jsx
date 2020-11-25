import React from "react";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="container scrollable">
          <ul className="navigation_items d-flex align-items-center justify-content-between">
            <li className="navigation_li">
              <a href="#" className="nav_color">
                lighting explorer
              </a>
            </li>
            <li>
              <a href="#" className="nav_color">
                office
              </a>
            </li>
            <li>
              <a href="#" className="nav_color">
                hotel
              </a>
            </li>
            <li>
              <a href="#" className="nav_color">
                home
              </a>
            </li>
            <li>
              <a href="#">all products</a>
            </li>
            <li>
              <a href="#">pendant light</a>
            </li>
            <li>
              <a href="#">chandelier</a>
            </li>
            <li>
              <a href="#">switches & sockets</a>
            </li>
            <li>
              <a href="#">ceiling lamp</a>
            </li>
            <li>
              <a href="#">wall lamp</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

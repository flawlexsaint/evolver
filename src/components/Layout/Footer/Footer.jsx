import React from "react";
import "./Footer.css";

import Logo from "../../Images/footer/footer_logo.svg";
import Icon_1 from "../../Images/footer/icon-1.svg";
import Icon_2 from "../../Images/footer/icon-2.svg";
import Icon_3 from "../../Images/footer/icon-3.svg";
import Icon_4 from "../../Images/footer/icon-4.svg";
import Icon_5 from "../../Images/footer/icon-5.svg";
import Icon_8 from "../../Images/footer/icon-8.svg";
import Icon_7 from "../../Images/footer/icon-7.svg";
import Download_icon from "../../Images/footer/download-icon.svg";
import Android from "../../Images/footer/android.svg";
import Apple from "../../Images/footer/apple.svg";

const Footer = () => {
  return (
    <div className="row">
      <div className="col-12 mt-5 footer_bg pb-5 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="mt-4">
                <img src={Logo} alt="" />
                <p className="footer_text mt-4">
                  //Talk about the company here// Brighten your nights with
                  modern designer lighting from Thelightinghaus.com Our range
                  features top brands and all the latest contemporary lighting
                  styles to illuminate your home and garden.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="mt-4 mb-4 q_link">
                <a href="#" className="footer_header mb-4">
                  Quick Links
                </a>
                <ul>
                  <li>
                    <a href="#" className="footer_links nav_color">
                      lighting explorer
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer_links">
                      office
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer_links">
                      hotel
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer_links">
                      home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer_links">
                      my account
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer_links">
                      cart
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="mt-4 mb-4">
                <p className="footer_header mb-4">Connect</p>
                <a href="#" className="footer_connect">
                  Connect with us on social media
                </a>
                <div className="d-flex align-items-center mt-3">
                  <img src={Icon_1} alt="" />
                  <img src={Icon_2} alt="" className="ml-3" />
                  <img src={Icon_3} alt="" className="ml-3" />
                  <img src={Icon_4} alt="" className="ml-3" />
                  <img src={Icon_5} alt="" className="ml-3" />
                  <img src={Icon_8} alt="" className="ml-3" />
                  <img src={Icon_7} alt="" className="ml-3" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3  mt-4">
              <div className="d-flex">
                <img src={Download_icon} alt="" />
                <div className="ml-3 mt-2">
                  <h1 className="download_header">Download our mobile app</h1>
                  <p className="download_text">
                    Get access to exclusive offers
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <img src={Apple} alt="" />
                <img src={Android} alt="" className="ml-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import "./Navbar.css";

import Mobile from "../../Images/top_bar/phone-icon.svg";
import Address from "../../Images/top_bar/address.svg";
import Message from "../../Images/top_bar/message-icon.svg";

const Navbar = () => {
  return (
    <div className="row">
      <div className="col-12 top_bar_color">
        <div className="container d-flex align-items-center pt-3">
          <div className="d-flex align-items-center">
            <div className="mobile_section d-flex align-items-center">
              <img src={Mobile} alt="" className="topbar_mobile_icon" />
              <p className="mobile_text pl-3">+234 802 501 8557</p>
            </div>
            <div className="address_section d-flex align-items-center">
              <img src={Address} alt="" className="pl-3 topbar_address_icon" />
              <p className="address_text pl-3">
                35 Freedom Way, Lekki Phase 1, Lagos, Nigeria
              </p>
            </div>
            <div className="email_section d-flex align-items-center">
              <img src={Message} alt="" className="pl-3 topbar_message_icon" />
              <p className="email_text pl-3">sales@thelightinghaus.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

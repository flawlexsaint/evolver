import React from "react";
import "./Contact.css";

import Mail from "../../../../Images/contact/mail-icon.svg";
import Contact_img from "../../../../Images/contact/contact-img.jpg";

const Contact = () => {
  return (
    <div className="container">
      <div className="row mt-5 contact_bg m-0">
        <div className="col-md-6 pt-4 pl-3 pb-4 d-flex align-items-center">
          <div className="contact_area ">
            <div className="d-flex align-items-center">
              <img src={Mail} alt="" />
              <p className="contact_header ml-4">Join our mailing list</p>
            </div>
            <p className="contact_text mt-4 mb-4">
              Subscribe to our newsletter to get updates on our latest offers!
            </p>
            <input
              required
              type="email"
              className="email_input"
              placeholder="Enter email address here
"
            />{" "}
            <br />
            <button className="btn contact_btn mt-3">Subscribe</button>
          </div>
        </div>
        <div className="col-md-6 m-0 p-0">
          <img src={Contact_img} alt="" className="card-img" />
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import ContactImg from "../../Assets/Images/contactImg.png";
// import MainStar from "../../Assets/Images/main-star.svg";
import { Link } from "react-router-dom";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <div className="container contact-page-main">
        <div className="row contact-page-main-inner">
          <div className="col-md-6">
            <img src={ContactImg} alt="" className="img-fluid mt-5" />
          </div>
          <div className="col-md-6">
            <div class="container d-flex p-0">
              <div
                style={{ width: "inherit", color: "#ED232A" }}
                class="container"
              >
                <h5>Enter Details And</h5>
              </div>
            </div>
            <div class="container mt-3">
              <h2 style={{ color: "#1877F2", fontWeight: 600 }}>
                Get A Call From Us.
              </h2>
            </div>
            <div className="form-box ps-4">
              <div class="input-group mb-3">
                <span
                  class="input-group-text bg-white border-end-0"
                  id="basic-addon1"
                >
                  <i class="ri-account-circle-fill"></i>
                </span>
                <input
                  type="text"
                  class="form-control border-start-0"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div class="input-group mb-3">
                <span
                  class="input-group-text bg-white border-end-0"
                  id="basic-addon1"
                >
                  <i class="ri-phone-fill"></i>
                </span>
                <input
                  type="text"
                  class="form-control border-start-0"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div class="input-group mb-3">
                <span
                  class="input-group-text bg-white border-end-0"
                  id="basic-addon1"
                >
                  <i class="ri-at-line"></i>
                </span>
                <input
                  type="text"
                  class="form-control border-start-0"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <p>
                By submitting this form, you accept and agree to our{" "}
                <Link to="/">Terms of Use.</Link>
              </p>
              <div className="cta-b btn btn-sm">SUBMIT NOW</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

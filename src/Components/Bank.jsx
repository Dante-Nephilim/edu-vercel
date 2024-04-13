import React from "react";
import "./Bank.css";
import AxisBank from "../../Assets/Images/bankslogo/Axisbanklogo.svg";
import CitiBank from "../../Assets/Images/bankslogo/Citibnklogo.svg";
import hdfcBank from "../../Assets/Images/bankslogo/hdfc-bank-logo.svg";
import IciciBank from "../../Assets/Images/bankslogo/Icicilogo.svg";
import IdbiBank from "../../Assets/Images/bankslogo/Idbilogo.svg";
import unionBank from "../../Assets/Images/bankslogo/union-bank-of-india.svg";
import MainStar from "../../Assets/Images/main-star.svg";
export default function Bank() {
  return (
    <>
      <div class="container-fluid section-2 bank-section p-0">
        <div class="container-fluid wrapper py-5">
          <h1 class="text-center bank-heading fs-5">Our trusted Partner</h1>{" "}
          <br />
          <div class="container">
            <div class="row trusted-partner align-items-center justify-content-center">
              <div class="col-6 tp-item col-md-4 col-lg-2">
                <div class="container bank-logo">
                  <img src={AxisBank} class="img-fluid" alt="" />
                </div>
              </div>
              <div class="col-6 tp-item col-md-4 col-lg-2">
                <div class="container bank-logo">
                  <img src={CitiBank} class="img-fluid" alt="" />
                </div>
              </div>
              <div class="col-6 tp-item col-md-4 col-lg-2">
                <div class="container bank-logo">
                  <img src={hdfcBank} class="img-fluid" alt="" />
                </div>
              </div>
              <div class="col-6 tp-item col-md-4 col-lg-2">
                <div class="container bank-logo">
                  <img src={IdbiBank} class="img-fluid" alt="" />
                </div>
              </div>
              <div class="col-6 tp-item col-md-4 col-lg-2">
                <div class="container bank-logo">
                  <img src={IciciBank} class="img-fluid" alt="" />
                </div>
              </div>
              <div class="col-6 tp-item col-md-4 col-lg-2">
                <div class="container bank-logo">
                  <img src={unionBank} class="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{ padding: "5vw" }}
          class="container-fluid easy-step-content"
          id="how-it-works"
        >
          <div class="container d-flex p-0">
            <div style={{color: "#ED232A" }} class="container">
              <h5>Easy Steps</h5>
            </div>
            <div style={{ marginTop: "-2.5vh", marginLeft: "-55vw" }} class="container easywork-star">
              <img
                style={{ width: "2.5vw" }}
                src={MainStar}
                class="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div class="container mt-3">
            <h2>
              How it <span style={{ color: "#1877F2" }}> Works</span>
            </h2>
          </div>
          <div className="container es-p">
            <p style={{ width: "55%", textAlign:"justify" }}>
              Our Mission is to make Quality Education accessible to all by
              providing flexible and affordable Educational lending solutions,
              expeditiously. Sign Up or Reach out to us to avail your Low
              interest student Loan options.
            </p>
          </div>
          <div class="container option-box mt-5">
            <h2 style={{ fontSize: "1.5vw", fontWeight: "700" }}>
              Apply at Eduphiser
            </h2>
            <p style={{ fontSize: "1vw", color: "#515152", fontWeight: "500" }}>
              Apply for an education loan on our website.
            </p>
            <div className="first-hiw"></div>
          </div>

          <div class="container box box-hiw2 mt-2 p-3 pt-4 border-bottom ">
            <h2
              style={{ fontSize: "1.5vw", fontWeight: "700", color: "#181717" }}
            >
              Choose the Best Bank
            </h2>
            <p
              style={{
                fontSize: "1vw",
                color: "#515152",
                fontWeight: "500",
                marginTop: "0.8vw",
              }}
            >
              Choose the bank that offers the rate of interest you like.
            </p>
            <div className="first-hiw second-hiw"></div>
          </div>

          <div class="container box box-hiw3 mt-2 p-3 pt-4 border-bottom ">
            <h2
              style={{ fontSize: "1.5vw", fontWeight: "700", color: "#181717" }}
            >
              Secure your Education Loan{" "}
            </h2>
            <p
              style={{
                fontSize: "1vw",
                color: "#515152",
                fontWeight: "500",
                marginTop: "0.8vw",
              }}
            >
              Get the bank to approve the loan you want.
            </p>
            <div className="first-hiw third-hiw"></div>
          </div>

          <div class="container box box-hiw4 mt-2 p-3 pt-4 border-bottom ">
            <h2
              style={{ fontSize: "1.5vw", fontWeight: "700", color: "#181717" }}
            >
              Money in your Account
            </h2>
            <p
              style={{
                fontSize: "1vw",
                color: "#515152",
                fontWeight: "500",
                marginTop: "0.8vw",
              }}
            >
              Receive the loan money in your bank account.
            </p>
            <div className="first-hiw four-hiw"></div>
          </div>
        </div>
      </div>
    </>
  );
}

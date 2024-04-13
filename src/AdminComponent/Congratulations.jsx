import React from "react";
import "./Congratulations.css";
import { Link } from "react-router-dom";

export default function Congratulations() {
  (() => {
    setTimeout(function () {
      document.querySelector(".done").classList.add("drawn");
    }, 500);
  })();
  return (
    <>
      <div className="congrats-outer">
        <div className="inner-box">
          <div className="done">
            <svg
              version="1.1"
              id="tick"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 37 37"
              style={{ enableBackground: "new 0 0 37 37" }}
              xml:space="preserve"
            >
              <path
                class="circ path"
                style={{
                  fill: "#00b130",
                  stroke: "#009528",
                  strokeWidth: "3",
                  strokeLinejoin: "round",
                  strokeMiterlimit: "10",
                }}
                d="
	M30.5,6.5L30.5,6.5c6.6,6.6,6.6,17.4,0,24l0,0c-6.6,6.6-17.4,6.6-24,0l0,0c-6.6-6.6-6.6-17.4,0-24l0,0C13.1-0.2,23.9-0.2,30.5,6.5z"
              />
              <polyline
                class="tick path"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeWidth: "3",
                  strokeLinejoin: "round",
                  strokeMiterlimit: "10",
                }}
                points="
	11.6,20 15.9,24.2 26.4,13.8 "
              />
            </svg>
          </div>
          <div className="text-center p-5">
            <h1>Congratulations!</h1>
            <p className="h5 pt-3">Your Request have been submitted.</p>
            <p className="h5 pt-3">Reference Id : <span className="fw-bold">00000000xxxx</span></p>
            <p className="fs-5 px-5 pt-3">
              We will get back to you very soon, for any queries you can call us
              on our <br /> toll free number 1800-9988-7766
            </p>
            <Link to={"/dashboard"} className="btn btn-primary mt-3 px-3 py-2">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import "./Banner.css";

export default function Banner(props) {
  return (
    <>
      <div className="container-fluid mt-4 mb-5">
        <div className="row">
          <div className={`col-md-12 mx-auto img-containr ${props.image}`}>
            <h1>
              {props.heading1}
              <br />
              {props.heading2}
            </h1>
            <div className="link-faq">
              <a href="/">Home &nbsp;</a>{" "}
              <a href={props.pageUrl}>
                {" "}
                {">"} {props.page}{" "}
              </a>
            </div>
            <div className="banner-overlay"></div>
          </div>
        </div>
      </div>
    </>
  );
}

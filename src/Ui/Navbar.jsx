import React from "react";
import "./Navbar.css";
import Logo from "../../Assets/Images/Logo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const openNavBar = () => {
    document.querySelector(".nav-resp").style.left = "0%";
    document.querySelector(".ri-close-fill").style.display = "initial";
    document.querySelector(".ri-menu-3-line").style.display = "none";
    // document.querySelector(".nav-resp").style.overflow = "hidden";
    // document.querySelector(".edu-main").style.display = "none";
    // document.querySelector(".footer-main-outer").style.display = "none";
  };
  const closeNavBar = () => {
    document.querySelector(".nav-resp").style.left = "100%";
    document.querySelector(".ri-close-fill").style.display = "none";
    document.querySelector(".ri-menu-3-line").style.display = "initial";
    // document.querySelector(".edu-main").style.display = "initial";
    // document.querySelector(".footer-main-outer").style.display = "initial";
  };
  return (
    <>
      <div className="nav-outer pt-3">
        <nav>
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="Eduphiser" />
          </Link>
          <div>
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link text-dark" to="/signup">
                  <i className="ri-home-4-fill"></i> Education loan
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#how-it-works">
                  How it works?
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/">
                  Resources
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/">
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/">
                  Be Our Partner
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/contact">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <div className="d-flex ps-5 nav-cta">
            <Link to="/login">
              <button
                className="btn btn-light border border-primary px-4 py-2"
                id="ligt-btn"
              >
                <i className="ri-login-box-line"></i> LOG IN
              </button>
            </Link>
            <Link to="/signup">
              <button className="btn btn-danger px-4 py-2" id="drk-btn">
                APPLY NOW
              </button>
            </Link>
          </div>
          <i className="ri-menu-3-line" onClick={openNavBar}></i>
          <i className="ri-close-fill" onClick={closeNavBar}></i>
        </nav>
        <div className="nav-resp">
          <li className="nav-item active" onClick={closeNavBar}>
            <Link className="nav-link text-dark" to="/signup">
              <i className="ri-home-4-fill"></i> Education loan
            </Link>
          </li>
          <li className="nav-item" onClick={closeNavBar}>
            <a className="nav-link text-dark" href="#how-it-works">
              How it works?
            </a>
          </li>
          <li className="nav-item" onClick={closeNavBar}>
            <Link className="nav-link text-dark" to="/">
              Resources
            </Link>
          </li>
          <li className="nav-item" onClick={closeNavBar}>
            <Link className="nav-link text-dark" to="/">
              Blogs
            </Link>
          </li>
          <li className="nav-item" onClick={closeNavBar}>
            <Link className="nav-link text-dark" to="/">
              Be Our Partner
            </Link>
          </li>
          <li className="nav-item" onClick={closeNavBar}>
            <Link className="nav-link text-dark" to="/contact">
              Contact us
            </Link>
          </li>
          <div className="d-flex ps-5 nav-cta">
            <Link to="/login">
              <button
                className="btn btn-light border border-primary px-4 py-2"
                id="ligt-btn"
                onClick={closeNavBar}
              >
                <i className="ri-login-box-line"></i> LOG IN
              </button>
            </Link>
            <Link to="/signup">
              <button
                className="btn btn-danger px-4 py-2"
                id="drk-btn"
                onClick={closeNavBar}
              >
                APPLY NOW
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

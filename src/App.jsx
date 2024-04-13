import React, { useState } from "react";
import "./App.css";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LoadingOverlay from 'react-loading-overlay';
import HashLoader from 'react-spinners/HashLoader'
import Testimonial from "./Components/Testimonial";
import Bank from "./Components/Bank";
import { Link } from "react-router-dom";
import MainStar from "../Assets/Images/main-star.svg";
import Strip from "./Ui/Strip";
import EduphiserGrow from "../Assets/Images/EduphiserGrow.png";
import EduphiserPotential from "../Assets/Images/EduphiserPotential.png";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";

export default function App() {

  const [isLoading, setIsLoading] = useState(false)

  return (
    <>
      <LoadingOverlay
        active={isLoading}
        spinner={<HashLoader color="blue"/>}
        // text='Be there..'
        styles={
          {
            overlay: (base) => ({
              ...base,
              background: 'rgba(0, 0, 0, 0.6)',
              height :"100vh",
              position : "fixed",
              top : 0,
              left : 0,
              zIndex :1000,
            })
          }
        }
      >
        <div className="hero-section">
          <div className="lft-hero-section">
            <h4>
              Fund Your Dreams, Secure Your Career{" "}
              <span>
                <img src={MainStar} alt="" />
              </span>
            </h4>
            <h1>
              Educational Loans
              <br />
              <span className="heading-light">for a</span>{" "}
              <span className="heading-blue">Brighter</span>
              <br />
              <div className="tommorow">
                Tomorrow
                <span>
                  <div div className="cir-b"></div>
                  <div div className="cir-y"></div>
                </span>
              </div>
            </h1>
            <p>
              Navigate your Educational Journey, Hassle-Free, with our Simple and
              Tailored Educational Lending Solutions. Lowest Interest Rate on
              Student Loan along with our comprehensive support and Guidance.
            </p>
            <div className="cta">
              <Link to="/signup">
                <button className="cta-b">APPLY NOW</button>
              </Link>
              <Link to="/">
                <button className="cta-n">KNOW MORE</button>
              </Link>
            </div>
          </div>
          <div className="rght-hero-section">
            <div className="slide">
              <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <Bank />
        <Strip />
        <Testimonial />
        <Strip />
        <div className="container grow">
          <div className="row grow-inner">
            <div className="col-md-7">
              <div className="container d-flex p-0">
                <div
                  style={{ width: "inherit", color: "#ED232A" }}
                  className="container"
                >
                  <h5>Looking for a</h5>
                </div>
                <div
                  style={{ marginTop: "-2.5vh", marginLeft: "-20vw" }}
                  className="container"
                >
                  <img
                    style={{ width: "2.5vw" }}
                    src={MainStar}
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="container mt-3">
                <h2>
                  Financial Partner ?{" "}
                  <span style={{ color: "#1877F2" }}> Let's Grow Together</span>
                </h2>
              </div>
              <div className="container my-4">
                <p style={{ width: "80%", textAlign: "justify" }}>
                  Our Company is seeking partners who share our commitment to make
                  education accessible to all. Whether you’re a Educational
                  Institute, Business incubator or service providers , there are
                  numerous opportunities to explore and collaborate with us.
                  Expand your reach, innovate and grow your business together by
                  leveraging our expertise and resources. Join us on this journey
                  and make a real difference in the lives of individual and
                  communities around the world.
                </p>
              </div>
              <div className="cta d-flex justify-content-start ms-3">
                <Link to="/signup">
                  <button className="cta-b">Partner With Us</button>
                </Link>
              </div>
            </div>
            <div className="col-md-5">
              <img
                src={EduphiserGrow}
                alt="EduphiserGrow"
                className="img-fluid mt-5"
              />
            </div>
          </div>
        </div>
        <div className="container grow">
          <div className="row grow-inner grow-inner2">
            <div className="col-md-7 ps-4">
              <div className="container d-flex p-0">
                <div
                  style={{ width: "inherit", color: "#ED232A" }}
                  className="container"
                >
                  <h5>Unlock your academic potential</h5>
                </div>
                <div style={{ marginTop: "-2.5vh" }} className="container">
                  <img
                    style={{ width: "2.5vw" }}
                    src={MainStar}
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="container mt-3">
                <h2>
                  With Our{" "}
                  <span style={{ color: "#1877F2" }}> Tailored Study Loans</span>
                </h2>
              </div>
              <div className="container my-4">
                <p style={{ width: "80%", textAlign: "justify" }}>
                  Invest in your future confidently, as we pave the way for your
                  educational success. Whether you’re a student striving for
                  academic excellence,a professional looking to up-skill,or
                  someone embarking on a new educational endeavor,or program is
                  tailored to meet your specific needs. Apply now for a seamless
                  journey toward your dreams.
                </p>
              </div>
              <div className="cta d-flex justify-content-start ms-3">
                <Link to="/signup">
                  <button className="cta-b">Get Started Now</button>
                </Link>
              </div>
            </div>
            <div className="col-md-5">
              <img
                src={EduphiserPotential}
                alt="EduphiserPotential"
                className="img-fluid mt-5"
              />
            </div>
          </div>
        </div>
        <Strip />
        <Blog />
        <Strip />
        <Contact />
      </LoadingOverlay>
    </>
  );
}

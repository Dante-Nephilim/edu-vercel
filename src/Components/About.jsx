import React from "react";
import "./About.css";
import Banner from "./Banner";
import Strip from "../Ui/Strip";
import VisionImg from "../../Assets/Images/OurVision.svg";
import PatnershipImg from "../../Assets/Images/Parternship.svg";
import OurTeam2024 from "../../Assets/Images/2024.svg";
import OurTeam1 from "../../Assets/Images/OurTeam1.svg";
import ourTeam from "../JsonData/OurTeam";
import TeamIllustration from "../../Assets/Images/TeamIllustration.png";

export default function About() {
  return (
    <>
      <Banner
        heading1="About Us"
        pageUrl="/about"
        page="About Us"
        image="img-containr2"
      />
      <div className="container">
        <div className="row ">
          <div className="col-md-12 about-story">
            <h1 className="text-center text-primary mt-5">The Story</h1>
            <p className="text-start">
              Eduphiser was born from a simple yet powerful idea: Education
              should be accessible to all,regardless of the financial
              circumstances. Our journey began with a passionate belief that
              everyone deserves the opportunity to pursue knowledge and achieve
              their full potential. Incubated with the prestigious Tides
              Business Incubator IIT Roorkee, we've set out on a quest to
              simplify and enhance the process of facilitating Educational Loan.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid img-containr-about">
        <div className="row d-flex justify-content-evenly">
          <div className="col-md-5 vision-bg">
            <div className="input-group d-flex align-items-center">
              <img src={VisionImg} alt="Vision Eduphiser" />
              <h4 className="text-primary ps-3">Our Vision</h4>
            </div>
            <p className="mt-4">
              At Eduphiser, our vision is to revolutionize access to education
              by empowering students worldwide through innovative lending
              solutions. We aspire to break down financial barriers, enabling
              every individual to pursue their educational dreams without
              constraints.{" "}
            </p>
          </div>
          <div className="col-md-5 vision-bg">
            <div className="input-group d-flex align-items-center">
              <img src={PatnershipImg} alt="Vision Eduphiser" />
              <h4 className="text-primary ps-3">Our Vision</h4>
            </div>
            <p className="mt-4">
              At Eduphiser, our vision is to revolutionize access to education
              by empowering students worldwide through innovative lending
              solutions. We aspire to break down financial barriers, enabling
              every individual to pursue their educational dreams without
              constraints.{" "}
            </p>
          </div>
        </div>
      </div>
      <Strip />
      <div className="meet-our-team">
        <img src={OurTeam1} alt="Education Loan" />
        <div className="cir1meet">
          <div className="blue-cir"></div>
        </div>
        <div className="row d-flex justify-content-evenly">
          {ourTeam.map((val, index) => {
            return (
              <div className="col-sm-2" key={index}>
                <div class="card">
                  <img
                    src={val.image}
                    class="card-img-top"
                    alt="EduPhiser Team"
                  />
                  <div class="card-body">
                    <h5 class="card-title text-center">{val.name}</h5>
                    <p class="card-text text-center">{val.position}</p>
                    <div className="social-media d-flex justify-content-center gap-2 fs-4">
                      <a href={val.linkedin}>
                        <i class="ri-linkedin-box-fill"></i>
                      </a>
                      <a href={val.email}>
                        <i class="ri-mail-fill"></i>
                      </a>
                      <a href={val.facebook}>
                        <i class="ri-facebook-box-fill"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <img id="meet-2024" src={OurTeam2024} alt="2024 Eduphiser" />
      </div>
      <Strip />
      <div className="container my-5">
        <div className="row py-5">
          <div className="col-sm-6 py-5 d-flex justify-content-center">
            <img
              src={TeamIllustration}
              className="img-fluid w-75"
              alt="TeamIllustration"
            />
          </div>
          <div className="col-sm-6 py-5 pe-5">
            <h5 className="text-danger fw-bold">Join the team</h5>
            <h2 className="text-dark fw-bold fs-1">
              Want to be part of <br />
              the Journey?
            </h2>
            <p className="pe-5 join-community-para">
              Join us on this exciting Journey and let’s shape the future of
              education. Together, we can leverage our expertise, resources ,
              and networks to create innovative solutions that addresses the
              evolving needs of learners globally. By combining our strengths
              and working towards a common goal, we can make a real difference
              in the lives of individuals and communities around the world.{" "}
            </p>
          </div>
        </div>
      </div>
      <Strip />
      <div className="blank-div mt-4"></div>
    </>
  );
}

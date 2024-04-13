import React from "react";
import "./Footer.css";
import FooterEduphiser from "../../Assets/Images/FooterEduphiser.png";
import Logo from "../../Assets/Images/Logo.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer-main-outer">
        <footer className="text-center text-lg-start text-white">
          {/* <div className="subscribe-news">
            <div className="left-subscribe">
              <img src={FooterEduphiser} alt="FooterEduphiser" />
            </div>
            <div className="rgt-subscribe">
              <h5>
                Subscribe to our newsletter to get updates to our latest loans
              </h5>
              <div className="cnter-subscribe">
                <input type="email" placeholder="Enter your email " />
                <button>Subscribe</button>
              </div>
              <p>
                You will able to unsubscribe at any time. <br />
                Read our privacy policy here
              </p>
            </div>
          </div> */}

          <div className="container footer-div">
            <section className="">
              <div className="row">
                <div className="col-md-3 mx-auto mt-3 text-start">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    <img src={Logo} alt="" />
                  </h6>
                  <p>Lending education for future superheros</p>
                  <h6 className="mt-5">Address</h6>
                  <p>
                    Plot no.264/D, Block-A, 2nd Floor, <br />
                    Nayan Nagar, New-Delhi, Pin-889710
                  </p>
                  <div className="logo d-flex justify-content-start gap-2 fs-3">
                    <a href="/" className="text-white text-decoration-none">
                      <i className="ri-facebook-circle-fill"></i>
                    </a>
                    <a href="/" className="text-white text-decoration-none">
                      <i className="ri-twitter-fill"></i>
                    </a>
                    <a href="/" className="text-white text-decoration-none">
                      <i className="ri-instagram-line"></i>
                    </a>
                    <a href="/" className="text-white text-decoration-none">
                      <i className="ri-linkedin-box-line"></i>
                    </a>
                    <a href="/" className="text-white text-decoration-none">
                      <i className="ri-google-fill"></i>
                    </a>
                  </div>
                </div>

                <hr className="w-100 clearfix d-md-none" />
                <div className="col-md-2 mx-auto mt-3 text-start">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Our Services
                  </h6>
                  <p>
                    <a className="text-white text-decoration-none" href="/">
                      Education Loan
                    </a>
                  </p>
                </div>
                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-2 mx-auto mt-3 text-start">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Resources
                  </h6>
                  <p>
                    <a className="text-white text-decoration-none" href="/">
                      About Us
                    </a>
                  </p>
                  <p>
                    <a className="text-white text-decoration-none" href="/">
                      Career
                    </a>
                  </p>
                  <p>
                    <a className="text-white text-decoration-none" href="/">
                      FAQ's
                    </a>
                  </p>
                  <p>
                    <a className="text-white text-decoration-none" href="/">
                      Blogs
                    </a>
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />
                <div className="col-md-2 mx-auto mt-3 text-start">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Useful Links
                  </h6>
                  <p>
                    <a className="text-white text-decoration-none" href="/">
                      Privacy Policy
                    </a>
                  </p>
                  <p>
                    <a className="text-white text-decoration-none" href="/">
                      Terms & Conditions
                    </a>
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />
                <div className="col-md-3 mx-auto mt-3 text-start">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Contact Us
                  </h6>
                  <p>
                    <a className="text-white text-decoration-none" href="/">
                      <i className="ri-mail-fill" /> Eduphiser@example.com
                    </a>
                  </p>
                  <p>
                    <a className="text-white text-decoration-none" href="/">
                      <i className="ri-phone-fill"></i> +91 8455845444
                    </a>
                  </p>
                </div>
              </div>
            </section>

            <hr className="my-3" />
            <section className="p-3 pt-0">
              <div className="row d-flex align-items-center">
                <div className="col-md-7 text-center text-md-start">
                  <div className="p-3">
                    <a href="/" className="text-secondary text-decoration-none">
                      <Link to="/admin" className="text-decoration-none text-secondary"> ©</Link> 2024, All right reserved by
                      EduPhiser Private Limited
                    </a>
                  </div>
                </div>
                <div className="col-md-5 d-flex justify-content-center gap-4">
                  <a className="text-secondary text-decoration-none" href="/">
                    Privacy Policy
                  </a>

                  <a className="text-secondary text-decoration-none" href="/">
                    Term of Use
                  </a>

                  <a className="text-secondary text-decoration-none" href="/">
                    Legal
                  </a>

                  <a className="text-secondary text-decoration-none" href="/">
                    Site map
                  </a>
                </div>
              </div>
            </section>
          </div>
        </footer>
      </div>
    </>
  );
}

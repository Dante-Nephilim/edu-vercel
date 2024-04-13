
import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { BASE_URL } from "../constant";
import { useNavigate } from "react-router-dom";

// Function to validate email format
const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export default function Login() {
  // State variables initialization
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  const [seconds, setSeconds] = useState(0);
  const [resendDisabled, setResendDisabled] = useState(true);

  // Hook to navigate between routes
  const navigate = useNavigate();

  // Function to toggle between login methods
  const changeLogin = (method) => {
    console.log(method)
    if (method === "email") {
      document.querySelector("#loginWithPhone").style.display = "block";
      document.querySelector("#loginWithEmail").style.display = "none";
    } else {
      document.querySelector("#loginWithPhone").style.display = "none";
      document.querySelector("#loginWithEmail").style.display = "block";
    }
  };

  // Function to handle form submission for email login
  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.dismiss();
    if (!email || !password) {
      toast.dismiss();
      return toast.warn("All fields are required");
    }
    else if (!isEmail(email)) {
      toast.dismiss();
      return toast.error('Please enter a valid email address');
    }
    try {
      const response = await axios.post(
        `${BASE_URL}/auth/login`,
        { email, password },
        { withCredentials: true }
      );
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      } else {
        toast.dismiss();
        return toast.error(response.data.msg);
      }
    } catch (error) {
      toast.dismiss();
      return toast.error(error.message);
    }
  };
  // Function to handle OTP verification
  const handleOtp = () => {
    const otp = otpValues.join("");
    const phoneNo = `+91${phone}`;
    if (otp.length === 6) {
      axios
        .post(`${BASE_URL}/verify-otp`, {
          phone: phoneNo,
          otp: otp,
        })
        .then(function (response) {
          if (response.status === 200) {
            toast.success(response.msg);
            axios.post(`${BASE_URL}/login`, {
              phone: phoneNo,
              password: password,
            })
              .then((res) => {
                if (res.status === 200) {
                  localStorage.clear();
                  localStorage.setItem("token", res.data.token);
                  navigate("/dashboard");
                } else {
                  return toast.error(res.data.msg);
                }
              });
          } else {
            return toast.error("Server Error! Try Again");
          }
        })
        .catch(function (error) {
          return toast.error(error.message);
        });
    } else {
      toast.error("Invalid Operation");
    }
  };

  // Function to handle OTP resend
  const resendOtp = () => {
    const phoneNo = `+91${phone}`;
    axios
      .post(`${BASE_URL}/send-otp`, {
        phone: phoneNo,
      })
      .then(function (response) {
        if (response.status === 200) {
          startTimer();
          return toast.success("OTP sent to your phone no +91 " + phone);
        } else {
          return toast.error("Error in sending OTP! Try Again Later");
        }
      })
      .catch(function (error) {
        return toast.error("Server Error !! Try again later.");
      });
  };

  // Function to handle OTP timer
  const startTimer = (time) => {
    let timer = time || 60;
    setSeconds(timer);
    const countdown = setInterval(() => {
      timer--;
      setSeconds(timer);
      if (timer <= 0) {
        clearInterval(countdown);
        setResendDisabled(false);
      }
    }, 1000);
  };

  // Function to handle OTP input change
  const handleChange = (index, value) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
  };

  // Function to move focus to the next OTP input
  const handleKeyUp = (index) => {
    const inputs = document.querySelectorAll(".otp");
    if (inputs[index].value !== "" && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  };

  // Function to toggle password visibility
  const showHidePass = (e) => {
    const eye = e.target;
    const pass = document.querySelector("#uloginPassword");
    const eyeBtn = e.target.getAttribute("class");
    if (eyeBtn === "ri-eye-line") {
      pass.setAttribute("type", "text");
      eye.setAttribute("class", "ri-eye-off-line");
    } else {
      pass.setAttribute("type", "password");
      eye.setAttribute("class", "ri-eye-line");
    }
  };

  // Function to send OTP
  const sendOTP = (e) => {
    e.preventDefault();
    if (phone.length !== 10) {
      return toast.error("Invalid Phone Number!");
    }
    const phoneNo = `+91${phone}`;
    axios
      .post(`${BASE_URL}/send-otp`, {
        phone: phoneNo,
      })
      .then(function (response) {
        if (response.status === 200) {
          document.body.style.overflow = "hidden";
          let otpBox = document.querySelector(".otp-box-outer");
          otpBox.style.zIndex = "20";
          otpBox.style.transition = "all 0.3s ease-out";
          otpBox.style.opacity = "1";
          startTimer();
          toast.dismiss();
          return toast.success(
            "OTP sent to your phone no +91 " + phone
          );
        } else {
          toast.dismiss();
          return toast.error("Error in sending OTP! Try Again Later");
        }
      })
      .catch(function (error) {
        toast.dismiss();
        return toast.error("Server Error !! Try again later.");
      });
  };

  // Function to close OTP box
  const closeOtpBox = () => {
    if (window.confirm("Are You Sure Want to Close ?")) {
      let otpBox = document.querySelector(".otp-box-outer");
      otpBox.style.zIndex = "-20";
      otpBox.style.transition = "all 0.3s ease-out";
      otpBox.style.opacity = "0";
    }
  };

  return (
    <>
      <div className="login-container">
        {/* ToastContainer component for displaying notifications */}
        <ToastContainer />

        {/* OTP Box */}
        <div className="otp-box-outer">
          <div className="otp-box-inner">
            {/* Close button for OTP box */}
            <div className="closeOtpBox" onClick={closeOtpBox}><i className="ri-close-line"></i></div>

            {/* Title for OTP verification */}
            <div className="title h2 text-decoration-underline">VERIFY OTP</div>

            {/* Banner indicating OTP sent */}
            <div className="fs-6 pt-4 otp-sent-banner">
              <span className="fw-bold">OTP</span> sent to Your Phone no{" "}
              <span className="fw-bold">+91 {phone.slice(0, 4)}XXXXXX</span>
            </div>

            {/* Box for OTP resend */}
            <div className="fs-6 fw-bold text-primary text-decoration-underline otp-resend-box" role="button">
              {seconds > 0 && <div>Resend OTP in: {seconds}s</div>}
            </div>

            {/* Button to resend OTP */}
            <button onClick={resendOtp} disabled={resendDisabled} className="btn text-primary otp-resend-btn">
              Resend OTP
            </button>

            {/* Form for entering OTP */}
            <form className="mt-5">
              {otpValues.map((value, index) => (
                <input
                  key={index}
                  className="otp"
                  type="text"
                  value={value}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyUp={() => handleKeyUp(index)}
                  maxLength={1}
                />
              ))}
            </form>

            {/* Divider */}
            <hr className="mt-4" />

            {/* Button to verify OTP */}
            <button className="btn btn-primary btn-block mt-4 mb-4 customBtn" onClick={handleOtp}>
              Verify
            </button>
          </div>
        </div>
        {/* End of OTP Box */}

        {/* Login Section */}
        <div className="row">
          {/* Left section for login with email */}
          <div className="col-md-7 left-login d-flex justify-content-center flex-column ">
            <div className="main-heading">
              <h3>Go to your account</h3>
              <h1>Login Now</h1>
            </div>

            {/* Form for login with email */}
            <form id="loginWithEmail">
              {/* Switch to login with phone number */}
              <div className="my-3">
                <p className="h6 text-primary text-decoration-underline" role="button" onClick={() => { changeLogin("email") }}>
                  Login With Phone Number
                </p>
              </div>

              {/* Email input */}
              <div className="mb-3">
                <label htmlFor="uLoginEmail" className="form-label">
                  Email<sup>*</sup>
                </label>
                <input
                  type="email"
                  className="form-control py-3"
                  id="uLoginEmail"
                  placeholder="Ex. jhon@gmail.com"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Password input */}
              <div className="mb-3" style={{ position: "relative" }}>
                <label htmlFor="uloginPassword" className="form-label">
                  Password<sup>*</sup>
                </label>
                <input
                  type="password"
                  className="form-control py-3"
                  id="uloginPassword"
                  placeholder="************"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {/* Show/Hide password icon */}
                <span className="show-Hide fs-5" role="button">
                  <i className="ri-eye-line " onClick={(e) => showHidePass(e)}></i>
                </span>
              </div>

              {/* Checkbox for Remember Me */}
              <div className="mb-3 form-check form-agree">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  value={checked}
                  onChange={(event) => {
                    setChecked(event.target.checked);
                  }}
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Remember Me
                </label>
              </div>

              {/* Button for login */}
              <div className="button-login d-flex align-items-center justify-content-between">
                <button
                  type="submit"
                  className="btn btn-primary mt-3 px-4 py-2"
                  onClick={handleSubmit}
                  id="loginBtn"
                >
                  Login
                </button>
                <a href="/">Forgot Password?</a>
              </div>

              {/* Link for new users to signup */}
              <div className="new-user-div">
                <Link to="/signup">New Here ? Create an Account</Link>
              </div>
            </form>

            {/* Form for login with phone number */}
            <form id="loginWithPhone">
              {/* Switch to login with email */}
              <div className="my-3">
                <p className="h6 text-primary text-decoration-underline" role="button" onClick={() => { changeLogin("phone") }}>
                  Login With Email
                </p>
              </div>

              {/* Phone number input */}
              <div className="mb-3">
                <label htmlFor="uPhoneNumber" className="form-label">
                  Phone Number<sup>*</sup>
                </label>
                <input
                  type="number"
                  className="form-control py-3"
                  id="uPhoneNumber"
                  placeholder="00000000000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              {/* Button to send OTP */}
              <div className="button-login d-flex align-items-center justify-content-between">
                <button
                  type="submit"
                  className="btn btn-primary mt-3 px-4 py-2"
                  onClick={sendOTP}
                  id="loginBtnUsingOTP"
                >
                  Send Otp
                </button>
                <a href="/">Forgot Password?</a>
              </div>

              {/* Link for new users to signup */}
              <div className="new-user-div">
                <Link to="/signup">New Here ? Create an Account</Link>
              </div>
            </form>
            {/* End of Login With Form */}
          </div>

          {/* Right section for registration */}
          <div style={{ background: "transparent", color: "#333" }} className="col-md-5 right-login d-flex justify-content-center flex-column align-items-center">
            <h1>New Here?</h1>
            <p>Want to create a new account, then Register here? </p>
            {/* Link to registration page */}
            <Link className="btn bg-white text-primary py-2 px-4 btn-light" to="/signup">
              Register Now
            </Link>
          </div>
        </div>
      </div>

    </>
  );
}

import React, { useState } from "react";
import "./SignUp.css";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constant";
import { useNavigate } from "react-router-dom";

const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [refferal, setRefferal] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [check, setCheck] = useState({
    checkName: false,
    checkEmail: false,
    checkPhone: false,
    checkPassword: false,
  });

  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  const [seconds, setSeconds] = useState(0);
  const [resendDisabled, setResendDisabled] = useState(true);

  const navigate = useNavigate();


  const validateName = (e) => {
    let tag = e.target;
    if (name === "" || name.length < 2) {
      tag.style.border = "2px solid red";
      // toast.error("Invalid Name");
      check.checkName = false;
    } else {
      tag.style.border = "initial";
      check.checkName = true;
    }
    return true;
  };

  const validateEmail = (e) => {
    let tag = e.target;
    if (!isEmail(email)) {
      tag.style.border = "2px solid red";
      // toast.error("Invalid email format");
      check.checkEmail = false;
    } else {
      tag.style.border = "initial";
      check.checkEmail = true;
    }
  };

  const validatePhone = (e) => {
    let tag = e.target;
    // console.log(phone.length);
    if (phone.length === 0) {
      tag.style.border = "initial";
      check.checkPhone = false;
    }
    else if (phone.length !== 10) {
      tag.style.border = "2px solid red";
      // toast.error("Phone no is required");
      check.checkPhone = false;
    } else {
      tag.style.border = "initial";
      check.checkPhone = true;
    }
  };
  const validatePass = (e) => {
    let tag = e.target;
    if (password.length < 6) {
      tag.style.border = "2px solid red";
      // toast.error("Password must be 6 character long");
      check.checkPassword = false;
    } else {
      tag.style.border = "initial";
      check.checkPassword = true;
    }
  };

  let showHidePass = (e) => {
    let eye = e.target;
    let pass = document.querySelector("#upassword")
    let eyeBtn = e.target.getAttribute("class")
    if (eyeBtn === "ri-eye-line") {
      pass.removeAttribute("type");
      pass.setAttribute("type", "text");
      eye.setAttribute("class", "ri-eye-off-line");
    }
    else {
      pass.removeAttribute("type");
      pass.setAttribute("type", "password");
      eye.setAttribute("class", "ri-eye-line");
    }

  }

  let registerUser = async () => {
    // console.log(check);
    toast.dismiss();

    if (phone === "") {
      if (
        !check.checkEmail ||
        !check.checkName ||
        !check.checkPassword
      ) {
        return toast.error("Mandatory Fields are required!!");
      } else if (!checked) {
        console.log("here")
        return toast.warning(
          "Please agree aur Terms & Conditions, to continue...!!"
        );
      } else {
        try {
          axios.post(`${BASE_URL}/user/post`, {
            full_name: name,
            email: email,
            password: password,
            status: false,
            referal_code: refferal
          }).then((res) => {
            if (res.status === 200) {
              localStorage.clear();
              localStorage.setItem("token", res.data.token);
              navigate("/dashboard");
            }
            else {
              return toast.error(res.data.msg)
            }
          })
        } catch (error) {
          return toast.error("Server Error !! Try again later.")
        }
      }

    }
    else {
      if (
        !check.checkEmail ||
        !check.checkName ||
        !check.checkPhone ||
        !check.checkPassword
      ) {
        return toast.error("Mandatory fiels are required!!");
      } else if (!checked) {
        return toast.warning(
          "Please agree aur Terms & Conditions, to continue...!!"
        );
      } else {
        // Send Otp axios called
        let phoneNo = `+91${phone}`;
        // console.log(phoneNo);
        axios
          .post(`${BASE_URL}/user/post`, {
            // .post(`${BASE_URL}user/post`, {
            full_name: name,
            email: email,
            password: password,
            phone: phoneNo,
            status: false,
            referal_code: refferal
          })
          .then((response) => {
            // console.log(response.status)
            if (response.status === 200) {
              document.body.style.overflow = "hidden";
              let otpBox = document.querySelector(".otp-box-outer");
              otpBox.style.zIndex = "20";
              otpBox.style.transition = "all 0.3s ease-out";
              otpBox.style.opacity = "1";

              axios
                .post(`${BASE_URL}/send-otp`, {
                  phone: phoneNo
                }).then(function (response) {
                  if (response.status === 200) {
                    // return true;
                    // toast.success("Sending OTP.");
                    startTimer();
                    return toast.success(
                      "OTP sent to your phone no +91 " + phone
                    );
                  }
                  else {
                    return toast.error("Error in Sending OTP internal.");
                    // return false;
                  }
                }).catch(function (error) {
                  return toast.error("Error in Sending OTP.");
                });

            } else {
              return toast.error("Error in sending OTP! Try Again Later");
            }
          })
          .catch(function (error) {
            return toast.error("Server Error !! Try again later.");
          });

        // End
      }
    }


  };

  const resendOtp = () => {
    // Send Otp axios called
    let phoneNo = `+91${phone}`;
    // console.log(phoneNo);
    axios
      .post(`${BASE_URL}/send-otp`, {
        phone: phoneNo,
      })
      .then(function (response) {
        if (response.status === 200) {
          startTimer();
          return toast.success(
            "OTP sent to your phone no +91 " + phone
          );
        } else {
          return toast.error("Error in sending OTP! Try Again Later");
        }
      })
      .catch(function (error) {
        return toast.error("Server Error !! Try again later.");
      });

    // End
  }


  const handleChange = (index, value) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
  };

  const handleKeyUp = (index) => {
    const inputs = document.querySelectorAll(".otp");
    if (inputs[index].value !== "" && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  };

  const handleOtp = () => {
    let otpSize = otpValues.join("");
    let phoneNo = `+91${phone}`;

    if (otpSize.length == 6) {
      // Sending OTP to Verify
      axios
        .post(`${BASE_URL}/verify-otp`, {
          phone: phoneNo,
          otp: otpSize,
        })
        .then(function (response) {
          // console.log(response);
          if (response.status === 200) {
            toast.success(response.msg);
            // Register User after OTP Verified
            toast.loading("Verifying the OTP....");
            axios.post(`${BASE_URL}/login`, {
              phone: phoneNo,
              password: password
            }).then((res) => {
              // console.log(res);
              if (res.status === 200) {
                // console.log(res);
                localStorage.clear();
                localStorage.setItem("token", res.data.token);
                navigate("/dashboard");
              }
              else {
                return toast.error(res.data.msg)
              }
            });
            // End
          } else {
            return toast.error("Server Error ! Try Again");
          }
        })
        .catch(function (error) {
          return toast.error(error.message);
        });

      // End
    } else {
      toast.error("Invalid Operation");
    }
  };

  const startTimer = (timeee) => {
    let timer = timeee || 60;
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

  let closeOtpBox = () => {
    if (confirm("Are You Sure Want to Close ?")) {
      let otpBox = document.querySelector(".otp-box-outer");
      otpBox.style.zIndex = "-20";
      otpBox.style.transition = "all 0.3s ease-out";
      otpBox.style.opacity = "0";
    }
  }

  return (
    <>
      <div className="register-container">
        <div className="otp-box-outer">
          <div className="otp-box-inner">
            <div className="closeOtpBox" onClick={closeOtpBox}><i class="ri-close-line"></i></div>
            <div className="title h2 text-decoration-underline">VERIFY OTP</div>
            <div className="fs-6 pt-4 otp-sent-banner">
              <span className="fw-bold">OTP</span> sent to Your Phone no{" "}
              <span className="fw-bold">+91 {phone.slice(0, 4)}XXXXXX</span>
            </div>
            <div
              className="fs-6 fw-bold text-primary text-decoration-underline otp-resend-box"
              role="button"
            >
              {seconds > 0 && <div>Resend OTP in: {seconds}s</div>}
            </div>
            <button
              onClick={resendOtp}
              disabled={resendDisabled}
              className="btn text-primary otp-resend-btn"
            >
              Resend OTP
            </button>

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

            <hr className="mt-4" />
            <button
              className="btn btn-primary btn-block mt-4 mb-4 customBtn"
              onClick={handleOtp}
            >
              Verify
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7 left-register d-flex justify-content-center flex-column ">
            <div className="main-heading">
              <h3>Get Our Service</h3>
              <h1>Register Now</h1>
            </div>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputName1" className="form-label">
                  Full Name<sup>*</sup>
                </label>
                <input
                  type="name"
                  className="form-control py-3"
                  id="exampleInputName1"
                  placeholder="Ex. jhon@gmail.com"
                  aria-describedby="NameHelp"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  onBlur={(e) => {
                    validateName(e);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email<sup>*</sup>
                </label>
                <input
                  type="email"
                  className="form-control py-3"
                  id="exampleInputEmail1"
                  placeholder="Ex. jhon@gmail.com"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  onBlur={(e) => {
                    validateEmail(e);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="uPhoneNo" className="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control py-3"
                  id="uPhoneNo"
                  placeholder="0000000000"
                  value={phone}
                  onChange={(event) => {
                    setPhone(event.target.value);
                  }}
                  onBlur={(e) => {
                    validatePhone(e);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="uRefferalCode" className="form-label">
                  Referal Code
                </label>
                <input
                  type="text"
                  className="form-control py-3"
                  id="uRefferalCode"
                  placeholder=""
                  value={refferal}
                  onChange={(event) => {
                    setRefferal(event.target.value);
                  }}
                />
              </div>
              <div className="mb-3" style={{ position: "relative" }}>
                <label htmlFor="upassword" className="form-label">
                  Password<sup>*</sup>
                </label>
                <input
                  type="password"
                  className="form-control py-3"
                  id="upassword"
                  placeholder="************"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  onBlur={(e) => {
                    validatePass(e);
                  }}
                />
                <span className="show-Hide fs-5" role="button"><i className="ri-eye-line" onClick={(e) => showHidePass(e)}></i></span>
              </div>
              <div className="mb-3 form-check form-agree">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  value={checked}
                  onClick={(event) => {
                    setChecked(event.target.checked);
                  }}
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  By submitting this form, you accept and agree to our{" "}
                  <a href="/">Terms of Use</a>.
                </label>
              </div>
              <button
                type="button"
                className="btn btn-primary mt-3 px-4 py-2"
                onClick={registerUser}
                id="submitBtn"
              >
                Register
              </button>
              <div className="new-user-div">
                <Link to="/login">Already have an account ?</Link>
              </div>
            </form>
          </div>
          <div
            style={{ background: "transparent", color: "#333" }}
            className="col-md-5 right-register d-flex justify-content-center flex-column align-items-center"
          >
            <h1>Already Registered?</h1>
            <p>You have already created here account, then Login in here? </p>
            <Link className="btn text-primary py-2 px-4 btn-light bg-white" to="/login">
              Sign In
            </Link>
          </div>
          <ToastContainer />
        </div>
      </div>
      {/* Otp Box start*/}

      {/* Otp Box end */}
      <div className="blank-div mt-4"></div>
    </>
  );
}

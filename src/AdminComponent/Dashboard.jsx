import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Logo from "../../Assets/Images/Logo.svg";
import { state_arr, cities_arr, country_arr } from "./StateCity";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { BASE_URL } from "../constant";
import { useNavigate } from "react-router-dom";

const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

const isPan = (panDetails) => {
  return /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/i.test(panDetails);
};

export default function Dashboard() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailID, setEmailID] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [panDetails, setPanDetails] = useState("");
  const [state, setState] = useState("");
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState("");
  const [pincode, setPinCode] = useState("");
  const [country, setCountry] = useState([]);
  const [institution, setInstitution] = useState("");
  const [exam, setExam] = useState("");
  const [scoreType, setScoreType] = useState("");
  const [courseName, setCourseName] = useState("");
  const [studyPeriod, setStudyPeriod] = useState("");
  const [admissionStatus, setAdmissionStatus] = useState("");
  const [amount, setAmount] = useState("");
  const [checked, setChecked] = useState(false);
  const [uid, setUuid] = useState("");

  const [userData, setUserData] = useState([]);

  const navigate = useNavigate();

  // useEffect(() => {
  //   let userData = async () => {
  //     let uuid = localStorage.getItem("_uid");
  //     setUuid(uuid);
  //     if (!uuid) navigate("/login");
  //     else {
  //       // console.log(`/user-detail/${uuid}`);
  //       let dataa = await axios.get(`${BASE_URL}/user-detail/${uid}`);
  //       setUserData(dataa.data);
  //     }
  //   };
  //   userData();
  // }, []);

  const handleCities = (ucity) => {
    let filteredCities = cities_arr.find((value) => value.key === ucity);
    setCities(filteredCities.value);
  };

  const submitForm = () => {
    if (
      firstName.length < 1 ||
      lastName.length < 1 ||
      !city ||
      pincode.length != 6 ||
      !country ||
      !institution ||
      !exam ||
      !courseName ||
      !studyPeriod ||
      !admissionStatus ||
      amount.length === 0
    ) {
      return toast.error("All fields are required!");
    } else if (!isEmail(emailID)) {
      return toast.warn("Please enter a valid Email ID");
    } else if (mobileNumber.length != 10) {
      return toast.warn("Please enter a valid Phone no");
    } else if (!isPan(panDetails)) {
      // console.log(panDetails);
      return toast.warn("Please enter valid PAN Card");
    } else if (!checked) {
      return toast.warning("Check the checkbox before submitting!");
    } else {
      let updateData = {
        personal_details: JSON.stringify({
          first_name: firstName,
          middle_name: middleName,
          last_name: lastName,
          email_ID: emailID,
          pan_no: panDetails,
          state: state,
          phone:mobileNumber,
          city: city,
          pin_code: pincode,
        }),
        educational_details: JSON.stringify({
          country: country,
          institute_name: institution,
          exam_name: exam,
          exam_score: scoreType,
          coursename: courseName,
          studyperiod: studyPeriod,
          admissionstatus: admissionStatus,
          amount: amount,
        }),
      };

      console.log(updateData);

      axios.post(`${BASE_URL}/update-details/${uid}`, updateData);
      return toast.success("Your Request has been Submitted...");

      // API call for adding data into database
      addDataToDatabase();
    }
  };
  return (
    <>
      <div className="container-fluid dashboard-main-outer">
        <ToastContainer />
        <div className="row">
          <div className="col-sm-4-md-12 py-2 px-5 border border-bottom d-flex justify-content-between user-navbar">
            <div className="d-flex align-items-center gap-3">
              <i
                role="button"
                className="ri-menu-2-line fs-4"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions"
              ></i>
              <img src={Logo} className="img-fluid w-75" alt="Eduphiser" />
            </div>
            <div className="d-flex justify-content-center align-items-center gap-2 profile-logo pe-3">
              <p className="fs-5 user-name-div">{userData.name || "User"}</p>
              <div className="btn-group">
                <div
                  className="dashboard-profile-image"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  role="button"
                ></div>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      User Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Application Status
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Log out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 user-dashboard-section">
            <div className="d-flex flex-column justify-content-center align-items-center py-5 gap-4">
              <p className="fs-2">Continue your application here:</p>
              <button
                className="btn btn-outline-primary"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>

        {/* Side Menu Start*/}
        <div
          className="offcanvas offcanvas-start"
          data-bs-scroll="true"
          tabIndex="-1"
          id="offcanvasWithBothOptions"
          aria-labelledby="userSideMenuBar"
        >
          <div className="offcanvas-header">
            <div
              className="offcanvas-title d-flex align-items-center gap-3"
              id="userSideMenuBar"
            >
              <i
                role="button"
                className="ri-menu-2-line fs-4"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></i>
              <img src={Logo} className="img-fluid" alt="Eduphiser" />
            </div>
          </div>
          <div className="offcanvas-body">
            <div className="row">
              <div className="col-sm-4-sm-12 p-5">
                <div
                  className="py-4 nav-div-sugg d-flex gap-3 align-items-center"
                  style={{ fontWeight: "600" }}
                >
                  <img src={Logo} alt="" className="rounded-circle img-fluid" />
                  Active Loans
                </div>
                <div
                  className="py-4 nav-div-sugg d-flex gap-3 align-items-center"
                  style={{ fontWeight: "600" }}
                >
                  <img src={Logo} alt="" className="rounded-circle img-fluid" />
                  Active Appliation Status
                </div>
              </div>
            </div>
          </div>
          <div className="offcanvas-footer p-4">
            <a
              href="/login"
              className="fs-5 ps-5 text-decoration-none text-dark"
              style={{ fontWeight: "600" }}
              role="button"
            >
              Log out
            </a>
          </div>
        </div>
        {/* Side Menu End */}

        {/* Form Popup Start */}

        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-fullscreen form-section-apply">
            <div className="modal-content">
              <div className="modal-header border border-0">
                <h1 className="modal-title fs-5 px-5" id="staticBackdropLabel">
                  Notes: If parents are applying on behalf of students, please
                  enter only the students information in this form.
                </h1>
                <button
                  type="button"
                  className="btn-close p-5 fs-4"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">
                <form
                  action="/"
                  method="post"
                  onSubmit={(e) => e.preventDefault()}
                  autoComplete="off"
                >
                  {/* Top Form */}
                  <h5 className="px-5">Personal Details</h5>
                  <p className="px-5 pb-4 mb-3">
                    We take basic details to create your profile
                  </p>
                  {/* row 1 */}
                  <div className="row px-5 py-3">
                    <div className="col-sm-4 form-input-box">
                      <label htmlFor="uFirstname" className=" required">
                        First Name
                      </label>
                      <input
                        required
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        id="uFirstname"
                        value={firstName || ""}
                        onChange={(e) => {
                          setFirstName(e.target.value);
                        }}
                      />
                    </div>
                    <div className="col-sm-4 form-input-box">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Middle name"
                        id="uMiddlename"
                        value={middleName || ""}
                        onChange={(e) => {
                          setMiddleName(e.target.value);
                        }}
                      />
                      <label htmlFor="uMiddlename" className="">
                        Middle Name
                      </label>
                    </div>
                    <div className="col-sm-4 form-input-box">
                      <input
                        required
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                        id="uLastname"
                        value={lastName || ""}
                        onChange={(e) => {
                          setLastName(e.target.value);
                        }}
                      />
                      <label htmlFor="uLastname" className=" required">
                        Last Name
                      </label>
                    </div>
                  </div>
                  {/* row 2 */}
                  <div className="row px-5 py-3">
                    <div className="col-sm-4 form-input-box">
                      <input
                        required
                        type="text"
                        className="form-control"
                        placeholder="Email ID"
                        id="uEmailId"
                        value={emailID || ""}
                        onChange={(e) => {
                          setEmailID(e.target.value);
                        }}
                      />
                      <label htmlFor="uEmailId" className=" required">
                        Email ID
                      </label>
                    </div>
                    <div className="col-sm-4 form-input-box">
                      <input
                        required
                        type="number"
                        className="form-control"
                        placeholder="Mobile Number"
                        id="uMobileNo"
                        value={mobileNumber || ""}
                        onChange={(e) => {
                          setMobileNumber(e.target.value);
                        }}
                      />
                      <label htmlFor="uMobileNo" className=" required">
                        Mobile Number
                      </label>
                    </div>
                    <div className="col-sm-4 form-input-box">
                      <input
                        required
                        type="text"
                        className="form-control"
                        placeholder="PAN Card no"
                        id="uPANDetails"
                        value={panDetails || ""}
                        onChange={(e) => {
                          setPanDetails(e.target.value.toLocaleUpperCase());
                        }}
                        maxLength={10}
                      />
                      <label htmlFor="uPANDetails" className=" required">
                        PAN Card no
                      </label>
                    </div>
                  </div>
                  {/* row 3 */}
                  <div className="row px-5 py-3">
                    <div className="col-sm-4 form-input-box">
                      <select
                        required
                        type="text"
                        className="form-control"
                        placeholder="State"
                        id="uState"
                        value={state || []}
                        onChange={(event) => {
                          setState(event.target.value);
                          handleCities(event.target.value);
                        }}
                      >
                        {state_arr.map((val, index) => {
                          return (
                            <option key={index} value={val.key}>
                              {val.name}
                            </option>
                          );
                        })}
                      </select>
                      <label htmlFor="uState" className=" required">
                        State
                      </label>
                    </div>
                    <div className="col-sm-4 form-input-box">
                      <select
                        required
                        type="text"
                        className="form-control "
                        placeholder="City"
                        id="uCity"
                        value={city || []}
                        onChange={(event) => {
                          setCity(event.target.value);
                        }}
                      >
                        {cities.map((val, index) => {
                          return (
                            <option key={index} value={val}>
                              {val}
                            </option>
                          );
                        })}
                      </select>
                      <label htmlFor="uCity" className=" required">
                        City
                      </label>
                    </div>
                    <div className="col-sm-4 form-input-box">
                      <input
                        required
                        type="number"
                        className="form-control"
                        placeholder="Pin-Code"
                        id="uPinCode"
                        maxLength={6}
                        value={pincode || ""}
                        onChange={(e) => {
                          setPinCode(e.target.value);
                        }}
                      />
                      <label htmlFor="uPinCode" className=" required">
                        Pin-Code
                      </label>
                    </div>
                  </div>

                  {/* Bottom Form */}
                  <h5 className="px-5 pt-4">Educational Details</h5>
                  <p className="px-5 pb-4 mb-3">
                    Enter your education details for a easy process
                  </p>
                  {/* row 4 */}
                  <div className="row px-5 py-3">
                    <div className="col-sm-4 form-input-box">
                      <select
                        required
                        type="text"
                        className="form-control"
                        placeholder="Country of Study"
                        id="uCountry"
                        value={country || []}
                        onChange={(event) => {
                          setCountry(event.target.value);
                        }}
                      >
                        {country_arr.map((val, index) => {
                          {
                            /* console.log(val.code); */
                          }
                          return (
                            <option key={index} value={val.code}>
                              {val.name}
                            </option>
                          );
                        })}
                      </select>
                      <label htmlFor="uCountry" className=" required">
                        Country of Study
                      </label>
                    </div>
                    <div className="col-sm-4 form-input-box">
                      <input
                        required
                        type="text"
                        className="form-control"
                        placeholder="Educational Institute Name"
                        id="uEducationInstitute"
                        value={institution || ""}
                        onChange={(e) => setInstitution(e.target.value)}
                      />
                      <label
                        htmlFor="uEducationInstitute"
                        className=" required"
                      >
                        Educational Institute Name
                      </label>
                    </div>
                    <div className="col-sm-4 form-input-box">
                      <input
                        required
                        type="text"
                        className="form-control"
                        placeholder="Entrance Exam Name"
                        id="uEntranceExam"
                        value={exam}
                        onChange={(e) => setExam(e.target.value)}
                      />
                      <label htmlFor="uEntranceExam" className=" required">
                        Entrance Exam Name
                      </label>
                    </div>
                  </div>
                  {/* row 5 */}
                  <div className="row px-5 py-3">
                    <div className="col-sm-4 form-input-box">
                      <input
                        required
                        type="text"
                        className="form-control"
                        placeholder="Entrance Exam Score"
                        id="uEtranceScore"
                        value={scoreType}
                        onChange={(e) => setScoreType(e.target.value)}
                      />
                      <label htmlFor="uEtranceScore" className=" required">
                        Entrance Exam Score
                      </label>
                    </div>
                    <div className="col-sm-4 form-input-box">
                      <input
                        required
                        type="text"
                        className="form-control"
                        placeholder="Course Name"
                        id="uCourseName"
                        value={courseName}
                        onChange={(e) => setCourseName(e.target.value)}
                      />
                      <label htmlFor="uCourseName" className=" required">
                        Course Name
                      </label>
                    </div>
                    <div className="col-sm-4 form-input-box">
                      <select
                        required
                        type="text"
                        className="form-control"
                        placeholder="Study Period"
                        id="uStudyPeriod"
                        value={studyPeriod}
                        onChange={(e) => setStudyPeriod(e.target.value)}
                      >
                        <option value="">Select Time Period(in months)</option>
                        <option value="1-3 months">1-3 months</option>
                        <option value="3-6 months">3-6 months</option>
                        <option value="6-9 months">6-9 months</option>
                        <option value="9-12 months">9-12 months</option>
                        <option value="12-16 months">12-16 months</option>
                        <option value="16-20 months">16-20 months</option>
                      </select>
                      <label htmlFor="uStudyPeriod" className=" required">
                        Study Period
                      </label>
                    </div>
                  </div>
                  {/* row 6 */}
                  <div className="row px-5 py-3">
                    <div className="col-sm-4 form-input-box">
                      <select
                        required
                        type="text"
                        className="form-control"
                        placeholder="Admission Status"
                        id="uAdmissionStatus"
                        value={admissionStatus}
                        onChange={(event) =>
                          setAdmissionStatus(event.target.value)
                        }
                      >
                        <option value="">Select an option</option>
                        <option value="IP">In Progress</option>
                        <option value="DN">Denied</option>
                        <option value="AC">Accepted</option>
                      </select>
                      <label htmlFor="uAdmissionStatus" className=" required">
                        Admission Status
                      </label>
                    </div>
                    <div className="col-sm-4 form-input-box">
                      <input
                        required
                        type="number"
                        className="form-control"
                        placeholder="Ex : 4000000"
                        id="UReqAmount"
                        value={amount || ""}
                        onChange={(e) => {
                          setAmount(e.target.value);
                        }}
                      />
                      <label htmlFor="UReqAmount" className=" required">
                        Required Amount (INR)
                      </label>
                    </div>
                    <div className="col-sm-4"></div>
                  </div>

                  <div className="px-5 d-flex  justify-content-start align-items-center my-3 checkbox-form-loan">
                    <input
                      type="checkbox"
                      className="me-2"
                      name=""
                      id="uCheckBox"
                      value={checked}
                      onClick={() => setChecked(!checked)}
                    />
                    <span>
                      I, hereby declare that all the above details are filled
                      with my concern.<span className="required"></span>
                    </span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-center">
                    <button
                      type="submit"
                      className="btn btn-primary px-5 py-2"
                      onClick={submitForm}
                      id="ApplyForLoanBtn"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Form popup End */}
      </div>
    </>
  );
}

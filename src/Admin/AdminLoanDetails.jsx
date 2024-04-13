import React, { useEffect, useState } from "react";
import "./AdminLoanDetails.css";
import { ToastContainer, toast } from "react-toastify";
import logo from "../../Assets/Images/Logo.svg";
import { Link } from "react-router-dom";
import AdminLeftNav from "./AdminLeftNav";

export default function AdminLoanDetails() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(false);
  const [uid, setUuid] = useState("");

  useEffect(() => {
    let fetchDta = async () => {
      let res = await fetch(`${process.env.BASE_URL}/api/get-user/${uid}`);
      let json = await res.json();
      setData(json);
    };
    fetchDta();
  }, []);

  const changeStatus = (e, id, index) => {
    console.log(data);
    data[index].loan_status = "Active";
    renderUsers();
  };

  const renderUsers = () => {
    return data.map((user, index) => (
      <tr key={user.id}>
        <td>{index + 1}</td>
        <td>{user.full_name}</td>
        <td>{user.email} </td>
        <td></td>
        <td>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              //   checked={user.isActive ? true : false}
              checked={status}
              onChange={(e) => {
                changeStatus(e, user.id, index);
              }}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {user.loan_status}
            </label>
          </div>
        </td>
      </tr>
    ));
  };

  return (
    <>
      <div className="admin-home">
        <AdminLeftNav />
        <div className="admin-rght">
          <ToastContainer />
          <div className="rght-nav">
            <div className="left">USERS STATUS</div>
            <div className="mid"></div>
            <div className="right">
              <i className="ri-notification-4-fill"></i>
              <div className="admin-icon">
                <i className="ri-user-2-fill"></i> Admin
              </div>
            </div>
          </div>
          <div className="rght-bottom">
            <div className="part-2">
              <div className="table-outer">
                {/* <div className="table-top-banner">
                  <div>Users Details</div>
                  <div className="total-users">
                    <div>
                      <i className="ri-user-2-fill"></i> Total Users
                    </div>
                    <div>0</div>
                  </div>
                </div> */}
                <table className="table">
                  <thead>
                    <tr>
                      <th>S no</th>
                      <th>Username</th>
                      <th>Phone</th>
                      <th>Loan Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>{renderUsers()}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* 
          <div className="container">
            
            <h5 className="p-5">Users Lists</h5>
  
            <table className="table table-striped">
              <thead className="text-white">
                <tr>
                  <th scope="col">S no</th>
                  <th scope="col">ID</th>
                  <th scope="col">Name </th>
                  <th scope="col">Email </th>
                  <th scope="col">Action </th>
                  <th scope="col">Action </th>
                </tr>
              </thead>
              <tbody id="userlist"></tbody>
            </table>
            <button className="btn btn-light">Logout</button>
          </div> */}
      </div>
    </>
  );
}

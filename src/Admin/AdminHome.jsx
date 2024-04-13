import React, { useEffect, useState } from "react";
import "./AdminHome.css";
import { ToastContainer, toast } from "react-toastify";
import AdminLeftNav from "./AdminLeftNav";
import { BASE_URL } from "../constant";
import { useNavigate } from "react-router-dom";

export default function AdminHome() {
  const [data, setData] = useState([]);
  const [adminData, setadminData] = useState();
  const [uid, setUuid] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    // let adminData = async () => {
    //   let uuid = localStorage.getItem("_uid_admin");
    //   setUuid(uuid);
    //   if (!uuid) navigate("/admin");
    //   else {
    //     // console.log(`/user-detail/${uuid}`);
    //     // let dataa = await axios.get(`${BASE_URL}/user-detail/${uid}`);
    //     // setadminData(dataa.data);
    //     navigate("/admin-dashboard");
    //   }
    // };
    // adminData();

    let fetchDta = async () => {
      let res = await fetch(`${BASE_URL}/api/get-users`);
      let json = await res.json();
      setData(json);
    };
    fetchDta();
  }, []);

  const deleteUserHandler = (id) => {
    let conf = window.confirm("Are you sure to delete this user?");
    if (!conf) return;
    fetch(`http://localhost:3000/users/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .catch((err) => console.log(err))
      .finally(() => {
        toast.loading("Deleting User...");
        window.setTimeout(() => {
          toast.success("User Deleted Successfully... 👍");
          window.setTimeout(() => {
            window.location.reload();
          }, 3000);
        }, 3000);
      });
  };

  const renderUsers = () => {
    return data.map((user, index) => (
      <tr key={user.id}>
        <td>{index + 1}</td>
        <td>{user.id}</td>
        <td>{user.full_name}</td>
        <td>{user.email} </td>
        <td>
          <button
            className="btn btn-warning btn-sm"
            onClick={() =>
              (window.location = `/admin-access/editUser?userId=${user.id}`)
            }
          >
            Edit User
          </button>
        </td>
        <td>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => deleteUserHandler(user.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <>
      <div className="admin-home">
        <AdminLeftNav activeColor="dashboard" />
        <div className="admin-rght">
          <ToastContainer />
          <div className="rght-nav">
            <div className="left">DASHBOARD</div>
            <div className="mid"></div>
            <div className="right">
              <i className="ri-notification-4-fill"></i>
              <div className="admin-icon">
                <i className="ri-user-2-fill"></i> Admin
              </div>
            </div>
          </div>
          <div className="rght-bottom">
            <div className="part-1">
              <div className="boxes">
                <div>Total Users</div>
                <div>{data.length}</div>
              </div>
              <div className="boxes">
                <div>Applied for Loan</div>
                <div>0</div>
              </div>
              <div className="boxes">
                <div>Loan Approved</div>
                <div>0</div>
              </div>
              <div className="boxes">
                <div>Loan Denied</div>
                <div>0</div>
              </div>
            </div>
            <div className="part-2">
              <div className="table-outer">
                <div className="table-top-banner">
                  <div>Users Details</div>
                  <div className="total-users">
                    <div>
                      <i className="ri-user-2-fill"></i> Total Users
                    </div>
                    <div>0</div>
                  </div>
                </div>
                <table className="table">
                  <thead>
                    <tr>
                      <th>S no</th>
                      <th>#_Id</th>
                      <th>Username</th>
                      <th>Phone</th>
                      <th>Status</th>
                      <th>Action</th>
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

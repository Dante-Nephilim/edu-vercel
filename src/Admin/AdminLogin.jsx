import React, { useState } from "react";
import "./AdminLogin.css";
import { ToastContainer, toast } from "react-toastify";

export default function AdminLogin() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [admin, setAdmin] = useState({
    username: "admin@eduphiser.com",
    password: "123456789",
  });

  const checkValidate = (e) => {
    e.preventDefault();
    if (username === admin.username && password === admin.password) {
      toast.success("Logged in successfully!", {
        position: "top-right",
      });
      return window.location.assign("/admin-dashboard");
    } else {
      return toast.error("Invalid Credentials ....");
    }
  };

  return (
    <>
      <div className="admin-login-main">
        <ToastContainer />
        <div className="login-box">
          <h1 className="text-center mb-5">Admin Login</h1>
          <form action="/dashboard" method="post">
            <label htmlFor="username text-underline">Username: </label>
            <input
              type="text"
              name="username"
              id="username"
              className="form-control"
              placeholder="Enter Username..."
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            ></input>
            <br />
            <br />
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              placeholder="Enter Password..."
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            <br />
            <br />
            <button
              type="submit"
              className="btn btn-primary form-control"
              onClick={checkValidate}
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

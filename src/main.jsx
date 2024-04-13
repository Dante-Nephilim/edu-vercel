import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Ui/Navbar.jsx";
import Footer from "./Ui/Footer.jsx";
import App from "./App.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";
import Login from "./Ui/Login.jsx";
import SignUp from "./Ui/SignUp.jsx";
import Faq from "./Components/Faq.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Dashboard from "./AdminComponent/Dashboard.jsx";
import Congratulation from "./AdminComponent/Congratulations.jsx";
import AdminLogin from "./Admin/AdminLogin.jsx";
import AdminHome from "./Admin/AdminHome.jsx";
import AdminLoanDetails from "./Admin/AdminLoanDetails.jsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AdminProfile from "./Admin/AdminProfile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <App />
        <Footer />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin",
    element: <AdminLogin />,
  },
  {
    path: "/admin-dashboard",
    element: <AdminHome />,
  },
  {
    path: "/admin-dashboard/admin-details",
    element: <AdminProfile />,
  },
  {
    path: "/admin-dashboard/loan-details",
    element: <AdminLoanDetails />,
  },
  {
    path: "/registraion-completed",
    element: <Congratulation />,
  },
  {
    path: "/login",
    element: (
      <>
        <Navbar />
        <Login />
        <Footer />
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        <Navbar />
        <SignUp />
        <Footer />
      </>
    ),
  },
  {
    path: "/faq",
    element: (
      <>
        <Navbar />
        <Faq />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Navbar />
        <Contact />
        <Footer />
      </>
    ),
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

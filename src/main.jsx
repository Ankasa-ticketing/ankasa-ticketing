import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import Register from "./pages/Register";
import ForgotedPassword from "./pages/ForgotedPassword";
import DetailBooking from "./pages/DetailBooking";
import FlightDetail from "./pages/FlightDetail/FlightDetail";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Register />,
  },
  {
    path: "/forgoted-password",
    element: <ForgotedPassword />,
  },
  {
    path: "/flight-detail",
    element: <FlightDetail />,
  },
  {
    path: "/detail-booking",
    element: <DetailBooking />,
  },
  {
    path: "/profile",
    element: <UserProfile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

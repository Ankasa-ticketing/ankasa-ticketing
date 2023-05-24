import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import Register from "./pages/Register";
import ForgotedPassword from "./pages/ForgotedPassword";
import DetailBooking from "./pages/DetailBooking";
import LandingPage from "./pages/LandingPage";

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
    path: "/app",
    element: <App />,
  },
  {
    path: "/detail-booking",
    element: <DetailBooking />,
  },
  {
    path: "/profile",
    element: <UserProfile />,
  },
  {
    path: "/home",
    element: <LandingPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

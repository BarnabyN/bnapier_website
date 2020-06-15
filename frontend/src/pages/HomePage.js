import React from "react";
import { useHistory, Link } from "react-router-dom";
import CustomNavbar from "../components/CustomNavbar";
import dbstring from "../constants.js";
require("dotenv").config();

export default function HomePage() {
  const history = useHistory();

  return (
    <div className="reactWrapper">
      <CustomNavbar />
      <div className="content">
        <h3>Home Page</h3>
        <p>Welcome to my website.</p>
        <p>Use the navigation bar to get around.</p>
        <p>
          If you wanna know more about me head over to the{" "}
          <Link className="link" to="/about">
            about page
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

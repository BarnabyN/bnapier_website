import React from "react";
import { Link, useHistory } from "react-router-dom";
import CustomNavlink from "../elements/CustomNavlink";
import "../styles/CustomNavbar.css";

export default function CustomNavbar() {
  return (
    <div className="navbar">
      <nav expand="md" sticky="top">
        <Link className="navbrand" to={"/posts"}>
          BARNEY NAPIER
        </Link>
        <span className="navtabs">
          <CustomNavlink to="/books" text="BOOKS" />
          <CustomNavlink to="/about" text="ABOUT" />
        </span>
      </nav>
    </div>
  );
}

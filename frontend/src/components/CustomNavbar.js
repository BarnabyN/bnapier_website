import React from "react";
import { Navbar, NavbarBrand, Nav } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import CustomNavlink from "../elements/CustomNavlink";
import "../styles/CustomNavbar.css";

export default function CustomNavbar() {
  return (
    <div>
      <navbar expand="md" sticky="top" className="navbar">
        <Link className="navbrand" to={"/"}>
          BARNEY NAPIER
        </Link>

        <span className="navtabs">
          <CustomNavlink to="/" text="Home" />
          <CustomNavlink to="/posts" text="Posts" />
          <CustomNavlink to="/books" text="Books" />
          <CustomNavlink to="/projects" text="Projects" />
          <CustomNavlink to="/about" text="About" />
          <CustomNavlink to="/newpost" text="New Post" />
        </span>
      </navbar>
    </div>
  );
}

import React from "react";
import { Navbar, NavbarBrand, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import CustomNavlink from "../elements/CustomNavlink";

const CustomNavbar = ({}) => (
  <div>
    <h3
      style={{
        marginLeft: "10px",
        textDecoration: "none",
        color: "black",
      }}
    >
      Barney Napier
    </h3>

    <Navbar
      expand="md"
      sticky="top"
      style={{
        backgroundColor: "white",
        padding: "10px",
        paddingTop: "0px",
        borderBottomColor: "black",
        borderBottomStyle: "solid",
        borderBottomWidth: "1px",
      }}
    >
      <CustomNavlink to="/" text="Posts" />
      <CustomNavlink to="/books" text="Books" />
      <CustomNavlink to="/problems" text="Problems" />
      <CustomNavlink to="/projects" text="Projects" />
      <CustomNavlink to="/about" text="About" />
      <CustomNavlink to="/newpost" text="New Post" />
    </Navbar>
  </div>
);
export default CustomNavbar;

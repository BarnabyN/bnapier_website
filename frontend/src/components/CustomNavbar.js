import React from "react";
import { Navbar, NavbarBrand, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../media/logo.png";

const CustomNavbar = ({}) => (
  <Navbar
    expand="md"
    sticky="top"
    style={{
      backgroundColor: "white",
      padding: "10px",
      borderBottomColor: "black",
      borderBottomStyle: "solid",
      borderBottomWidth: "3px",
    }}
  >
    <NavbarBrand
      tag={Link}
      to={"/"}
      style={{
        fontSize: "30px",
        color: "black",
        textDecorationLine: "none",
      }}
    >
      Barney Napier
    </NavbarBrand>
    <NavLink
      tag={Link}
      to={"/about"}
      style={{
        color: "black",
      }}
    >
      About
    </NavLink>
    <NavLink
      tag={Link}
      to={"/newpost"}
      style={{
        color: "black",
      }}
    >
      New Post
    </NavLink>
  </Navbar>
);
export default CustomNavbar;

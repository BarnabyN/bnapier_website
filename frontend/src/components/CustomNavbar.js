import React from "react";
import { Navbar, NavbarBrand, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

const CustomNavbar = ({}) => (
  <Navbar
    sticky="top"
    style={{
      backgroundColor: "black",
      padding: "10px",
      color: "white",
    }}
  >
    <NavbarBrand
      tag={Link}
      to={"/"}
      style={{
        fontSize: "30px",
        color: "white",
        textDecorationLine: "none",
      }}
    >
      Barney on the Web
    </NavbarBrand>
    <NavLink
      tag={Link}
      to={"/about"}
      style={{
        color: "white",
      }}
    >
      About
    </NavLink>
  </Navbar>
);
export default CustomNavbar;

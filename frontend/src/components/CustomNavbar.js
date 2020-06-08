import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { Link } from "react-router-dom";
import CustomNavlink from "../elements/CustomNavlink";

const CustomNavbar = ({}) => (
  <div>
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
      <NavbarBrand
        tag={Link}
        to={"/"}
        style={{ background: "black", color: "white" }}
      >
        <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
          Barney Napier
        </div>
      </NavbarBrand>
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

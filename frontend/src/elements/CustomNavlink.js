import React from "react";
import { NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/CustomNavlink.css";

export default function CustomNavlink(props) {
  // This function tells me if the link is shown
  function isCurrentLink() {
    const currentLink = window.location.href.substring(
      window.location.href.lastIndexOf("/")
    );

    if (currentLink == props.to) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div>
      <NavLink
        tag={Link}
        to={props.to}
        style={{
          color: "black",
          borderRadius: "20px",
          borderColor: "black",
          borderStyle: isCurrentLink() ? "solid" : "none",
          borderWidth: "1px",
        }}
      >
        {props.text}
      </NavLink>
    </div>
  );
}

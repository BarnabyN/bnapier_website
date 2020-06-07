import React from "react";
import { useHistory, Link } from "react-router-dom";
import CustomNavbar from "../components/CustomNavbar";

export default function HomePage() {
  return (
    <div>
      <CustomNavbar />
      <Link to="/newpost">New post</Link>
    </div>
  );
}

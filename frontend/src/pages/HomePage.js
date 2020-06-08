import React from "react";
import { useHistory, Link } from "react-router-dom";
import CustomNavbar from "../components/CustomNavbar";
import { Button, Form, FormGroup, Input, InputGroup } from "reactstrap";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
require("dotenv").config();

export default function HomePage() {
  const history = useHistory();

  return (
    <div>
      <CustomNavbar />
      <div class="main">
        <h3>Home Page</h3>
      </div>
    </div>
  );
}

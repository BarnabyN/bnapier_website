import React from "react";
import { useHistory, Link } from "react-router-dom";
import { Button, Form, FormGroup, Input, InputGroup } from "reactstrap";
import RichTextEditor from "../components/RichTextEditor";
import CustomNavbar from "../components/CustomNavbar";
import { Editor, convertToRaw, EditorState, convertFromRaw } from "draft-js";

require("dotenv").config();

export default function CreatePostPage() {
  return (
    <div>
      <CustomNavbar />
      <div style={{ margin: "20px" }}>Post Page</div>
    </div>
  );
}

import React from "react";
import { useHistory, Link } from "react-router-dom";
import CustomNavbar from "../components/CustomNavbar";
import { Button, Form, FormGroup, Input, InputGroup } from "reactstrap";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import NewBlogPostForm from "../components/NewBlogPostForm";

require("dotenv").config();

export default function HomePage() {
  const history = useHistory();

  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:5000/newpost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }

  return (
    <div>
      <CustomNavbar />
      <div class="main">
        <NewBlogPostForm
          value={content}
          onChange={setContent}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

import React from "react";
import { useHistory } from "react-router-dom";
import CustomNavbar from "../components/CustomNavbar";
import { Button, Form, Input } from "reactstrap";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

require("dotenv").config();

export default function HomePage() {
  const history = useHistory();

  const [title, setTitle] = React.useState("");
  const [subtitle, setSubtitle] = React.useState("");
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
        subtitle,
        content,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .then(history.push("/newpost"));
  }

  return (
    <div>
      <CustomNavbar />
      <div class="main">
        <Form onSubmit={handleSubmit}>
          <Input
            type="title"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            type="subtitle"
            placeholder="Subtitle"
            onChange={(e) => setSubtitle(e.target.value)}
          />
          <div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <CKEditor
              editor={ClassicEditor}
              data={content}
              onChange={(event, editor) => {
                const data = editor.getData();
                setContent(data);
              }}
            />
          </div>
          <Button variant="contained" type="submit">
            Post
          </Button>
        </Form>
      </div>
    </div>
  );
}

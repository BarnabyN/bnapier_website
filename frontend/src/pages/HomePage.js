import React from "react";
import { useHistory, Link } from "react-router-dom";
import CustomNavbar from "../components/CustomNavbar";
import { Button, Form, FormGroup, Input, InputGroup } from "reactstrap";
import { Editor, convertToRaw, EditorState, convertFromRaw } from "draft-js";
import RichTextEditor from "../components/RichTextEditor";
require("dotenv").config();

export default function HomePage() {
  const history = useHistory();

  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState(() => EditorState.createEmpty());

  function handleSubmit(e) {
    e.preventDefault();
    console.log(JSON.stringify(convertToRaw(content.getCurrentContent())));
    const rawContent = JSON.stringify(
      convertToRaw(content.getCurrentContent())
    );

    fetch("http://localhost:5000/newpost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        rawContent,
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
      <div style={{ margin: "20px" }}>
        <Form onSubmit={handleSubmit}>
          <Input
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            style={{ marginBottom: "5px" }}
          />
          <RichTextEditor editorState={content} onChange={setContent} />
          <Button variant="contained" type="submit">
            Post
          </Button>
        </Form>
      </div>
    </div>
  );
}

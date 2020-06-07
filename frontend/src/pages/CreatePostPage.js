import React from "react";
import { useHistory, Link } from "react-router-dom";
import { Button, Form, FormGroup, Input, InputGroup } from "reactstrap";
import RichTextEditor from "../components/RichTextEditor";
import CustomNavbar from "../components/CustomNavbar";

require("dotenv").config();

export default function CreatePostPage() {
  const history = useHistory();

  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetch(process.env.DB_URL + "/newpost", {
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

        if (res.success === false) {
        } else {
          history.push("/");
        }
      });
  }

  return (
    <div>
      <CustomNavbar />
      <Form onSubmit={handleSubmit} style={{ margin: "50px" }}>
        <FormGroup>
          <InputGroup style={{ marginBottom: "10px" }}>
            <Input
              name="title"
              value={title}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              style={{}}
            />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <RichTextEditor
            value={content}
            onchange={(e) => setContent(e.target.value)}
          />
        </FormGroup>

        <Button variant="contained" type="submit">
          Post
        </Button>
      </Form>
    </div>
  );
}

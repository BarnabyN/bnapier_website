import React from "react";
import { useHistory, Link } from "react-router-dom";
import CustomNavbar from "../components/CustomNavbar";
import { Button, Form, FormGroup, Input, InputGroup } from "reactstrap";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
require("dotenv").config();

export default function HomePage(props) {
  return (
    <div>
      <div class="main">
        <Form onSubmit={props.handleSubmit}>
          <Input type="title" placeholder="Title" />
          <div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <CKEditor
              editor={ClassicEditor}
              data={props.content}
              onChange={(event, editor) => {
                const data = editor.getData();
                props.onChange(data);
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
